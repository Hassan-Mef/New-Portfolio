import { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ProjectCard from "../components/ProjectCard";
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
  const visibleCards = 3;

  const handleNext = () => setIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () =>
    setIndex((prev) =>
      prev === 0 ? projects.length - 1 : (prev - 1) % projects.length
    );

  useEffect(() => {
    const interval = setInterval(handleNext, 4000);
    return () => clearInterval(interval);
  }, []);

  const getVisibleProjects = () => {
    return Array.from({ length: visibleCards }, (_, i) => 
      projects[(index + i) % projects.length]
    );
  };

  return (
    <section id="projects" className="py-20 px-6 lg:px-12 bg-black text-white">
      <div className="pb-10">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-500 text-center mb-12">
          Featured Projects
        </h2>

        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-600 text-white p-3 rounded-md shadow-md"
          >
            <FaArrowLeft size={18} />
          </button>

          {/* Cards */}
          <div className="flex justify-center overflow-visible gap-6 sm:gap-8 pb-10">
            {getVisibleProjects().map((project, i) => (
              <ProjectCard key={i} {...project} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-purple-700 hover:bg-purple-600 text-white p-3 rounded-md shadow-md"
          >
            <FaArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
