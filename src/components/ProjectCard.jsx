import { motion } from "framer-motion";

const ProjectCard = ({ image, title, category, description, tech, link }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 250 }}
      className="bg-[#141414] w-[320px] sm:w-[360px] lg:w-[380px] rounded-2xl overflow-hidden shadow-lg border border-purple-700/30 hover:shadow-purple-600/50 transition-all flex flex-col pb-6"
    >
      {/* Top Image */}
      <div className="relative w-full h-40 sm:h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover object-top"
        />
        <span className="absolute bottom-2 left-2 bg-purple-700/80 text-xs text-white px-2 py-1 rounded-md">
          {category}
        </span>
      </div>

      {/* Bottom Content */}
      <div className="px-4 pt-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <p className="text-sm text-purple-100 mb-3 flex-grow">{description}</p>

        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item, idx) => (
            <span
              key={idx}
              className="bg-purple-800 text-purple-100 text-xs px-2 py-1 rounded-full border border-purple-500/30"
            >
              {item}
            </span>
          ))}
        </div>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 text-sm text-purple-400 hover:underline"
        >
          View Project →
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
