// Hero.jsx
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Typewriter from "typewriter-effect";
import BackgroundParallax from "../components/BackgroundParallax";
import { HassanImage } from "../assets/export";

const Hero = () => {
  const { scrollYProgress } = useScroll();

  // Hero image animation

  const y = useTransform(scrollYProgress, [0, 0.2], [0, 300]); // ends sooner
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const rotate = useTransform(scrollYProgress, [0, 0.2], [0, 15]);

  const smoothY = useSpring(y, { stiffness: 140, damping: 18 });
  const smoothOpacity = useSpring(opacity, { stiffness: 140, damping: 20 });
  const smoothRotate = useSpring(rotate, { stiffness: 120, damping: 15 });

  return (
    <div className="relative min-h-screen overflow-hidden xm xm-1 ">
      <BackgroundParallax />

      <motion.section
        className="relative z-10 min-h-screen bg-black/50 text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-20 py-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        id="hero"
      >
        {/* Left: Text */}
        <div className="flex flex-1 flex-col justify-center items-start space-y-6 text-left max-w-2xl lg:mt">
          <span className="inline-block px-4 py-1 text-sm border rounded-full border-gray-600 text-gray-300">
            Built with Passion.
          </span>

          <h1 className="text-4xl md:text-6xl font-bold">
            Meet <span className="text-purple-500">Hassan Mehmood</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-light text-gray-300">
            A Passionate{" "}
            <span className="font-semibold text-white">
              <Typewriter
                options={{
                  strings: [
                    "Web Developer",
                    "Discord Expert ",
                    "Community Manager",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 40,
                }}
              />
            </span>
          </h2>

          <p className="text-gray-400 max-w-xl">
            I build responsive, performance-driven websites and smart Discord
            bots that bring ideas to life.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="bg-gray-100 text-black px-6 py-2 rounded-full text-sm font-medium hover:scale-105 transition-transform">
              View Projects →
            </button>
            <button className="border border-gray-500 px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-800 transition">
              My Story 🧑‍💻
            </button>
          </div>
        </div>

        {/* Right: Falling image with uncut glow */}
        <motion.div
          className="flex-1 flex justify-center items-center min-h-[400px] relative z-20"
          style={{ y: smoothY, opacity: smoothOpacity, rotate: smoothRotate }}
        >
          <div className="w-60 h-60 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-visible border-4 border-purple-600 shadow-[0_0_60px_10px_rgba(128,0,255,0.5)]">
            <img
              src={HassanImage}
              alt="Hassan Mehmood"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Hero;
