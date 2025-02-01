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
            <div className="relative w-full h-[90vh] flex items-center">
                <div
                    className="absolute inset-0 transition-opacity duration-5000 bg-cover bg-center"
                    style={{ backgroundImage: `url(${images[currentIndex]})` }}
                />

                {/* Content Section - Positioned Left & Centered Vertically */}
                <div className="relative z-10 text-left pl-14 sm:pl-28 flex flex-col justify-center h-full">
                    <h1 className="text-8xl font-bold text-orange-700">LOGISTICS</h1>
                    <p className="text-4xl text-white mt-4">Check your delivery easily & quickly</p>

                    {/* Input Field + Button */}
                    <div className="flex items-center mt-8">
                        <input
                            type="text"
                            placeholder="Enter your Tracking Number"
                            className="px-5 py-3 border-2 border-white bg-transparent text-white font-semibold rounded-md outline-none placeholder-white text-base"
                        />
                        <button className="ml-4 px-6 py-3 bg-orange-700 text-white text-base font-bold rounded-md hover:bg-red-300 transition shadow-lg">
                            TRACK ORDER
                        </button>
                    </div>
                </div>

                {/* Three-dot Indicator (Right Side - Centered Vertically) */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-1.5">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all ${
                                currentIndex === index ? "bg-orange-700" : "bg-white"
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