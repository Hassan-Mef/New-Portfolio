import React, { useEffect, useMemo, useRef, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const BackgroundParallax = () => {
  const [init, setInit] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setInit(true));
  }, []);

  const options = useMemo(() => ({
    fullScreen: {
      enable: false, // ⛔ VERY IMPORTANT to disable fullscreen mode!
    },
    background: {
      color: { value: '#000000' },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: 'repulse',
        },
      },
      modes: {
        repulse: {
          distance: 120,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: { value: '#ffffff' },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,
        width: 1.5,
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: { default: 'out' },
      },
      number: {
        value: 150,
        density: { enable: true, area: 800 },
      },
      opacity: { value: 0.8 },
      shape: { type: 'circle' },
      size: { value: { min: 2, max: 4 } },
    },
    detectRetina: true,
  }), []);

  if (!init) return null;

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none w-screen h-screen"
    >
      <Particles
        id="tsparticles"
        options={options}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default BackgroundParallax;
