// src/sections/Services.jsx
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaPalette, FaServer } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    icon: <FaCode size={28} />,
    description: 'Modern, responsive websites using React, Tailwind CSS, and performance-optimized tools.',
  },
  {
    title: 'Discord Bots',
    icon: <FaRobot size={28} />,
    description: 'Powerful, customized bots that automate tasks and elevate your Discord community.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPalette size={28} />,
    description: 'Clean, user-centered interfaces that look sharp and feel intuitive across devices.',
  },
  {
    title: 'API Integrations',
    icon: <FaServer size={28} />,
    description: 'Secure, scalable integrations with external APIs like payments, databases, or Discord APIs.',
  },
];

const Services = () => {
  return (
    <motion.section
      id="services"
      className=" relative min-h-screen py-20 px-6 lg:px-20 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-purple-500 mb-12">What I Do</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-purple-700/40 transition hover:scale-[1.03]"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 150 }}
            >
              <div className="text-purple-400 mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
