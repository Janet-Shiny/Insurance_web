import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import logo from "../Assests/Images/Logo.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Hook to track the current route

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    const offset = -150; // Adjust offset for sticky header
    const topPosition = target.offsetTop + offset;
    window.scrollTo({
      top: topPosition,
      behavior: "smooth",
    });
    setIsMenuOpen(false); // Close menu after navigation
  };

  // Determine if the current route should hide the header
  const shouldHideHeader =
  location.pathname === "/get-a-quote" ||
    location.pathname === "/Lifeins" ||
    location.pathname === "/health-insurance" ||
    location.pathname === "/auto-insurance" ||
    location.pathname === "/home-insurance";

  // Don't render header if we are on one of the specified pages
  if (shouldHideHeader) return null;

  return (
    <header className="sticky top-0 z-50 flex justify-between px-5 items-center pt-5 bg-white shadow-md w-full">
      {/* Logo Section */}
      <div className="w-24 md:w-28 h-16 md:h-20 flex items-center">
        <img src={logo} alt="logo" className="w-full h-auto" />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-8 md:space-x-12 lg:space-x-20 font-bold text-gray-700">
        <a
          href="#home"
          onClick={(e) => handleLinkClick(e, "home")}
          className="hover:text-blue-500"
        >
          Home
        </a>
        <a
          href="#Accom"
          onClick={(e) => handleLinkClick(e, "Accom")}
          className="hover:text-blue-500"
        >
          About Us
        </a>
        <a
          href="#Services"
          onClick={(e) => handleLinkClick(e, "Services")}
          className="hover:text-blue-500"
        >
          Services
        </a>
        <a
          href="#Message"
          onClick={(e) => handleLinkClick(e, "Message")}
          className="hover:text-blue-500"
        >
          Contact Us
        </a>
      </nav>

      {/* Button */}
      <button
        onClick={(e) => handleLinkClick(e, "Services")}
        className="hidden md:block bg-blue-500 text-sm md:text-lg font-semibold text-white p-2 md:p-4 rounded-xl hover:bg-blue-800"
      >
        Get Started
      </button>

      {/* Mobile Menu Icon */}
      <div className="block md:hidden">
        <button
          className="text-gray-700 hover:text-blue-500 focus:outline-none"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden">
          <nav className="flex flex-col space-y-4 p-5 text-lg font-bold text-gray-700">
            <a
              href="#home"
              onClick={(e) => handleLinkClick(e, "home")}
              className="hover:text-blue-500"
            >
              Home
            </a>
            <a
              href="#Accom"
              onClick={(e) => handleLinkClick(e, "Accom")}
              className="hover:text-blue-500"
            >
              About Us
            </a>
            <a
              href="#Services"
              onClick={(e) => handleLinkClick(e, "Services")}
              className="hover:text-blue-500"
            >
              Services
            </a>
            <a
              href="#Message"
              onClick={(e) => handleLinkClick(e, "Message")}
              className="hover:text-blue-500"
            >
              Contact Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
