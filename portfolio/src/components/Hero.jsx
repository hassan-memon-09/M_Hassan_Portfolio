// src/components/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-slate-900 to-slate-800">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold gradient-text">Hi, I'm Muhammad Hassan</h1>
        <p className="text-xl mt-4">Full-Stack Developer</p>
        <button className="mt-6 px-6 py-3 bg-button-gradient text-white rounded-lg hover:scale-105 transition-transform">
          View Projects
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;