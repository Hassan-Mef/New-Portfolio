import React from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { HassanImage } from '../assets/export';

const About = () => {
  const { scrollYProgress } = useScroll();

  // Only start when we actually enter the About section (0.28 is after hero is done)
  const y = useTransform(scrollYProgress, [0.28, 0.38], [-400, 0]);
  const opacity = useTransform(scrollYProgress, [0.28, 0.38], [0, 1]);
  const rotate = useTransform(scrollYProgress, [0.28, 0.38], [-10, 0]);

  const smoothY = useSpring(y, { stiffness: 130, damping: 20 });
  const smoothOpacity = useSpring(opacity, { stiffness: 140, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 100, damping: 15 });

  return (
    <motion.section
      id="about"
      className="relative z-20 min-h-screen px-6 lg:px-20 py-16 bg-black text-white flex flex-col lg:flex-row items-center justify-center overflow-hidden" // ⬅️ prevents overflow into Hero
      initial={{ opacity: 1, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.4 }}
    >
      {/* Left: Text */}
      <div className="flex-1 max-w-2xl space-y-6 text-center lg:text-left">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-500">About Me</h2>
        <p className="text-gray-400 text-lg leading-relaxed">
          Hey! I’m <span className="text-white font-medium">Hassan Mehmood</span>, a passionate developer who loves creating modern web experiences and smart Discord automation tools.
          <br /><br />
          I specialize in building performance-optimized, responsive, and visually engaging websites using React, Tailwind CSS, and modern libraries. I'm also known in the Discord space for creating feature-rich bots and automations that streamline communities and tasks.
        </p>

        <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm">
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full">Web Development</span>
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full">Discord Bots</span>
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full">React + Tailwind</span>
          <span className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full">UI/UX Thinking</span>
        </div>
      </div>

      {/* Right: Falling image in About */}
      <motion.div
        className="flex-1 flex justify-center items-center min-h-[400px]"
        style={{ y: smoothY, opacity: smoothOpacity, rotate: smoothRotate }}
      >
        <div className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-purple-600 shadow-[0_20px_40px_rgba(128,0,255,0.5)]">
          <img
            src={HassanImage}
            alt="About Hassan"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
