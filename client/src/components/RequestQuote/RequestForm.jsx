import React from "react";
import requestImg from "../../../photos/man.webp";

const RequestQuote = () => {
  return (
    <section className="relative overflow-hidden py-16 bg-gradient-to-br from-gray-100 to-gray-300 
    dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      <div className="container mx-auto px-4">
        <div className="relative p-8 rounded-lg flex flex-col lg:flex-row items-center bg-white 
        dark:bg-gray-900 backdrop-blur-lg border border-gray-300 dark:border-gray-700 shadow-2xl 
        hover:shadow-3xl transition-all duration-500">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 p-4">
            <img
              src={requestImg}
              alt="Request Quote"
              className="w-140 h-110 rounded-lg shadow-2xl transform transition-all duration-500 
              hover:scale-105 hover:shadow-3xl hover:border-2 hover:border-orange-600"
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-6 bg-white dark:bg-gray-800 backdrop-blur-sm p-8 
          rounded-lg border border-gray-300 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow 
          duration-500 relative z-20">
            <h4 className="text-3xl text-gray-800 dark:text-white font-bold mb-8 border-l-4 border-orange-600 
            pl-4">
              REQUEST A FREE QUOTE
            </h4>

            <form className="space-y-6
            hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Freight 
                    Type</label>
                  <select className="w-full p-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400">
                    <option value="">-- Select Type --</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Road Freight">Road Freight</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email 
                    Address</label>
                  <input type="email" placeholder="Email" className="w-full p-3 text-gray-800 dark:text-white 
                  bg-gray-100 dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Departure 
                    Country</label>
                  <input type="text" placeholder="Country of Departure" className="w-full p-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total Weight (KG)</label>
                  <input type="text" placeholder="Total Weight" className="w-full p-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Recipient's Country</label>
                  <input type="text" placeholder="Recipient Country" className="w-full p-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expected Delivery Date</label>
                  <input type="date" className="w-full p-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400" />
                </div>
              </div>
              <button type="submit" className="w-full mt-6 py-3 px-6 text-white font-bold bg-gradient-to-r from-orange-700 
                  to-amber-700 rounded-lg hover:from-amber-700 hover:to-orange-700 transform 
                  hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
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
