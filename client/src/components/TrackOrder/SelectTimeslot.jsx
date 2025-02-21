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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-900 via-teal-800 to-purple-900 animate-gradient">
      {!showTrips ? ( // ✅ Show Select Timeslot screen initially
        <div className="bg-white/10 backdrop-blur-lg p-10 rounded-xl shadow-2xl border border-white/20 animate-slide-in-left">
          <h2 className="text-2xl font-semibold mb-4 text-white">Select a Time Slot</h2>
          <select
            onChange={(e) => setSelectedTimeslot(e.target.value)}
            className="mb-4 p-3 border border-white/30 bg-white/10 text-white rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition duration-300 placeholder:text-gray-400"
          >
            <option value="">Select a timeslot</option>
            {timeslots.map((slot, index) => (
              <option key={index} value={slot} className="text-gray-900">
                {slot}
              </option>
            ))}
          </select>
          <button
            onClick={handleProceed}
            className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-amber-500 text-white rounded-xl text-lg font-semibold shadow-lg transform transition hover:scale-110 hover:from-amber-500 hover:to-yellow-600 hover:shadow-2xl"
          >
            View Trips
          </button>
        </div>
      ) : (
        <Trips timeslot={selectedTimeslot} /> // ✅ Show Trips component directly
      )}
    </div>
  );
}