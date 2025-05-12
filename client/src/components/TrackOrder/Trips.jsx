import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Trips({ timeslot }) {
  const [trips, setTrips] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedVehicleTypes, setSelectedVehicleTypes] = useState([]);

  const vehicleTypes = [
    { 
      id: "3W", 
      label: "Three Wheeler", 
      icon: "🛺",
      gradient: "from-orange-600 via-amber-600 to-orange-700"
    },
    { 
      id: "4W-EV", 
      label: "Four Wheeler EV", 
      icon: "⚡",
      gradient: "from-amber-600 via-orange-600 to-amber-700"
    },
    { 
      id: "4W", 
      label: "Four Wheeler", 
      icon: "🚗",
      gradient: "from-orange-700 via-amber-600 to-orange-600"
    }
  ];

  useEffect(() => {
    if (!timeslot) return;

    const fetchTrips = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/trips/${timeslot}`);
        setTrips(response.data.assignments || []);
      } catch (err) {
        setError(err.response?.data?.error || "Error fetching trips.");
        console.error("Error fetching trips:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, [timeslot]);

  const toggleVehicleType = (type) => {
    setSelectedVehicleTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const formatRoute = (route) => {
    if (!route) return "";
    const points = route.split("-");
    return ["🏪", ...points.slice(1, -1), "🏪"].join(" ➜ ");
  };

  const getGradientColor = (vehicleType) => {
    const type = vehicleTypes.find(t => t.id === vehicleType);
    return type ? type.gradient : "from-gray-600 to-gray-700";
  };

  const LoadingDots = () => {
    return (
      <span className="inline-flex items-center">
        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" style={{ animation: "bounce 1s infinite" }}></span>
        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mx-1" style={{ animation: "bounce 1s infinite 0.2s" }}></span>
        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" style={{ animation: "bounce 1s infinite 0.4s" }}></span>
      </span>
    );
  };

  const TableComponent = ({ data, title }) => (
    <div className="w-full mb-8 transform transition-all duration-500 hover:scale-[1.01]" style={{ animation: "fadeIn 0.5s ease-out forwards" }}>
      <h5 className={`text-xl sm:text-2xl font-bold mb-4 bg-gradient-to-r ${getGradientColor(title)} bg-clip-text text-transparent flex items-center gap-2`}>
        {vehicleTypes.find(t => t.id === title)?.icon} {vehicleTypes.find(t => t.id === title)?.label || title} Trips
      </h5>
      <div className="overflow-hidden bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-xl border border-amber-200/30 dark:border-amber-700/30 hover:border-amber-300 dark:hover:border-amber-600 transition-colors duration-300">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-amber-200 dark:divide-amber-700/30">
            <thead>
              <tr className={`bg-gradient-to-r ${getGradientColor(title)}`}>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">No.</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Shipments</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Delivered</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Route</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Distance</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Time</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Cap. Util</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Time Util</th>
                <th className="py-4 px-3 text-sm font-semibold text-white border-r border-amber-400/20">Dist. Util</th>
                <th className="py-4 px-3 text-sm font-semibold text-white w-24">Track</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-amber-100 dark:divide-amber-700/30">
              {data.length > 0 ? (
                data.map((trip, index) => (
                  <tr
                    key={index}
                    className="group transition-all duration-300 hover:bg-gradient-to-r hover:from-amber-50 hover:to-orange-50 dark:hover:from-amber-900/10 dark:hover:to-orange-900/10 border-l-4 border-l-transparent hover:border-l-amber-500"
                    style={{ 
                      animation: "slideIn 0.5s ease-out forwards",
                      animationDelay: `${index * 0.05}s`,
                      opacity: 0
                    }}
                  >
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{index + 1}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["Total Shipments"]}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["Shipments Delivered"]}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 font-mono group-hover:font-semibold">
                      {formatRoute(trip["Route"])}
                    </td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["MST Distance"]}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["Trip Time"]}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["Capacity Utilization"]}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["Time Utilization"]}</td>
                    <td className="py-3 px-3 text-sm text-center text-gray-700 dark:text-gray-200 border-r border-amber-200 dark:border-amber-700/30 group-hover:font-semibold">{trip["COV_UTI (Distance Utilization)"]}</td>
                    <td className="py-3 px-3 text-center">
                      <Link
                        to={`/map/${timeslot}/${trips.indexOf(trip)}`}
                        className="inline-flex items-center justify-center w-20 py-1.5 relative group/btn overflow-hidden rounded-md border border-amber-200 dark:border-amber-700/30 hover:border-amber-400 dark:hover:border-amber-600"
                      >
                        <span className={`absolute inset-0 bg-gradient-to-r ${getGradientColor(title)} transition-all duration-300 group-hover/btn:opacity-90`}></span>
                        <span className="relative text-white text-sm flex items-center gap-1">
                          <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                          </svg>
                          Map
                        </span>
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="10" className="py-8 text-center text-amber-600 dark:text-amber-400 animate-pulse">
                    No trips available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-8 text-center">
          Trips for {timeslot}
        </h4>

        {/* Vehicle Type Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {vehicleTypes.map(({ id, label, icon, gradient }) => (
            <button
              key={id}
              onClick={() => toggleVehicleType(id)}
              className={`
                group relative px-6 py-2.5 rounded-lg font-semibold text-sm sm:text-base
                transition-all duration-300 transform
                ${selectedVehicleTypes.includes(id)
                  ? 'text-white scale-105 shadow-lg shadow-amber-200/50 dark:shadow-amber-700/30'
                  : 'text-gray-700 dark:text-gray-300 hover:scale-105 bg-white dark:bg-gray-800 border border-amber-200 dark:border-amber-700/30'
                }
                overflow-hidden hover:shadow-amber-200 dark:hover:shadow-amber-700/30
              `}
            >
              {selectedVehicleTypes.includes(id) && (
                <span className={`absolute inset-0 bg-gradient-to-r ${gradient} transition-opacity`}></span>
              )}
              <span className={`
                absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity
                ${!selectedVehicleTypes.includes(id) ? `bg-gradient-to-r ${gradient}` : ''}
              `}></span>
              <span className="relative flex items-center gap-2">
                <span className="text-lg">{icon}</span>
                <span>{label}</span>
              </span>
            </button>
          ))}
        </div>

        {error && (
          <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 rounded-r-lg" style={{
            animation: "shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both"
          }}>
            <p className="text-orange-600 dark:text-orange-400 text-center">{error}</p>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 animate-pulse">
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 dark:border-amber-700/30 border-t-amber-500 dark:border-t-amber-500" style={{ animation: "spin 1.5s linear infinite" }}></div>
              <div className="absolute inset-4 rounded-full border-4 border-orange-200 dark:border-orange-700/30 border-b-orange-500 dark:border-b-orange-500" style={{ animation: "spin 1.5s linear infinite reverse" }}></div>
            </div>
            <p className="text-lg font-medium text-amber-600 dark:text-amber-400 flex items-center gap-2">
              Please wait, loading trip data<LoadingDots />
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {selectedVehicleTypes.length === 0 ? (
              <div className="text-center py-12 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-xl border border-amber-200/30 dark:border-amber-700/30 transition-all duration-300 animate-pulse">
                <p className="text-amber-600 dark:text-amber-400 text-lg">
                  Please select a vehicle type to view trips
                </p>
              </div>
            ) : (
              selectedVehicleTypes.map(vehicleType => (
                <TableComponent
                  key={vehicleType}
                  data={trips.filter(trip => trip["Vehicle Type"] === vehicleType)}
                  title={vehicleType}
                />
              ))
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// Add these CSS keyframes to the <style> tag in your component or App.jsx file
const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  @keyframes slideIn {
    from { 
      opacity: 0;
      transform: translateY(20px);
    }
    to { 
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
    20%, 40%, 60%, 80% { transform: translateX(5px); }
  }

  @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
  }

  @keyframes spin {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(styleTag);