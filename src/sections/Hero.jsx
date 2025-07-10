import React from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import BackgroundParallax from '../components/BackgroundParallax';
import { HassanImage } from '../assets/export';

const Hero = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background particles layer */}
      <BackgroundParallax />

      {/* Main hero content (STILL, no movement) */}
      <motion.section
        className="relative z-10 min-h-screen bg-black/80 text-white flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-20 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="hero"
      >
        {/* Left content */}
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <span className="inline-block px-4 py-1 text-sm border rounded-full border-gray-600 text-gray-300">
            Built with Passion.
          </span>

          <h1 className="text-4xl md:text-6xl font-bold">
            Meet <span className="text-purple-500">Hassan Mehmood</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-gray-300">
            A Passionate{' '}
            <span className="font-semibold text-white">
              <Typewriter
                options={{
                  strings: ['Web Developer', 'Discord Expert'],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto lg:mx-0">
            I build responsive, performance-driven websites and smart Discord bots that bring ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
              View Projects →
            </button>
            <button className="border border-gray-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              My Story 🧑‍💻
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="flex-1 flex justify-center mb-10 lg:mb-0">
          <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-600 shadow-lg">
            <img
              src={HassanImage}
              alt="Hassan Mehmood"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Hero;
