
import React from 'react';
import { motion } from 'framer-motion';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="features" className="py-24 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block">The Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-6">Why Choose Spice Garden?</h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-lg border border-gold/10 text-center flex flex-col items-center group transition-all"
            >
              <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-brown-900 group-hover:text-gold transition-colors duration-300 shadow-inner">
                {feature.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-brown-900 mb-4">{feature.title}</h3>
              <p className="text-brown-700 text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
