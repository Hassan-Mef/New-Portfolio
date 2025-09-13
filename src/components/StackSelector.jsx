import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * StackSelector Component
 *
 * A radial menu that expands from a central circular button.
 * When opened, it arranges the provided options evenly
 * along the right-hand semicircle of the main button.
 *
 * @param {Array} options - Array of option objects ({ key, label })
 * @param {string} activeKey - Currently active/selected option key
 * @param {function} onChange - Callback fired when an option is selected
 */
export default function StackSelector({ options = [], activeKey, onChange }) {
  const [open, setOpen] = useState(false);

  // Distance of option buttons from the center of the main button
  const radius = 90; 

  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30">
      {/* Main circular toggle button */}
      <motion.div
        className="w-20 h-20 bg-main rounded-full flex items-center justify-center cursor-pointer shadow-lg relative z-40"
        initial={{ x: "-50%" }}
        animate={{ x: open ? "0%" : "-50%" }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #a855f7" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setOpen(!open)}
      >
        ⚙️
      </motion.div>

      {/* Radial options (appear only when `open` is true) */}
      <AnimatePresence>
        {open && (
          // This container is centered at the main button's center.
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {options.map((opt, idx) => {
              /**
               * Angle calculation:
               * - Distributes buttons evenly along the right semicircle (-90° to +90°).
               * - Example for 3 options: -90°, 0°, 90° (top, middle, bottom).
               */
              const angle =
                options.length === 1
                  ? 0
                  : -90 + (idx * 180) / Math.max(1, options.length - 1);

              // Compute raw x/y based on polar coordinates
              let temp_x = Math.cos((angle * Math.PI) / 180) * radius;
              let temp_y = Math.sin((angle * Math.PI) / 180) * radius;

              // Apply manual offsets to fine-tune position
              const x = temp_x - 33; 
              const y = temp_y - 20;

              return (
                <motion.button
                  key={opt.key}
                  className={`absolute px-5 py-3 rounded-full cursor-pointer font-semibold text-sm md:text-base ${
                    activeKey === opt.key
                      ? "bg-purple-500 text-white"
                      : "bg-gray-900 text-gray-200 hover:bg-purple-400"
                  }`}
                  style={{
                    left: `${x}px`,
                    top: `${y}px`,
                    transform: "translate(-50%, -50%)", // center button on computed point
                    zIndex: 60 + idx, // ensure stacking order
                    pointerEvents: "auto", // allow clicks even if overlaps
                  }}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    delay: idx * 0.05, // stagger animation slightly
                  }}
                  whileHover={{ scale: 1.06 }}
                  onClick={() => {
                    onChange(opt.key); // update parent state
                    setOpen(false); // collapse menu after selection
                  }}
                >
                  {opt.label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
