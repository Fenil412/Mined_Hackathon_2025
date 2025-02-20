import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp, faCar, faShip, faCube } from "@fortawesome/free-solid-svg-icons";
import truck from "../../../photos/truck.webp";
import truck2 from "../../../photos/truck2.webp";
import member1 from "../../../photos/member1.webp";
import member2 from "../../../photos/member2.webp";
import member3 from "../../../photos/member3.webp";
import member4 from "../../../photos/member4.webp";
import logo1 from "../../../photos/logo1.webp";
import logo2 from "../../../photos/logo2.webp";
import logo3 from "../../../photos/logo3.webp";
import logo4 from "../../../photos/logo4.webp";
import logo5 from "../../../photos/logo5.webp";
import logo6 from "../../../photos/logo6.webp";

const About = () => {
  // Array of member data
  const members = [
    {
      name: "Fenil Chodvadiya",
      role: "Business Analyst",
      image: member1,
    },
    {
      name: "Sneha Mehta",
      role: "Marketing Manager",
      image: member2,
    },
    {
      name: "Vishv Sheta",
      role: "Senior Partner",
      image: member3,
    },
    {
      name: "Pooja Sharma",
      role: "Accounting",
      image: member4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: SMART DELIVERY */}
        <section className="about-us py-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-16">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="section-title text-4xl text-blue-900 font-bold mb-4 relative z-10">
                <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-300 opacity-50 z-0">
                  01
                </span>
                SMART DELIVERY
              </h3>
            </div>

            <div className="flex flex-wrap items-start">
              {/* Left Side - Three Paragraphs + Blockquote */}
              <div className="w-full md:w-2/3 p-4">
                <h5 className="lead font-bold text-xl mb-4">
                  One of the leaders in the heavy haulage and abnormal load business
                </h5>
                <p className="mb-4 text-gray-700">
                  Back in 1971, recognising an opportunity to serve the northeast
                  fishing community, Steve and Helen Hardy launched a road haulage
                  company called S & H Hardy. In direct competition with Charles
                  Crouch and Partners, who were then one of the biggest haulage
                  companies in Scotland, their fleet of 25 vehicles transported
                  fresh fish from Peterhead to Humberside and Tyneside on a daily
                  basis. Moving from their base in Laurencekirk into Aberdeen in
                  1980 to purchase Tullos Cold Store, the company was able to
                  diversify into hauling both fresh and frozen goods all over the
                  UK and Europe.
                </p>
                <blockquote className="italic text-lg border-l-4 pl-4 border-blue-900 my-6 text-gray-700">
                  1984 saw a severe downturn in the fish industry, which led the
                  company to diversify again into the oil industry. The cold store
                  side of the business was sold in 1988 to concentrate on the oil
                  and paper industries throughout the UK and Europe.
                </blockquote>
                <p className="mb-4 text-gray-700">
                  In 1990 Steve and Helen’s son Mark joined the firm and MGS
                  Transport was established. The following year, the first Stepframe
                  trailer was purchased to specialise in heavy haulage and abnormal
                  loads for the oil industry. With the addition of the first
                  Lowloader in 1996, the company has become one of the leaders in
                  the heavy haulage and abnormal load business.
                </p>
                <blockquote className="italic text-lg border-l-4 pl-4 border-blue-900 my-6 text-gray-700">
                  In the early 2000s, MGS Transport continued to expand its fleet and services,
                  adapting to the evolving demands of the industry. With a strong reputation for
                  reliability and expertise in heavy haulage, the company secured contracts with
                  major oil and energy firms, further solidifying its position in the market.
                </blockquote>
              </div>

              {/* Right Side - Images, Caption, and PDF Download */}
              <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
                {/* Common Bordered Container for First Truck & Caption */}
                <div className="border-2 border-blue-900 p-4 mb-6 w-full hover:scale-105 hover:shadow-xl hover:border-blue-900 transition-all duration-300">
                  <img src={truck} alt="Truck" className="w-full h-auto mb-2" />
                  <figcaption className="text-center text-blue-700 text-sm font-semibold mt-2">
                    Member of the Road Haulage Association
                  </figcaption>
                </div>

                {/* PDF Download Section */}
                <div className="pdf-catalog mb-4 flex items-center border-2 border-blue-900 p-3 rounded-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
                  <i className="icon-document text-2xl mr-2 text-blue-900"></i>
                  <a href="#" className="text-blue-900 font-bold">
                    DOWNLOAD PDF
                  </a>
                </div>
                {/* Second Truck Image */}
                <img
                  src={truck2}
                  alt="Truck 2"
                  className="w-full h-auto my-4 hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: OUR PROFESSIONS */}
        <section className="about-features mt-10 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-16">
          <div className="row">
            <div className="col-xs-12">
              <h3 className="section-title text-4xl text-blue-900 font-bold mb-4 relative z-10">
                <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-300 opacity-50 z-0">
                  02
                </span>
                OUR PROFESSIONS
              </h3>
            </div>
            {/* Grid layout: 2 components per row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Air Shipping */}
              <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faPlaneUp}
                  className="text-3xl text-blue-900 mb-2"
                />
                <h5 className="text-xl font-semibold">AIR SHIPPING</h5>
                <p className="text-gray-700">
                  We can also offer outside storage facilities in Aberdeen and both
                  outside and inside storage in Cowdenbeath.
                </p>
              </div>

              {/* Ground Logistic */}
              <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faCar}
                  className="text-3xl text-blue-900 mb-2"
                />
                <h5 className="text-xl font-semibold">GROUND LOGISTIC</h5>
                <p className="text-gray-700">
                  We can also offer outside storage facilities in Aberdeen and both
                  outside and inside storage in Cowdenbeath.
                </p>
              </div>

              {/* Sea Transportation */}
              <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faShip}
                  className="text-3xl text-blue-900 mb-2"
                />
                <h5 className="text-xl font-semibold">SEA TRANSPORTATION</h5>
                <p className="text-gray-700">
                  We can also offer outside storage facilities in Aberdeen and both
                  outside and inside storage in Cowdenbeath.
                </p>
              </div>

              {/* Domestic Cargo */}
              <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300">
                <FontAwesomeIcon
                  icon={faCube}
                  className="text-3xl text-blue-900 mb-2"
                />
                <h5 className="text-xl font-semibold">DOMESTIC CARGO</h5>
                <p className="text-gray-700">
                  We can also offer outside storage facilities in Aberdeen and both
                  outside and inside storage in Cowdenbeath.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: BOARD MEMBERS */}
        <section className="members py-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-16">
          <div className="row">
            <div className="col-xs-12 mb-6">
              <h3 className="section-title text-4xl text-blue-900 font-bold mb-4 relative z-10">
                <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-300 opacity-50 z-0">
                  03
                </span>
                BOARD MEMBERS
              </h3>
              <p className="intro text-lg text-gray-700">
                In 2005, we expanded our operations by opening an office in
                Uithoorn, Netherlands, to serve the growing European market. Our
                base in Great Yarmouth, opened in the same year, helps cater to the
                busy oil industry between Aberdeen and the rest of the UK.
              </p>
            </div>

            {/* Member Photos in Single Line */}
            <div className="flex flex-wrap justify-between mb-6">
              {members.map((member, index) => (
                <div key={index} className="member text-center w-full sm:w-1/2 md:w-1/4 px-2 mb-6">
                  <figure className="hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-auto rounded-full mb-3 mx-auto"
                    />
                    <figcaption>
                      <h5 className="font-semibold">{member.name}</h5>
                      <small className="text-sm text-gray-700">{member.role}</small>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: CLIENTS */}
        <section className="clients py-16 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 mb-12">
          <div className="row">
            <div className="col-xs-12">
              <ul className="flex flex-wrap justify-center gap-6">
                {[logo1, logo2, logo3, logo4, logo5, logo6].map((logo, index) => (
                  <li key={index}>
                    <figure className="hover:scale-105 hover:shadow-xl hover:border-2 hover:border-blue-900 transition-all duration-300">
                      <img
                        src={logo}
                        alt={`Logo ${index + 1}`}
                        className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                      />
                    </figure>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;