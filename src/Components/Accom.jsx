import React from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { motion } from 'framer-motion';
import one from '../Assests/Images/one.jpeg';
import two from '../Assests/Images/two.jpg';
import three from '../Assests/Images/three.png';

// Define animation variants
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const statVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const StatSection = () => {
  return (
    <section className="bg-black text-white py-14">
      <div className="flex flex-col md:flex-row justify-around items-center">
        {[ 
          { label: 'Success Stories', value: ['3', '4', 'K', '+'] },
          { label: 'Professional Team', value: ['2', '1', '0', '+'] },
          { label: 'Branches Nationwide', value: ['5', '4', 'K', '+'] },
          { label: 'Worldwide Clients', value: ['3', '5', 'K', '+'] },
        ].map((item, index) => (
          <motion.div
            key={index}
            variants={statVariant}
            initial="hidden"
            animate="visible"
            className="m-7 text-center"
          >
            {/* Map each character/digit separately */}
            <div className="flex justify-center">
              {item.value.map((digit, digitIndex) => (
                <motion.span
                  key={digitIndex}
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: digitIndex * 0.2, duration: 0.5 }}
                  className="text-4xl font-bold"
                >
                  {digit}
                </motion.span>
              ))}
            </div>
            <p className="text-lg">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

function Accom() {
  return (
    <ParallaxProvider>
      <div className="bg-gray-100 min-h-screen">
        
        {/* Top Rotating Stats Section */}
        <StatSection />

        {/* About Us Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 md:px-20 text-center">
            <motion.h3
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="text-gray-700 text-5xl mb-5 font-bold uppercase"
            >
              About Us
            </motion.h3>
            <motion.h2
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">Innovating Insurance Solutions</span>
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              animate="visible"
              className="text-black mb-8"
            >
              "Insurance isn’t just a policy; it’s a promise. A promise to protect your dreams, your loved ones, and your peace of mind. With us, your future is always secure."
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white py-3 px-6 rounded-lg"
            >
              Learn More
            </motion.button>
          </div>

          {/* Image Grid Section */}
          <div className="flex justify-center space-x-10">
            {/* First Image Box */}
            <Parallax translateY={[10, -10]} className="m-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="group relative w-[30vw] h-[50vh] bg-gray-300 rounded-lg shadow-lg"
              >
                <img
                  src={one}
                  alt="First Image"
                  className="object-cover w-full h-full rounded-lg"
                />
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center text-black font-medium opacity-0 group-hover:opacity-100 bg-white bg-opacity-70 transition-opacity">
                  <span className="text-2xl font-normal p-5">
                  Insurance offers significant financial security by protecting individuals and businesses against unexpected events such as accidents, illness, or natural disasters. By transferring the risk to an insurance company, policyholders can reduce the financial burden that these unforeseen circumstances might cause. This not only ensures financial stability but also provides peace of mind, knowing that you are prepared for emergencies without worrying about the costs involved.</span>
                </div>
              </motion.div>
            </Parallax>

            {/* Second Image Box */}
            <Parallax translateY={[10, -10]} className="m-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="group relative w-[30vw] h-[50vh] bg-gray-300 rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={two}
                  alt="Second Image"
                  className="object-cover w-full h-full rounded-lg shadow-lg"
                />
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center text-black font-medium opacity-0 group-hover:opacity-100 bg-white bg-opacity-70 transition-opacity">
                  <span className="text-2xl font-normal p-5">In addition to financial security, insurance plays a vital role in property protection and health coverage. Homeowners or renters insurance shields your property from damages caused by fire, theft, or natural calamities. Health insurance, on the other hand, covers medical expenses, making healthcare accessible without the concern of high out-of-pocket costs. Life insurance guarantees the financial well-being of your dependents, ensuring that they can maintain their standard of living even in your absence..</span>
                </div>
              </motion.div>
            </Parallax>

            {/* Third Image Box */}
            <Parallax translateY={[10, -10]} className="m-10">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="group relative w-[30vw] h-[50vh] bg-gray-300 rounded-lg shadow-lg"
              >
                <img
                  src={three}
                  alt="Third Image"
                  className="object-cover w-full h-full rounded-lg"
                />
                {/* Hover Content */}
                <div className="absolute inset-0 flex items-center justify-center text-black font-bold opacity-0 group-hover:opacity-100 bg-white bg-opacity-70 transition-opacity">
                  <span className="text-2xl font-normal p-5">Insurance also offers business continuity by protecting companies against risks that could otherwise cause significant disruptions. Certain types of insurance are legally required, such as auto insurance, ensuring compliance with the law. Additionally, some insurance policies provide tax benefits, like deductions on premiums for life or health coverage. With long-term savings plans such as whole life or endowment policies, insurance can also help build a financial cushion for the future.</span>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default Accom;
