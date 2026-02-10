
import React, { useState, useEffect } from 'react';
import { Menu, X, UtensilsCrossed } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Booking', href: '#booking' },
    { name: 'Features', href: '#features' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? 'bg-brown-900/90 backdrop-blur-xl shadow-2xl py-3 border-b border-white/5' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="bg-gold p-2 rounded-lg group-hover:rotate-12 transition-transform">
              <UtensilsCrossed className="text-brown-900 w-6 h-6" />
            </div>
            <span className="text-xl md:text-2xl font-serif font-black text-white tracking-widest">
              SPICE <span className="text-gold">GARDEN</span>
            </span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ y: -2 }}
                className="relative px-4 py-2 text-white/80 hover:text-gold transition-colors font-semibold text-xs tracking-widest uppercase group overflow-hidden"
              >
                <span className="relative z-10">{link.name}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#booking"
              className="ml-4 bg-gold hover:bg-gold-light text-brown-900 px-8 py-3 rounded-xl font-black transition-all shadow-lg text-xs tracking-widest"
            >
              BOOK NOW
            </motion.a>
          </div>

          {/* Mobile Nav Toggle */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden"
          >
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-white p-2 rounded-lg bg-white/10 backdrop-blur-md"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            animate={{ opacity: 1, clipPath: 'circle(150% at 100% 0%)' }}
            exit={{ opacity: 0, clipPath: 'circle(0% at 100% 0%)' }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 bg-brown-900 z-40 md:hidden flex flex-col items-center justify-center space-y-10"
          >
            <div className="absolute top-10 right-10">
               <button onClick={() => setIsOpen(false)} className="text-white bg-white/10 p-4 rounded-full">
                  <X size={32} />
               </button>
            </div>
            {navLinks.map((link, i) => (
              <motion.a
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-white text-4xl font-serif font-bold hover:text-gold transition-colors tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              href="#booking"
              onClick={() => setIsOpen(false)}
              className="bg-gold text-brown-900 px-12 py-5 rounded-2xl font-black text-xl tracking-widest shadow-2xl"
            >
              BOOK TABLE
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
