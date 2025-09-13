
import { motion } from "framer-motion";
import { ICONS } from "./CircuitIcons";
export default function Chip({ id, x, y, label, icon, className, size = 80, delay = 0 }) {
  const Icon = ICONS[icon] || ICONS.gdscript;

  // 🔑 shrink size only on small screens
  const chipSize = typeof window !== "undefined" && window.innerWidth < 768 ? size * 0.65 : size;

  return (
    <motion.div
      data-node={id}
      className="absolute z-10 flex flex-col items-center select-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
      initial={{ opacity: 0, scale: 0.6, y: 10 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, type: "spring", stiffness: 120 }}
    >
      <div
        data-node-core={id}
        className="rounded-full bg-black border border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.9)] grid place-items-center"
        style={{ width: chipSize, height: chipSize }}
      >
        <Icon className={`${className || ""}`} style={{ fontSize: chipSize * 0.5 }} />
      </div>

      <span className="mt-2 text-purple-200 text-xs sm:text-sm font-semibold drop-shadow text-center">
        {label}
      </span>
    </motion.div>
  );
}
