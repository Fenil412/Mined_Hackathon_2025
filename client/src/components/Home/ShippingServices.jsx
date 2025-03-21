import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp, faShip, faTrainTram } from "@fortawesome/free-solid-svg-icons";

const ShippingServices = () => {
  return (
    <section className="py-12 bg-gradient-to-br from-amber-50 to-orange-50 dark:from-gray-900 dark:to-gray-800 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          
          {/* Packing & Storage Section */}
          <div className="w-full lg:w-[490px]" style={{ animation: "slideInLeft 0.8s ease-out forwards" }}>
            <h3 className="md:text-4xl section-title text-4xl font-bold mb-4 relative">
            <span className="absolute -left-3 -top-5 text-4xl font-bold text-amber-400/20 
              dark:text-orange-400/20 animate-float">01</span>
              <span className="bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent">
                PACKING & STORAGE
              </span>
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4 animate-fadeIn" style={{ animation: "fadeIn 1s ease-out forwards 0.3s" }}>
              Bringing you industry-specific expertise; whatever you're shipping, wherever you're shipping it.
            </p>
            <ul className="list-inside text-gray-700 dark:text-gray-300 font-semibold space-y-2">
              {[
                "Shipper delivers a professional, efficient service",
                "Tailored to the specific needs of your business",
                "Our services are designed around you"
              ].map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center space-x-2 group"
                  style={{ animation: `slideInRight 0.5s ease-out forwards ${index * 0.2 + 0.5}s` }}
                >
                  <span className="inline-block w-2 h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 group-hover:scale-125 transition-transform duration-300"></span>
                  <span className="group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Boxes - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8.5 lg:-mt-6">
            {[ 
              { icon: faShip, title: "SEA SHIPPING", desc: "We want to ensure that it's as easy as possible to use the site to get as soon as possible." }, 
              { icon: faPlaneUp, title: "AIR SHIPPING", desc: "Shipments moving, whether you've worked with us for years or completely new." }, 
              { icon: faTrainTram, title: "LAND SHIPPING", desc: "International shipping. For further assistance, please get in touch with email or fax." }
            ].map((service, index) => (
              <div 
                key={index} 
                className="w-full sm:w-[240px] h-auto group relative overflow-hidden"
                style={{ animation: `fadeInUp 0.5s ease-out forwards ${index * 0.2}s` }}
              >
                <div className="border border-amber-200/30 dark:border-amber-700/30 rounded-lg shadow-lg 
                  transition-all duration-300 flex flex-col items-center p-5 relative
                  hover:border-amber-400 dark:hover:border-amber-600
                  bg-white dark:bg-gray-800 backdrop-blur-lg">
                  
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-orange-500/5 
                    dark:from-amber-600/10 dark:to-orange-600/10 rounded-lg opacity-0 
                    group-hover:opacity-100 transition-opacity duration-300"></div>

                  <FontAwesomeIcon 
                    icon={service.icon} 
                    className="text-6xl text-amber-500 dark:text-amber-400 mt-5 mb-5 
                      transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3" 
                  />

                  <figcaption className="text-xl font-semibold bg-gradient-to-r from-amber-600 to-orange-600 
                    dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent mb-5">
                    {service.title}
                  </figcaption>

                  <div className="desc text-gray-600 dark:text-gray-300 p-3 rounded-b-lg w-full text-center
                    group-hover:text-amber-700 dark:group-hover:text-amber-300 transition-colors duration-300">
                    {service.desc}
                  </div>

                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-orange-500 
                    transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShippingServices;

// Add these keyframes to your global CSS or component
const styleTag = document.createElement('style');
styleTag.textContent = `
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

  @keyframes slideInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
document.head.appendChild(styleTag);