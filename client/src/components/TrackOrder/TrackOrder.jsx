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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-teal-800 to-purple-900 animate-gradient">
      {!uploaded ? (
        <>
          <h4 className="text-white font-bold text-4xl mb-6 drop-shadow-lg animate-fade-in">
            UPLOAD SHIPMENT DATA
          </h4>
          <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-2xl border border-white/20 animate-slide-in-left">
            <h2 className="text-2xl font-semibold mb-4 text-white">Upload File</h2>
            <input
              type="file"
              onChange={handleFileChange}
              className="mb-4 p-3 border border-white/30 bg-white/10 text-white rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 placeholder:text-gray-400"
            />
            <div className="flex justify-center space-x-4">
              <button
                onClick={handleUpload}
                className="px-6 py-3 bg-gradient-to-r from-green-600 to-lime-500 text-white rounded-xl text-lg font-semibold shadow-lg transform transition hover:scale-110 hover:from-lime-500 hover:to-green-600 hover:shadow-2xl"
              >
                Upload & Proceed
              </button>
              <button
                onClick={handleDownloadClick}
                className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-500 text-white rounded-xl text-lg font-semibold shadow-lg transform transition hover:scale-110 hover:from-pink-500 hover:to-red-600 hover:shadow-2xl flex items-center space-x-2"
              >
                <FontAwesomeIcon icon={faFilePdf} className="text-xl" />
                <span>Download PDF</span>
              </button>
            </div>
            {message && (
              <p
                className={`mt-4 text-lg font-semibold ${
                  message.includes("successfully") ? "text-green-400" : "text-red-400"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </>
      ) : (
        <SelectTimeslot />
      )}
    </div>
  );
};

export default TrackOrder;