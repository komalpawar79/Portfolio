import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'Tailwind CSS', 'GSAP', 'Framer Motion', 'JavaScript ES6+']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth']
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'Mongoose', 'Database Design']
    },
    {
      title: 'Tools & Extras',
      skills: ['Git', 'VS Code', 'Postman', 'Locomotive Scroll', 'Three.js']
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-32 px-6 relative" data-scroll-section>
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-neon-violet/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black mb-20 text-center"
        >
          Skills & <span className="gradient-text">Tech Stack</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="glass-effect rounded-2xl p-8 hover:border-neon-blue/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-6 text-neon-blue">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 10, color: '#00f0ff' }}
                    className="text-gray-300 cursor-default"
                  >
                    • {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
