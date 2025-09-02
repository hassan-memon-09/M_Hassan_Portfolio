// src/components/Experience.jsx
import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'MERN Stack Developer',
    company: 'Exclusive Digitals Pvt. Ltd.',
    location: 'Sukkur',
    date: 'May 2024 – Current',
    desc: [
      'Built and deployed 5+ full-stack web applications using React, Node.js, Express, and MongoDB.',
      'Designed REST APIs with JWT authentication and improved database efficiency through optimized queries.',
      'Worked closely with designers and stakeholders to deliver responsive and user-friendly interfaces.',
    ],
  },
  {
    role: 'Web Development Trainer (Part-time)',
    company: 'PITP – Sukkur IBA University',
    location: 'Sukkur',
    date: 'Jan 2025 – May 2025',
    desc: [
      'Delivered hands-on web development training to 100+ students, from basics to advanced topics.',
      'Created a practical, project-based curriculum aligned with industry expectations.',
      'Guided students through debugging, project deployment, and real-world coding practices.',
    ],
  },
  {
    role: 'Intern – MERN Stack Development',
    company: 'Railfood',
    location: 'Sukkur',
    date: 'Jan 2023 – June 2023',
    desc: [
      'Contributed to the development of a food ordering and delivery platform tailored for railway passengers.',
      'Built responsive UIs with React.js and Tailwind CSS for order placement and tracking.',
      'Assisted in backend API development using Node.js and Express.js.',
      'Worked with MongoDB for storing orders, menus, and user profiles.',
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="border-l-4 border-indigo-500 pl-4"
            >
              <h3 className="text-xl font-semibold">{exp.role} at {exp.company}, {exp.location}</h3>
              <p className="text-sm text-gray-400">{exp.date}</p>
              <ul className="list-disc pl-5 mt-2">
                {exp.desc.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;