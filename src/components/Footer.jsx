import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const footerParticlesOptions = {
    background: { color: "transparent" },
    fullScreen: false, // keep particles inside footer only
    particles: {
      number: { value: 50, density: { enable: true, area: 800 } },
      color: { value: "#AD46FF" }, // dark purple particles
      links: {
        enable: true,
        distance: 150,
        color: "#AD46FF", // dark purple links
        opacity: 0.4,
      },
      move: {
        enable: true,
        speed: 1,
        outModes: { default: "bounce" },
      },
      shape: { type: "circle" },
      opacity: { value: 0.6 },
      size: { value: { min: 1, max: 3 } },
    },
    detectRetina: true,
  };

  return (
    <footer className="relative min-h-[180px] bg-black text-white flex flex-col items-center justify-center overflow-hidden border-t border-purple-800 animate-glow-border">
      {/* Particles only in footer */}
      {init && (
        <Particles
          id="tsparticles-footer"
          options={footerParticlesOptions}
          className="absolute inset-0"
        />
      )}

      {/* Social Links */}
      <div className="flex space-x-6 z-10">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <Github className="w-6 h-6 hover:text-purple-400 transition-colors" />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin className="w-6 h-6 hover:text-purple-400 transition-colors" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-6 h-6 hover:text-purple-400 transition-colors" />
        </a>
      </div>

      {/* Bottom Text */}
      <p className="text-sm mt-6 z-10 text-gray-400">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
