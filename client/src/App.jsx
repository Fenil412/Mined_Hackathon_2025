import React, { useState } from "react";
import axios from "axios";

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [routes, setRoutes] = useState([]);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/optimize_route", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setRoutes(response.data.optimized_routes);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <h2>Upload XLSX File</h2>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>

      <h3>Optimized Routes</h3>
      <ul>
        {routes.map((route, index) => (
          <li key={index}>Shipment ID: {route}</li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
