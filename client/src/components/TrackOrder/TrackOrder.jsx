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

  const handleUpload = async (e) => {
    e.preventDefault(); // Prevent default form submission
    if (!file) {
      setMessage("Please select a file to upload.");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
      setUploaded(true); // Set uploaded to true to render SelectTimeslot
    } catch (error) {
      setMessage(error.response?.data?.error || "Error uploading file.");
    }
  };

  const handleDownloadClick = () => {
    setClicked(true);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br 
    from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      {!uploaded ? (
        <>
          <h4 className="text-gray-800 dark:text-white font-bold text-4xl mb-6 drop-shadow-lg 
      animate-fade-in">
            UPLOAD SHIPMENT DATA
          </h4>
          <div className="bg-white dark:bg-gray-900 backdrop-blur-lg p-10 rounded-xl shadow-2xl border 
      border-gray-300 dark:border-gray-700 animate-slide-in-left transition-all duration-500">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Upload File</h2>
            <form onSubmit={handleUpload}>
              <input
                type="file"
                onChange={handleFileChange}
                className="mb-4 p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 
          text-gray-800 dark:text-white rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 
          focus:ring-orange-700 hover:border-orange-700 transition-all duration-300 
          placeholder:text-gray-500 dark:placeholder-gray-400"
                accept=".xlsx" // Restrict to Excel files
              />
              <div className="flex justify-center space-x-4">
                <button
                  type="submit"
                  className="px-6 py-3 text-white font-bold bg-gradient-to-r from-green-700 
                  to-lime-700 rounded-lg hover:from-lime-700 hover:to-green-700 transform 
                  hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                >
                  Upload & Proceed
                </button>
                <button
                  onClick={handleDownloadClick}
                  className="px-6 py-3 text-white font-bold bg-gradient-to-r from-orange-700 
                  to-amber-700 rounded-lg hover:from-amber-700 hover:to-orange-700 transform 
                  hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
                >
                  <FontAwesomeIcon icon={faFilePdf} className="text-xl" />
                  <span>Download PDF</span>
                </button>
              </div>
            </form>
            {message && (
              <p
                className={`mt-4 text-lg font-semibold ${
                  message.includes("successfully")
                    ? "text-green-500 dark:text-green-400"
                    : "text-red-500 dark:text-red-400"
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