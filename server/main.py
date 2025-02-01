from flask import Flask, request, jsonify
from flask_cors import CORS  # Add this import
import pandas as pd
import math

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


# Default Route to Fix 404 Error
@app.route('/')
def home():
    return "Flask API is Running! Use /optimize_route to send a POST request."

# Haversine Distance Calculation
def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6372.0  # Earth radius in kilometers
    dlat = (lat2 - lat1) * math.pi / 180.0
    dlon = (lon2 - lon1) * math.pi / 180.0
    a_val = math.sin(dlat / 2) ** 2 + math.cos(lat1 * math.pi / 180.0) * math.cos(lat2 * math.pi / 180.0) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a_val), math.sqrt(1 - a_val))
    return R * c

# Route Optimization API
@app.route('/optimize_route', methods=['POST'])
def optimize_route():
    try:
        if 'file' not in request.files:
            return jsonify({"error": "No file uploaded"}), 400

        file = request.files['file']
        df = pd.read_excel(file, sheet_name='Shipments_Data')

        store_lat, store_lon = 19.075887, 72.877911
        shipments = []

        for _, row in df.iterrows():
            timeslot = row['Delivery Timeslot']
            start_time_str, end_time_str = timeslot.split('-')
            start_time = float(start_time_str[:2]) + float(start_time_str[3:5]) / 60
            end_time = float(end_time_str[:2]) + float(end_time_str[3:5]) / 60

            shipment = {
                "id": int(row['Shipment ID']),
                "lat": row['Latitude'],
                "lon": row['Longitude'],
                "start_time": start_time,
                "end_time": end_time,
                "distance": haversine_distance(store_lat, store_lon, row['Latitude'], row['Longitude']),
                "delivered": False
            }
            shipments.append(shipment)

        shipments.sort(key=lambda x: x['distance'])

        optimized_routes = []

        for shipment in shipments:
            if not shipment['delivered']:
                optimized_routes.append(shipment['id'])
                shipment['delivered'] = True

        return jsonify({"optimized_routes": optimized_routes})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
