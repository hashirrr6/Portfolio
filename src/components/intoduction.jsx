import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import CoffeeGuy from "../assets/intro.png"; // Replace with your image path

export default function Introduction() {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }} // Start off-screen to the right
      whileInView={{
        opacity: 1,
        x: "0%", // Move to the center (left)
      }}
      transition={{
        duration: 2, // Duration of the animation
        ease: "easeOut", // Smooth easing
      }}
      viewport={{ once: false }} // Only animate once
      className="flex items-center justify-between px-16 py-20 relative top-[-30px]"
    >
      {/* Text Section */}
      <div className="max-w-2xl text-white">
        <h2 className="text-4xl font-bold text-white">
          Brief <span className="text-gray-400">introduction</span>
        </h2>

        <p className="mt-6 text-lg text-gray-400">
          I love transforming ideas into functional and visually appealing websites 
          that make a real impact. Building products that 
          <span className="text-purple-300 font-semibold"> challenge me</span> as a developer 
          and push my creativity is what drives me.
        </p>

        <p className="mt-6 text-lg text-gray-400">
          I am proficient in <span className="text-purple-300 font-semibold">JavaScript</span>,  
          <span className="text-purple-300 font-semibold"> React</span>, and  
          <span className="text-purple-300 font-semibold"> Node.js</span>, with experience in full-stack 
          development using the <span className="text-purple-300 font-semibold">MERN</span> stack.  
          I also have a strong foundation in  
          <span className="text-purple-300 font-semibold"> Java</span> and am always eager to expand my skill set.
        </p>

        <p className="mt-6 text-lg text-gray-400">
          Currently, I’m exploring  
          <span className="text-purple-300 font-semibold"> Next.js</span>,  
          <span className="text-purple-300 font-semibold"> TypeScript</span>, and  
          <span className="text-purple-300 font-semibold"> cloud technologies</span> 
          to enhance my development workflow.
        </p>

        <p className="mt-6 text-lg text-purple-300 flex items-center">
          Also, I never say no to a good cup of 
          <span className="text-purple-300 font-semibold mx-1">coffee</span> ☕
        </p>
      </div>

      {/* Image Section */}
      <div className="w-[350px]">
        <img src={CoffeeGuy} alt="Person Drinking Coffee" className="w-full h-auto" />
      </div>

      {/* Space effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center opacity-20" 
           style={{ backgroundImage: "url('/path-to-space-background.png')" }}></div>
    </motion.div>
  );
}