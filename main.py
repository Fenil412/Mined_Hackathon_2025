import math
import sys
import pandas as pd
import numpy as np

n = 100

uti_path = []
uti_temp = 0.0
uti_capacity = 0.0
uti_time = 0.0
uti_distance = 0.0
dp = [[-1.0 for _ in range(n + 1)] for _ in range(n + 1)]

def path_finder(pre, curr, consume_time, real_time, capacity, max_capacity, distance, max_distance, a, path, visited):
    global uti_temp, uti_capacity, uti_time, uti_distance, uti_path
    if a[curr][6] == 1:
        return

    if pre == -1:
        if a[curr][5] * 2 <= max_distance:
            consume_time = a[curr][5] * (5 / 60.0)
            real_time = a[curr][3]
            capacity += 1
            distance += a[curr][5]
            path.append(curr)
            visited.add(curr)

    for i in range(len(a)):
        if i == curr or a[i][6] == 1 or i in visited:
            continue

        dist = haversine_distance(a[curr][1], a[curr][2], a[i][1], a[i][2])
        if distance + dist + a[i][5] > max_distance:
            if distance > max_distance:
                continue

            t_capacity = capacity / max_capacity
            t_distance = distance / max_distance
            t_time = consume_time / 120.0

            if t_capacity < 0.5:
                continue

            temp = t_capacity +  t_distance + abs(1 - t_time)
            temp /= 3.0

            if temp < uti_temp:
                uti_temp = temp
                uti_capacity = capacity
                uti_time = consume_time
                uti_distance = distance
                uti_path = list(path)

            continue

        if real_time + dist * (5 / 60.0) < a[i][3] or real_time + dist * (5 / 60.0) > a[i][4]:
            if distance > max_distance:
                continue

            t_capacity = capacity / max_capacity
            t_distance = distance / max_distance
            t_time = consume_time / 120.0

            if t_capacity < 0.5:
                continue

            temp = t_capacity +  t_distance + abs(1 - t_time)
            temp /= 3.0

            if temp < uti_temp:
                uti_temp = temp
                uti_capacity = capacity
                uti_time = consume_time
                uti_distance = distance
                uti_path = list(path)

            continue

        if capacity >= max_capacity:
            if distance > max_distance:
                continue

            t_capacity = capacity / max_capacity
            t_distance = distance / max_distance
            t_time = consume_time / 120.0

            if t_capacity < 0.5:
                continue

            temp = t_capacity +  t_distance + abs(1 - t_time)
            temp /= 3.0

            if temp < uti_temp:
                uti_temp = temp
                uti_capacity = capacity
                uti_time = consume_time
                uti_distance = distance
                uti_path = list(path)

            continue

        consume_time += dist * (5 / 60.0)
        real_time += dist * (5 / 60.0)
        capacity += 1
        distance += dist
        path.append(i)
        visited.add(i)

        path_finder(curr, i, consume_time, real_time, capacity, max_capacity, distance, max_distance, a, path, visited)

        consume_time -= dist * (5 / 60.0)
        real_time -= dist * (5 / 60.0)
        capacity -= 1
        distance -= dist
        path.pop()
        visited.remove(i)

def time_to_float(time_str):
    colon_pos = time_str.find(':')
    if colon_pos == -1:
        return -1.0  

    hours = int(time_str[:colon_pos])
    minutes = int(time_str[colon_pos + 1:])

    return hours + minutes / 60.0

def haversine_distance(lat1, lon1, lat2, lon2):
    R = 6372.0  
    dlat = (lat2 - lat1) * math.pi / 180.0
    dlon = (lon2 - lon1) * math.pi / 180.0
    a_val = math.sin(dlat / 2) ** 2 + math.cos(lat1 * math.pi / 180.0) * math.cos(lat2 * math.pi / 180.0) * math.sin(dlon / 2) ** 2
    c = 2 * math.atan2(math.sqrt(a_val), math.sqrt(1 - a_val))
    return R * c

def main():
    out = []
    a = []
    store_lat = 19.075887
    store_lon = 72.877911

    
    file_name = "SmartRoute Optimizer.xlsx"
    sheet_name = "Shipments_Data"
    df = pd.read_excel(file_name, sheet_name=sheet_name)

    print(df["Delivery Timeslot"].dtype)

    a = []
    store_lat, store_lon = 19.075887, 72.877911

    for index, row in df.iterrows():
        timeslot = row["Delivery Timeslot"]
        start_time_str, end_time_str = timeslot.split('-')

        start_time = float(start_time_str[:2]) + float((start_time_str[3:5]))/60
        end_time = float(end_time_str[:2]) + float((end_time_str[3:5]))/60

        shipment = [
            int(row["Shipment ID"]),  
            row["Latitude"],
            row["Longitude"], 
            start_time,  
            end_time,
            haversine_distance(store_lat, store_lon, row["Latitude"], row["Longitude"]),  
            0 
        ]
        a.append(shipment)

    a.sort(key=lambda x: x[5])

    w3 = 50
    ev4 = 25

    for i in range(n):
        global uti_capacity, uti_time, uti_distance, uti_temp, uti_path
        uti_capacity = -1.0
        uti_time = -1.0
        uti_distance = -1.0
        uti_temp = 1e9
        uti_path.clear()

        if a[i][6] == 0 and w3 > 0 and a[i][5] * 2 <= 15:
            st = set()
            temp_path = []
            path_finder(-1, i, 0.0, 0.0, 0.0, 5.0, 0.0, 15.0, a, temp_path, st)
            if uti_temp < 1e9:
                w3 -= 1
                path_ids = list(uti_path)
                for j in range(len(uti_path)):
                    a[uti_path[j]][6] = 1
                    path_ids[j] = a[uti_path[j]][0]
                out.append(path_ids)

    print("3w")

    for sublist in out:
        print(" ".join(map(str, sublist)))

    out.clear();

    for i in range(n):
        uti_capacity = -1.0
        uti_time = -1.0
        uti_distance = -1.0
        uti_temp = 1e9
        uti_path.clear()

        if a[i][6] == 0 and ev4 > 0 and a[i][5] * 2 <= 20:
            st = set()
            temp_path = []
            path_finder(-1, i, 0.0, 0.0, 0.0, 8.0, 0.0, 20.0, a, temp_path, st)
            if uti_temp < 1e9:
                ev4 -= 1
                path_ids = list(uti_path)
                for j in range(len(uti_path)):
                    a[uti_path[j]][6] = 1
                    path_ids[j] = a[uti_path[j]][0]
                out.append(path_ids)

    print("4ev")

    for sublist in out:
        print(" ".join(map(str, sublist)))


if __name__ == "__main__":
    main()
