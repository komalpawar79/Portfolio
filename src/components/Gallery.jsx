import { motion } from 'framer-motion';

const Gallery = () => {
  const images = [
    { id: 1, span: 'md:col-span-1 md:row-span-2', icon: '👩💻', label: 'Coding Setup' },
    { id: 2, span: 'md:col-span-2 md:row-span-1', icon: '🏔️', label: 'Trek View' },
    { id: 3, span: 'md:col-span-1 md:row-span-1', icon: '📸', label: 'coding + Coffee' },
    { id: 4, span: 'md:col-span-1 md:row-span-2', icon: '⛰️', label: 'Kalsubai' },
    { id: 5, span: 'md:col-span-1 md:row-span-1', icon: '🌄', label: 'Sunrise Trek' },
    { id: 6, span: 'md:col-span-1 md:row-span-1', icon: '💼', label: 'Workspace' },
  ];

  return (
    <section id="gallery" className="min-h-screen py-32 px-6 relative overflow-hidden" data-scroll-section>
      {/* Floating Background Elements */}
      <div className="absolute top-40 left-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-violet/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-6xl md:text-7xl font-black mb-20 text-center"
        >
          Visual <span className="gradient-text">Journey</span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[250px]">
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, type: 'spring' }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -10 }}
              className={`${image.span} glass-effect rounded-2xl overflow-hidden group cursor-pointer relative border border-white/10 hover:border-neon-blue/50 transition-all duration-300`}
            >
              <img 
                src={`/images/gallery-${image.id}.${image.id === 1 ? 'png' : 'jpg'}`} 
                alt={image.label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/0 via-transparent to-neon-violet/0 group-hover:from-neon-blue/20 group-hover:to-neon-violet/20 transition-all duration-300"></div>
              <div className="w-full h-full bg-gradient-to-br from-neon-blue/20 via-neon-violet/20 to-neon-pink/20 flex flex-col items-center justify-center" style={{display: 'none'}}>
                <motion.span
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="text-6xl mb-4 opacity-40 group-hover:opacity-60 transition-opacity"
                >
                  {image.icon}
                </motion.span>
                <span className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {image.label}
                </span>
              </div>
              
              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6">
                <span className="text-white font-bold text-xl tracking-wide transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {image.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
