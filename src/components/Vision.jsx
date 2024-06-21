import React from 'react';
import { useSpring, animated } from 'react-spring';

const Vision = () => {
  // Define animations using react-spring
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
  });

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <animated.h2 style={fadeIn} className="text-4xl text-center font-bold mb-12 text-gray-800">
          Our Vision and Mission
        </animated.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <animated.div style={fadeIn} className="bg-white p-10 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              Africa of Equitable Access to Medicine.
            </p>
          </animated.div>
          <animated.div style={fadeIn} className="bg-white p-10 rounded-lg shadow-lg transition-transform duration-500 hover:scale-105">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To overcome the barriers to patient access, promote equitable access to medicines in Africa's most vulnerable and underserved communities, through partnership & collaboration.
            </p>
          </animated.div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
