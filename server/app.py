from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
import math
import csv
import folium
import os

app = Flask(__name__)
CORS(app)
app.config['UPLOAD_FOLDER'] = 'uploads'

# Ensure the upload folder exists
if not os.path.exists(app.config['UPLOAD_FOLDER']):
    os.makedirs(app.config['UPLOAD_FOLDER'])


# ===== API ROUTES =====

# Upload Excel file
@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({'error': 'No file selected'}), 400
    
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    file.save(file_path)
    return jsonify({'message': 'File uploaded successfully'}), 200


# Get all unique timeslots
@app.route('/api/timeslots', methods=['GET'])
def get_timeslots():
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    if not os.path.exists(file_path):
        return jsonify({'error': 'No file uploaded'}), 404
    
    shipments_df = pd.read_excel(file_path, sheet_name="Shipments_Data")
    timeslots = shipments_df['Delivery Timeslot'].dropna().unique().tolist()
    return jsonify({'timeslots': timeslots})


# Get trip assignments for a given timeslot
@app.route('/api/trips', methods=['GET'])
def get_trips():
    timeslot = request.args.get('timeslot')
    if not timeslot:
        return jsonify({'error': 'Timeslot parameter required'}), 400
    
    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    if not os.path.exists(file_path):
        return jsonify({'error': 'No file uploaded'}), 404
    
    shipments_df = pd.read_excel(file_path, sheet_name="Shipments_Data")
    
    store_lat, store_lon = shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']
    df_timeslot = shipments_df[shipments_df['Delivery Timeslot'] == timeslot]
    
    df_timeslot_with_shop = insert_shop_location(df_timeslot, store_lat, store_lon)
    dist_matrix = calculate_distance_matrix_with_shop(df_timeslot_with_shop)
    dist_matrix_df = pd.DataFrame(dist_matrix, 
                                  index=df_timeslot_with_shop['Shipment ID'], 
                                  columns=df_timeslot_with_shop['Shipment ID'])
    
    dist_matrix_file = os.path.join(app.config['UPLOAD_FOLDER'], f'dist_matrix_{timeslot.replace(":", "_")}.csv')
    dist_matrix_df.to_csv(dist_matrix_file)
    
    vehicles = [
        {"type": "3W", "count": 50, "capacity": 5, "max_radius": 15, "max_trip_time": 240},
        {"type": "4W-EV", "count": 25, "capacity": 8, "max_radius": 20, "max_trip_time": 300},
        {"type": "4W", "count": float('inf'), "capacity": 25, "max_radius": float('inf'), "max_trip_time": 480}
    ]
    
    headers, distance_matrix = parse_distance_matrix(dist_matrix_file)
    assignments = assign_shipments(headers, distance_matrix, vehicles)

    assignments_file = os.path.join(app.config['UPLOAD_FOLDER'], f'trip_assignments_{timeslot.replace(":", "_")}.csv')
    save_to_csv(assignments, assignments_file)
    
    return jsonify({'assignments': assignments})


# Get a map HTML for a trip
@app.route('/api/map', methods=['GET'])
def get_map():
    timeslot = request.args.get('timeslot')
    index = request.args.get('index', type=int)

    if timeslot is None or index is None:
        return jsonify({'error': 'timeslot and index required'}), 400

    file_path = os.path.join(app.config['UPLOAD_FOLDER'], 'smart_route_optimization.xlsx')
    if not os.path.exists(file_path):
        return jsonify({'error': 'No file uploaded'}), 404

    shipments_df = pd.read_excel(file_path, sheet_name="Shipments_Data")
    
    assignments_file = os.path.join(app.config['UPLOAD_FOLDER'], f'trip_assignments_{timeslot.replace(":", "_")}.csv')
    if not os.path.exists(assignments_file):
        return jsonify({'error': 'Assignments not found for this timeslot'}), 404
    
    assignments = pd.read_csv(assignments_file)
    if index >= len(assignments):
        return jsonify({'error': 'Invalid trip index'}), 400

    route = assignments.iloc[index]['Route'].split(' -> ')
    map_html = generate_map(route, shipments_df)
    
    return jsonify({'map_html': map_html})


# ===== HELPER FUNCTIONS =====

