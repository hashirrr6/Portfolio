import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Import icons from react-icons

export default function Footer() {
  return (
    <footer className="shadow-2xl text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4  rounded-lg shadow-lg p-6"> {/* Added shadow and background */}
          {/* Social Media Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:youremail@example.com"
              className="hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>

          {/* Copyright Text */}
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Hashir. All rights reserved.
          </p>

          {/* Optional: Additional Links */}
          <div className="flex space-x-4">
            <a
              href="/privacy-policy"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}