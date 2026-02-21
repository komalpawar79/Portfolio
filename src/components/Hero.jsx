import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Hero = () => {
  const heroRef = useRef(null);
  const layer1Ref = useRef(null);
  const layer2Ref = useRef(null);
  const layer3Ref = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax layers
      gsap.to(layer1Ref.current, {
        y: 150,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.to(layer2Ref.current, {
        y: 100,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      gsap.to(layer3Ref.current, {
        y: 50,
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

      // Scroll indicator animation
      gsap.to(scrollIndicatorRef.current, {
        y: 15,
        opacity: 0.5,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: 'power1.inOut'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden" data-scroll-section>
      {/* Parallax Background Layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-radial from-neon-violet/5 via-transparent to-transparent"></div>
        <div ref={layer1Ref} className="absolute top-20 left-10 w-96 h-96 bg-neon-blue/20 rounded-full blur-3xl"></div>
        <div ref={layer2Ref} className="absolute bottom-20 right-10 w-80 h-80 bg-neon-violet/20 rounded-full blur-3xl"></div>
        <div ref={layer3Ref} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neon-pink/10 rounded-full blur-3xl"></div>
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Floating Geometric Shapes */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/4 left-1/4 w-20 h-20 border-2 border-neon-blue/30"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -180, -360] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1/4 right-1/4 w-16 h-16 border-2 border-neon-violet/30 rotate-45"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="text-7xl md:text-9xl font-black mb-6 leading-none tracking-wide">
            <span className="gradient-text drop-shadow-[0_0_12px_rgba(181,55,255,0.35)]">Komal Pawar</span>
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-2xl md:text-4xl font-light mb-8 text-gray-300 leading-relaxed"
        >
          Crafting Modern Web Experiences with <span className="text-neon-blue font-semibold">MERN Stack</span> + Creative UI Animations
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Modern web applications built with the MERN stack. Clean, reliable, and focused on real-world usability.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex gap-6 justify-center flex-wrap"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 240, 255, 0.6)' }}
            whileTap={{ scale: 0.95, y: 2 }}
            className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-violet rounded-full text-white font-semibold text-lg shadow-lg shadow-neon-blue/50 border border-neon-blue/30"
          >
            View Work
          </motion.a>
          <motion.a
            href="/Resume.pdf"
            download="Komal_Pawar_Resume.pdf"
            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(181, 55, 255, 0.4)' }}
            whileTap={{ scale: 0.95, y: 2 }}
            className="px-8 py-4 glass-effect rounded-full text-white font-semibold text-lg"
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-16 left-1/2 -translate-x-1/2 z-10 cursor-pointer"
      >
        <div className="w-8 h-14 border-2 border-white/40 rounded-full flex justify-center pt-3">
          <div className="w-1.5 h-4 bg-neon-blue rounded-full"></div>
        </div>
        <p className="text-xs text-gray-400 mt-2 text-center">Scroll</p>
      </div>
    </section>
  );
};

export default Hero;
