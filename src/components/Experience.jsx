import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Senior Software Engineer',
      company: 'TechCorp Inc.',
      location: 'San Francisco, CA (Hybrid)',
      period: '2022 - Present',
      description: [
        'Architected and implemented high-throughput REST APIs handling 10M+ daily requests using Spring Boot and Node.js.',
        'Migrated a legacy web app to React 18, leading to a 40% improvements in page interactive speeds.',
        'Mentored 4 junior engineers, leading to improved code review procedures and 15% fewer bugs in QA stages.',
      ],
      tech: ['React', 'Spring Boot', 'AWS ECS', 'Docker', 'PostgreSQL'],
    },
    {
      role: 'Full Stack Developer',
      company: 'DevGrid Co.',
      location: 'Remote',
      period: '2018 - 2022',
      description: [
        'Developed client portal platforms using React and styled with TailwindCSS, maximizing responsiveness across devices.',
        'Optimized slow-running PostgreSQL database queries, reducing query response times by 35%.',
        'Built automated email notification subsystems firing from microservice events using RabbitMQ.',
      ],
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'Redis', 'RabbitMQ'],
    },
    {
      role: 'Associate Programmer',
      company: 'AppGenesis',
      location: 'Austin, TX',
      period: '2016 - 2018',
      description: [
        'Collaborated on front-end layouts using HTML5, CSS3, and JavaScript templates.',
        'Wrote robust unit and integration testing files, boosting overall test coverage from 60% to 85%.',
        'Assisted in setting up AWS S3 static file hosts and CloudFront setups.',
      ],
      tech: ['JavaScript', 'HTML5/CSS3', 'REST APIs', 'AWS S3', 'Jest'],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-900/40 transition-colors duration-350">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Professional Experience
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            A chronological timeline of my career history, roles, and major technical contributions.
          </p>
        </div>

        {/* Timeline Wrapper */}
        <div className="mt-16 relative max-w-3xl mx-auto">
          
          {/* Vertical timeline line */}
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 -translate-x-1/2"></div>

          {/* Timeline Cards */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={idx} className="relative flex flex-col sm:flex-row items-stretch">
                  
                  {/* Timeline Node dot */}
                  <div className="absolute left-4 sm:left-1/2 top-6 w-5 h-5 rounded-full bg-white dark:bg-slate-900 border-4 border-primary-500 -translate-x-1/2 z-10 shadow-sm"></div>

                  {/* Left Side (Empty on Desktop for Odds, Card for Evens) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-0 sm:pr-12 text-left sm:text-right ${isEven ? 'order-1' : 'order-1 sm:order-2 sm:pl-12 sm:pr-0'}`}>
                    {isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 mb-3">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 sm:justify-end text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.company}</span>
                          <span className="hidden sm:inline">•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                        
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc list-inside sm:list-none text-left">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="relative sm:pl-4 sm:before:content-['•'] sm:before:absolute sm:before:left-0 sm:before:text-primary-500">
                              {desc}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-1.5 sm:justify-end">
                          {exp.tech.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                  {/* Right Side (Empty on Desktop for Evens, Card for Odds) */}
                  <div className={`w-full sm:w-1/2 pl-12 sm:pl-12 text-left ${!isEven ? 'order-1 sm:order-2' : 'order-2 sm:order-1 sm:pl-0 sm:pr-12'}`}>
                    {!isEven && (
                      <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5 }}
                        className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow"
                      >
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary-50 dark:bg-primary-950/30 text-primary-600 dark:text-primary-400 mb-3">
                          <Calendar className="w-3 h-3" />
                          {exp.period}
                        </span>
                        <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200">
                          {exp.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mt-1 mb-4">
                          <span className="font-semibold text-slate-700 dark:text-slate-300">{exp.company}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5" />
                            {exp.location}
                          </span>
                        </div>
                        
                        <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400 list-disc list-inside text-left">
                          {exp.description.map((desc, dIdx) => (
                            <li key={dIdx} className="relative sm:pl-4 sm:before:content-['•'] sm:before:absolute sm:before:left-0 sm:before:text-primary-500">
                              {desc}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-5 flex flex-wrap gap-1.5">
                          {exp.tech.map((tech) => (
                            <span key={tech} className="text-xs px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
