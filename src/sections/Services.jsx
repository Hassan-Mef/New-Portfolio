import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import { FaCode, FaServer, FaPaintBrush, FaDiscord, FaKickstarter } from "react-icons/fa";
const services = [
  {
    title: "Embedded Systems & Hardware",
    icon: <FaKickstarter size={28} />,
    description:
      "Development of low-level embedded systems and custom hardware solutions, including microcontroller programming, peripheral interfacing, and processor design.",
    tech: [
      "STM32",
      "Embedded C",
      "RISC-V",
      "Verilog",
      "GPIO",
      "ADC",
      "Timers",
      "UART",
    ],
  },
  {
    title: "Full-Stack Development (BaaS)",
    icon: <FaServer size={28} />,
    description:
      "End-to-end application development using modern backends, databases, and APIs with scalable architecture.",
    tech: [
      "Firebase",
      "MS SQL",
      "MySQL",
      "PostgreSQL",
      "REST APIs",
      "Backendless",
    ],
  },
  {
    title: "Frontend Engineering",
    icon: <FaCode size={28} />,
    description:
      "Building responsive, high-performance user interfaces with clean design, smooth animations, and strong UX focus.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
  },
  {
    title: "Automation & Discord Systems",
    icon: <FaDiscord size={28} />,
    description:
      "Custom automation solutions including Discord bots, server architecture, moderation systems, and API integrations.",
    tech: ["discord.js", "Bot Development", "Automation", "Webhooks"],
  },
];2
const Services = () => {
  return (
    <motion.section
      id="services"
      className="relative min-h-screen py-10 px-6 lg:px-20 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-500 mb-12">What I Do</h2>

        {/* Grid: keep items centered; wrapper div ensures perfect centering in emulators */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center">
          {services.map((service, index) => (
            <div key={index} className="flex justify-center w-full"> {/* extra safe wrapper */}
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                tech={service.tech}
                className="text-center sm:text-left"
              />
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
