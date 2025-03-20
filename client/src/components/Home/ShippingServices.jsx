import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp, faShip, faTrainTram} from "@fortawesome/free-solid-svg-icons";


const ShippingServices = () => {
  return (
    
<section className="py-12 bg-gradient-to-br from-gray-200 
    to-gray-200 dark:from-gray-800 dark:to-gray-700 dark:via-gray-800 dark:to-black relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
          
          {/* Packing & Storage Section */}
          <div className="w-full lg:w-[490px] animate-slide-in-left">
            <h3 className="md:text-4xl section-title text-4xl text-gray-800 dark:text-white font-bold mb-4 relative z-10">
              <span className="absolute -left-3 -top-5 text-4xl md:text-4xl font-bold text-purple-400 opacity-50 z-0">
                01
              </span>
              PACKING & STORAGE
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
              Bringing you industry-specific expertise; whatever you’re shipping, wherever you’re shipping it.
            </p>
            <ul className="list-inside text-gray-700 dark:text-gray-300 font-semibold space-y-2">
              <li><span className="text-orange-600">•</span> Shipper delivers a professional, efficient service</li>
              <li><span className="text-orange-600">•</span> Tailored to the specific needs of your business</li>
              <li><span className="text-orange-600">•</span> Our services are designed around you</li>
            </ul>
          </div>

          {/* Service Boxes - Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-8.5 lg:-mt-6 animate-slide-in-right">
            {[ 
              { icon: faShip, title: "SEA SHIPPING", desc: "We want to ensure that it’s as easy as possible to use the site to get as soon as possible." }, 
              { icon: faPlaneUp, title: "AIR SHIPPING", desc: "Shipments moving, whether you’ve worked with us for years or completely new." }, 
              { icon: faTrainTram, title: "LAND SHIPPING", desc: "International shipping. For further assistance, please get in touch with email or fax." }
            ].map((service, index) => (
              <div key={index} className="w-full sm:w-[240px] h-auto border border-orange-600 
              rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:border-2 
              hover:border-orange-600 transition-all duration-300 animate-fade-in flex flex-col 
              items-center p-5 ">

<FontAwesomeIcon icon={service.icon} className="text-6xl text-orange-600 mt-5 mb-5" />

                <figcaption className="text-xl font-semibold text-gray-800 dark:text-white mb-5">{service.title}</figcaption>

                <div className="desc text-black dark:text-white bg-gradient-to-r from-gray-300 
                to-gray-400 dark:from-gray-900 dark:to-gray-500 p-3 rounded-b-lg w-full text-center">
                  {service.desc}
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