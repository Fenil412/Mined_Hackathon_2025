import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import Snowfall from "react-snowfall";
import { useTheme } from "./context/ThemeContext";

function Layout() {
  const { isSnowing } = useTheme(); // Read snowfall state

  return (
    <div className="relative min-h-screen">
      {/* Show Snowfall Only If isSnowing is True */}
      {isSnowing && (
        <Snowfall 
          snowflakeCount={100} 
          radius={[1, 4]} 
          speed={[0.5, 2]} 
          wind={[1, 2]} 
        />
      )}

      {/* Page Structure */}
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
