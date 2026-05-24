import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Download } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Award className="w-6 h-6 text-primary-500" />,
      title: 'Experience',
      detail: '8+ Years Professional',
    },
    {
      icon: <Briefcase className="w-6 h-6 text-indigo-500" />,
      title: 'Projects Delivered',
      detail: '50+ Enterprise & SaaS',
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-primary-500" />,
      title: 'Education',
      detail: 'B.S. Computer Science',
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
              <p className="mt-1 text-slate-500 dark:text-slate-400">
                {item.detail}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bio Text and Download CTA */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-slate-600 dark:text-slate-350 text-base leading-relaxed text-left">
            <p>
              I am a software engineer dedicated to building scalable, robust web systems. Over the past eight years, I've had the privilege of collaborating with talented teams to ship solutions for e-commerce, cloud infrastructure, and fintech start-ups.
            </p>
            <p>
              My expertise covers the full spectrum of modern web technologies. I specialize in designing microservices using Node.js and Spring Boot, building rich user interfaces with React and Next.js, and deploying cloud systems to AWS and Docker.
            </p>
            <p>
              I believe in writing clean, self-documenting code, conducting strict testing, and always designing with the end-user's experience in mind. When I am not typing away at my keyboard, I enjoy contributing to open-source libraries and blogging about system design.
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
                download="Alex_Rivera_Resume.pdf"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-100 dark:text-slate-950 dark:hover:bg-white font-medium transition-all shadow-md"
              >
                <Download className="w-5 h-5" />
                Download Full Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
