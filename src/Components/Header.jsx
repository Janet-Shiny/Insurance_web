import React from "react";
import logo from "../Assests/Images/Logo.png";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 flex justify-between px-5 items-center pt-5 bg-white shadow-md w-full">
      {/* Logo Section */}
      <div className="w-28 h-20 flex items-center">
        <img src={logo} alt="logo" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 md:space-x-20 text-lg md:text-2xl font-bold text-gray-700">
        <a href="#home" className="hover:text-blue-500">Home</a>
        <a href="#about" className="hover:text-blue-500">About Us</a>
        <a href="#services" className="hover:text-blue-500">Services</a>
        <a href="#contact" className="hover:text-blue-500">Contact Us</a>
      </nav>

      {/* Button */}
      <button className="hidden md:block bg-blue-500 text-sm md:text-lg font-semibold text-white p-2 md:p-4 rounded-xl hover:bg-blue-800">
        Get Started
      </button>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden">
        <button className="text-gray-700 hover:text-blue-500 focus:outline-none">
          {/* Icon for Hamburger Menu */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
