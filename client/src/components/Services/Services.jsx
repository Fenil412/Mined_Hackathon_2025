import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlaneUp,
  faCar,
  faShip,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import box from "../../../photos/box.webp";
import container from "../../../photos/container.webp";

const Services = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 dark:from-gray-800 
    dark:to-gray-700 py-16">
      <section className="services">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Main Content */}
            <div className="py-16 mb-16 md:col-span-3 bg-white dark:bg-gray-900 backdrop-blur-lg p-8 
            rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02] hover:shadow-3xl 
            animate-fade-in">
              <div className="col-xs-12 mb-5">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-white relative z-10">
                  <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-400 opacity-50 z-0">
                    01
                  </span>
                  TRADE SERVICES
                </h3>
              </div>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
                What makes our service stand out is our ability to provide
                in-depth, expert knowledge of individual geographic trades and
                markets.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
                Regardless of your ocean freight needs, SHIPPER Logistics of New
                York can provide customized, high-quality logistical solutions
                for all import shipping tasks.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
                MTS Logistics is licensed as a Non-Vessel Operating Common
                Carrier (NVOCC), offering a comprehensive range of services
                including:
              </p>
              <ul className="list-inside text-gray-700 dark:text-gray-300 font-semibold space-y-2">
                <li className="hover:translate-x-1 transition-all duration-300">
                  <span className="text-orange-600">•</span> Customized freight
                  solutions at competitive pricing
                </li>

                <li className="hover:translate-x-1 transition-all duration-300">
                  <span className="text-orange-600">•</span> Timely alerts and
                  notices with track-and-trace monitoring
                </li>

                <li className="hover:translate-x-1 transition-all duration-300">
                  <span className="text-orange-600">•</span> ISF filing and full
                  customs clearance
                </li>

                <li className="hover:translate-x-1 transition-all duration-300">
                  <span className="text-orange-600">•</span> Local trucking and
                  door-to-door delivery
                </li>

                <li className="hover:translate-x-1 transition-all duration-300">
                  <span className="text-orange-600">•</span> Storage and
                  warehouse options
                </li>

                <li className="hover:translate-x-1 transition-all duration-300">
                  <span className="text-orange-600">•</span> Complete purchase
                  order management
                </li>
              </ul>
              <img
                src={container}
                alt="Trade Services"
                className="rounded-lg shadow-md mb-6 mt-10 w-full h-auto hover:scale-105 hover:shadow-xl 
                hover:border-2 hover:border-orange-500 transition-all duration-300"
              />
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
                If you would like to contact us and discuss the import and cargo
                services we can offer, please feel free to write, call or fax us
                with any questions or concerns you may have.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 font-medium mb-4">
                Supply chain sustainability is a trending topic nowadays because
                of people’s growing awareness to keeping the Earth. The
                container shipping industry’s been very unprofitable over the
                past 3-5 years. Making things worse, earnings have.
              </p>
            </div>

            {/* Sidebar */}
            <aside className="bg-white dark:bg-gray-900 backdrop-blur-lg p-6 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <ul className="space-y-2 mb-6 border border-gray-300 dark:border-gray-600 p-4 rounded-lg">
                <li className="font-semibold text-orange-600 hover:text-orange-700 cursor-pointer">
                  Trade Services
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Dry Cargo
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Reefer Cargo
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Oversized & Breakbulk Cargo
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Intermodal
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Warehousing & Storage
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Cross Trading
                </li>
                <li className="text-gray-600 dark:text-gray-300 hover:text-orange-600 cursor-pointer">
                  Cargo Trailers
                </li>
              </ul>

              <img
                src={box}
                alt="Side Banner"
                className="rounded-lg shadow-md mb-4 w-full h-auto hover:scale-105 hover:shadow-xl hover:border-2 hover:border-orange-500 transition-all duration-300"
              />

              <div className="flex items-center border-2 border-orange-500 p-3 rounded-lg hover:scale-105 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faFilePdf}
                  className="text-2xl mr-2 text-orange-600"
                />
                <a href="#" className="text-orange-600 font-bold">
                  DOWNLOAD PDF
                </a>
              </div>
            </aside>

            {/* Other Features Section */}
            <div className="py-16 mb-1 md:col-span-3 bg-white dark:bg-gray-900 backdrop-blur-lg p-8 rounded-lg shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <div className="col-xs-12 mb-5">
                <h3 className="text-4xl font-bold text-gray-800 dark:text-white relative z-10">
                  <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-400 opacity-50 z-0">
                    02
                  </span>
                  OTHER FEATURES
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-2 hover:border-orange-500 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faPlaneUp}
                    className="text-3xl text-orange-600 mb-2"
                  />
                  <h5 className="font-semibold text-gray-800 dark:text-white">
                    AIR SHIPPING
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Offering storage facilities in London and Cowdenbeath.
                  </p>
                </div>
                <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-2 hover:border-orange-500 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faCar}
                    className="text-3xl text-orange-600 mb-2"
                  />
                  <h5 className="font-semibold text-gray-800 dark:text-white">
                    GROUND LOGISTICS
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Providing extensive logistics support across locations.
                  </p>
                </div>
                <div className="text-center bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md hover:scale-105 hover:shadow-xl hover:border-2 hover:border-orange-500 transition-all duration-300">
                  <FontAwesomeIcon
                    icon={faShip}
                    className="text-3xl text-orange-600 mb-2"
                  />
                  <h5 className="font-semibold text-gray-800 dark:text-white">
                    SEA TRANSPORTATION
                  </h5>
                  <p className="text-gray-600 dark:text-gray-300">
                    Reliable sea freight solutions worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