def haversine(lat1, lon1, lat2, lon2):
    R = 6371.0  
    lat1, lon1, lat2, lon2 = map(math.radians, [lat1, lon1, lat2, lon2])
    dlat = lat2 - lat1
    dlon = lon2 - lon1
    a = math.sin(dlat / 2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon / 2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
    return R * c


def insert_shop_location(df, store_lat, store_lon):
    shop_data = pd.DataFrame({'Shipment ID': ['Shop'], 'Latitude': [store_lat], 
                              'Longitude': [store_lon], 'Delivery Timeslot': ['Shop']})
    return pd.concat([shop_data, df], ignore_index=True)


def calculate_distance_matrix_with_shop(df):
    n = len(df)
    dist_matrix = np.zeros((n, n))
    for i in range(n):
        for j in range(i, n):
            dist = haversine(df.iloc[i]['Latitude'], df.iloc[i]['Longitude'],
                             df.iloc[j]['Latitude'], df.iloc[j]['Longitude'])
            dist_matrix[i, j] = dist_matrix[j, i] = dist
    return dist_matrix


def parse_distance_matrix(file_path):
    with open(file_path, 'r') as file:
        reader = csv.reader(file)
        headers = next(reader)
        distance_matrix = [[float(x) for x in row[1:]] for row in reader]
    return headers, distance_matrix


def assign_shipments(headers, distance_matrix, vehicles):
    shipments = headers[1:] 
    n = len(shipments)
    assigned = [False] * n
    vehicle_assignments = []
    max_4w_distance = 0

    for vehicle in vehicles:
        count = vehicle["count"] if vehicle["count"] != float('inf') else n
        for _ in range(count):
            current_capacity = 0
            current_distance = 0
            current_shipments = []
            last_location = 0

            while current_capacity < vehicle["capacity"]:
                min_distance = float('inf')
                next_shipment = -1
                for i in range(n):
                    if not assigned[i]:
                        shipment_index = i + 1
                        if shipment_index < len(distance_matrix) and last_location < len(distance_matrix[shipment_index]):
                            if distance_matrix[last_location][shipment_index] < min_distance:
                                min_distance = distance_matrix[last_location][shipment_index]
                                next_shipment = i

                if next_shipment == -1:
                    break

                shipment_index = next_shipment + 1
                total_distance = current_distance + min_distance + distance_matrix[shipment_index][0]
                if total_distance <= vehicle["max_radius"]:
                    current_distance += min_distance
                    current_capacity += 1
                    assigned[next_shipment] = True
                    current_shipments.append(shipments[next_shipment])
                    last_location = shipment_index
                else:
                    break

            if current_shipments:
                total_distance = current_distance + distance_matrix[last_location][0]
                trip_time = (total_distance * 5) + (len(current_shipments) * 10)
                capacity_utilization = current_capacity / vehicle["capacity"]
                time_utilization = trip_time / vehicle["max_trip_time"]

                if vehicle["type"] == "4W":
                    if total_distance > max_4w_distance:
                        max_4w_distance = total_distance
                    distance_utilization = total_distance / max_4w_distance if max_4w_distance != 0 else 0
                else:
                    distance_utilization = total_distance / vehicle["max_radius"]

                route = ["Shop"] + current_shipments + ["Shop"]
                if route.count("Shop") > 2:
                    route = ["Shop"] + [x for x in route if x != "Shop"] + ["Shop"]
                
                route_string = " -> ".join(route)
                shipments_delivered = ", ".join([x for x in current_shipments if x != "Shop"])
                
                vehicle_assignments.append({
                    "Vehicle Type": vehicle["type"],
                    "Total Shipments": len(current_shipments),
                    "Shipments Delivered": shipments_delivered,
                    "Route": route_string,
                    "MST Distance": round(total_distance, 2),
                    "Trip Time": round(trip_time, 2),
                    "Capacity Utilization": round(capacity_utilization, 2),
                    "Time Utilization": round(time_utilization, 2),
                    "COV_UTI (Distance Utilization)": round(distance_utilization, 2)
                })
    return vehicle_assignments


def save_to_csv(results, output_file):
    with open(output_file, mode='w', newline='') as file:
        writer = csv.DictWriter(file, fieldnames=results[0].keys())
        writer.writeheader()
        writer.writerows(results)


def generate_map(route, shipments_df):
    m = folium.Map(location=[shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']], zoom_start=12)
    
    folium.Marker(
        location=[shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']],
        popup='Shop',
        icon=folium.Icon(color='red', icon='home')
    ).add_to(m)

    for i, shipment_id in enumerate(route[1:-1], 1):
        if shipment_id != "Shop":
            shipment = shipments_df[shipments_df['Shipment ID'] == int(shipment_id)].iloc[0]
            folium.Marker(
                location=[shipment['Latitude'], shipment['Longitude']],
                popup=f"Stop {i} (Order {shipment_id})",
                icon=folium.Icon(color='blue', icon='shopping-cart', prefix='fa'),
            ).add_to(m)

    route_coords = [[shipments_df.iloc[0]['Latitude'], shipments_df.iloc[0]['Longitude']]]
    for shipment_id in route[1:-1]:
        if shipment_id != "Shop":
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
