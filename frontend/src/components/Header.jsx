import React from "react";
import { FiSearch, FiBell, FiPlus } from "react-icons/fi";
import avatar from "../assets/images/avatar.png";

const Header = () => {
  return (
    <div className="w-full bg-blue-50 shadow-md sticky top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <div className="font-bold text-xl">
            <span className="text-cyan-300 ml-11">Health</span>
            care.
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden relative md:flex justify-center">
          <FiSearch className="absolute left-3 top-3" size={16} />
          <input
            type="text"
            placeholder="Search..."
            className="min-w-[400px] h-9 border-2 border-gray-400 text-sm md:text-base font-semibold rounded-lg pl-9 pr-9 outline-none"
          />
          <FiBell className="absolute right-3 top-3" size={16} />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-4 sm:gap-3">
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src={avatar}
              alt="User"
              className="w-9 h-9 rounded-full object-cover sm:w-10 sm:h-10"
            />
            <span className="font-medium hidden sm:inline">Om Shinde</span>
          </div>
          <button className="bg-gray-800 text-white border-none rounded-lg p-2 flex items-center justify-center cursor-pointer transition-colors hover:bg-cyan-300 sm:p-2 sm:min-w-[30px] sm:min-h-[30px]">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
