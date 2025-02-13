import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import Eco from '../assets/eco.jpeg';
import Chat from '../assets/chat.jpeg';
import Bud from '../assets/bud.jpeg';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping with cart management and payment integration',
      image: Eco,
      tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
      link: 'https://ecommerce.example.com',
    },
    {
      id: 2,
      title: 'Live Chat Application',
      description: 'Real-time messaging application with instant updates and user presence',
      image: Chat,
      tech: ['React', 'Node.js', 'Express', 'Tailwind'],
      link: 'https://chat.example.com',
    },
    {
      id: 3,
      title: 'Expense Tracker',
      description: 'Personal finance management tool with budget planning and expense analytics',
      image: Bud,
      tech: ['React', 'Express', 'Node.js', 'Tailwind'],
      link: 'https://budget.example.com',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Animated Heading (Coming from Left) */}
      <motion.h2
       initial={{ opacity: 0, x: -200, scale: 1.2 }} // Start larger and off-screen
       animate={{ scale: [2, 2, 1.2] }} // Zoom out first, then back in
       whileInView={{ opacity: 1, x: 0 }} // Animate to visible and centered
       transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing
       viewport={{ once: false }} // Only animate once
       className="text-5xl font-bold text-center mb-12 text-gray-400 tracking-widest"
       
      >
       {' '}
        <motion.span
          initial={{ scale: 1, y: 0 }} // Start at normal size
          whileInView={{ scale: 1.5, y: -20 }} // Animate to larger size and jump up
          transition={{ duration: 0.5, ease: 'easeOut', repeat: Infinity, repeatType: 'mirror', repeatDelay: 1 }} // Loop animation
          className="inline-block text-white text-7xl"
        >
          P
        </motion.span>
        rojects
      </motion.h2>

      {/* Grid Layout (Projects Coming from Right) */}
      <motion.div
        initial={{ opacity: 0, x: 300 }} // Start off-screen to the right
        whileInView={{ opacity: 1, x: 0 }} // Animate to visible and centered
        transition={{ duration: 2, ease: 'easeOut' }} // Animation duration and easing
        viewport={{ once: false }} // Only animate once
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50, scale: 0.9, rotate: -20 }} // Start slightly below, scaled down, and rotated
            whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0 }} // Animate to visible, centered, and upright
            whileHover={{ scale: 1, rotate: 2 }} // Add hover animation
            transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }} // Staggered animation
            viewport={{ once: false }} // Only animate once
            className="group relative overflow-hidden rounded-xl border border-gray-400 p-4 shadow-lg transform transition-all duration-500 hover:shadow-2xl"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-black bg-opacity-50 transition-opacity duration-500 ${
                  hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="flex items-center justify-center h-full">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium transform transition-transform duration-500 hover:scale-105"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-300 mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 10 }} // Start slightly below
                    whileInView={{ opacity: 1, y: 0 }} // Animate to visible and centered
                    transition={{ duration: 0.5, delay: index * 0.1 }} // Staggered animation
                    viewport={{ once: false }} // Only animate once
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;