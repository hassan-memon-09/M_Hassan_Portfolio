// src/components/Hero.jsx
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-scroll';
import profilePic from '../img/Hassan_Pic.png'; // Ensure you have a profile picture in the specified path
import CV from '../img/MERN_Stack_M_Hassan_Resume.pdf'; // Ensure you have a profile picture in the specified path
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Hero = () => {
  const nameWords = ["Hi,", "I'm", "Muhammad", "Hassan"];
  const titleWords = ["Full-Stack", "Developer"];

  return (
    <section id="home" className="h-screen flex items-center bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <motion.div
          className="max-w-md"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h1 className="text-6xl font-extrabold gradient-text flex flex-wrap text-shadow-lg">
            {nameWords.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="mr-2">
                {word}
              </motion.span>
            ))}
          </motion.h1>
          <motion.p className="text-2xl mt-6 flex flex-wrap text-gray-300">
            {titleWords.map((word, index) => (
              <motion.span key={index} variants={wordVariants} className="mr-2">
                {word}
              </motion.span>
            ))}
          </motion.p>
          <motion.p className="text-lg mt-4 text-gray-400 leading-relaxed">
            Results-driven Full-Stack Developer with 1+ year of experience designing, developing, and deploying modern web applications. Skilled in React.js, Node.js, and MongoDB, I craft responsive UIs and secure backends with a passion for clean code and innovative solutions. Open to relocation for exciting opportunities.
          </motion.p>
          <motion.div
            className="flex space-x-6 mt-8"
            variants={wordVariants}
          >
            <a href="https://www.linkedin.com/in/Hassan-memon009" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin className="text-4xl hover:text-indigo-300 transition-colors transform hover:scale-110" />
            </a>
            <a href="mailto:mhdhassan.dev@gmail.com" aria-label="Email">
              <FaEnvelope className="text-4xl hover:text-indigo-300 transition-colors transform hover:scale-110" />
            </a>
            <a href="https://github.com/ihassanmemon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub className="text-4xl hover:text-indigo-300 transition-colors transform hover:scale-110" />
            </a>
          </motion.div>
          <motion.div
            className="flex space-x-6 mt-10"
            variants={wordVariants}
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Hire Me
            </Link>
            <a
              href={CV}
              download="MERN_Stack_M_Hassan_Resume.pdf"
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full font-semibold hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-700 hover:shadow-lg transition-all duration-300"
            >
              Download CV
            </a>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="hidden md:block"
        >
          {/* Add your profile image here */}
          <img src={profilePic} alt="Muhammad Hassan" className="w-96 h-auto rounded-lg shadow-2xl border-4 border-indigo-500/50" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;