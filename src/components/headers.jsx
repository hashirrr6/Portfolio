import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Animation variants
  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { delay: custom * 0.1, duration: 0.4 }
    }),
    hover: {
      scale: 1.05,
      color: "#ffffff",
      transition: { type: "spring", stiffness: 300, damping: 10 }
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { 
      opacity: 1, 
      height: "auto",
      transition: { 
        duration: 0.4,
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    },
    exit: { 
      opacity: 0, 
      height: 0,
      transition: { duration: 0.2 }
    }
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
    exit: { opacity: 0, x: -20 }
  };

  // Menu button animation
  const menuIconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 }
  };

  // Shimmer effect for logo
  const shimmerVariants = {
    initial: { x: -100, opacity: 0 },
    animate: { 
      x: 200, 
      opacity: 0.3,
      transition: { 
        repeat: Infinity, 
        repeatType: "loop", 
        duration: 2,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.nav 
      className="shadow-2xl relative z-50"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo with enhanced animations */}
          <motion.div
            className="flex-shrink-0 flex items-center p-2 relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut", }}
            >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
              variants={shimmerVariants}
              initial="initial"
              animate="animate"
              style={{ opacity: 0.2 }}
              transition={{repeat: Infinity }}
            />
            <motion.img
              src={Logo}
              alt="Logo"
              className="h-14 sm:h-16 w-auto max-w-[200px] object-contain"
              whileHover={{ 
                scale: 1.1, 
                rotate: [0, -3, 3, -2, 0],
                filter: "brightness(1.2)"
              }}
              transition={{ 
                rotate: { duration: 0.5, ease: "easeInOut" },
                scale: { type: "spring", stiffness: 300, damping: 10 }
              }}
            />
          </motion.div>

          {/* Menu Icon for Mobile with animation */}
          <motion.div 
            className="flex md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white focus:outline-none"
              variants={menuIconVariants}
              animate={isMenuOpen ? "open" : "closed"}
              whileTap={{ scale: 0.95 }}
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
            </motion.button>
          </motion.div>

          {/* Main Navigation with staggered animations */}
          <motion.div 
            className="hidden md:flex gap-x-30 justify-evenly items-center pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            {['projects', 'about', 'contact'].map((item, index) => (
              <motion.div
                key={item}
                custom={index}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                onHoverStart={() => setHoveredItem(item)}
                onHoverEnd={() => setHoveredItem(null)}
              >
                <Link
                  to={item}
                  smooth={true}
                  duration={500}
                  className="text-gray-400 hover:text-white transition-colors font-medium relative px-3 py-2"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  {hoveredItem === item && (
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      exit={{ scaleX: 0 }}
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}

            {/* Download CV Button with animation */}
            <motion.div
              custom={3}
              variants={navItemVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <motion.a
                href="/Hashir_CV.pdf"
                download="Hashir_CV.pdf"
                className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 px-3 py-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>CV</span>
                <motion.div
                  initial={{ y: 0 }}
                  whileHover={{ y: [0, -3, 0], transition: { repeat: Infinity, duration: 1 } }}
                >
                  <FaDownload className="w-4 h-4" />
                </motion.div>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Mobile Navigation Menu with animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden overflow-hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div className="flex flex-col space-y-4 mt-4 pb-4">
                {['projects', 'about', 'contact'].map((item, index) => (
                  <motion.div
                    key={item}
                    variants={mobileItemVariants}
                    custom={index}
                    whileHover={{ x: 5, color: "#ffffff" }}
                  >
                    <Link
                      to={item}
                      smooth={true}
                      duration={500}
                      className="text-gray-400 hover:text-white transition-colors font-medium block py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  </motion.div>
                ))}

                {/* Download CV Button for Mobile */}
                <motion.div
                  variants={mobileItemVariants}
                  custom={3}
                >
                  <motion.a
                    href="/Hashir_CV.pdf"
                    download="Hashir_CV.pdf"
                    className="text-gray-400 hover:text-white transition-colors font-medium flex items-center gap-2 py-2"
                    whileHover={{ x: 5, color: "#ffffff" }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span>CV</span>
                    <motion.div
                      animate={{ y: [0, -2, 0] }}
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <FaDownload className="w-4 h-4" />
                    </motion.div>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
