import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Trekking from './components/Trekking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';

function App() {
  const scrollRef = useRef(null);
  const locomotiveScrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      locomotiveScrollRef.current = new LocomotiveScroll({
        el: scrollRef.current,
        smooth: true,
        multiplier: 1,
        class: 'is-reveal',
        smartphone: {
          smooth: true
        },
        tablet: {
          smooth: true
        }
      });

      return () => {
        if (locomotiveScrollRef.current) {
          locomotiveScrollRef.current.destroy();
        }
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <div ref={scrollRef} data-scroll-container>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Trekking />
        <Gallery />
        <Contact />
      </div>
    </>
  );
}

export default App;
