import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa'; // Example icons

const skills = [
  { name: 'React', icon: <FaReact />, level: 90 },
  { name: 'Node.js', icon: <FaNodeJs />, level: 80 },
  // Add more
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Skills</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
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