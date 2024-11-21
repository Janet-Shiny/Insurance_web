import React, { useEffect, useRef } from "react";
import { FaHeartbeat, FaCar, FaHome, FaLifeRing } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

const servicesData = [
  {
    title: "Life Insurance",
    description:
      "Life insurance helps secure the future of your loved ones by providing financial support in case of the unexpected. It covers expenses like mortgages, education, and more.",
    icon: <FaLifeRing />,
  },
  {
    title: "Health Insurance",
    description:
      "Health insurance ensures that you and your family have access to essential medical care, covering medical bills, prescriptions, and treatments without overwhelming costs.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Auto Insurance",
    description:
      "Auto insurance provides protection for your vehicle against accidents, theft, and damages. It ensures that you're covered for repairs, medical costs, and legal expenses.",
    icon: <FaCar />,
  },
  {
    title: "Home Insurance",
    description:
      "Home insurance protects your property and belongings from disasters like fires, theft, or natural events. It also covers liability in case of accidents on your property.",
    icon: <FaHome />,
  },
];

// Child component to handle animation for each card
const ServiceCard = ({ service }) => {
  const ref = useRef(null); // Create a ref for the card
  const isInView = useInView(ref, { triggerOnce: false }); // Check if the card is in view, trigger animation multiple times
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation variants for individual cards
  const boxVariant = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={ref} // Attach the ref
      variants={boxVariant}
      initial="hidden"
      animate={controls} // Control animation based on visibility
      whileInView="visible" // This makes the animation trigger every time the card is in view
      viewport={{ once: false }} // Ensures it triggers every time it comes into view during scroll
      className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Icon */}
      <div className="w-16 h-16 flex items-center justify-center bg-blue-700 text-white rounded-full mb-8 text-3xl">
        {service.icon}
      </div>
      {/* Title */}
      <h3 className="text-xl font-semibold text-gray-800 mb-2">
        {service.title}
      </h3>
      {/* Description */}
      <p className="text-gray-600 text-center">{service.description}</p>
    </motion.div>
  );
};

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Range of Services
        </h2>
        <p className="text-lg text-gray-600">
          Protect what matters most with our comprehensive coverage options.
        </p>
      </motion.header>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 w-full px-10 max-w-8xl">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
