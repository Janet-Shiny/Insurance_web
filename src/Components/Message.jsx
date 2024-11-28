import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ContactSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <div id="Message"className=" bg-gray-50 min-h-screen py-16 px-4 sm:px-6 md:px-12 lg:px-20 xl:px-32 flex items-center">
      <div className="max-w-screen-2xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
        {/* Left Section */}
        <div data-aos="fade-right">
          <h2 className="text-base md:text-lg font-semibold text-gray-500 uppercase tracking-wide mb-6">
            Get Started
          </h2>
          <h1 className="text-4xl md:text-5xl xl:text-7xl font-extrabold text-gray-900 mb-10 leading-tight">
            Get Protected
          </h1>

          <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
            Contact Info
          </h3>
          <div className="space-y-10">
            <div className="flex items-center gap-6">
              <div className="bg-blue-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-9 6l-7.89-5.26a2 2 0 01-.61-.65A2 2 0 003 8v8a2 2 0 002 2h14a2 2 0 002-2V8"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg md:text-2xl">
                  Phone Number
                </h4>
                <p className="text-gray-600 text-sm md:text-xl">(555) 555-5555</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-blue-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 12l4.243-4.243m-5.657 5.657l4.243 4.243M10 7l-7 7m4.243-4.243L7 10m-1.414 5.657l4.243-4.243"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg md:text-2xl">
                  Physical Address
                </h4>
                <p className="text-gray-600 text-sm md:text-xl">
                  123 Main St. Anytown, USA
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="bg-blue-500 text-white w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 md:h-8 md:w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 4l-4-4-4 4M3 7h18v10H3z"
                  />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg md:text-2xl">
                  Email Address
                </h4>
                <p className="text-gray-600 text-sm md:text-xl">
                  info@lumintu.com
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white shadow-lg rounded-lg p-8 md:p-10 lg:p-12 xl:p-16" data-aos="fade-left">
          <form>
            <div className="space-y-8 md:space-y-10">
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg md:text-2xl font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm md:text-xl py-3 md:py-4 px-4 md:px-6"
                  placeholder="Enter Your Name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg md:text-2xl font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm md:text-xl py-3 md:py-4 px-4 md:px-6"
                  placeholder="Enter Your Email"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg md:text-2xl font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="mt-3 block w-full border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring-blue-500 text-sm md:text-xl py-3 md:py-4 px-4 md:px-6"
                  placeholder="Enter Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 md:py-4 px-4 md:px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300 text-lg md:text-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
