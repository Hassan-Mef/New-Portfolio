// src/components/TechItem.jsx
import { motion } from "framer-motion";

export default function TechItem({ name, icon: Icon, color }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center p-4 rounded-2xl shadow-md bg-white hover:shadow-xl transition-shadow cursor-pointer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={48} color={color} />
      <p className="mt-2 text-gray-700 font-medium">{name}</p>
    </motion.div>
  );
}
