import React from "react";
import { motion } from "framer-motion";
import heroImage from "../Assests/Images/main.jpeg"; // Replace with the correct path to your image
import graphImage from "../Assests/Images/graph.jpeg"; // The graph image you uploaded
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row justify-between items-center min-h-screen px-6 sm:px-10 lg:px-16 bg-gray-50"
    >
      {/* Left Content (Text Section) */}
      <div className="mt-8 md:mt-0 md:w-2/5 space-y-6">
        {/* Secure Future Tag */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-600 font-bold text-lg sm:text-xl uppercase tracking-wide"
        >
          🔒 Secure Your Future
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight"
        >
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Insurance Solutions by
          </span>{" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Lumintu
          </span>
        </motion.h1>

        {/* Centered Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black/70 text-base sm:text-lg lg:text-xl text-center leading-relaxed"
        >
          "Insurance is not about fear; it's about preparation. It turns life's
          uncertainties into manageable moments."
        </motion.p>

        {/* Buttons and Contact */}
        <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2 }}
  className="flex flex-col sm:flex-row sm:space-x-4 pt-6 lg:pt-10 items-center justify-center"
>
  <Link to="/get-a-quote">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="bg-black text-white text-sm sm:text-lg px-4 py-3 sm:px-5 sm:py-4 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
    >
      Get a Quote
    </motion.button>
  </Link>
  <a
    href="tel:+1234567891"
    className="mt-4 sm:mt-0 text-center sm:text-left flex items-center text-black space-x-2 hover:text-blue-500 text-sm sm:text-lg"
  >
    📞 +91 8807120111
  </a>
</motion.div>

        {/* Play Video Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-blue-500 text-lg sm:text-xl underline cursor-pointer hover:text-blue-700 text-center"
        >
          See how we can help you.{" "}
          <span className="text-black font-semibold">Play Video</span>
        </motion.p>
      </div>

      {/* Right Content (Image Section) */}
      <div className="md:w-3/5 flex flex-col items-center space-y-6">
        {/* Hero Image */}
        <motion.img
          src={heroImage}
          alt="Hero Visual"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm sm:max-w-md lg:max-w-3xl rounded-2xl shadow-lg"
        />

        {/* Growth Stats and Graph */}
        <motion.div
          className="p-4 sm:p-6 bg-white/60 rounded-3xl shadow-lg flex items-center space-x-4"
          whileHover={{ scale: 1.05 }}
        >
          {/* Growth Rate */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600"
          >
            <span className="text-black/70">80% Growth Rate</span>
          </motion.p>

          {/* Growth Image */}
          <motion.img
            src={graphImage}
            alt="Growth Graph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-24 sm:w-32 lg:w-48 h-16 sm:h-20 lg:h-28 rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
