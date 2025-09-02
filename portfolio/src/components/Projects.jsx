// src/components/Projects.jsx
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Property Management System (MERN Stack)',
    description: 'Developed a multi-role property management platform with dedicated portals for Landlords, Tenants, and Service Professionals. Implemented features such as property listing, rent payment, and service request management. Integrated Stripe Payment Gateway for secure online rent collection and transaction handling. Ensured role-based authentication and authorization for secure access control. Built using React.js, Node.js, Express.js, and MongoDB, deployed on cloud hosting platforms.',
    image: 'property-management.jpg', // Replace with actual image
    link: 'https://your-project-link.com', // Add actual link if available
    year: '2025',
  },
  {
    title: 'Real-time Chat Application (MERN + Socket.IO)',
    description: 'Built a chat platform with private/group chats, typing indicators, and message reactions. Integrated Socket.IO for instant messaging and maintained chat history in MongoDB. Deployed the application on Render with MongoDB Atlas as the cloud database.',
    image: 'chat-app.jpg',
    link: 'https://your-chat-link.com',
    year: '2025',
  },
  {
    title: 'AI Chatbot Assistant (MERN Stack + Gemini API)',
    description: 'Developed an intelligent chatbot application using the MERN Stack integrated with Google’s Gemini API for natural language understanding and generation. Designed a React.js frontend with a clean, responsive chat interface and real-time message streaming. Built Node.js and Express.js backend to handle API requests, authentication.',
    image: 'ai-chatbot.jpg',
    link: 'https://your-ai-link.com',
    year: '2025',
  },
  {
    title: 'OptiDiagnostics: Diabetic Retinopathy Detection',
    description: 'Final Year Project combining React frontend with Flask backend and deep learning models. Achieved 92% accuracy in classifying retinal images into five severity levels. Included DICOM image handling and a patient management dashboard.',
    image: 'optidiagnostics.jpg',
    link: 'https://your-opti-link.com',
    year: '2024',
  },
  {
    title: 'Task Management Dashboard (MERN Stack)',
    description: 'Built a full-stack task management platform using React.js, Node.js, Express.js, and MongoDB. Implemented user authentication with JWT and role-based access control for secure project management. Designed REST APIs for task creation, assignment, and deadline tracking. Created a responsive interface for easy workflow organization.',
    image: 'task-management.jpg',
    link: 'https://your-task-link.com',
    year: '2023',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-slate-700 rounded-lg overflow-hidden"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{proj.title} ({proj.year})</h3>
                <p className="text-sm">{proj.description}</p>
                <a href={proj.link} className="text-indigo-400 mt-2 block">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;