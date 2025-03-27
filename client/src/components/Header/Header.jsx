import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../photos/logo-removebg-preview.png";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme, isSnowing, toggleSnowfall } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "TRACK ORDER", path: "/trackorder" },
    { name: "REQUEST QUOTE", path: "/requestquote" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT US", path: "/contact" },
  ];

  return (
    <>
      {/* Meta tags for viewport - add these to your index.html */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />

      <header className="sticky top-0 z-50 shadow w-full">
        <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5 w-full">
          <div className="flex flex-wrap sm:flex-nowrap items-center justify-between w-full max-w-full px-2 sm:px-4 mx-auto gap-2 sm:gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="h-10 sm:h-12 mr-2 sm:mr-3 dark:invert"
                alt="Logo"
              />
            </Link>

            {/* Hamburger Menu Button for Mobile (hidden on sm: and above) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

            {/* Navigation Menu (visible on sm: and above) */}
            <div className="hidden sm:flex sm:items-center sm:w-auto sm:order-1">
              <ul className="flex flex-col mt-4 font-medium sm:flex-row sm:space-x-4 md:space-x-6 lg:space-x-8 sm:mt-0">
                {menuItems.map(({ name, path }) => (
                  <li key={path}>
                    <NavLink
                      to={path}
                      className={({ isActive }) => `
                        relative block py-2 px-2 sm:text-sm md:text-base
                        text-gray-700 dark:text-gray-300
                        transition-all duration-300 ease-in-out
                        hover:text-orange-700 dark:hover:text-orange-400
                        
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5
                        after:bg-orange-700 dark:after:bg-orange-400
                        after:transition-all after:duration-300 after:ease-in-out
                        
                        hover:after:w-full
                        
                        ${isActive 
                          ? 'text-orange-700 dark:text-orange-400 after:w-full' 
                          : ''
                        }
                      `}
                    >
                      {name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Navigation Menu (visible only on mobile) */}
            {isMenuOpen && (
              <div className="sm:hidden absolute top-16 left-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50">
                <ul className="flex flex-col font-medium">
                  {menuItems.map(({ name, path }) => (
                    <li key={path}>
                      <NavLink
                        to={path}
                        className="block py-2 px-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Right Section: Toggles and Buttons */}
            <div className="flex items-center sm:gap-1 md:gap-2 sm:order-2 flex-nowrap">
              {/* Snowfall Toggle */}
              <button
                onClick={toggleSnowfall}
                className="p-1 sm:p-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              >
                <FontAwesomeIcon
                  icon={faSnowflake}
                  className={`${
                    isSnowing ? "text-blue-400" : "text-gray-400"
                  } hover:text-blue-500 fa-xl sm:fa-lg transition-all`}
                />
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-1 mr-3 sm:p-2 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
              >
                {theme === "dark" ? 
                  <Moon className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                 : 
                  <Sun className="w-7 h-7 sm:w-6 sm:h-6 md:w-7 md:h-7" />
                }
              </button>

              {/* Login and Signup Buttons */}
              <Link
                to="signin"
                className="text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 mr-1 focus:outline-none"
              >
                Log in
              </Link>
              <Link
                to="signup"
                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-xs sm:text-sm px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 mr-1 focus:outline-none"
              >
                Get started
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}