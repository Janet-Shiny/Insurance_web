import React from "react";
import { motion } from "framer-motion";
import heroImage from "../Assests/Images/main.jpeg"; // Replace with the correct path to your image
import graphImage from "../Assests/Images/graph.jpeg"; // The graph image you uploaded

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center h-screen px-8 md:px-16 bg-gray-50">
      {/* Left Content (40% width) */}
      <div className="max-w-lg mx-auto space-y-8 md:w-2/5">
        {/* Secure Future Tag */}
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-blue-600 font-bold text-xl uppercase tracking-wide"
        >
          🔒 Secure Your Future
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900"
        >
         <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Insurance Solutions by</span> {" "}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Lumintu
          </span>

        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-black/50  text-xl"
        >
"Insurance is not about fear; it's about preparation. It turns life's uncertainties into manageable moments."
        </motion.p>

        {/* Buttons and Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="flex space-x-4 pt-10"
        >
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-white px-5 py-4 ml-24 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
          >
            Get a Quote
          </motion.button>
          <a
            href="tel:+1234567891"
            className="flex items-center px-10 text-black space-x-2 hover:text-blue-500"
          >
            📞 +91 8807120111
          </a>
        </motion.div>

        {/* Play Video Link */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-blue-500 text-xl pt-10 underline cursor-pointer hover:text-blue-700"
        >
          See how we can help you.{" "}
          <span className="text-black font-semibold">Play Video</span>
        </motion.p>
      </div>

      {/* Right Content (Images + Growth Stats + Graph) */}
      <div className="relative mt-10 md:mt-0 md:w-3/5 flex flex-col items-center">
        {/* Hero Image at the top */}
        <motion.img
          src={heroImage}
          alt="Hero Visual"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-md  md:max-w-full rounded-2xl shadow-lg"
        />

        {/* Growth Stats and Graph */}
        <motion.div
          className="absolute bottom-3 left-3 p-6 bg-white/60 rounded-3xl shadow-lg flex  items-center space-y-4"
          whileHover={{ scale: 1.05 }}
        >
          {/* Rolling Out "15% Growth Rate" */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-3xl font-semibold text-blue-600"
          >
           <span className="text-black/70"> 80% Growth Rate</span> 
          </motion.p>

          {/* Growth Image */}
          <motion.img
            src={graphImage}
            alt="Growth Graph"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-[100%] h-32 rounded-lg shadow-lg"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5}}
            
          >
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
