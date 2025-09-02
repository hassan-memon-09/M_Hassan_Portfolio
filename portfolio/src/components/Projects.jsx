import { motion } from 'framer-motion';

const projects = [
  { title: 'Project 1', description: 'Desc...', image: 'proj1.jpg', link: 'https://...' },
  // Add more
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center gradient-text mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="group relative bg-slate-700 rounded-lg overflow-hidden"
            >
              <img src={proj.image} alt={proj.title} className="w-full h-48 object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="p-4">
                <h3 className="text-xl font-semibold">{proj.title}</h3>
                <p>{proj.description}</p>
                <a href={proj.link} className="text-indigo-400">View Project</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;