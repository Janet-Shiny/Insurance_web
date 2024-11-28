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
    <section id="Accom" className="bg-black text-white py-14">
      <div className="flex flex-wrap justify-around items-center">
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
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="m-5 text-center w-[150px] sm:w-[200px] lg:w-[250px]"
          >
            <div className="flex justify-center">
              {item.value.map((digit, digitIndex) => (
                <motion.span
                  key={digitIndex}
                  initial={{ opacity: 0, y: -50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: digitIndex * 0.2, duration: 0.5 }}
                  className="text-4xl sm:text-5xl font-bold text-gradient"
                >
                  {digit}
                </motion.span>
              ))}
            </div>
            <p className="text-sm sm:text-base lg:text-lg mt-2">{item.label}</p>
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
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-gray-700 text-4xl sm:text-5xl mb-5 font-bold uppercase"
            >
              About Us
            </motion.h3>
            <motion.h2
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-3xl sm:text-5xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Innovating Insurance Solutions
              </span>
            </motion.h2>
            <motion.p
              variants={textVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
              className="text-black text-sm sm:text-base lg:text-lg mb-8"
            >
              "Insurance isn’t just a policy; it’s a promise. A promise to
              protect your dreams, your loved ones, and your peace of mind.
              With us, your future is always secure."
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="bg-black text-white py-2 px-5 sm:py-3 sm:px-6 rounded-lg"
            >
              Learn More
            </motion.button>
          </div>

          {/* Image Grid Section */}
          <div className="flex flex-wrap justify-center gap-6 mt-10 px-4">
            {[one, two, three].map((image, index) => (
              <Parallax key={index} translateY={[10, -10]} className="w-full sm:w-[40%] lg:w-[30%]">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.5 }}
                  transition={{ delay: index * 0.3, duration: 0.8 }}
                  className="group relative w-full h-[300px] sm:h-[350px] lg:h-[400px] bg-gray-300 rounded-lg shadow-lg overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Image ${index + 1}`}
                    className="object-cover w-full h-full rounded-lg"
                  />
                  {/* Hover Content */}
                  <div className="absolute inset-0 flex items-center justify-center text-black font-medium opacity-0 group-hover:opacity-100 bg-white bg-opacity-70 transition-opacity overflow-y-auto p-4">
                    <span className="text-sm sm:text-base lg:text-lg text-center">
                      {/* Fixed hover content descriptions */}
                      {index === 0 && "Insurance offers significant financial security by protecting individuals and businesses against unexpected events such as accidents, illness, or natural disasters."}
                      {index === 1 && "Insurance plays a vital role in property protection and health coverage, ensuring accessible healthcare and safeguarding assets."}
                      {index === 2 && "Insurance ensures business continuity by mitigating risks, helping companies navigate unforeseen challenges efficiently."}
                    </span>
                  </div>
                </motion.div>
              </Parallax>
            ))}
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}

export default Accom;
