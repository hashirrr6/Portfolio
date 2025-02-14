import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Png from "../assets/con.png"; 
import { Send, Mail, Globe } from 'lucide-react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_okifw4i';
    const templateID = 'template_dfvblzk';
    const userID = 'iBHF-MPxwJ0yKz2F_';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        toast.success('Message sent successfully!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark"
        });
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="mt-16">
      <ToastContainer /> {/* Toast Container to render notifications */}
      <motion.h1 
        className="text-3xl text-gray-400 font-semibold mb-8 text-center"
        initial={{ opacity: 0, scale: 2, x: 100 }}
        animate={{ scale: [1, 1.5, 2] }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        Get in Touch
      </motion.h1>
      
      <motion.div className="flex flex-col rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto h-[600px] border border-gray-400 p-6">
        <div className="flex flex-1">
          <motion.div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url(${Png})` }} />

          <motion.div className="w-1/2 p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { name: 'name', type: 'text', placeholder: 'Your name' },
                { name: 'email', type: 'email', placeholder: 'Email' },
                { name: 'phone', type: 'tel', placeholder: 'Phone' },
              ].map((input) => (
                <div key={input.name}>
                  <input
                    type={input.type}
                    name={input.name}
                    placeholder={input.placeholder}
                    value={formData[input.name]}
                    onChange={handleChange}
                    className="w-full bg-transparent border-b border-gray-600 text-white px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              ))}

              <div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full bg-transparent border-b border-gray-600 text-white px-4 py-3 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gray-400 text-black py-4 rounded-full font-semibold mt-8 hover:bg-gray-600 hover:text-white transition-colors duration-300 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Submit'}
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;






