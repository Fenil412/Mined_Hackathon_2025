import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';

const TrackOrder = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleDownloadClick = () => {
    setClicked(true);
  };

  return (
    <div className="col-xs-12">
      <h4 className="section-title mt-5 ml-20 text-blue-900 font-bold text-4xl">TRACK ORDER</h4>

      <div className="col-md-12 col-sm-12">
        <div className="tracking-area">
          <div className="container">
            <div className="tracking-id-info text-center mt-10">
              <p>Enter Your Cargo Tracking, Door to Door Office <a href="javascript:void(0)" className="text-blue-900">Order Number.</a></p>

              <form onSubmit={handleSubmit} className="tracking-id-form">
                <input type="hidden" name="_token" value="003xBKz40wrCxzwfEiNbov0GzBXyBPruRslq7cVF" />
                <div className="flex justify-center">
                  <input
                    type="text"
                    className="w-1/2 border-2 border-gray-300 p-3 mt-5 rounded-md focus:border-4 focus:border-blue-900 focus:outline-none transition-all"
                    name="trackingnumber"
                    placeholder="Enter Tracking your Number"
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    required
                  />
                </div>
                <div className="flex justify-center mt-5 space-x-4">
                  <button
                    className="px-6 py-2 bg-blue-500 text-white rounded-md text-lg transition-colors hover:bg-blue-700"
                    type="submit"
                  >
                    Track Order
                  </button>
                  <div 
                    className={`flex items-center space-x-2 text-red-500 cursor-pointer hover:text-red-700 active:scale-95 transition-transform ${clicked ? 'border border-red-500 p-2 rounded-md' : ''}`} 
                    onClick={handleDownloadClick}
                  >
                    <FontAwesomeIcon icon={faFilePdf} className="text-xl" />
                    <a href="#" className="font-semibold">
                      DOWNLOAD PDF
                    </a>
                  </div>
                </div>
              </form>

              {submitted && (
                <div className="mt-10">
                  <p>Your order is being tracked with the number: {trackingNumber}</p>
                </div>
              )}

              <div className="mt-10 border-t border-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
