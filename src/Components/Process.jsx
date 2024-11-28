import React from 'react';
import { useInView } from 'react-intersection-observer';
import 'tailwindcss/tailwind.css';
import m1 from '../Assests/Images/p1.jpg';
import m2 from '../Assests/Images/p2.jpg';
import m3 from '../Assests/Images/p3.webp';

const Process = () => {
  const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: false, threshold: 0.2 });
  const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: false, threshold: 0.2 });

  return (
    <div className="bg-gray-50">
      {/* Main Title */}
      <div className="container mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-800 mb-16">
          How Our Insurance Process Works
        </h1>

        {/* Section 1 */}
        <div
          ref={ref1}
          className={`flex flex-col md:flex-row items-center gap-10 p-6 transition-all duration-700 ease-out ${
            inView1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={m1}
              alt="Consultation and Assessment"
              className="rounded-lg shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Step 01</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Consultation and Assessment
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              We begin with an initial meeting and a comprehensive assessment of your needs to
              create a tailored insurance plan.
            </p>
          </div>
        </div>

        {/* Section 2 */}
        <div
          ref={ref2}
          className={`flex flex-col md:flex-row-reverse items-center gap-10 p-6 transition-all duration-700 ease-out ${
            inView2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={m2}
              alt="Customized Plan Selection"
              className="rounded-lg shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Step 02</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Customized Plan Selection
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Choose from a variety of plan options. We guide you through the process to ensure you
              make an informed decision.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div
          ref={ref3}
          className={`flex flex-col md:flex-row items-center gap-10 p-6 transition-all duration-700 ease-out ${
            inView3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={m3}
              alt="Enrollment and Coverage Activation"
              className="rounded-lg shadow-lg max-w-full h-auto transform transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">Step 03</h3>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Enrollment and Coverage Activation
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Finalize the application process, and we’ll activate your insurance coverage
              seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
