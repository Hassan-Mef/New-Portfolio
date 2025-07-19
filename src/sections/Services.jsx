
import { motion } from 'framer-motion';
import { FaCode, FaRobot, FaPalette, FaServer } from 'react-icons/fa';
import ServiceCard from '../components/ServiceCard';

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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-8 justify-center">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Services;
