import React from 'react';
import About from './About';
// import Board from './Board'
import Facts from './Facts';
import Footer from './Footer';
// import Gallery from './Gallery'
import Hero from './Hero';
import Navbar from './Navbar';
import Vision from './Vision';

const Layout = () => {
  return (
    <div className="layout">
      <title>Tony Dev Store</title>

      <Navbar />
      <Hero />
      {/* <Gallery/> */}
      <About />
      <Vision />
      <Facts />
      {/* <Board/> */}
      <Footer />
    </div>
  );
};

export default Layout;
