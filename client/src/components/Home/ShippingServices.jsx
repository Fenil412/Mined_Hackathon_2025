import React from 'react';
import image1 from "../../../photos/first.webp"; 
import image2 from "../../../photos/second.webp";
import image3 from "../../../photos/third.webp";

const ShippingServices = () => {
  return (
    <section className="featured-services py-12 bg-white relative">
      <div className="container mx-auto px-12"> {/* Increased padding from px-4 to px-6 */}
        <div className="flex justify-between items-start">
          
          {/* Packing & Storage Section */}
          <div className="w-1/3 p-4" style={{ width: '490px', height: '286px' }}>
            <div className="left-side">
              <h3 className="section-title text-4xl text-blue-900 font-bold mb-4 relative z-10">
                <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-300 opacity-50 z-0">01</span>
                PACKING & STORAGE
              </h3>
              <p className="text-gray-900 mb-4">
                Bringing you industry-specific expertise; whatever you’re shipping, wherever you’re shipping it.
              </p>
              <ul className="list-inside text-gray-500 font-semibold">
                <li><span className="text-orange-700">•</span> Shipper delivers a professional, efficient service</li>
                <li><span className="text-orange-700">•</span> Tailored to the specific needs of your business</li>
                <li><span className="text-orange-700">•</span> Our services are designed around you</li>
              </ul>
            </div>
          </div>

          {/* Service Boxes - Shifted Upwards */}
          <div className="relative flex space-x-5 -mt-25">
            <div className="service-box w-[212px] h-[348px] bg-blue-900 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center p-4">
              <img src={image1} alt="Sea Shipping" className="w-25 h-25 mt-7 mb-7" />
              <figcaption className="text-lg font-bold text-orange-600 mb-7">SEA SHIPPING</figcaption>
              <div className="desc text-white bg-orange-600 p-2 rounded-b-lg w-full text-center">
                We want to ensure that it’s as easy as possible to use the site to get.
              </div>
            </div>

            <div className="service-box w-[212px] h-[348px] bg-blue-900 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center p-4">
              <img src={image2} alt="Air Shipping" className="w-25 h-25 mt-7 mb-7" />
              <figcaption className="text-lg font-bold text-orange-600 mb-7">AIR SHIPPING</figcaption>
              <div className="desc text-white bg-orange-600 p-2 rounded-b-lg w-full text-center">
                Shipments moving, whether you’ve worked with us for years completely new.
              </div>
            </div>

            <div className="service-box w-[212px] h-[348px] bg-blue-900 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center p-4">
              <img src={image3} alt="Land Shipping" className="w-25 h-25 mt-7 mb-7" />
              <figcaption className="text-lg font-bold text-orange-600 mb-7">LAND SHIPPING</figcaption>
              <div className="desc text-white bg-orange-600 p-2 rounded-b-lg w-full text-center">
                International shipping. For further assistance, please get in touch.
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ShippingServices;
