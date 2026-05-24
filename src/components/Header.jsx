import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon, Mail, Menu, X, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import { useTheme } from '../context/ThemeContext';
import avatarImg from '../assets/avatar.png';

const Header = ({ profile }) => {
  const { theme, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!profile) return null;

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Navigation Bar */}
      <nav className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/50 dark:border-slate-800/50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <a href="#" className="text-xl font-bold tracking-tight bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-indigo-400">
                {profile.name.replace(/\s+/g, '')}.dev
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 transition-colors"
                >
                  {link.name}
                </a>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Light/Dark Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-amber-400" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-700" />
                )}
              </button>
            </div>

            {/* Mobile controls (Menu & Theme toggle) */}
            <div className="flex items-center md:hidden space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300"
                aria-label="Toggle Light/Dark Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-slate-700" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-900"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden px-4 pt-2 pb-4 bg-white dark:bg-slate-950 border-t border-slate-200/50 dark:border-slate-800/50"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-medium text-slate-600 hover:text-primary-600 dark:text-slate-300 dark:hover:text-primary-400 py-1 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
        {/* Glow effect background blobs */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-primary-400/20 dark:bg-primary-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-80 h-80 bg-indigo-400/20 dark:bg-indigo-500/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            
            {/* Left side text details */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-1 text-center lg:text-left"
            >
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-300 mb-4 tracking-wide uppercase">
                Available for New Opportunities
              </span>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-primary-600 to-indigo-500 bg-clip-text text-transparent dark:from-primary-400 dark:to-indigo-400">{profile.name}</span>
              </h1>
              
              <p className="mt-3 text-xl sm:text-2xl font-medium text-slate-600 dark:text-slate-300">
                {profile.title}
              </p>
              
              <p className="mt-4 text-base sm:text-lg text-slate-550 dark:text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {profile.summary}
              </p>

              {/* Social and CTAs */}
              <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary-600 to-indigo-500 text-white font-medium hover:from-primary-700 hover:to-indigo-600 shadow-md shadow-primary-500/10 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  Let's Connect
                </a>
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium hover:bg-slate-50 dark:hover:bg-slate-900/50 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  View Work
                </a>
              </div>

              {/* Social Icon Row */}
              <div className="mt-8 flex justify-center lg:justify-start space-x-5 text-slate-400">
                <a 
                  href={profile.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-6 h-6" />
                </a>
                <a 
                  href={profile.linkedin} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a 
                  href={`mailto:${profile.email}`} 
                  className="hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  aria-label="Email Address"
                >
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </motion.div>

            {/* Right side portrait/avatar */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0"
            >
              <div className="relative group p-4">
                {/* Decorative border/glow rings */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full blur-xl opacity-30 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full scale-102 group-hover:rotate-12 transition-transform duration-700"></div>
                
                {/* Avatar image container */}
                <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-white dark:border-slate-900 bg-slate-100">
                  <img
                    src={avatarImg}
                    alt={`${profile.name} Portrait`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="flex flex-col items-center cursor-pointer text-slate-400"
          >
            <a href="#about" aria-label="Scroll to About Section">
              <ArrowDown className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </header>
    </>
  );
};

export default Header;
