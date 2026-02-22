import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import axios from "axios";

const Contact = () => {
  const formRef = useRef(null);
  const [focusedField, setFocusedField] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  useEffect(() => {
    if (focusedField && formRef.current) {
      const field = formRef.current.querySelector(`#${focusedField}`);
      if (field) {
        gsap.to(field, {
          boxShadow: "0 0 20px rgba(0, 240, 255, 0.5)",
          duration: 0.3,
        });
      }
    }
  }, [focusedField]);

  const handleFocus = (fieldId) => {
    setFocusedField(fieldId);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('https://portfolio-3xj2.onrender.com/api/contact', formData);
      
      if (response.data.success) {
        setStatus({ type: 'success', message: 'Message sent successfully! 🎉' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: error.response?.data?.message || 'Failed to send message. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: "💼",
      label: "LinkedIn",
      color: "text-neon-blue",
      url: "https://www.linkedin.com/in/komal-pawar-6b7a692a2/",
    },
    {
      icon: "🐙",
      label: "GitHub",
      color: "text-neon-violet",
      url: "https://github.com/komalpawar79",
    },
    {
      icon: "📧",
      label: "Email",
      color: "text-neon-pink",
      url: "kdpawar9820@gmail.com",
    },
    {
      icon: "📷",
      label: "Instagram",
      color: "text-neon-violet",
      url: "https://instagram.com/koumal_07",
    },
    {
      icon: "💬",
      label: "WhatsApp",
      color: "text-neon-blue",
      url: "https://wa.me/9324566790",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-32 px-6 relative overflow-hidden"
      data-scroll-section
    >
      {/* Background Effects */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            Let's Build Something{" "}
            <span className="gradient-text">Extraordinary</span>
          </h2>
          <p className="text-xl text-gray-400">
            Open for collaborations, freelance work, and full-time
            opportunities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {status.message && (
              <div className={`p-4 rounded-xl ${status.type === 'success' ? 'bg-green-500/20 border border-green-500/50' : 'bg-red-500/20 border border-red-500/50'}`}>
                <p className="text-center">{status.message}</p>
              </div>
            )}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus("name")}
                onBlur={handleBlur}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue transition-all text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue transition-all text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-semibold mb-2 text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
                required
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:border-neon-blue transition-all text-white resize-none"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-violet rounded-xl text-white font-semibold text-lg shadow-lg shadow-neon-blue/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </motion.button>
          </motion.form>

          {/* Right: Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-3xl font-bold mb-6">Connect With Me</h3>
              <div className="space-y-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.url}
                    target={link.label === "Email" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, scale: 1.05 }}
                    className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all group"
                  >
                    <span className={`text-3xl ${link.color}`}>
                      {link.icon}
                    </span>
                    <span className="text-lg font-semibold group-hover:text-neon-blue transition-colors">
                      {link.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <p className="text-gray-400 mb-4">Available for</p>
              <div className="flex flex-wrap gap-3 justify-center">
                {["Freelance", "Full-time", "Part-time"].map((type) => (
                  <span
                    key={type}
                    className="px-4 py-2 bg-gradient-to-r from-neon-blue/20 to-neon-violet/20 rounded-full text-sm border border-neon-blue/30"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-32 text-gray-500"
      >
        <p>Designed & Developed by Komal Pawar</p>
      </motion.div>
    </section>
  );
};

export default Contact;
