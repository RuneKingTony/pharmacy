import React from 'react';
import { useSpring, animated } from '@react-spring/web';

const Hero = () => {
  const backgroundImage = 'url("assets/images/eren.jpeg")';

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 800,
  });

  const fadeInDelayed = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 900,
  });

  const fadeInMoreDelayed = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    delay: 1000,
  });

  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage, height: '75vh' }} id="hero">
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center" style={{ height: '80vh' }}>
        <div className="text-left text-white max-w-3xl">
          <animated.h1
            className="font-extrabold text-3xl md:text-4xl leading-tight mb-4"
            style={fadeIn}
          >
            Welcome to <span className="text-green-500">Pharma-AID</span> <span className="text-green-700">Africa</span>
          </animated.h1>
          <animated.h2
            className="text-2xl md:text-3xl leading-tight mb-6"
            style={fadeInDelayed}
          >
            Overcoming Barriers to Medicine Access
          </animated.h2>
          <animated.p
            className="text-lg leading-relaxed mb-8"
            style={fadeInMoreDelayed}
          >
            We are dedicated to improving patient and market access to medicine across Nigeria and Africa.
          </animated.p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
