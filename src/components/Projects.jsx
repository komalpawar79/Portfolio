import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectModal from "./ProjectModal";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "Me-Chitrakar Website",
      description:
        "Me-Chitrakar is a web platform that provides a wide range of free and premium graphic resources, including vectors, photos, illustrations, and templates for both personal and commercial use. ",
      longDescription: [
        "Me-Chitrakar is a website that offers a vast collection of free and premium graphic resources, including vectors, photos, illustrations, and templates for personal and commercial use. Users can search for and download high-quality graphics to use in their projects, such as presentations, websites, social media posts, and more. Additionally, Me-Chitrakar provides a platform for designers to showcase and sell their work.",
      ],
      features: [
        "Asset Exploration & Download",
        "Creator Monetization Ecosystem",
        "Smooth User Experience",
        "Modern Frontend Architecture",
        "Robust Backend System",
        "Scalable & Efficient Platform",
      ],
      techStack: {
        Frontend: ["React", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
        Backend: ["Node.js", "Express.js", "MongoDB"],
        Tools: ["JWT", "Stripe API", "Nodemailer"],
      },
      tech: ["React", "Tailwind CSS", "JavaScript", "Node.js"],
      gradient: "from-neon-blue to-neon-violet",
      liveDemo: "https://michitrakar.vercel.app/",
    },
    {
      title: "E-Shopping Cart",
      description:
        "I spearhead the development of an E-Shopping Cart Web Application using React js and Javascript , Showcasing my expertise in front-end Web Development and E-Commerce Solutions .",
      longDescription: [
        "The goal was to deliver a smooth, secure, and responsive online shopping experience. Users can browse products, manage their cart, and enjoy seamless navigation across devices. I focused on clean UI, real-time cart updates, and performance optimization.",
      ],
      features: [
        "Drag-and-drop interface",
        "Live preview mode",
        "Multiple theme templates",
        "Custom color schemes",
        "Export to HTML/PDF",
        "Responsive layouts",
      ],
      techStack: {
        Frontend: ["React", "JavaScript", "Tailwind CSS", "HTML5"],
      },
      tech: ["React", "Tailwind", "JavaScript", "HTML5"],
      gradient: "from-neon-violet to-neon-pink",
      liveDemo: "https://e-shopping-cart-orpin.vercel.app/",
    },
    {
      title: "Sidcup-golf-family-website",
      description:
        "Created a responsive, visually engaging front-end website inspired by a modern family-friendly entertainment brand.",
      longDescription: [
        "The interface includes animated cursors, immersive scroll interactions, and a background video to enhance user engagement. Built with HTML5, CSS3, and vanilla JavaScript, the project emphasizes structured content, smooth transitions, accessibility, and cross-device performance optimization.",
      ],
      features: [
        "Animated Custom Cursor",
        "Background Video Integration",
        "Interactive Hover & Transition Effects",
        "Scroll-Based Animations",
        "Semantic HTML5 Structure",
        "Cross-Device Compatibility",
      ],
      techStack: {
        Frontend: ['HTML5', 'CSS3', 'JavaScript'], 
        Tools:['ScrollTrigger', 'GSAP']
      },
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      gradient: "from-neon-pink to-neon-blue",
      github: "https://github.com/komalpawar79/Salon-Website-using-React.js",
      liveDemo: "https://sidcup-golf-family-website-using-ht.vercel.app/",
    },
    {
      title: "Premium Salon & Spa Website  Project",
      description:
        "Developed a suite of five premium, customizable website templates tailored for salon and spa businesses.",
      longDescription: [
        "Created five customizable, responsive templates for salon and spa brands, featuring clean layouts, smooth navigation, and scalable, reusable components. Focused on accessible, performance-optimized design that delivers a premium user experience.",
      ],
      features: [
        "Customizable Template System",
        "Clean & Premium Visual Aesthetic",
        "SEO-Friendly Structure",
        "Scalability & Maintainability",
        "Modern User Interface Interactions",
       
      ],
      techStack: {
        Frontend: ["HTML5" , "JavaScript ES6+",  "CSS3" ,"GSAP",],
      
      },
      tech: ["HTML5" , "JavaScript ES6+",  "CSS3"],
      gradient: "from-neon-blue to-neon-pink",
      templates: [
        {
          name: "Shear-Style",
          github: "https://github.com/komalpawar79/Shear-Style",
          liveDemo: "https://shear-style.vercel.app/"
        },
        {
          name: "Lumina Salon",
          github: "https://github.com/komalpawar79/LUMINA-Salon",
          liveDemo: "https://lumina-salon.vercel.app/"
        },
        {
          name: "Glamorous Salon",
          github: "https://github.com/komalpawar79/GLAMOROUS-Salon-",
          liveDemo: "https://glamorous-salon.vercel.app/"
        },
        {
          name: "Luxe Salon",
          github: "https://github.com/komalpawar79/LUXE-Salon",
          liveDemo: "https://luxe-salon-tau.vercel.app/"
        },
        {
          name: "The Green Comb",
          github: "https://github.com/komalpawar79/The-Green-Comb",
          liveDemo: "https://the-green-comb.vercel.app/"
        }
      ],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 60,
          duration: 0.8,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
          delay: index * 0.15,
        });

        gsap.to(card, {
          y: -30 * (index % 2 === 0 ? 1 : -1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 relative overflow-hidden"
      data-scroll-section
    >
      {/* Floating Background Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-neon-violet/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-neon-blue/10 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black mb-20 text-center"
        >
          Featured <span className="gradient-text">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative glass-effect rounded-2xl p-8 overflow-hidden cursor-pointer border border-white/10 hover:border-neon-blue/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,240,255,0.3)] hover:-translate-y-2"
            >
              {/* Gradient Corner */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`}
              ></div>

              {/* Gradient Overlay on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  viewport={{ once: true }}
                  className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300"
                >
                  {project.icon}
                </motion.div>

                <h3 className="text-3xl font-bold mb-4 group-hover:text-neon-blue transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + techIndex * 0.05 + 0.5,
                      }}
                      viewport={{ once: true }}
                      className="px-4 py-2 bg-white/5 rounded-full text-sm border border-white/10 group-hover:border-neon-blue/50 group-hover:bg-white/10 transition-all duration-300"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* CTA Link */}
                <motion.button
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 text-neon-blue font-semibold group-hover:gap-4 transition-all duration-300"
                >
                  View Project
                  <span className="group-hover:translate-x-1 transition-transform duration-300">
                    →
                  </span>
                </motion.button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};

export default Projects;
