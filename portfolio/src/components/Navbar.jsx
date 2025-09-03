import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll'; // Install: npm install react-scroll

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md py-4"
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">Hassan</div>
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map((item) => (
            <Link
              key={item}
              to={item.toLowerCase()}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:gradient-text transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {/* Hamburger icon */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden flex flex-col space-y-4 px-4 py-2"
        >
          {/* Mobile links same as above */}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;