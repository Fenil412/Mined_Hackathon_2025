import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import logo from "../../../photos/logo.png";


export default function Header() {
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") return "dark";
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // Apply theme changes to document and localStorage
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.removeItem("theme"); // Store null instead of "light"
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };


  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="bg-white dark:bg-gray-900 border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} className="h-12 mr-3" alt="Logo" />
          </Link>

          <div className="flex items-center lg:order-2">
            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 mr-3 text-gray-700 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg"
            >
              {theme === "dark" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
            </button>

            {/* Log in Button */}
            <Link
              to="#"
              className="text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>

            {/* Get Started Button */}
            <Link
              to="#"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get started
            </Link>
          </div>

          <div
            className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/trackorder"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  TRACK ORDER
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/requestquote"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  REQUEST QUOTE
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  SERVICES
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700 dark:text-orange-400" : "text-gray-700 dark:text-gray-300"
                    } border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
