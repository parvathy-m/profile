import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';
import Spinner from './Spinner';
import Toast from './Toast';

const Contact = ({ profile }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success',
  });

  if (!profile) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        show: true,
        message: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    // Simulate async submission
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast({
        show: true,
        message: 'Message sent successfully! I will get back to you soon.',
        type: 'success',
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 1800);
  };

  const closeToast = () => {
    setToast((prev) => ({ ...prev, show: false }));
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Get In Touch
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-600 to-indigo-500 mx-auto mt-3 rounded-full"></div>
          <p className="mt-4 text-slate-500 dark:text-slate-400 text-lg">
            Have a project in mind, a job opportunity, or just want to say hello? Drop me a message!
          </p>
        </div>

        {/* Content Layout */}
        <div className="mt-16 flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Details Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="flex-1 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                Let's discuss something great
              </h3>
              <p className="mt-3 text-slate-550 dark:text-slate-450 leading-relaxed text-left">
                I am always open to discussing new software development initiatives, consulting opportunities, or collaborating on innovative products.
              </p>
            </div>

            {/* Icon Info Rows */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-primary-500 border border-slate-100 dark:border-slate-850">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Me</p>
                  <a href={`mailto:${profile.email}`} className="text-slate-750 dark:text-slate-200 hover:text-primary-500 transition-colors font-medium">
                    {profile.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-indigo-500 border border-slate-100 dark:border-slate-850">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Call Me</p>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="text-slate-750 dark:text-slate-200 hover:text-indigo-500 transition-colors font-medium">
                    {profile.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-primary-500 border border-slate-100 dark:border-slate-850">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Location</p>
                  <p className="text-slate-750 dark:text-slate-200 font-medium">
                    {profile.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Socials Connection */}
            <div className="text-left">
              <p className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">Follow My Work</p>
              <div className="flex space-x-4">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-500 hover:text-primary-500 hover:border-primary-500/30 border border-slate-100 dark:border-slate-800 transition-all hover:scale-105"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 bg-slate-50 dark:bg-slate-900 rounded-xl text-slate-500 hover:text-indigo-500 hover:border-indigo-500/30 border border-slate-100 dark:border-slate-800 transition-all hover:scale-105"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="flex-1 bg-slate-50 dark:bg-slate-900/40 p-8 rounded-3xl border border-slate-100 dark:border-slate-800/80 shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Name */}
              <div className="flex flex-col text-left">
                <label htmlFor="name" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Name <span className="text-rose-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-xl border border-slate-200/80 bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col text-left">
                <label htmlFor="email" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="john@example.com"
                  className="px-4 py-3 rounded-xl border border-slate-200/80 bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                  required
                />
              </div>

              {/* Subject */}
              <div className="flex flex-col text-left">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  disabled={loading}
                  placeholder="Project Inquiry"
                  className="px-4 py-3 rounded-xl border border-slate-200/80 bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all disabled:opacity-50"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col text-left">
                <label htmlFor="message" className="text-sm font-semibold text-slate-600 dark:text-slate-300 mb-2">
                  Message <span className="text-rose-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={loading}
                  rows="5"
                  placeholder="Hi Parvathy, I'd love to chat about..."
                  className="px-4 py-3 rounded-xl border border-slate-200/80 bg-white dark:bg-slate-900 dark:border-slate-800 text-slate-800 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none disabled:opacity-50"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-50 font-semibold rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed hover:shadow-lg"
              >
                {loading ? (
                  <Spinner size="sm" color="white" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

            </form>
          </motion.div>

        </div>
      </div>

      {/* Global Toast Element */}
      <Toast
        message={toast.message}
        type={toast.type}
        show={toast.show}
        onClose={closeToast}
      />
    </section>
  );
};

export default Contact;
