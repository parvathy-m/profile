import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Server, Database, Cloud, Star, Award } from 'lucide-react';

const Skills = ({ skills }) => {
  const [activeTab, setActiveTab] = useState('All');

  if (!skills) return null;

  // Extract categories dynamically
  const categories = ['All', ...new Set(skills.map(s => s.category))];

  const getCategoryIcon = (cat) => {
    const icons = {
      Languages: <Code className="w-4 h-4" />,
      Backend: <Server className="w-4 h-4" />,
      Testing: <Award className="w-4 h-4" />,
      Databases: <Database className="w-4 h-4" />,
      DevOps: <Cloud className="w-4 h-4" />,
      Architecture: <Server className="w-4 h-4" />,
      Methodologies: <Star className="w-4 h-4" />,
    };
    return icons[cat] || <Code className="w-4 h-4" />;
  };

  const filteredSkills = activeTab === 'All' 
    ? skills 
    : skills.filter(s => s.category === activeTab);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.25 } }
  };

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            My Tech Stack
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            A comprehensive list of core technologies, frameworks, and tools I use to build robust services.
          </p>
        </div>

        {/* Categories Toggles */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === cat
                  ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-950 shadow-md scale-105'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300 dark:bg-slate-900 dark:text-slate-400 dark:border-slate-800 dark:hover:border-slate-700'
              }`}
            >
              {getCategoryIcon(cat)}
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          key={activeTab} // Forces re-animation on tab toggle
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.05)' }}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm flex flex-col justify-between"
            >
              {/* Header and name */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-2xl" role="img" aria-label={skill.name}>
                    {skill.icon}
                  </span>
                  <span className="font-bold text-slate-800 dark:text-slate-200">
                    {skill.name}
                  </span>
                </div>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                  {skill.category}
                </span>
              </div>

              {/* Progress and indicator */}
              <div className="mt-6">
                <div className="flex justify-between items-center text-xs mb-1.5 font-semibold text-slate-400 dark:text-slate-500">
                  <span>Proficiency</span>
                  <span className="text-slate-600 dark:text-slate-350">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="h-full bg-gradient-to-r from-primary-500 to-indigo-500 rounded-full"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
