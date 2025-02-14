import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import SelectTimeslot from "./SelectTimeslot";

const TrackOrder = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [clicked, setClicked] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      await axios.post("http://127.0.0.1:5001/api/upload", formData);
      setMessage("File uploaded successfully!");
      setUploaded(true);
    } catch (error) {
      setMessage("Error uploading file.");
    }
  };

  const handleDownloadClick = () => {
    setClicked(true);
  };

  return (
    <div className="col-xs-12 min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient">
      {!uploaded ? (
        <>
          <h4 className="section-title text-white font-bold text-4xl mb-6 drop-shadow-lg">UPLOAD SHIPMENT DATA</h4>
          <div className="col-md-12 col-sm-12">
            <div className="tracking-area">
              <div className="container">
                <div className="tracking-id-info text-center bg-white p-10 rounded-xl shadow-2xl border border-gray-200">
                  <h2 className="text-2xl font-semibold mb-4 text-gray-800">Upload File</h2>
                  <input type="file" onChange={handleFileChange} className="mb-4 p-3 border border-gray-400 rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500" />
                  <div className="flex justify-center space-x-4">
                    <button 
                      onClick={handleUpload} 
                      className="px-6 py-3 bg-green-500 text-white rounded-xl text-lg font-semibold shadow-lg transform transition hover:scale-110 hover:bg-green-600 hover:shadow-2xl">
                      Upload & Proceed
                    </button>
                    <button 
                      onClick={handleDownloadClick} 
                      className="px-6 py-3 bg-red-500 text-white rounded-xl text-lg font-semibold shadow-lg transform transition hover:scale-110 hover:bg-red-600 hover:shadow-2xl flex items-center space-x-2">
                      <FontAwesomeIcon icon={faFilePdf} className="text-xl" />
                      <span>Download PDF</span>
                    </button>
                  </div>
                  {message && <p className={`mt-4 text-lg font-semibold ${message.includes("successfully") ? "text-green-600" : "text-red-600"}`}>{message}</p>}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <SelectTimeslot />
      )}
    </div>
  );
};

export default TrackOrder;
