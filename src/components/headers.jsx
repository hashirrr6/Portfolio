import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import Link from react-scroll
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa'; // Import download icon from react-icons

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="shadow-2xl relative z-50">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-400">
              Logo
            </a>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="flex md:hidden ">
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex gap-x-30 justify-evenly pointer-events-auto">
            <Link
              to="projects" // Scroll to Projects section
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Projects
            </Link>
            <Link
              to="about" // Scroll to About section
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="contact" // Scroll to Contact section
              smooth={true}
              duration={500}
              className="text-gray-400 hover:text-white transition-colors font-medium"
            >
              Contact
            </Link>

            {/* Download CV Button */}
            <a
              href="/Hashir_CV.pdf" // Replace with the path to your CV file
              download="Hashir_CV.pdf" // Name of the downloaded file
              className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2"
            >
              <span>CV</span>
              <FaDownload className="w-4 h-4" /> {/* Download icon */}
            </a>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 mt-4">
              <Link
                to="projects" // Scroll to Projects section
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Projects
              </Link>
              <Link
                to="about" // Scroll to About section
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                About
              </Link>
              <Link
                to="contact" // Scroll to Contact section
                smooth={true}
                duration={500}
                className="text-gray-400 hover:text-white transition-colors font-medium"
              >
                Contact
              </Link>

              {/* Download CV Button for Mobile */}
              <a
                href="/Hashir_CV.pdf" // Replace with the path to your CV file
                download="Hashir_CV.pdf" // Name of the downloaded file
                className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2"
              >
                <span>CV</span>
                <FaDownload className="w-4 h-4" /> {/* Download icon */}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;