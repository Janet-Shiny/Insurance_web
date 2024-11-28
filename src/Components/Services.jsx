import React, { lazy, Suspense, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHeartbeat, FaCar, FaHome, FaLifeRing } from "react-icons/fa";
import { motion, useAnimation, useInView } from "framer-motion";

// Data for services
const servicesData = [
  {
    title: "Life Insurance",
    description:
      "Life insurance helps secure the future of your loved ones by providing financial support in case of the unexpected. It covers expenses like mortgages, education, and more.",
    icon: <FaLifeRing />,
    link: "/Lifeins",
  },
  {
    title: "Health Insurance",
    description:
      "Health insurance ensures that you and your family have access to essential medical care, covering medical bills, prescriptions, and treatments without overwhelming costs.",
    icon: <FaHeartbeat />,
    link: "/health-insurance",
  },
  {
    title: "Auto Insurance",
    description:
      "Auto insurance provides protection for your vehicle against accidents, theft, and damages. It ensures that you're covered for repairs, medical costs, and legal expenses.",
    icon: <FaCar />,
    link: "/auto-insurance",
  },
  {
    title: "Home Insurance",
    description:
      "Home insurance protects your property and belongings from disasters like fires, theft, or natural events. It also covers liability in case of accidents on your property.",
    icon: <FaHome />,
    link: "/home-insurance",
  },
];

// Service card component
const ServiceCard = ({ service }) => {
  const ref = useRef(null); // Ref for the card
  const isInView = useInView(ref, { triggerOnce: true }); // Check if the card is in view
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isInView, controls]);

  // Animation for each card
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      ref={ref}
      variants={cardVariant}
      initial="hidden"
      animate={controls}
      className="flex flex-col items-center bg-gradient-to-r from-blue-300 to-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
    >
      <Link to={service.link} className="flex flex-col items-center w-full">
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
      </Link>
    </motion.div>
  );
};

// Main Services component
const Services = () => {
  return (
    <motion.div
      id="Services"
      className="min-h-screen bg-gray-100 flex flex-col justify-center items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Header */}
      <motion.header
        className="text-center mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Our Range of Services
        </h2>
        <p className="text-lg text-gray-600">
          Protect what matters most with our comprehensive coverage options.
        </p>
      </motion.header>

      {/* Services Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 w-full px-10 max-w-8xl"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
          },
        }}
      >
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
