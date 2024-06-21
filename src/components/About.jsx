import React, { useState } from 'react';
import { useTrail, animated } from 'react-spring';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const items = [
    {
      id: 1,
      content:
        'Pharmaceutical Market Access Initiative and Development for Africa (Pharma-AID Africa) is a non-governmental organization committed to closing the gap in access to medicine amongst the most vulnerable communities in Nigeria and Africa, essentially in strengthening the supply chain system of identified primary Health Centres in these communities.',
    },
    {
      id: 2,
      content:
        'Our mission is to provide sustainable solutions through partnerships and innovation, ensuring quality healthcare reaches those who need it most. Pharma-AID Africa operates with a commitment to integrity, transparency, and compassion, guided by the belief that healthcare is a fundamental human right. Our work extends beyond the provision of medicines; it encompasses advocacy, education, and the fostering of partnerships that create lasting impact. Together with our partners and supporters, we are shaping a future where health disparities diminish, and every community thrives in wellness and dignity.',
    },
  ];

  const [isExpanded, setIsExpanded] = useState(false);

  // useInView hook to trigger animation when in viewport
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the component is visible
  });

  // Trail animation configuration
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateX(100px)' },
    to: {
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(100px)',
    },
    delay: 200,
  });

  return (
    <section ref={ref} className="bg-gray-100 py-16" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-center font-bold mb-8">
          About <span className="text-green-500">Pharma-AID Africa</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center">
          <animated.div className="mb-8 md:mb-0 md:mr-8 md:w-1/2">
            <img
              src="assets/images/passion.jpeg"
              alt="About Us"
              className="rounded-lg object-cover w-full h-auto shadow-lg"
              style={{ transform: 'translateX(0)', opacity: 1 }}
            />
          </animated.div>
          <div className="md:w-1/2">
            {trail.map((style, index) => (
              <animated.div key={items[index].id} style={style} className="mb-6">
                <p className="text-lg text-gray-700 mb-4">
                  {renderContent(items[index].content, index)}
                </p>
              </animated.div>
            ))}
            {items.length > 1 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
              >
                {isExpanded ? 'Show Less' : 'Learn More'}
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );

  // Function to render content dynamically based on isExpanded state
  function renderContent(content, index) {
    if (!isExpanded && index === 1) {
      return content.substring(0, 50) + '...';
    }
    return content;
  }
};

export default About;
