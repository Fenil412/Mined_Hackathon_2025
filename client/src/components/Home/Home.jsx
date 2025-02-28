import React, { useState, useEffect } from "react";
import image1 from "../../../photos/bg_Image1.jpg";
import image2 from "../../../photos/bg_Image2.jpg";
import image3 from "../../../photos/bg_Image3.jpg";
import ShippingServices from "./ShippingServices";
import RequestForm from "../RequestQuote/RequestForm";

export default function Home() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Background Image Animation Section */}
      <div
        className="relative w-full h-[90vh] flex items-center bg-gradient-to-br 
            from-gray-100 to-gray-300 dark:from-gray-800 
    dark:to-gray-700 animate-gradient"
      >
        {/* Background Image */}
        <div
          className="absolute inset-0 transition-opacity duration-5000 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[currentIndex]})` }}
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content Section - Responsive Design */}
        <div
          className="relative z-10 text-left px-6 md:pl-14 lg:pl-28 flex flex-col justify-center 
        h-full animate-slide-in-left w-full max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-red-700">
            LOGISTICS
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl text-white mt-4">
            Check your delivery easily & quickly
          </p>

          {/* Input Field + Button - Responsive */}
          <div className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8 gap-4 sm:gap-2">
            <input
              type="text"
              placeholder="Enter your Tracking Number"
              className="w-full sm:w-auto px-5 py-3 border-2 border-white/50 bg-white/10 text-white font-semibold 
                rounded-md outline-none placeholder-white text-base focus:border-orange-300 focus:ring-2 
                focus:ring-orange-500/50 transition duration-300"
            />
            <button
              className="px-6 py-3 bg-gradient-to-r from-orange-600 to-red-500 text-white text-base 
                font-bold rounded-md hover:from-red-500 hover:to-orange-600 hover:scale-105 transform 
                transition duration-300 shadow-lg"
            >
              TRACK ORDER
            </button>
          </div>
        </div>

        {/* Three-dot Indicator - Positioned Responsively */}
        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1.5">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-orange-700" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
      {/* Shipping Services Section */}
      <ShippingServices />
      <RequestForm />
    </div>
  );
}
