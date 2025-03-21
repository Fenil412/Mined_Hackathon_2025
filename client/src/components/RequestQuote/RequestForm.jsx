import React, { useState, useEffect } from "react";
import requestImg from "../../../photos/man.webp";

const RequestQuote = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  // Add animation styles
  useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes slideInLeft {
        from {
          opacity: 0;
          transform: translateX(-50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      @keyframes shimmer {
        0% { background-position: -200% 0; }
        100% { background-position: 200% 0; }
      }

      .loading-shimmer {
        background: linear-gradient(90deg, 
          rgba(255,255,255,0.1) 25%, 
          rgba(255,255,255,0.2) 50%, 
          rgba(255,255,255,0.1) 75%
        );
        background-size: 200% 100%;
        animation: shimmer 1.5s infinite;
      }

      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 
    to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      <div className="container mx-auto px-4 my-13">
        <div className="relative p-8 rounded-xl flex flex-col lg:flex-row items-center bg-white 
        dark:bg-gray-900 backdrop-blur-lg shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 
        transition-all duration-500">
          
          {/* Left Side Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative z-10 p-4 animate-slide-in-left">
            {!imageLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 
              dark:bg-gray-800 rounded-lg loading-shimmer">
                <div className="text-lg font-semibold mb-4 animate-pulse text-gray-600 dark:text-gray-300 
                hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                  Loading Image...
                </div>
                <div className="w-12 h-12 border-4 border-amber-600 border-t-transparent rounded-full 
                animate-spin"></div>
              </div>
            )}
            <img
              src={requestImg}
              alt="Request Quote"
              className={`w-140 h-110 rounded-lg shadow-2xl transform transition-all duration-500 
              hover:scale-105 hover:shadow-3xl hover:border-2 hover:border-amber-600 
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
              onLoad={() => setImageLoaded(true)}
            />
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0 lg:ml-6 p-8 bg-white dark:bg-gray-900 backdrop-blur-lg 
          rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 
          relative z-20 animate-slide-in-right border-2 border-gray-200 dark:border-gray-700">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 
            dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent sm:text-5xl relative">
              <span className="absolute -left-3 -top-5 text-4xl font-bold text-amber-400/20 
              dark:text-orange-400/20 animate-float">02</span>
              Request a Quote
            </h1>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 hover:text-amber-600 
            dark:hover:text-amber-400 transition-colors duration-300">
              Fill in the form to get your customized quote
            </p>

            <form className="mt-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 
                  hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    Freight Type
                  </label>
                  <select className="w-full p-3 bg-white dark:bg-gray-900 border-2 border-gray-200 
                  dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                  focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                  hover:border-amber-600 text-gray-600 dark:text-gray-300 hover:text-amber-600 
                  dark:hover:text-amber-400">
                    <option value="">-- Select Type --</option>
                    <option value="Air Freight">Air Freight</option>
                    <option value="Ocean Freight">Ocean Freight</option>
                    <option value="Road Freight">Road Freight</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 
                  hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    Email Address
                  </label>
                  <input type="email" placeholder="Email" 
                  className="w-full p-3 bg-white dark:bg-gray-900 border-2 border-gray-200 
                  dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                  focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                  hover:border-amber-600 text-gray-600 dark:text-gray-300 hover:text-amber-600 
                  dark:hover:text-amber-400 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 
                  hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    Departure Country
                  </label>
                  <input type="text" placeholder="Country of Departure" 
                  className="w-full p-3 bg-white dark:bg-gray-900 border-2 border-gray-200 
                  dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                  focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                  hover:border-amber-600 text-gray-600 dark:text-gray-300 hover:text-amber-600 
                  dark:hover:text-amber-400 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 
                  hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    Total Weight (KG)
                  </label>
                  <input type="text" placeholder="Total Weight" 
                  className="w-full p-3 bg-white dark:bg-gray-900 border-2 border-gray-200 
                  dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                  focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                  hover:border-amber-600 text-gray-600 dark:text-gray-300 hover:text-amber-600 
                  dark:hover:text-amber-400 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 
                  hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    Recipient's Country
                  </label>
                  <input type="text" placeholder="Recipient Country" 
                  className="w-full p-3 bg-white dark:bg-gray-900 border-2 border-gray-200 
                  dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                  focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                  hover:border-amber-600 text-gray-600 dark:text-gray-300 hover:text-amber-600 
                  dark:hover:text-amber-400 placeholder:text-gray-400 dark:placeholder:text-gray-500" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-600 dark:text-gray-300 mb-2 
                  hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-300">
                    Expected Delivery Date
                  </label>
                  <input type="date" 
                  className="w-full p-3 bg-white dark:bg-gray-900 border-2 border-gray-200 
                  dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                  focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                  hover:border-amber-600 text-gray-600 dark:text-gray-300 hover:text-amber-600 
                  dark:hover:text-amber-400" />
                </div>
              </div>

              <button type="submit" 
              className="w-full mt-6 py-3 px-6 text-white font-bold bg-gradient-to-r from-amber-600 
              to-orange-600 dark:from-amber-500 dark:to-orange-500 rounded-lg transform hover:scale-105 
              hover:from-orange-600 hover:to-amber-600 dark:hover:from-orange-500 dark:hover:to-amber-500 
              transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95">
                Get Your Quote
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequestQuote;