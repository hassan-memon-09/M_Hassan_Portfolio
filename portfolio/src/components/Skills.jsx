// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaPython } from 'react-icons/fa'; // Added more icons for representation

const skills = [
  { name: 'React.js', icon: <FaReact />, level: 90 },
  { name: 'Next.js', icon: <FaReact />, level: 85 },
  { name: 'Redux', icon: <FaJsSquare />, level: 80 },
  { name: 'Zustand', icon: <FaJsSquare />, level: 75 },
  { name: 'JavaScript', icon: <FaJsSquare />, level: 90 },
  { name: 'HTML5', icon: <FaJsSquare />, level: 95 },
  { name: 'CSS3', icon: <FaJsSquare />, level: 90 },
  { name: 'Tailwind CSS', icon: <FaJsSquare />, level: 85 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
  { name: 'Express.js', icon: <FaNodeJs />, level: 80 },
  { name: 'Nest.js', icon: <FaNodeJs />, level: 75 },
  { name: 'REST APIs', icon: <FaNodeJs />, level: 85 },
  { name: 'GraphQL', icon: <FaNodeJs />, level: 70 },
  { name: 'Socket.IO', icon: <FaNodeJs />, level: 80 },
  { name: 'MongoDB', icon: <FaDatabase />, level: 85 },
  { name: 'MySQL', icon: <FaDatabase />, level: 80 },
  { name: 'Firebase', icon: <FaDatabase />, level: 75 },
  { name: 'PostgreSQL', icon: <FaDatabase />, level: 70 },
  { name: 'TypeScript', icon: <FaJsSquare />, level: 80 },
  { name: 'Java', icon: <FaJsSquare />, level: 70 },
  { name: 'SQL', icon: <FaDatabase />, level: 75 },
  { name: 'Python', icon: <FaPython />, level: 70 },
  { name: 'GitHub Copilot', icon: <FaJsSquare />, level: 80 },
  { name: 'Google Gemini', icon: <FaJsSquare />, level: 75 },
  { name: 'Cursor AI', icon: <FaJsSquare />, level: 70 },
  { name: 'Git', icon: <FaJsSquare />, level: 90 },
  { name: 'VS Code', icon: <FaJsSquare />, level: 95 },
  { name: 'Postman', icon: <FaJsSquare />, level: 85 },
  { name: 'Vercel', icon: <FaJsSquare />, level: 80 },
  { name: 'Netlify', icon: <FaJsSquare />, level: 75 },
  { name: 'Render', icon: <FaJsSquare />, level: 80 },
  { name: 'Railway', icon: <FaJsSquare />, level: 70 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Technical Skills</h2>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-slate-700 rounded-lg hover:scale-105 transition-transform"
            >
              <div className="text-4xl mb-2">{skill.icon}</div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <div className="w-full bg-slate-600 rounded-full h-2.5 mt-2">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;