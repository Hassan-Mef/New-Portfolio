import React, { useState, useEffect, useCallback, useRef } from "react";
import Tilt from "react-parallax-tilt";
import { motion, AnimatePresence } from "framer-motion";
import "../index.css";

/* Minimal changes only:
 - add tilt-clip on the Tilt wrapper (so CSS can clip glare)
 - add gradient-border class on outer wrapper (CSS draws a thin overlay border that doesn't disappear on flip)
 - preserved all original classes/flip/modal behavior
*/

const ServiceCardInner = ({
  icon,
  title,
  description,
  tech = [],
  isMobile,
  flipped,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      /* kept your existing gradient + p-[2px] border wrapper */
      className="gradient-border w-full max-w-[300px] h-[400px] bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500 p-[2px] rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        contain: "paint",
        isolation: "isolate",
        transformOrigin: "center center",
        /* keep using clipPath for additional clipping across browsers */
        clipPath: "inset(0 round 16px)",
        WebkitClipPath: "inset(0 round 16px)",
      }}
    >
      <div className="w-full h-full bg-black rounded-2xl overflow-hidden perspective group relative">
        <div
          className={`relative w-full h-full transition-transform duration-700 ease-in-out transform-style-preserve-3d ${
            flipped ? "rotate-y-180" : ""
          } ${!isMobile ? "group-hover:rotate-y-180" : ""}`}
          style={{
            transformStyle: "preserve-3d",
            WebkitTransformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* Front */}
          <div className="absolute w-full h-full backface-hidden bg-white/10 backdrop-blur-md rounded-2xl border border-purple-500/30 p-6 text-white flex flex-col justify-center items-center">
            <div className="text-4xl mb-4 text-purple-400">{icon}</div>
            <div className="text-lg font-bold text-center">{title}</div>
          </div>

          {/* Back */}
          <div className="absolute w-full h-full backface-hidden transform rotate-y-180 bg-[#1a0c2b] rounded-2xl p-6 flex flex-col justify-center items-center text-purple-200">
            <p className="text-sm text-center mb-4">{description}</p>
            <div className="flex flex-wrap justify-center gap-2">
              {tech.map((item, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs bg-purple-700/40 text-purple-100 rounded-full border border-purple-500/30"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, description, tech = [] }) => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < 768 : false
  );
  const [flipped, setFlipped] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const rafRef = useRef(null);

  const handleResize = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setIsMobile(window.innerWidth < 768);
      rafRef.current = null;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize, { passive: true });
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [handleResize]);

  const handleClick = useCallback(() => {
    if (isMobile) setFlipped((s) => !s);
    else setShowModal(true);
  }, [isMobile]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="w-full"
      >
        {/* tilt-clip class used to force glare clipping via CSS (see index.css snippet) */}
        <Tilt
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          glareEnable
          glareMaxOpacity={0.15}
          glareColor="#a855f7"
          glareBorderRadius="1rem"
          className="transition-all tilt-clip"
          transitionSpeed={400}
          gyroscope={false}
          tiltReverse={false}
          trackOnWindow={false}
        >
          <ServiceCardInner
            icon={icon}
            title={title}
            description={description}
            tech={tech}
            isMobile={isMobile}
            flipped={flipped}
            onClick={handleClick}
          />
        </Tilt>
      </motion.div>

      <AnimatePresence>
        {!isMobile && showModal && (
          <motion.div
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
            onClick={() => setShowModal(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-[#1a0c2b] text-white max-w-md w-full p-8 rounded-xl border border-purple-500 shadow-lg relative"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="text-5xl text-purple-500">{icon}</div>
                <h2 className="text-2xl font-bold text-purple-400">{title}</h2>
                <p className="text-sm text-purple-100">{description}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {tech.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-purple-800/50 text-purple-100 rounded-full border border-purple-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="mt-4 text-sm text-purple-400 hover:underline"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default React.memo(ServiceCard);
