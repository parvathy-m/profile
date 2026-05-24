import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Folder } from 'lucide-react';
import { Github } from './BrandIcons';

const Projects = ({ projects }) => {
  if (!projects) return null;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Featured Projects
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            A small collection of system architectures and applications I've designed, developed, and deployed.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{ y: -8 }}
              className="group flex flex-col justify-between p-6 rounded-3xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 hover:shadow-xl dark:hover:shadow-primary-500/5 transition-all duration-300"
            >
              <div>
                {/* Folder and Links Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm text-primary-500">
                    <Folder className="w-6 h-6" />
                  </div>
                  <div className="flex items-center space-x-3 text-slate-400">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label={`${project.title} GitHub Repository`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                      aria-label={`${project.title} Live Demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500 dark:text-slate-450 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tags Section */}
              <div className="mt-8">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold px-2.5 py-1 rounded-md bg-white border border-slate-200/50 dark:bg-slate-800 dark:border-slate-700 text-slate-655 dark:text-slate-350"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
