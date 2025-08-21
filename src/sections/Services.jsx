
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { FaCode, FaServer, FaPaintBrush, FaDiscord } from 'react-icons/fa';


const services = [
  {
    title: 'Front-End Development',
    icon: <FaCode size={28} />,
    description: 'Modern, performant websites using React and Tailwind CSS with responsive, pixel-perfect layouts.',
    tech: ['React', 'Tailwind CSS', 'Vite', 'Framer Motion', 'Ui libraries'],
  },
  {
    title: 'Discord Server Specialist',
    icon: <FaDiscord size={28} />,
    description: 'Complete Discord server setup, roles, channels, moderation bots, and community optimization.',
    tech: ['Server Setup', 'Moderation', 'Community Roles'],
  },
  {
    title: 'Discord Bot Development',
    icon: <FaDiscord size={28} />,
    description: 'Custom Discord bots for automation, moderation, and engagement using JavaScript.',
    tech: ['discord.js',  'Automation'],
  },
  {
    title: 'Full Stack (BaaS)',
    icon: <FaServer size={28} />,
    description: 'End-to-end apps using Firebase for auth, Firestore for data, and Cordless for custom backends.',
    tech: ['Firebase',  'Backendless', 'React'],
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
              tech={service.tech}
            />
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Services;
