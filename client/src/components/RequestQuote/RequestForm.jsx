import React from "react";
import requestImg from "../../../photos/man.webp";

const RequestQuote = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-br from-teal-800 via-indigo-900 to-purple-900 animate-gradient">
      {/* Container */}
      <div className="container mx-auto px-4">
        <div className="relative p-8 rounded-lg flex flex-col lg:flex-row items-center bg-white/10 backdrop-blur-lg border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10">
            <img
              src={requestImg}
              alt="Request Quote"
              className="w-140 h-110 rounded-lg shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:border-2 hover:border-amber-500"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-10 bg-gradient-to-br from-indigo-900/70 to-purple-900/70 backdrop-blur-sm p-8 rounded-lg border border-white/20 shadow-lg hover:shadow-xl transition-shadow duration-500 relative z-20">
            <h4 className="text-3xl text-white font-bold mb-8 border-l-4 border-amber-500 pl-4">
              REQUEST A FREE QUOTE
            </h4>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Freight Type</label>
                  <select className="w-full p-3 border border-white/30 bg-indigo-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-all duration-300">
                    <option value="">-- Select Type --</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Road Freight">Road Freight</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-white/30 bg-indigo-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Departure Country</label>
                  <input
                    type="text"
                    placeholder="Country of Departure"
                    className="w-full p-3 border border-white/30 bg-indigo-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Total Weight (KG)</label>
                  <input
                    type="text"
                    placeholder="Total Weight"
                    className="w-full p-3 border border-white/30 bg-indigo-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Recipient's Country</label>
                  <input
                    type="text"
                    placeholder="Recipient Country"
                    className="w-full p-3 border border-white/30 bg-indigo-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-all duration-300"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-white/80 mb-2">Expected Delivery Date</label>
                  <input
                    type="date"
                    className="w-full p-3 border border-white/30 bg-indigo-900/50 backdrop-blur-sm text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 hover:border-amber-500 transition-all duration-300"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-amber-600 to-yellow-500 text-white font-bold rounded-lg hover:from-yellow-500 hover:to-amber-600 hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                SUBMIT REQUEST
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RequestQuote;