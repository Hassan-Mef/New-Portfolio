import { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FarmanFoods, FundFlow } from "../assets/export";

const projects = [
  {
    title: "FarmanFoods",
    category: "Web Development",
    image: FarmanFoods,
    description: "A full e-commerce site for food delivery using React.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://github.com/yourusername/farmanfoods",
  },
  {
    title: "Discord Moderator Bot",
    category: "Discord Bot",
    image: "/images/discord-bot.png",
    description: "A moderation bot with logging and anti-spam systems.",
    tech: ["Node.js", "discord.js"],
    link: "https://github.com/yourusername/modbot",
  },
  {
    title: "FundFlow",
    category: "Full Stack",
    image: FundFlow,
    description: "A financial dashboard with Firebase and React.",
    tech: ["React", "Firebase", "Tailwind"],
    link: "https://github.com/yourusername/fundflow",
  },
  {
    title: "Firebase Blog",
    category: "Full Stack",
    image: "/images/firebase-blog.png",
    description: "A clean blogging platform using Firebase Firestore.",
    tech: ["React", "Firebase"],
    link: "https://firebase-blog.vercel.app",
  },
  {
    title: "Game UI Layout",
    category: "Frontend UI",
    image: "/images/game-ui.png",
    description: "Valorant-inspired responsive game UI.",
    tech: ["React", "Tailwind CSS"],
    link: "https://github.com/yourusername/game-ui",
  },
];

const Projects = () => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const visibleCards = 3;

  // Auto-slide only for desktop
  useEffect(() => {
    if (window.innerWidth >= 768) {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % projects.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, []);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = carouselRef.current.offsetWidth * 0.9;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // Get visible projects for desktop view
  const getVisibleProjects = () => {
    return Array.from(
      { length: visibleCards },
      (_, i) => projects[(index + i) % projects.length]
    );
  };

  return (
    <section className="w-full py-10 bg-black text-white">
      <h2 className="text-center text-4xl font-bold mb-8 text-purple-500 pb-20">
        Featured Projects
      </h2>

      {/* Desktop View */}
      <div className="hidden md:block relative w-full px-6">
        <div className="flex justify-center gap-6 pb-20">
          {getVisibleProjects().map((project, idx) => (
            <div
              key={idx}
              className="bg-[#111] rounded-2xl shadow-lg p-4 transition-transform duration-300 hover:scale-105 hover:shadow-purple-500/40"
              style={{ width: "30%" }}
            >
              <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="inline-block mt-3 px-3 py-1 text-sm bg-purple-700 rounded-lg">
                {project.category}
              </span>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-purple-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-3 rounded-lg shadow-md z-10"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-purple-600 hover:bg-purple-700 p-3 rounded-lg shadow-md z-10"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative w-full px-4">
        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide"
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="min-w-[85%] bg-[#111] rounded-2xl shadow-lg p-4 snap-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="w-full h-40 bg-gray-800 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="inline-block mt-3 px-3 py-1 text-sm bg-purple-700 rounded-lg">
                {project.category}
              </span>
              <h3 className="mt-3 text-xl font-bold">{project.title}</h3>
              <p className="text-gray-400 text-sm mt-1">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-3">
                {project.tech.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-purple-800 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 block text-purple-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
