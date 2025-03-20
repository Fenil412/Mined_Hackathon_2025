import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Map = () => {
  const { timeslot, index } = useParams();
  const [mapHtml, setMapHtml] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); // ✅ Add loading state

  useEffect(() => {
    const fetchMap = async () => {
      if (!timeslot || !index) {
        setError('Invalid timeslot or trip index.');
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const response = await axios.get(`http://localhost:5001/map/${timeslot}/${index}`);
        setMapHtml(response.data.map_html || '');
        setError('');
      } catch (err) {
        setError(err.response?.data?.error || 'Error fetching map.');
        console.error("Error fetching map:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchMap();
  }, [timeslot, index]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 
    to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      <h1 className="text-3xl font-bold my-5 text-gray-800 dark:text-white">
        Route Map for Timeslot: {timeslot}
      </h1>
      {error && <p className="text-red-500 dark:text-red-400 mb-4">{error}</p>}
      {loading ? (
        <p className="text-gray-800 dark:text-gray-300">Loading map...</p>
      ) : mapHtml ? (
        <div
          className="w-full max-w-7xl h-[600px] border border-gray-300 dark:border-gray-700 rounded-lg 
          shadow-md mb-52"dangerouslySetInnerHTML={{ __html: mapHtml }}
        />
      ) : (
        <p className="text-gray-800 dark:text-gray-300">No map available.</p>
      )}
    </div>
  );
};

export default Map;