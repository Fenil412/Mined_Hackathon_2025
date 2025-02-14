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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 animate-gradient">
      <h4 className="text-white font-bold text-4xl mb-6 drop-shadow-lg">
        TRIPS FOR {timeslot}
      </h4>

      <div className="bg-white p-10 rounded-xl shadow-2xl border border-gray-200 w-full max-w-4xl">
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="py-3 px-4">Vehicle Type</th>
              <th className="py-3 px-4">Total Shipments</th>
              <th className="py-3 px-4">Route</th>
              <th className="py-3 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trips.length > 0 ? (
              trips.map((trip, index) => (
                <tr key={index} className="border-t text-gray-800 text-center">
                  <td className="py-3 px-4">{trip["Vehicle Type"]}</td>
                  <td className="py-3 px-4">{trip["Total Shipments"]}</td>
                  <td className="py-3 px-4">{trip.Route}</td>
                  <td className="py-3 px-4">
                    <button
                      onClick={() => navigate(`/map/${timeslot}/${index}`)}
                      className="px-4 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600 transition"
                    >
                      View Map
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-lg font-semibold text-red-600">
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
