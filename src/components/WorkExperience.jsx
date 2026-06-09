import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ChevronDown } from 'lucide-react';

const WorkExperienceCard = ({ job, index }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isEven = index % 2 === 0;

  return (
    <div className="relative flex flex-col md:flex-row items-start w-full group">
      {/* Central dot for desktop */}
      <div className="hidden md:flex absolute left-1/2 top-8 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-primary-500 shadow-sm -translate-x-1/2 z-10 transition-transform group-hover:scale-125 duration-300">
      </div>

      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-12' : 'md:pl-12 md:ml-auto'}`}>
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg text-primary-600 dark:text-primary-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {job.role}
                </h3>
              </div>
              
              <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-400 mb-4">
                <span className="text-primary-600 dark:text-primary-400 font-semibold">{job.company}</span>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500">
                  <Calendar className="w-4 h-4" />
                  <span>{job.period}</span>
                </div>
                <div className="flex items-center gap-1 text-slate-500 dark:text-slate-500">
                  <MapPin className="w-4 h-4" />
                  <span>{job.location}</span>
                </div>
              </div>
            </div>
            
            <button 
              className="self-start sm:self-center p-2 text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors flex-shrink-0"
              aria-label="Toggle Details"
            >
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </button>
          </div>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
                  <ul className="space-y-2 mb-4">
                    {job.description.map((item, idx) => (
                      <li key={idx} className="flex items-start text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        <span className="mr-2 text-primary-500 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {job.tech.map((techItem, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const WorkExperience = ({ experience }) => {
  if (!experience || experience.length === 0) return null;

  return (
    <section id="experience" className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950/50 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Professional Work Experience
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto rounded-full"
          />
        </div>

        <div className="relative">
          {/* Central Vertical Line for Timeline */}
          <div className="hidden md:block absolute left-1/2 top-4 bottom-4 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2 rounded-full" />
          
          <div className="space-y-8 md:space-y-0">
            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={index > 0 ? "md:-mt-8" : ""}
              >
                <WorkExperienceCard job={job} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
