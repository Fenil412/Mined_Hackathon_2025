import React from "react";

export default function Contact() {
  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 
    to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details Section */}
            <div className="p-8 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-2xl 
            hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-5xl">
                Get in touch
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
                Fill in the form to start a conversation. We're here to help!
              </p>
              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-center space-x-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-orange-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 
                      1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    Vaishno Devi Circle, Ahmedabad, Gujarat-382421, India
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-orange-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 
                      1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 
                      01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    +91 99133 15854
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    className="w-8 h-8 text-orange-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 
                      00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div className="text-gray-700 dark:text-gray-300 font-medium">
                    info@smartdeliveryservices.com
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form className="p-8 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-2xl 
            hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500">
              <div className="space-y-6">
                {["Full Name", "Email", "Mobile Number", "Country"].map(
                  (placeholder, index) => (
                    <div className="flex flex-col" key={index}>
                      <input
                        type="text"
                        name={placeholder.toLowerCase().replace(/ /g, "")}
                        placeholder={placeholder}
                        className="px-4 py-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 
                        border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                        focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                        placeholder:text-gray-500 dark:placeholder-gray-400"
                      />
                    </div>
                  )
                )}

                {/* Message */}
                <div className="flex flex-col">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="px-4 py-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 
                    focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-bold bg-gradient-to-r from-orange-700 
                  to-amber-700 rounded-lg hover:from-amber-700 hover:to-orange-700 transform 
                  hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
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
