import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-300">
      
      {/* Header and Hero */}
      <Header />
      
      <main>
        {/* About Me Section */}
        <About />

        {/* Technical Skills Section */}
        <Skills />

        {/* Experience Section */}
        <Experience />

        {/* Projects Section */}
        <Projects />

        {/* Contact Form Section */}
        <Contact />
      </main>

      {/* Footer */}
      <footer className="py-8 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50 dark:border-slate-800/50 text-center transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Alex Rivera. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-slate-500 dark:text-slate-450">
            <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
            <a href="#skills" className="hover:text-primary-500 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ProfilePage;
