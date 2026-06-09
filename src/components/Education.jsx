import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, GraduationCap, Star } from 'lucide-react';

const Education = ({ education }) => {
  if (!education || education.length === 0) return null;

  return (
    <section id="education" className="py-20 lg:py-32 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4"
          >
            Education
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full"
          />
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
              
              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 mb-3">
                <Calendar className="w-3 h-3" />
                {edu.period}
              </span>
              
              <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                {edu.degree}
              </h4>
              
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1 mb-2">
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
    </section>
  );
};

export default Education;
