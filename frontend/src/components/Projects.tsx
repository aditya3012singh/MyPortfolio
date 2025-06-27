import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      tags: ['React', 'Node.js', 'NeonDB', 'Postgresql', 'Stripe', 'Express'],
      github: 'https://github.com/aditya3012singh/ecommerce',
      live: '#',
      featured: true,
    },
    {
      title: 'EduShare Platform',
      description: 'EduShare is a community-driven platform designed for students to upload, share, and discover academic notes and study resources. Built with a focus on collaboration, EduShare streamlines knowledge exchange within and across institutions.',
      image: 'https://th.bing.com/th/id/OIP.r9_1JdDlsh7Ja4_Nwm3GFgAAAA?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3',
      tags: ['React', 'Node.js', 'NeonDB', 'Postgresql', 'Stripe', 'Express', 'TypeScript'],
      github: 'https://github.com/aditya3012singh/Autonomous-KIET-Hub',
      live: '#',
      featured: true,
    },
    {
      title: 'Blog Platform',
      description: 'BlogsReal is a full-featured blogging platform where users can create, read, update, and delete blog posts in a clean, distraction-free interface.',
      image: 'https://www.wpbeginner.com/wp-content/uploads/2016/11/bloggingplatform.jpg',
      tags: ['React', 'Node.js', 'NeonDB', 'Postgresql', 'Stripe', 'Express', 'TypeScript'],
      github: 'https://github.com/aditya3012singh/blogsreal',
      live: '#',
      featured: false,
    },    {
      title: 'GenZ-Financial-Adviser',
      description: 'Gen Z Financial Advisor is a personalized, gamified financial wellness platform designed specifically for the needs and lifestyle of Gen Z users. It helps users manage income, track expenses, set savings and debt goals, and receive smart, AI-powered financial advice — all wrapped in an engaging, mobile-first experience with gamification elements like XP, badges, and challenges to build healthy money habits. Working on it....',
      image: 'https://th.bing.com/th/id/OIP.-pcjV_etN6rfhv4PgmfTDQHaEL?rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3',
      tags: ['React', 'Node.js', 'NeonDB', 'Postgresql', 'Stripe', 'Express', 'TypeScript'],
      github: 'https://github.com/aditya3012singh/GenZ-Financial-Adviser',
      live: '#',
      featured: false,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Here are some of my favorite projects that showcase my skills and passion for creating innovative solutions.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group ${project.featured ? 'lg:col-span-2' : ''}`}
              variants={itemVariants}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl overflow-hidden hover:bg-slate-700/50 transition-all duration-300 hover:border-slate-600/50 h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  {project.featured && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center space-x-1 bg-gradient-to-r from-blue-500 to-purple-500 px-3 py-1 rounded-full text-sm text-white">
                        <Sparkles size={14} />
                        <span>Featured</span>
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-sm text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.a
                      href={project.github}
                      className="flex items-center space-x-2 px-4 py-2 bg-slate-700/50 border border-slate-600/50 rounded-lg text-slate-300 hover:text-white hover:bg-slate-600/50 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github size={18} />
                      <span>Code</span>
                    </motion.a>
                    
                    {/* <motion.a
                      href={project.live}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a> */}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;