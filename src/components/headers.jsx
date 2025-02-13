import React from 'react';

const Navbar = () => {
  return (
    <nav className="shadow-2xl relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold text-gray-400">
              Logo
            </a>
          </div>

          {/* Main Navigation */}
          <div className="flex gap-x-30 justify-evenly pointer-events-auto">
            <a href="/projects" className="text-gray-400 hover:text-white transition-colors font-medium">
              Projects
            </a>
            <a href="/about" className="text-gray-400 hover:text-white transition-colors font-medium">
              About
            </a>
            <a href="/contact" className="text-gray-400 hover:text-white transition-colors font-medium">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
