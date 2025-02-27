import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Trips({ timeslot }) { // ✅ Now receives timeslot as a prop
  const [trips, setTrips] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!timeslot) return; // ✅ Prevents API call if timeslot is empty

    axios.get(`http://127.0.0.1:5001/api/trips?timeslot=${timeslot}`)
      .then((response) => {
        setTrips(response.data.assignments || []);
      })
      .catch((error) => {
        console.error("Error fetching trips:", error);
      });
  }, [timeslot]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 
    dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      <h4 className="text-gray-800 dark:text-white font-bold text-4xl mb-6 drop-shadow-lg animate-fade-in">
        TRIPS FOR {timeslot}
      </h4>

      <div className="bg-white dark:bg-gray-900 backdrop-blur-lg p-10 rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700 w-full max-w-4xl animate-slide-in-left transition-all duration-500">
    <table className="min-w-full bg-white dark:bg-gray-900 backdrop-blur-lg shadow-md rounded-lg">
      <thead>
        <tr className="bg-gradient-to-r from-amber-700 to-orange-700 text-white">
          <th className="py-3 px-4">Vehicle Type</th>
          <th className="py-3 px-4">Total Shipments</th>
          <th className="py-3 px-4">Route</th>
          <th className="py-3 px-4">Actions</th>
        </tr>
      </thead>
          <tbody>
            {trips.length > 0 ? (
              trips.map((trip, index) => (
                <tr key={index} className="border-t border-gray-300 dark:border-gray-700 text-gray-800
                 dark:text-gray-300 text-center hover:bg-gray-200 dark:hover:bg-gray-800 
                 transition-all duration-300">
                  <td className="py-3 px-4">{trip["Vehicle Type"]}</td>
                  <td className="py-3 px-4">{trip["Total Shipments"]}</td>
                  <td className="py-3 px-4">{trip.Route}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => navigate(`/map/${timeslot}/${index}`)}
                      className="px-4 py-2 bg-gradient-to-r from-amber-700 to-orange-700 text-white 
                      rounded-md shadow-md hover:from-orange-700 hover:to-amber-700 hover:scale-105 
                      transform transition duration-300"
                    >
                      View Map
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-lg font-semibold text-orange-600">
                  No trips available for this time slot.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}