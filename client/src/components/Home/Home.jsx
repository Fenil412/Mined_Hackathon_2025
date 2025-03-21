import React, { useState, useEffect } from "react";
import image1 from "../../../photos/bg_Image1.jpg";
import image2 from "../../../photos/bg_Image2.jpg";
import image3 from "../../../photos/bg_Image3.jpg";
import ShippingServices from "./ShippingServices";
import RequestForm from "../RequestQuote/RequestForm";

export default function Home() {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});

  // Preload images and track their loading status
  useEffect(() => {
    images.forEach((src, index) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        setLoadedImages(prev => ({
          ...prev,
          [index]: true
        }));
        if (index === currentIndex) {
          setIsLoading(false);
        }
      };
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        setIsLoading(!loadedImages[nextIndex]);
        return nextIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [loadedImages]);

  return (
    <div>
      {/* Background Image Animation Section */}
      <div
        className="relative w-full h-[90vh] flex items-center bg-gradient-to-br 
            from-gray-100 to-gray-300 dark:from-gray-800 
            dark:to-gray-700 animate-gradient"
        style={{ animation: "fadeIn 1s ease-out" }}
      >
        {/* Loading Overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-300 
            dark:from-gray-800 dark:to-gray-700 transition-opacity duration-1000 z-10
            ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="loading-ripple">
              <div></div>
              <div></div>
            </div>
          </div>
        </div>

        {/* Background Image with loading transition */}
        <div
          className={`absolute inset-0 transition-all duration-1000 bg-cover bg-center
            ${isLoading ? 'scale-105 blur-sm' : 'scale-100 blur-0'}`}
          style={{ 
            backgroundImage: `url(${images[currentIndex]})`,
            animation: loadedImages[currentIndex] ? "kenBurns 20s infinite alternate" : "none",
            opacity: loadedImages[currentIndex] ? 1 : 0,
          }}
        />

        {/* Dark Overlay */}
        <div 
          className="absolute inset-0 bg-black/50" 
          style={{ animation: "fadeIn 1.5s ease-out" }}
        ></div>

        {/* Content Section - Responsive Design */}
        <div
          className="relative z-10 text-left px-6 md:pl-14 lg:pl-28 flex flex-col justify-center 
            h-full w-full max-w-3xl"
          style={{ animation: "slideInLeft 1s ease-out" }}
        >
          <h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-red-700"
            style={{ animation: "slideInUp 1s ease-out" }}
          >
            LOGISTICS
          </h1>
          <p 
            className="text-xl md:text-3xl lg:text-4xl text-white mt-4"
            style={{ animation: "slideInUp 1s ease-out 0.2s both" }}
          >
            Check your delivery easily & quickly
          </p>

          {/* Input Field + Button - Responsive */}
          <div 
            className="flex flex-col sm:flex-row items-center mt-6 sm:mt-8 gap-4 sm:gap-2"
            style={{ animation: "slideInUp 1s ease-out 0.4s both" }}
          >
            <input
              type="text"
              placeholder="Enter your Tracking Number"
              className="w-full sm:w-auto px-5 py-3 border-2 border-white/50 bg-white/10 text-white 
                font-semibold rounded-md outline-none placeholder-white text-base focus:border-orange-300 
                focus:ring-2 focus:ring-orange-500/50 transition duration-300"
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
        <div 
          className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1.5"
          style={{ animation: "fadeIn 1s ease-out 0.8s both" }}
        >
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? "bg-orange-700 scale-125" : "bg-white/50"
              }`}
              style={{ animation: `fadeIn 0.5s ease-out ${index * 0.2}s both` }}
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

// Add animations and loading styles
const styleTag = document.createElement('style');
styleTag.textContent = `
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideInLeft {
    from {
      opacity: 0;
      transform: translateX(-100px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes kenBurns {
    from {
      transform: scale(1) translate(0);
    }
    to {
      transform: scale(1.1) translate(-1%, -1%);
    }
  }

  .loading-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  
  .loading-ripple div {
    position: absolute;
    border: 4px solid #fff;
    opacity: 1;
    border-radius: 50%;
    animation: loading-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  
  .loading-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  
  @keyframes loading-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    4.9% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 0;
    }
    5% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }

  /* Add animation delays */
  .animation-delay-200 {
    animation-delay: 200ms;
  }
  .animation-delay-400 {
    animation-delay: 400ms;
  }
  .animation-delay-600 {
    animation-delay: 600ms;
  }

  /* Ensure smooth transitions */
  .transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
  }

  /* Image transition effects */
  .image-transition-enter {
    opacity: 0;
    transform: scale(1.05);
    filter: blur(4px);
  }

  .image-transition-enter-active {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
    transition: all 1s ease-out;
  }

  .image-transition-exit {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }

  .image-transition-exit-active {
    opacity: 0;
    transform: scale(0.95);
    filter: blur(4px);
    transition: all 1s ease-in;
  }
`;

document.head.appendChild(styleTag);