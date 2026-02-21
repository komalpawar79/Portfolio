import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imagesRef.current, {
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="min-h-screen py-32 px-6" data-scroll-section>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black mb-8">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-neon-blue font-semibold">MERN Stack Developer</span> with a strong focus on frontend development using <span className="text-neon-blue font-semibold">React.js</span>. I build clean, responsive, and user-friendly web applications using JavaScript (ES6+), Redux Toolkit, and Tailwind CSS, with an emphasis on well-structured components and smooth UI experiences.
              </p>
              <p>
                I also work with <span className="text-neon-violet font-semibold">Node.js</span>, <span className="text-neon-violet font-semibold">Express.js</span>, and <span className="text-neon-violet font-semibold">MongoDB</span> to build REST APIs and practical full-stack features. I've built real-world projects including a food ordering platform, a salon website, and a creative assets platform.
              </p>
              <p>
                Currently seeking opportunities as a <span className="text-neon-pink font-semibold">MERN Stack / Frontend Developer</span> where I can contribute to meaningful products and grow through collaboration.
              </p>
            </div>
          </motion.div>

          {/* Right: Image Grid */}
          <div className="grid grid-cols-2 gap-6">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                ref={el => imagesRef.current[index] = el}
                whileHover={{ scale: 1.05, rotateZ: 2 }}
                className={`glass-effect rounded-2xl overflow-hidden ${index === 2 ? 'col-span-2' : ''}`}
              >
                <img 
                  src={`/images/about-${item}.jpeg`} 
                  alt={`Profile ${item}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="aspect-square bg-gradient-to-br from-neon-blue/20 to-neon-violet/20 flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-6xl opacity-20">📸</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
