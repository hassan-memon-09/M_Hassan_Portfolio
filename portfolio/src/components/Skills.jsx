// src/components/Skills.jsx
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaDatabase, FaJsSquare, FaPython } from 'react-icons/fa';

const skills = {
  Frontend: [
    { name: 'React.js', icon: <FaReact />, level: 90 },
    { name: 'Next.js', icon: <FaReact />, level: 85 },
    { name: 'Redux', icon: <FaJsSquare />, level: 80 },
    { name: 'Zustand', icon: <FaJsSquare />, level: 75 },
    { name: 'JavaScript', icon: <FaJsSquare />, level: 90 },
    { name: 'HTML5', icon: <FaJsSquare />, level: 95 },
    { name: 'CSS3', icon: <FaJsSquare />, level: 90 },
    { name: 'Tailwind CSS', icon: <FaJsSquare />, level: 85 },
  ],
  Backend: [
    { name: 'Node.js', icon: <FaNodeJs />, level: 85 },
    { name: 'Express.js', icon: <FaNodeJs />, level: 80 },
    { name: 'Nest.js', icon: <FaNodeJs />, level: 75 },
    { name: 'REST APIs', icon: <FaNodeJs />, level: 85 },
    { name: 'GraphQL', icon: <FaNodeJs />, level: 70 },
    { name: 'Socket.IO', icon: <FaNodeJs />, level: 80 },
  ],
  Databases: [
    { name: 'MongoDB', icon: <FaDatabase />, level: 85 },
    { name: 'MySQL', icon: <FaDatabase />, level: 80 },
    { name: 'Firebase', icon: <FaDatabase />, level: 75 },
    { name: 'PostgreSQL', icon: <FaDatabase />, level: 70 },
  ],
  Languages: [
    { name: 'TypeScript', icon: <FaJsSquare />, level: 80 },
    { name: 'Java', icon: <FaJsSquare />, level: 70 },
    { name: 'SQL', icon: <FaDatabase />, level: 75 },
    { name: 'Python', icon: <FaPython />, level: 70 },
  ],
  Tools: [
    { name: 'GitHub Copilot', icon: <FaJsSquare />, level: 80 },
    { name: 'Google Gemini', icon: <FaJsSquare />, level: 75 },
    { name: 'Cursor AI', icon: <FaJsSquare />, level: 70 },
    { name: 'Git', icon: <FaJsSquare />, level: 90 },
    { name: 'VS Code', icon: <FaJsSquare />, level: 95 },
    { name: 'Postman', icon: <FaJsSquare />, level: 85 },
  ],
  CloudOther: [
    { name: 'Vercel', icon: <FaJsSquare />, level: 80 },
    { name: 'Netlify', icon: <FaJsSquare />, level: 75 },
    { name: 'Render', icon: <FaJsSquare />, level: 80 },
    { name: 'Railway', icon: <FaJsSquare />, level: 70 },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 bg-gradient-to-b from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-center gradient-text mb-16 drop-shadow-lg"
        >
          My Skillset
        </motion.h2>
        {Object.entries(skills).map(([category, skillsList], catIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIndex * 0.2, duration: 0.6 }}
            className="mb-16 last:mb-0"
          >
            <h3 className="text-2xl font-semibold text-indigo-300 text-center mb-8 uppercase tracking-wide">
              {category}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillsList.map((skill, index) => (
                <motion.div
                  key={`${category}-${index}`}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: (catIndex * 0.2) + (index * 0.1), duration: 0.5 }}
                  whileHover={{ scale: 1.1, rotate: 2, boxShadow: '0 10px 20px rgba(99, 102, 241, 0.3)' }}
                  className="p-6 bg-gray-800/60 rounded-2xl border border-indigo-500/20 hover:bg-indigo-900/30 transition-all duration-300 backdrop-blur-sm text-center"
                >
                  <div className="text-5xl mb-4 text-indigo-400 flex justify-center">{skill.icon}</div>
                  <h4 className="text-lg font-medium text-gray-100 mb-2">{skill.name}</h4>
                  <div className="relative w-24 h-24 mx-auto">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        stroke="#4B5563"
                        strokeWidth="8"
                      />
                      <circle
                        cx="50%"
                        cy="50%"
                        r="40%"
                        fill="none"
                        stroke={`url(#gradient-${category}-${index})`}
                        strokeWidth="8"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * skill.level) / 100}
                        strokeLinecap="round"
                      />
                      <defs>
                        <linearGradient id={`gradient-${category}-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" style={{ stopColor: '#6366F1' }} />
                          <stop offset="100%" style={{ stopColor: '#A855F7' }} />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-gray-100">
                      {skill.level}%
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;