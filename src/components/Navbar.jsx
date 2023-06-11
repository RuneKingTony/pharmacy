import React, { useState } from 'react';
import { Link } from 'react-scroll'

const Navbar = () => {
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    
  };
  const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

  
  
  return (
    <nav className="sticky z-10 top-0 left-0 w-full backdrop-filter backdrop-blur-lg bg-drug" >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img className="w-56 h-56" src="assets/images/logo2.png" alt="Logo" />
            </div>
          </div>
          <div className="hidden sm:block" onClick={handleClick}>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
            <div className="ml-4 flex items-center space-x-4">
            <li>
            <Link
                to="hero" className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
             onClick={closeMenu}  >
                Home
              </Link>
            </li>
             <li>
             <Link
                to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
                className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              >
                About
              </Link>
             </li>
             <li>
             <Link
               to="services" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
                
                className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              >
                Services
              </Link>
             </li>
              <li>
              <Link
                to="footer" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
                className="font-bold text-white hover:text-gray-400 px-3 py-2 rounded-md text-sm cursor-pointer"
              >
                Contact
              </Link>
              </li>
              
            </div>
            </ul>
            
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
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
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
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
            </button>
          </div>
        </div>
      </div>
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
             to="hero" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Home
          </Link>
          <Link
             to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            About
          </Link>
          <Link
             to="services" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Services
          </Link>
          <Link
             to="footer" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}
            className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
