import { useState, useEffect } from "react";
import axios from "axios";
import Trips from "./Trips"; // ✅ Import Trips directly

export default function SelectTimeslot() {
  const [timeslots, setTimeslots] = useState([]);
  const [selectedTimeslot, setSelectedTimeslot] = useState("");
  const [showTrips, setShowTrips] = useState(false); // ✅ Controls when to show Trips component

  useEffect(() => {
    axios.get("http://127.0.0.1:5001/api/timeslots")
      .then((response) => {
        setTimeslots(response.data.timeslots);
      })
      .catch((error) => {
        console.error("Error fetching timeslots:", error);
      });
  }, []);

  const handleProceed = () => {
    if (selectedTimeslot) {
      setShowTrips(true); // ✅ Show Trips component when timeslot is selected
    } else {
      alert("Please select a timeslot before proceeding.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 
    to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      {!showTrips ? (
        <div className="bg-white dark:bg-gray-900 backdrop-blur-lg p-10 rounded-xl shadow-2xl border 
        border-gray-300 dark:border-gray-700 animate-slide-in-left transition-all duration-500">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Select a Time Slot</h2>
          <select
            onChange={(e) => setSelectedTimeslot(e.target.value)}
            className="mb-4 p-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 
            text-gray-800 dark:text-white rounded-lg w-full shadow-sm focus:outline-none focus:ring-2 
            focus:ring-orange-700 hover:border-orange-700 transition-all duration-300 placeholder:text-gray-500 
            dark:placeholder-gray-400"
          >
            <option value="">Select a timeslot</option>
            {timeslots.map((slot, index) => (
              <option key={index} value={slot} className="text-gray-900 dark:text-gray-300">
                {slot}
              </option>
            ))}
          </select>
          <button
            onClick={handleProceed}
            className="px-6 py-3 bg-gradient-to-r from-amber-700 to-orange-700 text-white font-bold 
            rounded-lg hover:from-orange-700 hover:to-amber-700 hover:scale-105 hover:shadow-xl transition-all 
            duration-300"
          >
            View Trips
          </button>
        </div>
      ) : (
        <Trips timeslot={selectedTimeslot} />
      )}
    </div>
  );
}