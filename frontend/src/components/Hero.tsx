import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import pic from "../pictures/1736004729532.jpg"
const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-4">
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center gap-12 max-w-6xl mx-auto z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Text Section */}
        <motion.div
          className="text-center md:text-left flex-1"
          variants={containerVariants}
        >
          <motion.div className="mb-4" variants={itemVariants}>
            <span className="text-lg text-blue-400 font-medium">Hello, I'm</span>
          </motion.div>

          <motion.h1 className="text-5xl md:text-6xl font-bold mb-6" variants={itemVariants}>
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Aditya Singh
            </span>
          </motion.h1>

          <motion.h2 className="text-2xl md:text-3xl text-slate-300 mb-6" variants={itemVariants}>
            Full-Stack Developer & Creative Problem Solver
          </motion.h2>

          <motion.p className="text-lg text-slate-400 mb-10 max-w-xl leading-relaxed" variants={itemVariants}>
            I craft exceptional digital experiences with modern technologies. 
            Passionate about clean code, beautiful design, and solving complex problems.
          </motion.p>

          <motion.div className="flex justify-center md:justify-start space-x-6 mb-8" variants={itemVariants}>
            {[
              { icon: Github, href: 'https://github.com/aditya3012singh', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-singh-8b8045345/', label: 'LinkedIn' },
              { icon: Mail, href: '#contact', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-300 hover:text-white hover:bg-slate-700/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </motion.div>

          <motion.div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4" variants={itemVariants}>
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-blue-500/25 text-center"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-slate-600 rounded-full text-slate-300 hover:text-white hover:border-slate-500 transition-all duration-300 text-center"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          variants={itemVariants}
        >
          <motion.img
            src="/1736004729532.jpg" // Replace with your actual path or URL
            alt="Aditya Singh"
            className="w-52 h-52 md:w-64 md:h-64 rounded-full object-cover shadow-lg border-4 border-blue-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#about" className="text-slate-400 hover:text-white transition-colors duration-300">
          <ChevronDown size={32} />
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
