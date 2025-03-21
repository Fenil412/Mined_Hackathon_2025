import React from 'react';
import { Link } from "react-router-dom";

const LoginForm = () => {
  // Add animation styles
  React.useEffect(() => {
    const styleTag = document.createElement('style');
    styleTag.textContent = `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      @keyframes slideInUp {
        from {
          opacity: 0;
          transform: translateY(50px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
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

      @keyframes gradientBG {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }

      .animate-gradient {
        background-size: 200% 200%;
        animation: gradientBG 15s ease infinite;
      }

      .animate-fade-in {
        animation: fadeIn 1s ease-out forwards;
      }

      .animate-slide-up {
        animation: slideInUp 0.8s ease-out forwards;
      }

      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 animate-gradient bg-gradient-to-br from-amber-100 via-orange-200 
      to-amber-100 dark:from-gray-900 dark:via-amber-900/20 dark:to-gray-900 transition-all duration-500">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-20 dark:opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-amber-500 rounded-full mix-blend-multiply 
          filter blur-xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-orange-500 rounded-full mix-blend-multiply 
          filter blur-xl animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>

      {/* Login Form Container */}
      <div className="relative z-10 w-full max-w-md p-8 animate-slide-up">
        <div className="bg-white/80 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl 
        hover:shadow-3xl transform hover:-translate-y-2 transition-all duration-500 p-8 border 
        border-white/20 dark:border-gray-700/50">
          {/* Form Header */}
          <div className="text-center mb-8 relative">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-amber-600 to-orange-600 
            dark:from-amber-400 dark:to-orange-400 bg-clip-text text-transparent sm:text-5xl relative">
              Sign In
            </h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">Welcome back! Please enter your details</p>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email/User ID Input */}
            <div className="relative group">
              <input
                type="text"
                name="emailoruserid"
                placeholder="Email or User ID"
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200 
                dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-800 dark:text-white 
                group-hover:border-amber-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none 
              text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity 
              duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 
                  8.959 0 01-4.5 1.207" />
                </svg>
              </div>
            </div>

            {/* Password Input */}
            <div className="relative group">
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="w-full px-4 py-3 bg-white/50 dark:bg-gray-800/50 border-2 border-gray-200 
                dark:border-gray-700 rounded-lg focus:border-amber-600 dark:focus:border-amber-500 
                focus:ring-2 focus:ring-amber-600/50 outline-none transition-all duration-300 
                placeholder:text-gray-500 dark:placeholder:text-gray-400 text-gray-800 dark:text-white 
                group-hover:border-amber-500"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none 
              text-amber-600 dark:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity 
              duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                  d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 
                  4 0 00-8 0v4h8z" />
                </svg>
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 border-2 border-gray-300 rounded 
                text-amber-600 focus:ring-amber-600/50 transition-colors duration-300" />
                <span className="text-gray-600 dark:text-gray-300 group-hover:text-amber-600 
                dark:group-hover:text-amber-400 transition-colors duration-300">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-amber-600 dark:text-amber-400 
              hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300">
                Forgot password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 px-6 text-white font-bold bg-gradient-to-r from-amber-600 
              to-orange-600 dark:from-amber-500 dark:to-orange-500 rounded-lg transform hover:scale-105 
              hover:from-orange-600 hover:to-amber-600 dark:hover:from-orange-500 dark:hover:to-amber-500 
              transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>

            {/* Sign Up Link */}
            <p className="text-center text-gray-600 dark:text-gray-300">
              Don't have an account?{' '}
              <Link to="/signup" className="text-amber-600 dark:text-amber-400 hover:text-orange-600 
              dark:hover:text-orange-400 font-semibold transition-colors duration-300">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;