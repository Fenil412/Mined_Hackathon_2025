import React from "react";

const Contact = () => {
  // Add animation styles
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

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
          transform: translateX(50px);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @keyframes float {
        0%, 100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-10px);
        }
      }

      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-slide-in-left {
        animation: slideInLeft 0.8s ease-out forwards;
      }

      .animate-slide-in-right {
        animation: slideInRight 0.8s ease-out forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 
    to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500">
      <div className="max-w-6xl w-full mx-auto px-6 lg:px-8 animate-fade-in">
        <div className="mt-8 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Details Section */}
            <div className="p-8 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-2xl 
            hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 animate-slide-in-left">
              <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 
              dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent sm:text-5xl relative">
                <span className="absolute -left-3 -top-5 text-4xl font-bold text-amber-400/20 
                dark:text-orange-400/20 animate-float">01</span>
                Get in touch
              </h1>
              <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 hover:text-amber-600 
              dark:hover:text-amber-400 transition-colors duration-300">
                Fill in the form to start a conversation. We're here to help!
              </p>

              <div className="mt-8 space-y-6">
                {/* Address */}
                <div className="flex items-center space-x-4 group">
                  <svg
                    className="w-8 h-8 text-amber-600 dark:text-amber-400 group-hover:text-orange-500 
                    transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-amber-600 
                  dark:group-hover:text-amber-400 transition-colors duration-300">
                    Vaishno Devi Circle, Ahmedabad, Gujarat-382421, India
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-4 group">
                  <svg
                    className="w-8 h-8 text-amber-600 dark:text-amber-400 group-hover:text-orange-500 
                    transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 
                    11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 
                    01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-amber-600 
                  dark:group-hover:text-amber-400 transition-colors duration-300">
                    +91 99133 15854
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-center space-x-4 group">
                  <svg
                    className="w-8 h-8 text-amber-600 dark:text-amber-400 group-hover:text-orange-500 
                    transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" 
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 
                    2v10a2 2 0 002 2z" />
                  </svg>
                  <div className="text-gray-700 dark:text-gray-300 font-medium group-hover:text-amber-600 
                  dark:group-hover:text-amber-400 transition-colors duration-300">
                    info@smartdeliveryservices.com
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form Section */}
            <form className="p-8 bg-white dark:bg-gray-900 backdrop-blur-lg rounded-xl shadow-2xl 
            hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 animate-slide-in-right">
              <div className="space-y-6">
                {["Full Name", "Email", "Mobile Number", "Country"].map((placeholder, index) => (
                  <div key={index} className="relative">
                    <input
                      type="text"
                      name={placeholder.toLowerCase().replace(/ /g, "")}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 
                      border border-gray-300 dark:border-gray-700 rounded-lg focus:border-amber-600 
                      focus:ring-2 focus:ring-amber-600/50 outline-none transition duration-300 
                      placeholder:text-gray-500 dark:placeholder-gray-400 hover:border-amber-500"
                    />
                  </div>
                ))}

                <div className="relative">
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows="4"
                    className="w-full px-4 py-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 
                    border border-gray-300 dark:border-gray-700 rounded-lg focus:border-amber-600 
                    focus:ring-2 focus:ring-amber-600/50 outline-none transition duration-300 
                    placeholder:text-gray-500 dark:placeholder-gray-400 hover:border-amber-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 text-white font-bold bg-gradient-to-r from-amber-600 
                  to-orange-600 dark:from-amber-400 dark:to-orange-400 rounded-lg hover:from-orange-600 
                  hover:to-amber-600 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg 
                  hover:shadow-xl"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;