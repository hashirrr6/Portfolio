import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import YourImage from '../assets/Hashir.jpeg'; // Replace with your image path

const About = () => {
  return (
    <div id="about" className="max-w-6xl mx-auto px-4 py-16">
      {/* About Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Text Section (Animated from Left with Fade-In Effect) */}
        <motion.div
          initial={{ opacity: 0, x: -100 }} // Start off-screen to the left
          whileInView={{ opacity: 1, x: 0 }} // Animate to visible and centered
          transition={{ duration: 1, ease: 'easeInOut' }} // Smooth animation
          viewport={{ once: false }} // Only animate once
          className="flex-1 w-full md:w-1/2"
        >
        <h2 className="text-5xl font-bold text-gray-400 mb-6">About Me</h2>
<p className="text-lg text-gray-500 mb-4">
  Hi, I'm <span className="text-gray-400 font-semibold">Mohammed Hashir C</span>, a dedicated Full Stack Web Developer with hands-on experience in building scalable and responsive web applications using modern technologies like <span className="font-medium">React, Next.js, Node.js, MongoDB,</span> and <span className="font-medium">TypeScript</span>.
</p>
<p className="text-lg text-gray-500 mb-4">
  Currently, I’m working at <span className="font-medium">Polosys Technologies</span>, where I contribute to the development of ERP-based solutions such as a ticketing system and e-commerce platform. I focus on creating clean UI components, integrating REST APIs, and optimizing performance for better user experiences.
</p>
<p className="text-lg text-gray-400">
  I’m passionate about learning new tools, building meaningful software, and growing as a developer every day. Let’s collaborate and bring innovative ideas to life!
</p>

        </motion.div>

        {/* Image Section (Animated with Slide Up and Fade In Effect) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }} // Start below the screen
          whileInView={{ opacity: 1, y: 0 }} // Animate to visible and centered
          whileHover={{ scale: 1.05 }} // Slight scale effect on hover
          transition={{ duration: 1, ease: 'easeInOut' }} // Smooth animation
          viewport={{ once: false }} // Only animate once
          className="flex-1 w-full md:w-1/2 flex justify-center"
        >
          <img
            src={YourImage}
            alt="Your Name"
            className="w-full max-w-xs md:max-w-md rounded-lg shadow-2xl border-4 border-gray-400"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default About;
