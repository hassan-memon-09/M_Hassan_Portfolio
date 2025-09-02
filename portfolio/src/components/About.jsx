import { motion } from 'framer-motion';

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
            src="your-photo.jpg" // Replace with your image
            alt="Profile"
            className="rounded-full w-64 mx-auto"
          />
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-lg"
          >
            Your bio here... Education, interests, etc.
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default About;