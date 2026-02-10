
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="py-24 bg-brown-900 relative overflow-hidden">
      {/* Background decoration */}
      <Quote className="absolute top-24 left-1/4 w-32 h-32 text-white/5 -rotate-12" />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block">Reviews</span>
          <h2 className="text-4xl font-serif text-white mb-6">What Our Guests Say</h2>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-3xl border border-white/10 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`w-5 h-5 ${i < TESTIMONIALS[index].rating ? 'text-gold fill-gold' : 'text-white/20'}`} />
                ))}
              </div>
              <p className="text-xl md:text-2xl font-serif italic text-white mb-8 leading-relaxed">
                "{TESTIMONIALS[index].comment}"
              </p>
              <div>
                <h4 className="text-gold font-bold text-lg">{TESTIMONIALS[index].name}</h4>
                <span className="text-white/50 text-sm uppercase tracking-widest">{TESTIMONIALS[index].role}</span>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center items-center mt-10 gap-6">
            <button 
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-brown-900 hover:border-gold transition-all"
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2 h-2 rounded-full transition-all ${i === index ? 'w-8 bg-gold' : 'bg-white/20'}`} 
                />
              ))}
            </div>
            <button 
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-gold hover:text-brown-900 hover:border-gold transition-all"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
