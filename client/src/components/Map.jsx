import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const Map = () => {
  const { timeslot, index } = useParams();
  const [mapHtml, setMapHtml] = useState('');
  const [tripDetails, setTripDetails] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  // Vehicle type icons and gradients mapping
  const vehicleTypeDetails = {
    "3W": { 
      label: "Three Wheeler", 
      icon: "🛺",
      gradient: "from-orange-600 via-amber-600 to-orange-700"
    },
    "4W-EV": { 
      label: "Four Wheeler EV", 
      icon: "⚡",
      gradient: "from-amber-600 via-orange-600 to-amber-700"
    },
    "4W": { 
      label: "Four Wheeler", 
      icon: "🚗",
      gradient: "from-orange-700 via-amber-600 to-orange-600"
    }
  };

  useEffect(() => {
    const fetchTripAndMap = async () => {
      if (!timeslot || !index) {
        setError('Invalid timeslot or trip index.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        
        // First, fetch trip details to get vehicle type and trip time
        const tripsResponse = await axios.get(`http://localhost:5001/trips/${timeslot}`);
        const tripData = tripsResponse.data.assignments || [];
        
        if (tripData.length > parseInt(index)) {
          setTripDetails(tripData[parseInt(index)]);
        }
        
        // Next, fetch the map HTML
        const mapResponse = await axios.get(`http://localhost:5001/map/${timeslot}/${index}`);
        setMapHtml(mapResponse.data.map_html || '');
        setError('');
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching data.');
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTripAndMap();
  }, [timeslot, index]);

  // Custom loading animation component
  const LoadingDots = () => {
    return (
      <span className="inline-flex items-center">
        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" style={{ animation: "bounce 1s infinite" }}></span>
        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 mx-1" style={{ animation: "bounce 1s infinite 0.2s" }}></span>
        <span className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400" style={{ animation: "bounce 1s infinite 0.4s" }}></span>
      </span>
    );
  };

  // Get vehicle icon and label
  const getVehicleInfo = (vehicleType) => {
    const type = vehicleTypeDetails[vehicleType];
    return type || { label: "Unknown", icon: "🚐" };
  };

  // Format route for display
  const formatRoute = (route) => {
    if (!route) return "";
    const points = route.split("-");
    return ["🏪", ...points.slice(1, -1), "🏪"].join(" ➜ ");
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <Link 
            to={`/trips/${timeslot}`} 
            className="inline-flex items-center text-amber-600 dark:text-amber-400 hover:text-amber-700 dark:hover:text-amber-300 mb-4 transition-colors duration-300"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Trips
          </Link>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent text-center mb-4">
            Route Map for Timeslot: {timeslot}
          </h1>
          
          {tripDetails && (
            <div className="bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-xl border border-amber-200/30 dark:border-amber-700/30 p-4 mb-6 transform transition-all duration-500 hover:scale-[1.01]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-3 flex flex-col items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Trip Number</span>
                  <span className="text-xl font-bold text-amber-600 dark:text-amber-400">#{parseInt(index) + 1}</span>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-3 flex flex-col items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Vehicle Type</span>
                  <span className="text-xl font-bold text-amber-600 dark:text-amber-400 flex items-center">
                    {tripDetails["Vehicle Type"] && (
                      <>
                        <span className="mr-2">{getVehicleInfo(tripDetails["Vehicle Type"]).icon}</span>
                        {getVehicleInfo(tripDetails["Vehicle Type"]).label}
                      </>
                    )}
                  </span>
                </div>
                
                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg p-3 flex flex-col items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Trip Time</span>
                  <span className="text-xl font-bold text-amber-600 dark:text-amber-400">{tripDetails["Trip Time"] || "N/A"}</span>
                </div>
              </div>
              
              {/* Route Display */}
              {tripDetails["Route"] && (
                <div className="mt-4 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-lg">
                  <span className="text-sm text-gray-500 dark:text-gray-400 block mb-1">Route</span>
                  <div className="text-amber-600 dark:text-amber-400 font-mono text-center">
                    {formatRoute(tripDetails["Route"])}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        
        {/* Error Display */}
        {error && (
          <div className="mb-6 p-4 bg-orange-50 dark:bg-orange-900/30 border-l-4 border-orange-500 rounded-r-lg" style={{
            animation: "shake 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both"
          }}>
            <p className="text-orange-600 dark:text-orange-400 text-center">{error}</p>
          </div>
        )}
        
        {/* Loading State */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-16 animate-pulse">
            <div className="relative w-24 h-24 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-amber-200 dark:border-amber-700/30 border-t-amber-500 dark:border-t-amber-500" style={{ animation: "spin 1.5s linear infinite" }}></div>
              <div className="absolute inset-4 rounded-full border-4 border-orange-200 dark:border-orange-700/30 border-b-orange-500 dark:border-b-orange-500" style={{ animation: "spin 1.5s linear infinite reverse" }}></div>
            </div>
            <p className="text-lg font-medium text-amber-600 dark:text-amber-400 flex items-center gap-2">
              Please wait, loading map data<LoadingDots />
            </p>
          </div>
        ) : mapHtml ? (
          <div className="w-full max-w-7xl border border-amber-200/30 dark:border-amber-700/30 rounded-xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-[1.01]">
            <div
              className="w-full h-[600px]"
              dangerouslySetInnerHTML={{ __html: mapHtml }}
            />
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-xl border border-amber-200/30 dark:border-amber-700/30">
            <p className="text-amber-600 dark:text-amber-400 text-lg">No map available.</p>
          </div>
        )}
      </div>
      
      {/* CSS Animations */}
      <style jsx>{`
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
      `}</style>
    </div>
  );
};

export default Map;