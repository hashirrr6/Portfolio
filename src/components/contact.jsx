import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Png from "../assets/con.png"; // Ensure the path to your image is correct
import { Send, Mail, Globe } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.5, when: "beforeChildren" }
    }
  };

  const headingVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.5 // Delay to ensure it animates after the container
      }
    }
  };

  const inputVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.3
      }
    }
  };

  const socialIconVariants = {
    hover: { 
      scale: 1.2,
      rotate: 5,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    }
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: '#' },
    { icon: Globe, label: 'Website', href: '#' }
  ];

  return (
    <div id="contact" className="mt-16">
      <motion.h1 
  className="text-3xl text-gray-400 font-semibold mb-8 text-center"
  initial={{ opacity: 0, scale: 2 ,x:100}} // Start larger and off-screen        
  animate={{ scale: [1,1.5, 2] }} // Zoom out first, then back in        
  whileInView={{ opacity: 1, x: 0}} // Animate to visible and centered              
  transition={{ duration: 1, ease: 'easeOut' }} // Animation duration and easing        
  viewport={{ once: false }} // Only animate once        
  
>
  Get in Touch
</motion.h1>
      <motion.div 
        className="flex flex-col rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto h-[600px] border border-gray-400 p-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Content */}
        <div className="flex flex-1">
          {/* Left Section - Image */}
          <motion.div
  className="w-1/2 bg-cover bg-center"
  style={{ backgroundImage: `url(${Png})` }}
  initial={{ opacity: 0, x: 300, scale: 0.8 }} // Start off-screen to the right and slightly scaled down
  whileInView={{ opacity: 1, x: 0, scale: 1, rotate: [0, 5,  0] }} // Animate to visible, centered, and add a slight wobble
  whileHover={{ scale: 0.8, rotate: 2 }} // Add a hover effect
  transition={{
    duration: 1, // Longer duration for a smoother animation
    delay: 0.3,
    ease: [0.17, 0.67, 0.83, 1.5], // Custom easing for a bouncy effect
    rotate: { duration: 1, ease: 'easeInOut', repeat: 1 }, // Wobble effect
  }}
  viewport={{ once: false }} // Animate every time the element enters the viewport
  variants={imageVariants}
  animate="visible"
/>

          {/* Right Section - Form */}
          <motion.div 
            className="w-1/2 p-12"
            variants={formContainerVariants}
            initial="hidden"
            animate="visible"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', type: 'text', placeholder: 'Your name' },
                { name: 'email', type: 'email', placeholder: 'Email' },
                { name: 'phone', type: 'tel', placeholder: 'Phone' },
              ].map((input, index) => (
                <motion.div
                  key={input.name}
                  variants={inputVariants}
                  initial={{ opacity: 0, rotateY: 90 }} 
                  whileInView={{ opacity: 1, rotateY: 0 }}
                  viewport={{ once: false }} 
                  transition={{ duration: 1.5, ease: "easeOut" }} 
                >
                  <motion.input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                    whileFocus={{ scale: 1.05 }}
                  />
                </motion.div>
              ))}
              <motion.div
                variants={inputVariants}
                initial={{ opacity: 0, rotateY: 90 }} 
                whileInView={{ opacity: 1, rotateY: 0 }}
                viewport={{ once: false }} 
                transition={{ duration: 1.5, ease: "easeOut" }} 
              >
                <motion.textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-600 text-white px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  whileFocus={{ scale: 1.05 }}
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-gray-400 text-black py-4 rounded-full font-semibold mt-8 hover:bg-gray-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{  duration: 1.5,delay: 1 }}
              >
                Submit
                <motion.div
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                >
                  <Send className="w-4 h-4" />
                </motion.div>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;