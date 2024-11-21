import React from "react";
import { motion, useInView } from "framer-motion";
import im from '../Assests/Images/Ins.jpeg'

const Industry = () => {
  // Animation Variants
  const hoverVariant = {
    hover: { scale: 1.05, boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)" },
  };

  const scrollVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative bg-blue-900 text-white min-h-screen flex items-center py-20 overflow-hidden">
      {/* Parallax Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.3), transparent)",
          zIndex: -1,
        }}
      ></div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-12 lg:space-y-0">
        {/* Left Section: Text and Features */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scrollVariant}
          className="lg:w-1/2 px-8"
        >
          <h3 className="text-sm uppercase tracking-wide mb-4 text-gray-300">
            Why Choose Us
          </h3>
          <h2 className="text-5xl font-bold mb-10 leading-snug">
            Why Lumintu Stands Out in the Insurance Industry
          </h2>

          {/* Features */}
          <div className="space-y-8">
            {[ 
              {
                title: "Experience and Expertise",
                description:
                  "Our team brings years of expertise in providing reliable insurance solutions tailored to your needs.",
              },
              {
                title: "Comprehensive Coverage",
                description:
                  "We offer a wide range of plans to ensure every aspect of your life is secured and protected.",
              },
              {
                title: "Customer-Centric Approach",
                description:
                  "Your satisfaction is our priority. We focus on building trust and delivering personalized service.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={hoverVariant}
                whileHover="hover"
                className="flex items-start gap-6 p-6 bg-blue-800 rounded-xl shadow-lg cursor-pointer"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-black rounded-md">
                  <span className="text-2xl font-bold">⚡</span>
                </div>
                <div>
                  <h4 className="text-2xl font-semibold mb-3">{feature.title}</h4>
                  <p className="text-base text-gray-300">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section: Image */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={scrollVariant}
          className="lg:w-1/2 px-8"
        >
          <div className="relative">
            <img
              src={im} // Replace with the correct path
              alt="Insurance Illustration"
              className="rounded-2xl shadow-2xl w-full h-[35vw]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute top-6 left-6 bg-white text-blue-900 rounded-full px-5 py-3 shadow-lg flex items-center gap-3"
            >
              <span className="text-3xl font-bold">90%</span>
              <span className="text-lg font-medium">Customer Satisfaction</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Industry;
