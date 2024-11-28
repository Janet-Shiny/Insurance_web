import React from "react";
import { motion } from "framer-motion";
import homeInsuranceImage from "../Assests/Images/Life_ins.webp"; // Replace with a high-quality home insurance image

const HomeInsurance = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 text-white py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-white to-indigo-100"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Home Insurance
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl px-4 text-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Protect your home and valuables with comprehensive coverage.
        </motion.p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto p-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 hover:text-blue-900 transition-colors duration-300">
            What is Home Insurance?
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Home insurance provides financial protection against damage or loss of your home and belongings. It covers damages caused by events like fire, theft, natural disasters, and liability for accidents that occur within your property.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-800 hover:text-blue-900 transition-colors duration-300">
            Why Do You Need It?
          </h2>
          <div className="text-base md:text-lg text-gray-800 space-y-4 leading-relaxed">
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#4CAF50" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Protects your home from damage caused by disasters like fires or floods.
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#4CAF50" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Covers theft and vandalism to your property and belongings.
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#4CAF50" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Protects you against personal liability for accidents on your property.
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#4CAF50" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Offers coverage for personal belongings like electronics, furniture, and more.
            </motion.div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex justify-center mt-8 lg:mt-0"
          initial="hidden"
          animate="visible"
          variants={imageAnimation}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={homeInsuranceImage}
            alt="Home Insurance"
            className="rounded-lg shadow-lg w-[50vw] h-[50vh] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HomeInsurance;
