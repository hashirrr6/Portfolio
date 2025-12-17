import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Png from "../assets/con.png"; // Check your path!
import { Send } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_okifw4i';
    const templateID = 'template_dfvblzk';
    const userID = 'iBHF-MPxwJ0yKz2F_';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setIsSuccess(true);
        setIsError(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        setIsError(true);
        setIsSuccess(false);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5, when: "beforeChildren" } }
  };

  const inputVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 20 } }
  };

  const formContainerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.3 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: "spring", stiffness: 100, damping: 15, delay: 0.3 }
    },
    hover: {
      scale: 1.1, 
      rotate: 15,
      transition: { type: "spring", stiffness: 150, damping: 10 }
    },
    mobileHover: {
      scale: 1.05,
      rotate: 10,
      transition: { type: "spring", stiffness: 150, damping: 10 }
    }
  };

  return (
    <div id="contact" className="mt-16 overflow-x-hidden px-4 w-full flex flex-col items-center">
      <motion.h1 
        className="text-sm sm:text-xl text-gray-400 font-semibold mb-8 mt-2 text-center"
        initial={{ opacity: 0, scale: 2, x: 100 }}
        animate={{ scale: [1, 1.5, 2] }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        Get in Touch
      </motion.h1>

      <motion.div 
        className="flex flex-col md:flex-row rounded-xl overflow-hidden shadow-2xl w-full max-w-4xl mx-auto border border-gray-400 p-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left Section - Image with Enhanced Animations */}
        <motion.div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center"
          style={{ backgroundImage: `url(${Png})` }}
          initial={{ opacity: 0, x: 300, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: [0, 5, 0] }}
          whileHover={{
            scale: 1.1,
            rotate: 15,
            transition: { type: "spring", stiffness: 150, damping: 10 }
          }}
          viewport={{ once: false }}
          variants={imageVariants}
          animate="visible"
        />
        
        {/* Right Section - Form */}
        <motion.div 
          className="w-full md:w-1/2 p-6 md:p-8"
          variants={formContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {[
              { name: 'name', type: 'text', placeholder: 'Your name' },
              { name: 'email', type: 'email', placeholder: 'Email' },
              { name: 'phone', type: 'tel', placeholder: 'Phone' },
            ].map((input) => (
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
                  required
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
                required
              />
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-gray-400 text-black py-4 rounded-full font-semibold mt-8 hover:bg-gray-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, delay: 1 }}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
              <motion.div initial={{ x: 0 }} whileHover={{ x: 5 }}>
                <Send className="w-4 h-4" />
              </motion.div>
            </motion.button>
            {isSuccess && (
              <p className="text-gray-400 text-center mt-4">
                Message sent successfully!
              </p>
            )}
            {isError && (
              <p className="text-red-500 text-center mt-4">
                Failed to send message. Please try again.
              </p>
            )}
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
