// src/components/RadialStackSelector.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * options: [{ key, label }]
 * activeKey: string
 * onChange: fn(key)
 */
export default function RadialStackSelector({ options = [], activeKey, onChange }) {
  const [open, setOpen] = useState(false);
  const radius = 110;

  return (
    <div
      className="absolute left-6 top-1/2 -translate-y-1/2 z-30"
      style={{ width: 240, height: 240 }}
    >
      {/* center hub */}
      <div className="absolute left-0 top-0 w-full h-full grid place-items-center pointer-events-none">
        <motion.button
          className="relative z-40 w-16 h-16 rounded-full bg-black border border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)] text-purple-300"
          onClick={() => setOpen((s) => !s)}
          initial={false}
          whileTap={{ scale: 0.95 }}
          style={{ pointerEvents: "auto" }}
        >
          <span className="block text-xs">Stacks</span>
        </motion.button>
      </div>

      <AnimatePresence>
        {open &&
          options.map((opt, i) => {
            const angle = (i / options.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = opt.key === activeKey;

            return (
              <motion.button
                key={opt.key}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ type: "spring", stiffness: 260, damping: 18, delay: i * 0.03 }}
                onClick={() => {
                  onChange(opt.key);
                  setOpen(false);
                }}
                style={{
                  position: "absolute",
                  left: "50%",
                  top: "50%",
                  transform: "translate(-50%, -50%)",
                  pointerEvents: "auto",
                }}
                className={`z-40 w-20 h-10 rounded-full text-xs flex items-center justify-center 
                  ${isActive ? "bg-purple-600 text-white border border-purple-300" : "bg-black/60 text-purple-200 border border-purple-700/40"}
                  shadow-[0_0_14px_rgba(124,58,237,0.25)]`}
              >
                {opt.label}
              </motion.button>
            );
          })}
      </AnimatePresence>
    </div>
  );
}
