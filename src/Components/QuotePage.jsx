import React, { useState } from "react";
import { motion } from "framer-motion";

const QuotePage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    insuranceType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-200 flex flex-col items-center justify-center p-6">
      <motion.h1
        className="text-4xl font-bold text-blue-700 mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Get Your Quote
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Name */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Insurance Type */}
        <div className="mb-6">
          <label htmlFor="insuranceType" className="block text-sm font-semibold text-gray-700">
            Type of Insurance
          </label>
          <select
            id="insuranceType"
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleChange}
            className="w-full mt-2 p-3 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Insurance Type</option>
            <option value="Health Insurance">Health Insurance</option>
            <option value="Home Insurance">Home Insurance</option>
            <option value="Auto Insurance">Auto Insurance</option>
            <option value="Life Insurance">Life Insurance</option>
          </select>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get My Quote
        </motion.button>
      </motion.form>
    </div>
  );
};

export default QuotePage;
