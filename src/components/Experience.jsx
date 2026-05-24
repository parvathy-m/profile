import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, GraduationCap, Star } from 'lucide-react';

const Experience = ({ experience, education }) => {
  if (!experience || !education) return null;

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Experience & Education
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            A chronological overview of my professional backend roles and academic foundation.
          </p>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Column 1: Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <Briefcase className="w-6 h-6 text-primary-500" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Work Experience
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
              {experience.map((exp, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative text-left"
                >
                  {/* Circle Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-primary-500 z-10"></div>
                  
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-950/40 text-primary-700 dark:text-primary-400 mb-3">
                    <Calendar className="w-3 h-3" />
                    {exp.period}
                  </span>
                  
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {exp.role}
                  </h4>
                  
                  <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                    <span className="font-semibold text-slate-700 dark:text-slate-350">{exp.company}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-slate-650 dark:text-slate-400 list-disc pl-4 mb-5">
                    {exp.description.map((bullet, bIdx) => (
                      <li key={bIdx} className="leading-relaxed">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tech.map((t) => (
                      <span key={t} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-555 dark:text-slate-400 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Column 2: Education */}
          <div>
            <div className="flex items-center gap-3 mb-8 justify-center lg:justify-start">
              <GraduationCap className="w-6 h-6 text-indigo-500" />
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Education
              </h3>
            </div>

            <div className="relative pl-6 border-l-2 border-slate-200 dark:border-slate-800 space-y-12">
              {education.map((edu, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative text-left"
                >
                  {/* Circle Node */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-500 z-10"></div>
                  
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-105 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 mb-3">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </span>
                  
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                    {edu.degree}
                  </h4>
                  
                  <p className="text-sm font-semibold text-slate-700 dark:text-slate-350 mt-1 mb-2">
                    {edu.institution}
                  </p>
                  
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border border-emerald-200/30">
                    <Star className="w-3 h-3 fill-emerald-500 text-emerald-500" />
                    {edu.score}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
