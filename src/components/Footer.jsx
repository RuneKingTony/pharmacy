import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaPhone } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer class="bg-gray-500 text-white py-10" id="footer">
      <div class="container grid grid-cols-1 gap-6 px-4 mx-auto md:grid-cols-3 md:px-0">
        <div class="flex flex-col">
          <h2 class="text-3xl font-medium mb-4 max-w-lg mx-auto">
            Stay Connected
          </h2>
          <div class="max-w-lg mx-auto">
            <div className="flex items-center mb-4">
              <FaFacebook className="text-2xl mr-2" />
              <p>@Pharma-Aid</p>
            </div>
            <div className="flex items-center mb-4">
              <FaInstagram className="text-2xl mr-2" />
              <p>@Pharma-Aid</p>
            </div>
            <div className="flex items-center mb-4">
              <FaTwitter className="text-2xl mr-2" />
              <p>@Pharma-Aid</p>
            </div>
          </div>
        </div>
        <div class="flex flex-col">
          <h2 class="text-3xl font-medium mb-4 max-w-lg mx-auto">
            Need more info?
          </h2>
          <p class="max-w-lg mx-auto">
            Call Us on:
            <p className="flex">
              <FaPhone className="text-2xl mr-2 mt-3" />
              <p className="mt-3">+2348034533143</p>
            </p>
            <p className="flex">
              <FaPhone className="text-2xl mr-2 mt-3" />
              <p className="mt-3">+2358036253109</p>
            </p>
            <p className="flex justify-center mb-9">
              <FiMail className="text-2xl mr-2 mt-3" />
              <p className="mt-3">info@pharmaidafrica.org</p>
            </p>
          </p>
        </div>
      </div>

      <p className="flex items-center justify-center mt-7">
        Copyright © 2023 Pharmaceutical Market Access Initiative and
        Development. All rights reserved.{' '}
      </p>
    </footer>
  );
};

export default Footer;
