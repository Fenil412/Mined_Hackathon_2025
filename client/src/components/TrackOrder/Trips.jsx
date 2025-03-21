import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Trips({ timeslot }) {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!timeslot) return;

    const fetchTrips = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/trips/${timeslot}`);
        setTrips(response.data.assignments || []);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching trips.");
        console.error("Error fetching trips:", err);
      }
    };
    fetchTrips();
  }, [timeslot]);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500 p-4 sm:p-6 lg:p-8">
      {/* Heading */}
      <h4 className="text-gray-800 dark:text-white font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 sm:mb-6 drop-shadow-lg animate-fade-in text-center">
        TRIPS FOR {timeslot}
      </h4>

      {/* Table Container */}
      <div className="w-full max-w-full h-full overflow-auto bg-white dark:bg-gray-900 backdrop-blur-lg p-4 sm:p-6 lg:p-8 rounded-xl shadow-2xl border border-gray-300 dark:border-gray-700 animate-slide-in-left transition-all duration-500">
        {error && <p className="text-red-500 dark:text-red-400 mb-4 text-center">{error}</p>}

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white dark:bg-gray-900 backdrop-blur-lg shadow-md rounded-lg">
            <thead>
              <tr className="bg-gradient-to-r from-amber-700 to-orange-700 text-white">
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Vehicle Type</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Total Shipments</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Shipments Delivered</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Route</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">MST Distance (km)</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Trip Time (min)</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Capacity Utilization</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Time Utilization</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">COV_UTI (Distance Utilization)</th>
                <th className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">Actions</th>
              </tr>
            </thead>
            <tbody>
              {trips.length > 0 ? (
                trips.map((trip, index) => (
                  <tr
                    key={index}
                    className="border-t border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 text-center hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-300"
                  >
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Vehicle Type"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Total Shipments"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Shipments Delivered"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Route"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["MST Distance"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Trip Time"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Capacity Utilization"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["Time Utilization"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">{trip["COV_UTI (Distance Utilization)"]}</td>
                    <td className="py-2 px-2 sm:py-3 sm:px-4 text-xs sm:text-sm md:text-base">
                      <Link
                        to={`/map/${timeslot}/${index}`}
                        className="px-2 py-1 sm:px-3 sm:py-2 bg-gradient-to-r from-amber-700 to-orange-700 
                        text-white rounded-md shadow-md hover:from-orange-700 hover:to-amber-700 
                        hover:scale-105 transform transition duration-300 text-xs sm:text-sm md:text-base"
                      >
                        View Map
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="py-4 text-center text-orange-600 font-semibold text-sm sm:text-base md:text-lg">
                    No trips available for this time slot.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}