
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { FaCode, FaServer, FaPaintBrush, FaDiscord } from 'react-icons/fa';

const services = [
  {
    title: 'Front-End Development',
    icon: <FaCode size={28} />,
    description: 'Modern, performant websites using React, Tailwind CSS, and responsive design principles. Clean UI, smooth UX, and real-world scalability.',
  },
  {
    title: 'Discord Server Setup',
    icon: <FaDiscord size={28} />,
    description: 'Professional Discord server creation, moderation setup, community roles, automation, and engagement tools tailored to your audience.',
  },
  {
    title: 'UI/UX Design',
    icon: <FaPaintBrush size={28} />,
    description: 'Focused, user-centered designs that are intuitive and clean. Interface layouts designed for clarity, responsiveness, and real user flow.',
  },
  {
    title: 'Full Stack (Firebase)',
    icon: <FaServer size={28} />,
    description: 'Functional full-stack apps using Firebase, Cordless backends, and Firestore. Great for MVPs, portfolios, and custom data solutions.',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-center">

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
