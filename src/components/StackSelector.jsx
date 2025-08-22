// src/components/StackSelector.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function StackSelector({ options = [], activeKey, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute left-0 top-1/2 transform -translate-y-1/2 z-30">
      {/* Main Button */}
      <motion.div
        className="w-20 h-20 bg-main rounded-full flex items-center justify-center cursor-pointer shadow-lg"
        initial={{ x: "-50%" }}
        animate={{ x: open ? "0%" : "-50%" }}
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 25px #a855f7" }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onClick={() => setOpen(!open)}
      >
        ⚙️
      </motion.div>

      {/* Options */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="flex absolute left-24 top-1/2 -translate-y-1/2 space-x-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
          >
            {options.map((opt) => (
              <motion.div
                key={opt.key}
                className={`px-5 py-3 rounded-full cursor-pointer font-semibold text-sm md:text-base ${
                  activeKey === opt.key
                    ? "bg-purple-500 text-white"
                    : "bg-gray-900 text-gray-200 hover:bg-purple-400"
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => {
                  onChange(opt.key);
                  setOpen(false);
                }}
              >
                {opt.label}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
