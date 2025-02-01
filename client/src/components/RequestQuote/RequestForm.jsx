import React from "react";
import requestImg from "../../../photos/man.webp"; 

const RequestQuote = () => {
  return (
    <section className="text-white py-12">
      <div className="container mx-auto" style={{ width: '1170px', height: '920px' }}>
        <div className="p-8 rounded-lg flex flex-col lg:flex-row items-center">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={requestImg} alt="Request Quote" className="w-140 h-110 mb-70" />
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 mt-6 lg:mt-0 bg-blue-900 p-8">
            <h4 className="text-3xl text-white font-bold mb-14 ml-4 mt-25 border-l-4 border-yellow-500 pl-3">
              REQUEST A FREE QUOTE
            </h4>

            <form className="p-4 ml-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-sm font-medium mb-3">Freight Type</label>
                  <select className="w-full p-2 border border-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]">
                    <option value="">-- Select Type --</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Road Freight">Road Freight</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Email Address</label>
                  <input type="email" placeholder="Email" className="w-full p-2 border border-white bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Departure Country</label>
                  <input type="text" placeholder="Country of Departure" className="w-full p-2 border border-white bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Total Weight (KG)</label>
                  <input type="text" placeholder="Total Weight" className="w-full p-2 border border-white bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Recipient's Country</label>
                  <input type="text" placeholder="Recipient Country" className="w-full p-2 border border-white bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-3">Expected Delivery Date</label>
                  <input type="date" className="w-full p-2 border border-white bg-blue-900 text-white focus:outline-none focus:ring-2 focus:ring-[#A7C7E7]" />
                </div>
              </div>

              <button type="submit" className="w-full mt-6 py-2 px-4 border border-white bg-orange-700 text-white font-bold hover:bg-blue-800 transition mb-20">
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
