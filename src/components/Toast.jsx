import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, AlertCircle, X } from 'lucide-react';

const Toast = ({ message, type = 'success', show, onClose, duration = 4000 }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [show, duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500" />,
    error: <XCircle className="w-5 h-5 text-rose-500" />,
    info: <AlertCircle className="w-5 h-5 text-blue-500" />,
  };

  const bgClasses = {
    success: 'bg-white dark:bg-slate-800 border-l-4 border-emerald-500 shadow-xl',
    error: 'bg-white dark:bg-slate-800 border-l-4 border-rose-500 shadow-xl',
    info: 'bg-white dark:bg-slate-800 border-l-4 border-blue-500 shadow-xl',
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 pointer-events-none">
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95, transition: { duration: 0.2 } }}
            className={`pointer-events-auto flex items-center p-4 rounded-lg min-w-[300px] max-w-md ${bgClasses[type]}`}
          >
            <div className="flex-shrink-0">{icons[type]}</div>
            <div className="ml-3 mr-8 text-sm font-medium text-slate-800 dark:text-slate-200">
              {message}
            </div>
            <button
              onClick={onClose}
              className="ml-auto -mx-1.5 -my-1.5 rounded-lg p-1.5 inline-flex h-8 w-8 text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Toast;
