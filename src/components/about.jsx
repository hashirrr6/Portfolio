import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import YourImage from '../assets/Hashir.jpeg'; // Replace with your image path

const About = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-16">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8  ">
        {/* Text Section (Animated from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and centered
          transition={{ duration: 0.8, ease: 'easeOut' }} // Animation duration and easing
          viewport={{ once: false }} // Only animate once
          className="flex-1"
        >
          <h2 className="text-5xl font-bold text-gray-400 mb-6">About Me</h2>
          <p className="text-lg text-gray-500 mb-4">
            Hi, I'm <span className="text-gray-400 font-semibold">Mohammed Hashir C</span>, a passionate developer with a love for building beautiful and functional web applications. I specialize in modern technologies like React, Node.js, and Tailwind CSS.
          </p>
          <p className="text-lg text-gray-500 mb-4">
            With a strong foundation in both frontend and backend development, I enjoy creating seamless user experiences and solving complex problems. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.
          </p>
          <p className="text-lg text-gray-400">
            Let's build something amazing together!
          </p>
        </motion.div>

        {/* Image Section (Animated from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 100 }} // Start off-screen to the right
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and centered
          whileHover={{ scale: 1, rotate: 2 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }} // Animation duration and easing
          viewport={{ once: false }} // Only animate once
          className="flex-1 flex justify-center"
        >
          <img
            src={YourImage}
            alt="Your Name"
            className="w-full max-w-md rounded-lg shadow-2xl border-4 border-gray-400"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;