import { motion } from 'framer-motion';

const experiences = [
  { role: 'Developer', company: 'Company', date: '2020-2023', desc: 'Achievements...' },
  // Add more
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="border-l-4 border-indigo-500 pl-4"
            >
              <h3 className="text-xl font-semibold">{exp.role} at {exp.company}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <p>{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;