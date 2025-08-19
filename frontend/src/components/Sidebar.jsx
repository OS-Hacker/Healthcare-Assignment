import React, { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { navItems } from "../data/navItems";

const Sidebar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check if mobile view
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobileView(window.innerWidth <= 768);
      if (window.innerWidth > 768) setIsMobileOpen(false);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Close sidebar when clicking outside (mobile only)
  useEffect(() => {
    if (!isMobileOpen || !isMobileView) return;

    const handleOutsideClick = (e) => {
      const sidebar = document.getElementById("sidebar-container");
      const menuButton = document.getElementById("mobile-menu-btn");

      if (!sidebar?.contains(e.target) && !menuButton?.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isMobileOpen, isMobileView]);

  return (
    <div>
      {isMobileView && (
        <button
          id="mobile-menu-btn"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="fixed z-[1001] border-2 border-gray-400 w-9 h-9 rounded-full flex justify-center items-center bg-white top-5 left-2"
          aria-label="Toggle menu"
        >
          {isMobileOpen ? (
            <FiX size={24} color="#36D6DB" />
          ) : (
            <FiMenu size={24} color="#36D6DB" />
          )}
        </button>
      )}

      <div
        id="sidebar-container"
        className={`
          w-[250px] 
          bg-[#f6faff] 
          shadow-sm 
          p-6 
          ${isMobileView ? "fixed" : "sticky"} 
          z-[1000] 
          top-0 
          left-0 
          ${isMobileView ? "h-screen" : "h-[calc(100vh-70px)]"} 
          overflow-y-auto 
          transition-transform 
          duration-300 
          ease-in-out
          ${
            isMobileView
              ? isMobileOpen
                ? "translate-x-0"
                : "-translate-x-full"
              : "translate-x-0"
          }
        `}
      >
        <h3 className="relative text-center text-xl font-bold">General</h3>
        <div className="p-4 md:p-5 text-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => isMobileView && setIsMobileOpen(false)}
              className="flex items-center p-2 my-3 mx-3 md:my-2 gap-3 hover:bg-blue-100 rounded-lg cursor-pointer text-lg md:text-base"
            >
              <item.icon aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
