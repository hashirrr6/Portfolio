import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Eco from '../assets/eco.jpeg';
import Chat from '../assets/chat.jpeg';
import Bud from '../assets/bud.jpeg';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);

 const projects = [
  {
    id: 1,
    title: 'Polosys Books — Accounting & Billing SaaS',
    description:
      'Cloud-based accounting system inspired by Zoho Books. Built frontend modules for invoices, clients, expenses, and analytics dashboards with role-based access.',
    image: Bud,
    tech: ['Next.js', 'TypeScript', 'Redux', 'MongoDB', 'REST APIs'],
    link: 'https://web.polosysbooks.com/',
  },
  {
    id: 2,
    title: 'Polosys ERP — Ticketing System',
    description:
      'Customer support ticketing system with real-time tracking, multi-department workflows, and optimized UI performance for faster issue resolution.',
    image: Chat,
    tech: ['React', 'Next.js', 'TypeScript', 'REST APIs'],
    link: 'https://polosys.com',
  },
  {
    id: 3,
    title: 'Polosys ERP — E-commerce Module',
    description:
      'ERP-integrated B2B/B2C e-commerce module with product management, order workflows, and admin analytics. Optimized product synchronization and improved overall performance.',
    image: Eco,
    tech: ['React', 'Next.js', 'TypeScript', 'Firebase', 'REST APIs'],
    link: 'https://polo-sys-eco.vercel.app',
  },
];



  return (
    <div className="w-full overflow-x-hidden">
      <div id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, scale: 1.5 }}
          animate={{ scale: [1, 1.3, 1.5], opacity: 1 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: false }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-400 tracking-widest"
        >
          <motion.span
            initial={{ y: 0 }}
            animate={{ y: [-10, 0, -10] }}
            transition={{
              duration: 2,
              ease: 'easeOut',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
            className="inline-block text-white text-5xl sm:text-6xl md:text-7xl"
          >
            P
          </motion.span>
          ROJECTS
        </motion.h2>

        {/* Project Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, x: 150, rotate: 10, scale: 0.95 },
                visible: { opacity: 1, x: 0, rotate: 0, scale: 1 },
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut',
              }}
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="group relative overflow-hidden rounded-xl border border-gray-500 p-4 sm:p-5 shadow-md hover:shadow-2xl bg-gray-900"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Project Image */}
              <div className="relative min-h-[180px] sm:min-h-[220px] lg:min-h-[240px] overflow-hidden rounded-lg">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: 1.1 }}
                  transition={{ duration: 1 }}
                />
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
                      className="px-6 py-2 bg-white text-gray-900 rounded-full font-medium hover:scale-105 transition-transform"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <motion.div
                className="mt-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h3 className="text-lg sm:text-xl font-bold text-gray-200 mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm sm:text-base mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      viewport={{ once: false }}
                      className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-xs sm:text-sm"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
