// src/components/BackgroundParallax.jsx
import React, { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

const BackgroundParallax = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // ✅ Load lightweight version
    }).then(() => {
      setInit(true);
    });
  }, []);

 const options = useMemo(
  () => ({
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
      color: {
        value: '#ffffff',
      },
      links: {
        enable: true,
        distance: 150,
        color: '#ffffff',
        opacity: 0.4,         // brighter lines
        width: 1.5,           // thicker lines
      },
      move: {
        enable: true,
        speed: 1.5,
        outModes: {
          default: 'out',
        },
      },
      number: {
        value: 150,           // ⬅️ more particles
        density: {
          enable: true,
          area: 800,
        },
      },
      opacity: {
        value: 0.8,           // ⬅️ brighter particles
      },
      shape: {
        type: 'circle',
      },
      size: {
        value: { min: 2, max: 4 },  // ⬅️ slightly larger particles
      },
    },
    detectRetina: true,
  }),
  []
);


  if (!init) return null;

  return (
    <div className="absolute top-0 left-0 w-full min z-0 ">
      <Particles id="tsparticles" options={options} />
    </div>
  );
};

export default BackgroundParallax;
