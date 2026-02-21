import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Trekking = () => {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);

  const trekNames = [
    'Prabalgad Fort',
    'Peb Fort', 
    'Saras Gad',
    'Kalavantin Durg'
  ];

  const strengths = [
    {
      icon: '💪',
      title: 'Resilience',
      description: 'Trekking long trails builds physical & mental strength.'
    },
    {
      icon: '🎯',
      title: 'Focus',
      description: 'Staying alert on trails improves concentration in coding.'
    },
    {
      icon: '🧭',
      title: 'Decision Making',
      description: 'Quick route choices resemble real-time problem-solving.'
    },
    {
      icon: '⏰',
      title: 'Discipline',
      description: 'Early mornings, long treks = consistent work ethic.'
    },
    {
      icon: '🤝',
      title: 'Teamwork',
      description: 'Group treks refine communication & leadership.'
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: 100,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="trekking" ref={sectionRef} className="relative min-h-screen py-32 px-6 overflow-hidden" data-scroll-section>
      {/* Parallax Background */}
      <div ref={bgRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        <div className="w-full h-full bg-gradient-to-br from-neon-blue/10 via-transparent to-neon-violet/10 flex items-center justify-center">
          <span className="text-9xl opacity-10">⛰️</span>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
            Where the Trails Shape My <span className="gradient-text">Strength</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Trekking has taught me grit, patience, problem-solving, and mental endurance.
            Every climb feels like debugging a complex system — tough at first, but rewarding at the summit.
          </p>
        </motion.div>

        {/* Strengths Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {strengths.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-effect rounded-2xl p-6 text-center"
            >
              <div className="text-5xl mb-4">{strength.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-neon-blue">{strength.title}</h3>
              <p className="text-gray-400">{strength.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Trekking Images Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((item, index) => (
            <div
              key={item}
              className="h-[400px] glass-effect rounded-2xl overflow-hidden group cursor-pointer relative border border-white/10 hover:border-neon-violet/50 transition-all duration-300 hover:-translate-y-3"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true, amount: 0.3 }}
                className="w-full h-full relative"
              >
                <img 
                  src={`/images/trek-${item}.jpeg`} 
                  alt={`Trekking ${item}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-neon-violet/0 via-transparent to-neon-blue/0 group-hover:from-neon-violet/20 group-hover:to-neon-blue/20 transition-all duration-300"></div>
                
                <div className="w-full h-full bg-gradient-to-br from-neon-violet/20 to-neon-blue/20 flex items-center justify-center" style={{display: 'none'}}>
                  <span className="text-6xl opacity-30">🏔️</span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {trekNames[index]}
                  </span>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trekking;
