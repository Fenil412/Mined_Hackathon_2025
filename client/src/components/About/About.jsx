import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlaneUp } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faShip } from "@fortawesome/free-solid-svg-icons";
import { faCube } from "@fortawesome/free-solid-svg-icons";
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
  return (
    <div className="ml-25 mr-25">
      <section className="about-us py-16">
        <div className="container mx-auto">
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
                  One of the leaders in the heavy haulage and abnormal load
                  business
                </h5>
                <p className="mb-4">
                  Back in 1971, recognising an opportunity to serve the
                  northeast fishing community, Steve and Helen Hardy launched a
                  road haulage company called S & H Hardy. In direct competition
                  with Charles Crouch and Partners, who were then one of the
                  biggest haulage companies in Scotland, their fleet of 25
                  vehicles transported fresh fish from Peterhead to Humberside
                  and Tyneside on a daily basis. Moving from their base in
                  Laurencekirk into Aberdeen in 1980 to purchase Tullos Cold
                  Store, the company was able to diversify into hauling both
                  fresh and frozen goods all over the UK and Europe.
                </p>
                <blockquote className="italic text-lg border-l-4 pl-4 border-blue-900 my-6">
                  1984 saw a severe downturn in the fish industry, which led the
                  company to diversify again into the oil industry. The cold
                  store side of the business was sold in 1988 to concentrate on
                  the oil and paper industries throughout the UK and Europe.
                </blockquote>
                <p className="mb-4">
                  In 1990 Steve and Helen’s son Mark joined the firm and MGS
                  Transport was established. The following year, the first
                  Stepframe trailer was purchased to specialise in heavy haulage
                  and abnormal loads for the oil industry. With the addition of
                  the first Lowloader in 1996, the company has become one of the
                  leaders in the heavy haulage and abnormal load business.
                </p>
              </div>

              {/* Right Side - Images, Caption, and PDF Download */}
              <div className="w-full md:w-1/3 p-4 flex flex-col items-center">
                {/* Common Bordered Container for First Truck & Caption */}
                <div className="border-2 border-blue-900 p-4 mb-6 w-full md:w-5/6">
                  <img src={truck} alt="Truck" className="w-full h-auto mb-2" />
                  <figcaption className="text-center text-blue-700 text-sm font-semibold mt-2">
                    Member of the Road Haulage Association
                  </figcaption>
                </div>

                {/* PDF Download Section */}
                <div className="pdf-catalog mb-4 flex items-center">
                  <i className="icon-document text-2xl mr-2"></i>
                  <a href="#" className="text-blue-900 font-bold">
                    DOWNLOAD PDF
                  </a>
                </div>
                {/* Second Truck Image */}
                <img
                  src={truck2}
                  alt="Truck 2"
                  className="w-full md:w-5/6 h-auto my-4"
                />
              </div>
            </div>

            <div className="col-md-8 col-sm-12">
  <div className="about-features mt-10">
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
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faPlaneUp} className="text-3xl text-blue-900 mb-2" />
          <h5 className="text-xl font-semibold">AIR SHIPPING</h5>
          <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
        </div>

        {/* Ground Logistic */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faCar} className="text-3xl text-blue-900 mb-2" />
          <h5 className="text-xl font-semibold">GROUND LOGISTIC</h5>
          <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
        </div>

        {/* Sea Transportation */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faShip} className="text-3xl text-blue-900 mb-2" />
          <h5 className="text-xl font-semibold">SEA TRANSPORTATION</h5>
          <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
        </div>

        {/* Domestic Cargo */}
        <div className="flex flex-col items-center text-center p-4 border rounded-lg shadow-lg">
          <FontAwesomeIcon icon={faCube} className="text-3xl text-blue-900 mb-2" />
          <h5 className="text-xl font-semibold">DOMESTIC CARGO</h5>
          <p>We can also offer outside storage facilities in Aberdeen and both outside and inside storage in Cowdenbeath.</p>
        </div>
      </div>
    </div>
  </div>
</div>







          </div>
        </div>
      </section>

      <section className="members py-16">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xs-12 mb-6">
              <h3 className="section-title text-4xl text-blue-900 font-bold mb-4 relative z-10">
                <span className="absolute -left-3 -top-5 text-4xl font-bold text-purple-300 opacity-50 z-0">
                  03
                </span>
                BOARD MEMBERS
              </h3>
              <p className="intro text-lg">
                In 2005, we expanded our operations by opening an office in
                Uithoorn, Netherlands, to serve the growing European market. Our
                base in Great Yarmouth, opened in the same year, helps cater to
                the busy oil industry between Aberdeen and the rest of the UK.
              </p>
            </div>

            {/* Member Photos in Single Line */}
            <div className="flex justify-between flex-wrap mb-6">
              <div className="member text-center w-1/4 px-2 mb-6">
                <figure>
                  <img
                    src={member1}
                    alt="John Harris"
                    className="w-full h-auto rounded-full mb-3 mx-auto"
                  />
                  <figcaption>
                    <h5 className="font-semibold">Fenil Chodvadiya</h5>
                    <small className="text-sm">Business Analist</small>
                  </figcaption>
                </figure>
              </div>

              <div className="member text-center w-1/4 px-2 mb-6">
                <figure>
                  <img
                    src={member2}
                    alt="Louise O'Donnell"
                    className="w-full h-auto rounded-full mb-3 mx-auto"
                  />
                  <figcaption>
                    <h5 className="font-semibold">Vaidik Rokad</h5>
                    <small className="text-sm">Marketting Manager</small>
                  </figcaption>
                </figure>
              </div>

              <div className="member text-center w-1/4 px-2 mb-6">
                <figure>
                  <img
                    src={member3}
                    alt="Bernard Crotty"
                    className="w-full h-auto rounded-full mb-3 mx-auto"
                  />
                  <figcaption>
                    <h5 className="font-semibold">Vishv Sheta</h5>
                    <small className="text-sm">Senior Partner</small>
                  </figcaption>
                </figure>
              </div>

              <div className="member text-center w-1/4 px-2 mb-6">
                <figure>
                  <img
                    src={member4}
                    alt="Melanie Saunders"
                    className="w-full h-auto rounded-full mb-3 mx-auto"
                  />
                  <figcaption>
                    <h5 className="font-semibold">Dev Shah</h5>
                    <small className="text-sm">Accounting</small>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="clients py-16 mb-12">
        <div className="container mx-auto">
          <div className="row">
            <div className="col-xs-12">
              <ul className="flex justify-between flex-wrap">
                <li>
                  <figure>
                    <img
                      src={logo1}
                      alt="Logo 1"
                      className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src={logo2}
                      alt="Logo 2"
                      className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src={logo3}
                      alt="Logo 3"
                      className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src={logo4}
                      alt="Logo 4"
                      className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src={logo5}
                      alt="Logo 5"
                      className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </figure>
                </li>
                <li>
                  <figure>
                    <img
                      src={logo6}
                      alt="Logo 6"
                      className="w-32 h-auto filter grayscale-100 hover:grayscale-0 transition-all duration-300"
                    />
                  </figure>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
