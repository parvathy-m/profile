import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Download, Heart } from 'lucide-react';

const About = ({ profile, passions }) => {
  if (!profile || !passions) return null;

  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: 'Experience',
      detail: '4+ Years Backend Dev',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      title: 'Primary Tech',
      detail: 'Java & Spring Boot',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
      title: 'Education',
      detail: 'BCA Graduate',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            A quick glimpse into my professional journey, core highlights, and academic foundation.
          </p>
        </div>

        {/* Highlights Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 text-center hover:shadow-md transition-shadow"
            >
              <div className="inline-flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-xl shadow-sm mb-4">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200">
                {item.title}
              </h3>
              <p className="mt-1 text-slate-500 dark:text-slate-400 font-medium">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bio Text and Download CTA */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-slate-600 dark:text-slate-350 text-base leading-relaxed text-left">
            <p>
              {profile.summary}
            </p>
            <p>
              Throughout my career, I have specialized in building robust and highly performant backend architectures. My technical skills are anchored in Java and the Spring Boot framework, allowing me to develop scalable microservices, manage database integrations with JPA/Hibernate, and enforce stateless authentication configurations using JWT.
            </p>
            <p>
              I am dedicated to code quality, emphasizing comprehensive unit testing with JUnit and Mockito, clean design patterns, and stable pipeline deployments. I enjoy solving complex structural challenges and collaborating in Agile scrum environments.
            </p>
          </div>

          <div className="flex-1 flex justify-center w-full">
            <div className="relative p-8 rounded-2xl bg-gradient-to-tr from-primary-600/10 to-indigo-500/10 dark:from-primary-950/20 dark:to-indigo-950/20 border border-primary-500/10 dark:border-primary-500/5 w-full max-w-md">
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 text-left">
                Looking for my detailed credentials?
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 text-left">
                Get a comprehensive breakdown of my work experience, skill proficiency levels, publications, and professional projects in a single printable PDF.
              </p>
              <a
                href="/resume.pdf"
                download={`${profile.name.replace(/\s+/g, '_')}_Resume.pdf`}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white font-medium transition-all shadow-md cursor-pointer"
              >
                <Download className="w-5 h-5" />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>

        {/* Passions Section */}
        <div className="mt-16 border-t border-slate-100 dark:border-slate-900 pt-12">
          <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-6 text-center flex items-center justify-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            Passions & Interests
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {passions.map((passion, index) => (
              <motion.div
                key={passion.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-slate-50 dark:bg-slate-900 border border-slate-150/40 dark:border-slate-800 rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <span className="text-xl" role="img" aria-label={passion.name}>
                  {passion.icon}
                </span>
                <span className="text-sm font-semibold text-slate-700 dark:text-slate-350">
                  {passion.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
