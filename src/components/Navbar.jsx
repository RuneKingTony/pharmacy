import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);

  return (
    <nav className="sticky top-0 z-10 w-full backdrop-filter backdrop-blur-lg bg-green-800 bg-opacity-95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex items-center">
            <img className="w-56 h-56"  src="assets/images/logo2.png" alt="Logo" />
          </div>
          <div className="hidden sm:flex space-x-4">
            <Link
              to="hero"
              className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              onClick={closeMenu}
            >
              Services
            </Link>
            <Link
              to="footer"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="text-gray-400 hover:text-white focus:outline-none focus:text-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={closeMenu}
          >
            Services
          </Link>
          <Link
            to="footer"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
