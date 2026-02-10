
import React from 'react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const titleText = "Reserve Your Table.";
  const titleText2 = "Enjoy the Flavor.";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.3,
      },
    },
  };

  // Added explicit Variants type and used 'as const' for the transition type to avoid string inference errors
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { type: "spring" as const, damping: 12, stiffness: 200 },
    },
  };

  const floatingIcon = (delay: number, top: string, left: string) => (
    <motion.div
      animate={{ 
        y: [0, -20, 0],
        rotate: [0, 10, -10, 0],
        scale: [1, 1.1, 1]
      }}
      transition={{ 
        duration: 5, 
        repeat: Infinity, 
        delay,
        ease: "easeInOut" 
      }}
      className="absolute pointer-events-none opacity-20"
      style={{ top, left }}
    >
      <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#D4AF37" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4.5 9.5 12 17l7.5-7.5L12 2z" />
        <path d="M12 22v-5" />
      </svg>
    </motion.div>
  );

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brown-900">
      {/* Background Image with Parallax-like movement */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070)' }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </motion.div>

      {/* Unique Floating Decorative Elements */}
      {floatingIcon(0, "20%", "15%")}
      {floatingIcon(2, "70%", "80%")}
      {floatingIcon(1, "15%", "85%")}
      {floatingIcon(3, "80%", "10%")}

      <div className="relative z-10 text-center px-4 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.span 
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.3em" }}
            transition={{ duration: 1 }}
            className="text-gold font-serif text-xl uppercase mb-8 block font-medium"
          >
            Authentic Chennai Flavors
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white mb-8 leading-tight perspective-1000">
            <div className="flex flex-wrap justify-center overflow-hidden">
              {titleText.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <div className="flex flex-wrap justify-center overflow-hidden text-gold italic">
              {titleText2.split("").map((char, i) => (
                <motion.span key={i} variants={letterVariants} className="inline-block">
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-white/80 text-lg md:text-2xl max-w-3xl mx-auto mb-12 font-light leading-relaxed font-sans"
          >
            Experience the finest South Indian and Continental fusion at Nungambakkam's most iconic destination.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.a
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212, 175, 55, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="bg-gold text-brown-900 px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto transition-all shadow-lg"
            >
              Secure a Table
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              href="#menu"
              className="border-2 border-white/50 text-white px-10 py-5 rounded-full font-bold text-lg w-full sm:w-auto transition-all backdrop-blur-md"
            >
              Explore Menu
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <div className="w-8 h-12 border-2 border-gold/30 rounded-full flex justify-center p-2">
          <motion.div 
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-1.5 h-1.5 bg-gold rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
