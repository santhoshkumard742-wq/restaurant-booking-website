
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MENU_ITEMS } from '../constants';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'starters' | 'main' | 'desserts'>('starters');

  const categories: ('starters' | 'main' | 'desserts')[] = ['starters', 'main', 'desserts'];
  const filteredItems = MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block"
          >
            Signature Dishes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-serif text-brown-900 mb-6"
          >
            Chennai Fine Dining
          </motion.h2>
          
          <div className="flex justify-center items-center space-x-6 md:space-x-12 mt-12 overflow-x-auto pb-4 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-sm md:text-lg font-bold uppercase tracking-[0.3em] transition-all relative group flex-shrink-0 ${
                  activeCategory === cat ? 'text-brown-900' : 'text-gray-400 hover:text-brown-700'
                }`}
              >
                {cat}
                <motion.div 
                  className={`absolute -bottom-2 left-0 h-1 bg-gold rounded-full w-full origin-left ${activeCategory === cat ? 'scale-x-100' : 'scale-x-0'} group-hover:scale-x-100 transition-transform`}
                />
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 40, rotateY: 45 }}
                animate={{ opacity: 1, y: 0, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -45 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  damping: 15
                }}
                viewport={{ once: true }}
                className="group relative flex flex-col h-full bg-cream rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border border-gold/5"
              >
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                  <div className="absolute bottom-4 right-4 bg-brown-900/80 backdrop-blur-md text-gold px-6 py-2 rounded-2xl font-black text-lg border border-gold/20">
                    {item.price}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-serif font-black text-brown-900 mb-3 group-hover:text-gold transition-colors">
                      {item.name}
                    </h3>
                    <p className="text-brown-700 text-sm leading-relaxed font-medium line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                  <motion.button 
                    whileHover={{ gap: "1.5rem" }}
                    className="mt-6 flex items-center gap-4 text-xs font-black uppercase tracking-widest text-gold hover:text-brown-900 transition-all border-t border-gold/10 pt-4"
                  >
                    View Details <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <motion.a
            whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(45, 27, 20, 0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-brown-900 text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest hover:bg-brown-800 transition-all cursor-pointer shadow-xl"
          >
            View Full Digital Menu
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;
