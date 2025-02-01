import requests

url = "http://127.0.0.1:5000/optimize_route"
file_path = "C:\Users\Admin\OneDrive\Desktop\SmartRoute Optimizer.xlsx"  # Replace with your actual file path

with open(file_path, "rb") as f:
    files = {"file": f}
    response = requests.post(url, files=files)

print(response.json())
