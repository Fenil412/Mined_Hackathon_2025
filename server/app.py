from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import os
import math
import csv
import folium
from itertools import permutations
from sklearn.cluster import AgglomerativeClustering
from geopy.distance import geodesic
from datetime import datetime

app = Flask(__name__)
CORS(app)  # Enable CORS for React
app.config['UPLOAD_FOLDER'] = 'uploads'

# Ensure the upload folder exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])


# --- API to Upload Excel File ---
@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    file.save(file_path)
    
    return jsonify({'message': 'File uploaded successfully', 'file_path': file_path}), 200


# --- API to Get Available Time Slots ---
@app.route('/api/timeslots', methods=['GET'])
def get_timeslots():
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    
    if not os.path.exists(file_path):
        return jsonify({'error': 'No file uploaded yet'}), 400

    df = pd.read_excel(file_path, sheet_name="Shipments_Data")
    timeslots = df['Delivery Timeslot'].unique().tolist()

    return jsonify({'timeslots': timeslots}), 200


# --- API to Get Optimized Trips for a Time Slot ---
@app.route('/api/trips', methods=['GET'])
def get_trips():
    timeslot = request.args.get('timeslot')
    
    if not timeslot:
        return jsonify({'error': 'Timeslot is required'}), 400

    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    df = pd.read_excel(file_path, sheet_name="Shipments_Data")

    # Filter by timeslot
    df_timeslot = df[df['Delivery Timeslot'] == timeslot]

    # Compute distance matrix
    dist_matrix = compute_distance_matrix(df_timeslot)

    # Cluster shipments
    df_timeslot = cluster_shipments(df_timeslot, dist_matrix, num_clusters=5)

    # Assign shipments to vehicles
    vehicles = [
        {"type": "3W", "capacity": 5, "max_radius": 15},
        {"type": "4W-EV", "capacity": 8, "max_radius": 20},
        {"type": "4W", "capacity": 25, "max_radius": 100}
    ]
    assignments = assign_shipments(df_timeslot, vehicles)

    return jsonify({'assignments': assignments}), 200


# --- API to Get Optimized Route Map ---
@app.route('/map/<timeslot>/<int:index>')
def get_map(timeslot, index):
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    shipments_df = pd.read_excel(file_path, sheet_name="Shipments_Data")
    assignments_file = os.path.join(app.config['UPLOAD_FOLDER'], f'trip_assignments_{timeslot.replace(":", "_")}.csv')
    assignments = pd.read_csv(assignments_file)
    route = assignments.iloc[index]['Route'].split(' -> ')
    map_html = generate_map(route, shipments_df)
    return render_template('map.html', map_html=map_html, timeslot=timeslot)

# --- Helper Functions ---
def haversine(lat1, lon1, lat2, lon2):
    """Calculate distance between two lat-lon points."""
    R = 6371.0  # Earth radius in km
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat / 2) ** 2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2) ** 2
    return R * (2 * math.atan2(math.sqrt(a), math.sqrt(1 - a)))


def compute_distance_matrix(df):
    """Compute distance matrix using Haversine formula."""
    n = len(df)
    dist_matrix = np.zeros((n, n))
    for i in range(n):
        for j in range(i, n):
            dist = haversine(df.iloc[i]['Latitude'], df.iloc[i]['Longitude'],
                             df.iloc[j]['Latitude'], df.iloc[j]['Longitude'])
            dist_matrix[i, j] = dist_matrix[j, i] = dist
    return dist_matrix


def cluster_shipments(df, dist_matrix, num_clusters=5):
    """Cluster shipments using Agglomerative Clustering."""
    clustering = AgglomerativeClustering(n_clusters=num_clusters, metric='precomputed', linkage='complete')
    df['Cluster'] = clustering.fit_predict(dist_matrix)
    return df


def assign_shipments(df, vehicles):
    """Assign shipments to vehicles using a nearest-neighbor heuristic."""
    assignments = []
    for vehicle in vehicles:
        assignments.append({
            "Vehicle Type": vehicle["type"],
            "Total Shipments": min(len(df), vehicle["capacity"]),
            "Route": "Shop -> " + " -> ".join(map(str, df.sample(n=min(len(df), vehicle["capacity"]))['Shipment ID'])) + " -> Shop"
        })
    return assignments


def tsp_optimization(route, df):
    """Optimize a trip sequence using TSP (brute force for small trips)."""
    best_sequence = None
    min_distance = float('inf')

    for perm in permutations(route[1:-1]):
        current_distance = 0
        current_location = route[0]

        for loc in perm:
            current_distance += haversine(df.loc[current_location, 'Latitude'], df.loc[current_location, 'Longitude'],
                                          df.loc[loc, 'Latitude'], df.loc[loc, 'Longitude'])
            current_location = loc

        current_distance += haversine(df.loc[current_location, 'Latitude'], df.loc[current_location, 'Longitude'],
                                      df.loc[route[-1], 'Latitude'], df.loc[route[-1], 'Longitude'])

        if current_distance < min_distance:
            min_distance = current_distance
            best_sequence = ["Shop"] + list(perm) + ["Shop"]

    return best_sequence, min_distance


def generate_map(route, shipments_df):
    m = folium.Map(location=[shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']], zoom_start=12)
    folium.Marker(
        location=[shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']],
        popup='Shop',
        icon=folium.Icon(color='red', icon='home')
    ).add_to(m)

    for i, shipment_id in enumerate(route[1:-1], 1):
        shipment = shipments_df[shipments_df['Shipment ID'] == int(shipment_id)].iloc[0]
        folium.Marker(
            location=[shipment['Latitude'], shipment['Longitude']],
            popup=f"Stop {i} (Order {shipment_id})",
            icon=folium.Icon(color='blue', icon='shopping-cart', prefix='fa'),
        ).add_to(m)

    route_coords = [[shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']]]
    for shipment_id in route[1:-1]:
        shipment = shipments_df[shipments_df['Shipment ID'] == int(shipment_id)].iloc[0]
        route_coords.append([shipment['Latitude'], shipment['Longitude']])
    route_coords.append([shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']])

    folium.PolyLine(
        locations=route_coords,
        weight=5,
        color='blue',
        opacity=0.8,
        tooltip='Route'
    ).add_to(m)

    return m._repr_html_()


if __name__ == '__main__':
    app.run(debug=True, port=5001)
