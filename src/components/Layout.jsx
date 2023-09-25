import React from 'react';
import About from './About';
import Board from './Board';
import Facts from './Facts';
import Footer from './Footer';
import Gallery from './Gallery';
import Hero from './Hero';
import Info from './Info';
import Navbar from './Navbar';
import Vision from './Vision';

const Layout = () => {
  return (
    <div className="layout">
      <title>Tony Dev Store</title>

      <Navbar />
      <Hero />
      <About />
      <Vision />
      <Info />
      <br />
      <Gallery />
      <Facts />
      <Footer />
    </div>
  );
};

export default Layout;
