import React from 'react'
// src/sections/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen  flex items-center justify-center text-center px-4"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div>
        <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
          Hi, I’m <span className="text-teal-400">Hassan Mehmood</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
          A web developer and Discord automation expert. I build sleek websites and smart bots.
        </p>
      </div>
    </motion.div>
  );
};

export default Hero;
