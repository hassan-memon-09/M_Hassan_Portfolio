// src/components/About.jsx
import { motion } from 'framer-motion';
import profilePic from '../img/Hassan_Pic.png'; // Ensure you have a profile picture in the specified path

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center gradient-text mb-12 drop-shadow-md"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img
              src={profilePic}
              alt="Muhammad Hassan"
              className="rounded-2xl w-80 mx-auto shadow-2xl border-4 border-indigo-500/30 hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl pointer-events-none"></div>
          </motion.div>
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.p variants={childVariants} className="text-lg text-gray-300 leading-relaxed">
              I am a passionate tech enthusiast from Sukkur, Pakistan, holding a Bachelor's degree in Computer Science from Sukkur IBA University (2020-2024). My academic journey equipped me with a strong foundation in data structures, algorithms, object-oriented programming, artificial intelligence, machine learning, and computer networks.
            </motion.p>
            <motion.p variants={childVariants} className="text-lg text-gray-300 leading-relaxed">
              Beyond coding, I thrive on mentoring aspiring developers, as seen in my role as a part-time Web Development Trainer at PITP – Sukkur IBA University. I enjoy exploring emerging technologies, contributing to open-source projects, and solving real-world problems through innovative software solutions. In my free time, I delve into AI tools like GitHub Copilot and Google Gemini to enhance my productivity.
            </motion.p>
            <motion.p variants={childVariants} className="text-lg text-gray-300 leading-relaxed">
              Committed to lifelong learning, I hold certifications in React, Express, JavaScript, and MongoDB. Fluent in Urdu (Native), English (Professional), and Sindhi (Basic), I'm eager to collaborate on challenging projects and bring value to dynamic teams.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;