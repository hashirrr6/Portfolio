import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import YourImage from '../assets/hashirrr6.jpg'; // Replace with your image path

const About = () => {
return (
  <div id="about" className="max-w-6xl mx-auto px-4 py-16">
    {/* About Section */}
    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
      
      {/* Text Section */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: false }}
        className="flex-1 w-full md:w-1/2"
      >
        <h2 className="text-5xl font-bold text-gray-400 mb-6">About Me</h2>

        <p className="text-lg text-gray-500 mb-4">
          Hi, I’m <span className="text-gray-300 font-semibold">Mohammed Hashir C</span>, a 
          <span className="text-gray-300 font-semibold"> Full Stack Web Developer</span> with hands-on experience building 
          scalable, high-performance web applications using 
          <span className="font-medium"> React, Next.js, Node.js, Express.js, MongoDB,</span> and 
          <span className="font-medium"> TypeScript</span>.
        </p>

        <p className="text-lg text-gray-500 mb-4">
          Currently, I work at <span className="text-gray-300 font-medium">Polosys Technologies</span>, where I contribute to 
          <span className="text-gray-300 font-medium"> ERP-based customer support, accounting,</span> and 
          <span className="text-gray-300 font-medium"> e-commerce systems</span>. My role involves developing reusable UI components,
          integrating RESTful APIs, and improving application performance by 
          <span className="text-gray-300 font-medium"> 20–30%</span>.
        </p>

        <p className="text-lg text-gray-400 mb-4">
          I have worked extensively on building <span className="text-gray-300 font-medium">ticketing systems</span>, 
          <span className="text-gray-300 font-medium"> admin dashboards</span>, and 
          <span className="text-gray-300 font-medium"> ERP-integrated e-commerce modules</span>, collaborating closely with 
          UI/UX and backend teams in an Agile environment.
        </p>

        <p className="text-lg text-gray-400">
          I’m passionate about solving real-world problems through technology, continuously learning new tools, and writing 
          <span className="text-gray-300 font-medium"> clean, maintainable code</span>. I’m always open to collaborating on impactful 
          projects and exploring <span className="text-gray-300 font-medium">remote and UAE-based opportunities</span>.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 1, ease: 'easeInOut' }}
        viewport={{ once: false }}
        className="flex-1 w-full md:w-1/2 flex justify-center"
      >
        <img
          src={YourImage}
          alt="Mohammed Hashir C"
          className="w-full max-w-xs md:max-w-md rounded-lg shadow-2xl border-4 border-gray-400"
        />
      </motion.div>
    </div>
  </div>
);

};

export default About;
