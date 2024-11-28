import React from "react";
import { motion } from "framer-motion";
import healthInsuranceImage from "../Assests/Images/Health_ins.jpg"; // Replace with your actual health insurance image

const HealthInsurance = () => {
  // Animation Variants
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const imageAnimation = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.05, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex flex-col items-center justify-center">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-500 text-white py-16 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 text-white"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Health Insurance
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl px-4 text-gray-200"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          Get comprehensive health coverage for a secure and healthy future.
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
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-300">
            What is Health Insurance?
          </h2>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed">
            Health insurance provides financial protection against medical expenses, offering coverage for doctor visits, hospital stays, surgeries, medications, and other health-related costs.
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-blue-700 hover:text-blue-900 transition-colors duration-300">
            Why Do You Need It?
          </h2>
          <div className="text-base md:text-lg text-gray-800 space-y-4 leading-relaxed">
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#1E70B8" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Provides financial protection against unexpected medical expenses.
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#1E70B8" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Covers routine checkups, medications, and preventive care.
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#1E70B8" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Helps reduce the financial burden of surgeries or emergency care.
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, color: "#fff", backgroundColor: "#1E70B8" }}
              transition={{ duration: 0.3 }}
              className="inline-block py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md"
            >
              Gives access to a wide range of healthcare services and specialists.
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
            src={healthInsuranceImage}
            alt="Health Insurance"
            className="rounded-lg shadow-lg w-[50vw] h-[50vh] object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HealthInsurance;
