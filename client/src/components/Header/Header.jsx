import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import logo from "../../../photos/logo.png";
import { useTheme } from "../../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme, isSnowing, toggleSnowfall } = useTheme();

  const menuItems = [
    { name: "HOME", path: "/" },
    { name: "TRACK ORDER", path: "/trackorder" },
    { name: "REQUEST QUOTE", path: "/requestquote" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "CONTACT US", path: "/contact" },
  ];

  const linkClass = ({ isActive }) =>
    `block py-2 pr-4 pl-3 duration-200 ${
      isActive ? "text-orange-700 dark:text-orange-400 underline underline-offset-4" : "text-gray-700 dark:text-gray-300"
    } hover:bg-gray-transparent dark:hover:bg-transparent hover:text-orange-700 
    lg:p-0 hover:decoration-2`;

  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-12 mr-3 dark:invert" alt="Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            {/* Snowfall Toggle */}
            <button onClick={toggleSnowfall} className="p-2 mr-3 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
              <FontAwesomeIcon icon={faSnowflake} className={`${isSnowing ? "text-blue-400" : "text-gray-400"} hover:text-blue-500 fa-xl transition-all`} />
            </button>

            {/* Dark Mode Toggle */}
            <button onClick={toggleTheme} className="p-2 mr-3 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg">
              {theme === "dark" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>

            {/* Buttons */}
            <Link to="signin" className="text-gray-800 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Log in
            </Link>
            <Link to="signup" className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none">
              Get started
            </Link>
          </div>

          {/* Navigation Menu */}
          <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {menuItems.map(({ name, path }) => (
                <li key={path}>
                  <NavLink to={path} className={linkClass}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
