import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/aditya3012singh', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/aditya-singh-8b8045345/', label: 'LinkedIn' },
    { icon: Mail, href: '#contact', label: 'Email' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-6 md:mb-0">
            <motion.div
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2"
              whileHover={{ scale: 1.05 }}
            >
              Aditya Singh
            </motion.div>
            <p className="text-slate-400">Full-Stack Developer & Creative Problem Solver</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full text-slate-400 hover:text-white hover:bg-slate-700/50 hover:border-slate-600/50 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon size={20} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="mt-8 pt-8 border-t border-slate-800/50 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-slate-400 flex items-center justify-center space-x-2">
            <span>© 2025 Aditya Singh. Made with</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="text-red-500" size={16} fill="currentColor" />
            </motion.span>
            <span>and lots of coffee.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;