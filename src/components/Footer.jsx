import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">
              Stay Connected
            </h2>
            <div className="flex items-center mb-4">
              <FaFacebook className="text-3xl mr-3 text-gray-400 hover:text-gray-300 cursor-pointer" />
              <p className="text-lg">/Pharma-Aid</p>
            </div>
            <div className="flex items-center mb-4">
              <FaInstagram className="text-3xl mr-3 text-gray-400 hover:text-gray-300 cursor-pointer" />
              <p className="text-lg">/Pharma-Aid</p>
            </div>
            <div className="flex items-center mb-4">
              <FaTwitter className="text-3xl mr-3 text-gray-400 hover:text-gray-300 cursor-pointer" />
              <p className="text-lg">/Pharma-Aid</p>
            </div>
          </div>

          {/* Middle Section */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-semibold mb-6 text-center md:text-left">
              Need more info?
            </h2>
            <div className="flex items-center mb-4">
              <FaPhone className="text-3xl mr-3 text-gray-400" />
              <p className="text-lg">+234 803 453 3143</p>
            </div>
            <div className="flex items-center mb-4">
              <FaPhone className="text-3xl mr-3 text-gray-400" />
              <p className="text-lg">+235 803 625 3109</p>
            </div>
            <div className="flex items-center mb-4">
              <FiMail className="text-3xl mr-3 text-gray-400" />
              <p className="text-lg">info@pharmaidafrica.com</p>
            </div>
          </div>

          
        </div>

        {/* Copyright Section */}
        <p className="text-center mt-12 text-gray-400">
          &copy; 2023 Pharmaceutical Market Access Initiative and Development. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
