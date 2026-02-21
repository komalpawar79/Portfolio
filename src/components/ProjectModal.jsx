import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

const ProjectModal = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-4 md:inset-10 z-50 overflow-y-auto"
          >
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="glass-effect rounded-3xl max-w-4xl w-full p-8 md:p-12 border border-white/20 relative">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition-colors"
                >
                  <span className="text-2xl">×</span>
                </button>

                {/* Icon */}
                <div className="text-7xl mb-6">{project.icon}</div>

                {/* Title */}
                <h2 className="text-4xl md:text-5xl font-black mb-6 gradient-text">
                  {project.title}
                </h2>

                {/* Long Description */}
                <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8">
                  {project.longDescription.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-neon-blue">Key Features</h3>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {project.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-3 text-gray-300"
                      >
                        <span className="text-neon-violet mt-1">✓</span>
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4 text-neon-violet">Tech Stack</h3>
                  <div className="space-y-4">
                    {Object.entries(project.techStack).map(([category, techs]) => (
                      <div key={category}>
                        <p className="text-sm text-gray-400 mb-2 uppercase tracking-wide">{category}</p>
                        <div className="flex flex-wrap gap-2">
                          {techs.map(tech => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.templates ? (
                    // If templates exist, show template buttons
                    <div className="w-full">
                      <h3 className="text-2xl font-bold mb-4 text-neon-pink">Templates</h3>
                      <div className="space-y-3">
                        {project.templates.map((template, index) => (
                          <div key={index} className="flex flex-wrap gap-3 items-center p-4 glass-effect rounded-xl border border-white/10">
                            <span className="text-lg font-semibold text-gray-300 flex-1">{template.name}</span>
                            <motion.a
                              href={template.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 glass-effect rounded-full text-sm font-semibold flex items-center gap-2 hover:border-neon-blue/50 border border-white/10 transition-colors"
                            >
                              🐙 GitHub
                            </motion.a>
                            <motion.a
                              href={template.liveDemo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full text-sm font-semibold flex items-center gap-2"
                            >
                              🚀 Live Demo
                            </motion.a>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    // If no templates, show regular github and live demo buttons
                    <>
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 glass-effect rounded-full font-semibold flex items-center gap-2 hover:border-neon-blue/50 border border-white/10 transition-colors"
                        >
                          🐙 GitHub
                        </motion.a>
                      )}
                      {project.liveDemo && (
                        <motion.a
                          href={project.liveDemo}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 240, 255, 0.5)' }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full font-semibold flex items-center gap-2"
                        >
                          🚀 Live Demo
                        </motion.a>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
