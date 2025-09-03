// src/components/About.jsx
import { motion } from 'framer-motion';
import profilePic from '../img/Hassan_Pic.png'; // Ensure you have a profile picture in the specified path
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center gradient-text mb-10"
        >
          About Me
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src={profilePic} // Replace with your actual photo, e.g., a profile picture
            alt="Muhammad Hassan"
            className="rounded-full w-64 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-lg"
          >
            Results-driven Full-Stack Developer with 1+ year of professional experience designing, developing, and deploying modern web applications. Skilled in creating responsive user interfaces with React.js, Next.js, and Tailwind CSS, and building secure, efficient backends using Node.js, Express.js, and NestJS. Experienced in real-time communication with Socket.IO, database design with MongoDB and MySQL, and deploying applications to cloud platforms. Adept at delivering scalable, user-focused solutions and mentoring others, with a strong commitment to clean, maintainable code and continuous learning. Open to relocation for better opportunities.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;