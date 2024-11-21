import React from 'react';
import { FaHeartbeat, FaCar, FaHome, FaLifeRing } from 'react-icons/fa';
import { motion } from 'framer-motion';

const servicesData = [
  {
    title: "Life Insurance",
    description: "Life insurance helps secure the future of your loved ones by providing financial support in case of the unexpected. It covers expenses like mortgages, education, and more.",
    icon: <FaLifeRing />,
  },
  {
    title: "Health Insurance",
    description: "Health insurance ensures that you and your family have access to essential medical care, covering medical bills, prescriptions, and treatments without overwhelming costs.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Auto Insurance",
    description: "Auto insurance provides protection for your vehicle against accidents, theft, and damages. It ensures that you're covered for repairs, medical costs, and legal expenses.",
    icon: <FaCar />,
  },
  {
    title: "Home Insurance",
    description: "Home insurance protects your property and belongings from disasters like fires, theft, or natural events. It also covers liability in case of accidents on your property.",
    icon: <FaHome />,
  },
];

function Services() {
  // Define animation variants
  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Section 1: Title and Header */}
      <section className="flex-1 bg-black text-white flex justify-center items-center py-10">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Our Range of Services</h2>
          <h3 className="text-xl uppercase mb-6">Choose the Right Coverage for You</h3>
        </div>
      </section>

      {/* Section 2: Services Grid */}
      <section id="services" className="flex-2 py-16">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={index}
                variants={boxVariant}
                initial="hidden"
                animate="visible"
                className="flex flex-col md:flex-row items-center justify-start p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                {/* Icon */}
                <div className="w-20 h-20 flex items-center justify-center bg-blue-900 text-white rounded-md mb-4 md:mr-6">
                  <span className="text-4xl">{service.icon}</span>
                </div>
                
                {/* Content */}
                <div>
                  <motion.h3
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-xl font-semibold mb-3"
                  >
                    {service.title}
                  </motion.h3>
                  <motion.p
                    variants={textVariant}
                    initial="hidden"
                    animate="visible"
                    className="text-gray-700"
                  >
                    {service.description}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Highlight or Call to Action */}
      <section className="flex-1 bg-blue-900 text-white flex justify-center items-center py-16">
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-6">Get a Quote Today!</h3>
          <p className="mb-6 text-lg">Take the first step in protecting what matters most. Get a customized insurance plan now.</p>
          <a href="#quote" className="bg-white text-blue-900 px-6 py-3 rounded-md hover:bg-gray-100 transition-colors">Get Started</a>
        </div>
      </section>
    </div>
  );
}

export default Services;
