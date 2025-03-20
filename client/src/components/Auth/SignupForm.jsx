import React from 'react';
import { Link } from "react-router-dom";

export default function SignupForm() {
    return (
        <div
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br 
    from-gray-100 to-gray-300 dark:from-gray-800 dark:to-gray-700 transition-all duration-500"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Sign Up Form */}
      <div className="relative z-10 bg-white dark:bg-gray-900 backdrop-blur-lg p-10 rounded-xl 
              shadow-2xl border border-gray-300 dark:border-gray-700 animate-slide-in-left hover:shadow-3xl 
              transform hover:-translate-y-2 transition-all duration-500 w-full max-w-md">
        <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white sm:text-5xl mb-6">
          Sign Up
        </h1>
        <form className="space-y-6">
          {["User ID", "Email", "Phone Number", "Password"].map(
            (placeholder, index) => (
              <div className="flex flex-col" key={index}>
                <input
                  type={
                    placeholder === "Password"
                      ? "password"
                      : placeholder === "Email"
                      ? "email"
                      : "text"
                  }
                  name={placeholder.toLowerCase().replace(/ /g, "")}
                  placeholder={placeholder}
                  className="px-4 py-3 text-gray-800 dark:text-white bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-orange-700 focus:ring-2 focus:ring-orange-700/50 outline-none transition duration-300 placeholder:text-gray-500 dark:placeholder-gray-400"
                />
              </div>
            )
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-6 py-3 text-white font-bold bg-gradient-to-r from-orange-700 to-amber-700 rounded-lg hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl"
          >
            Get Started
          </button>
          {/* Toggle to Sign In */}
          <Link
            to="/signin" // Update the route as needed
            className="block w-full px-6 py-3 text-orange-700 font-bold bg-transparent border border-orange-700 rounded-lg hover:bg-orange-700 hover:text-white transform hover:scale-105 transition duration-300 ease-in-out shadow-lg hover:shadow-xl text-center"
          >
            Already have an account? Sign In
          </Link>
        </form>
      </div>
    </div>
    );
}