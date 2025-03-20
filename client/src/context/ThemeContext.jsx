import React, { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Load initial theme from localStorage or system preference
  const getInitialTheme = () => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) return storedTheme;
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  // Load snowfall preference from localStorage
  const getInitialSnowfall = () => {
    return localStorage.getItem("isSnowing") === "true"; // Convert string to boolean
  };

  const [theme, setTheme] = useState(getInitialTheme);
  const [isSnowing, setIsSnowing] = useState(getInitialSnowfall);

  // Persist theme changes in localStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Persist snowfall changes in localStorage
  useEffect(() => {
    localStorage.setItem("isSnowing", isSnowing.toString());
  }, [isSnowing]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const toggleSnowfall = () => {
    setIsSnowing((prev) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, isSnowing, toggleSnowfall }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
