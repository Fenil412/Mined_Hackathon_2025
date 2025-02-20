import React from 'react';

export default function Contact() {
    return (
        <div className="relative flex items-top justify-center min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 sm:items-center sm:pt-0">
            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Contact Details Section */}
                        <div className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h1 className="text-4xl font-extrabold text-gray-800 sm:text-5xl">
                                Get in touch
                            </h1>
                            <p className="mt-4 text-lg text-gray-600">
                                Fill in the form to start a conversation. We're here to help!
                            </p>

                            <div className="mt-8 space-y-6">
                                {/* Address */}
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-purple-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-gray-700 font-medium">
                                        Vaishno Devi Circle, Ahmedabad, Gujarat-382421, India
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-purple-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-gray-700 font-medium">
                                        +91 99133 15854
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-center">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        className="w-8 h-8 text-purple-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.5"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                    <div className="ml-4 text-gray-700 font-medium">
                                        info@smartdeliveryservices.com
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form Section */}
                        <form className="p-8 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="space-y-6">
                                {/* Full Name */}
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        placeholder="Full Name"
                                        className="px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300"
                                    />
                                </div>

                                {/* Email */}
                                <div className="flex flex-col">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Email"
                                        className="px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col">
                                    <input
                                        type="tel"
                                        name="phone"
                                        id="phone"
                                        placeholder="Mobile Number"
                                        className="px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300"
                                    />
                                </div>

                                {/* Country */}
                                <div className="flex flex-col">
                                    <input
                                        type="text"
                                        name="country"
                                        id="country"
                                        placeholder="Country"
                                        className="px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300"
                                    />
                                </div>

                                {/* Message */}
                                <div className="flex flex-col">
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        rows="4"
                                        className="px-4 py-3 text-gray-800 bg-white border border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 outline-none transition duration-300"
                                    ></textarea>
                                </div>

                                {/* Submit Button */}
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 text-white font-bold bg-purple-600 rounded-lg hover:bg-purple-700 hover:scale-105 transform transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}