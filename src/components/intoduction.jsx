import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CoffeeGuy from "../assets/intro.png";

export default function Introduction() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    handleResize(); // Set initially
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  // Image animation for desktop
  const imageAnimationDesktop = {
    initial: { opacity: 0, scale: 0.7, rotate: -20, y: 30, x: -100 },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      y: 0,
      x: 0,
      transition: {
        opacity: { duration: 1.2, ease: "easeOut" },
        scale: { duration: 1.5, ease: "easeOut" },
        rotate: { duration: 1.2, ease: "easeOut" },
        y: { duration: 1.2, ease: "easeOut" },
        x: { duration: 1.5, ease: "easeOut" },
      },
    },
  };

  // Image animation for mobile
  const imageAnimationMobile = {
    initial: { opacity: 0, scale: 0.8, y: 20, x: -50 },
    animate: {
      opacity: 1,
      scale: 1.05,
      y: 0,
      x: 0,
      transition: {
        opacity: { duration: 1, ease: "easeOut" },
        scale: { duration: 1.2, ease: "easeOut" },
        y: { duration: 1, ease: "easeOut" },
        x: { duration: 1.2, ease: "easeOut" },
      },
    },
  };

   // Floating animation for continuous subtle movement
  const floatingAnimation = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
  <motion.div
    initial={{ opacity: 0, x: isDesktop ? 100 : 0 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    viewport={{ once: true }}
    className="flex flex-col-reverse md:flex-row items-center justify-evenly px-6 md:px-16 py-16 md:py-20 relative"
  >
    {/* Text Section */}
    <div className="text-white max-w-xl text-center md:text-left">
      {[
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={1}
        >
          Brief <span className="text-gray-400">introduction</span>
        </motion.h2>,

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-400"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={2}
        >
          I’m a <span className="text-purple-300 font-semibold">Full Stack Web Developer</span> with hands-on experience building 
          <span className="text-purple-300 font-semibold"> scalable, high-performance applications</span> using 
          <span className="text-purple-300 font-semibold"> React, Next.js, Node.js, Express.js, MongoDB,</span> and 
          <span className="text-purple-300 font-semibold"> TypeScript</span>. I specialize in creating responsive user interfaces 
          and integrating robust backend systems.
        </motion.p>,

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-400"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={3}
        >
          Currently, I work at <span className="text-purple-300 font-semibold">Polosys Technologies</span>, contributing to 
          <span className="text-purple-300 font-semibold"> ERP-based customer support, accounting,</span> and 
          <span className="text-purple-300 font-semibold"> e-commerce systems</span>. I focus on building reusable components, 
          integrating RESTful APIs, and improving application performance by 
          <span className="text-purple-300 font-semibold"> 20–30%</span>.
        </motion.p>,

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-400"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={4}
        >
          My responsibilities include developing <span className="text-purple-300 font-semibold">ticketing systems</span>, 
          <span className="text-purple-300 font-semibold"> admin dashboards</span>, and 
          <span className="text-purple-300 font-semibold"> ERP-integrated e-commerce modules</span>, collaborating with 
          UI/UX and backend teams in an Agile environment to deliver reliable, user-centric solutions.
        </motion.p>,

        <motion.p
          className="mt-4 text-base md:text-lg text-gray-400"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={5}
        >
          I’m passionate about solving real-world problems, continuously learning new technologies, and writing 
          <span className="text-purple-300 font-semibold"> clean, maintainable code</span> that delivers real business value.
        </motion.p>,

        <motion.p
          className="mt-4 text-base md:text-lg text-purple-300 font-semibold text-center md:text-left"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          custom={6}
        >
          Also, I never say no to a good cup of coffee ☕
        </motion.p>,
      ].map((child, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {child}
        </motion.div>
      ))}
    </div>

    {/* Image Section */}
      <motion.div
        variants={isDesktop ? imageAnimationDesktop : imageAnimationMobile}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="w-40 md:w-64 lg:w-72 mb-6 md:mb-0 md:ml-4 lg:ml-6 relative"
      >
        {/* Floating animation container */}
        <motion.div
          variants={floatingAnimation}
          animate="float"
          className="relative"
        >
          {/* Subtle glow effect */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-md" />
            <img 
              src={CoffeeGuy} 
              alt="Developer illustration with coffee" 
              className="relative w-full h-auto rounded-xl shadow-lg shadow-purple-500/10" 
            />
          </div>
          
          {/* Subtle coffee steam effect */}
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 0.6, y: -15 }}
            transition={{ delay: 1, duration: 2, repeat: Infinity, repeatDelay: 0.5 }}
            className="absolute -top-3 right-6 w-6 h-6 bg-gradient-to-b from-white/20 to-transparent rounded-full blur-[2px]"
          />
        </motion.div>
      </motion.div>
    </motion.div>
);

}
