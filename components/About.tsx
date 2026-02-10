
import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974" 
                alt="Chef preparing food" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-gold/10 -z-10 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-brown-900 p-8 rounded-xl shadow-2xl hidden md:block">
              <span className="text-gold text-5xl font-serif block mb-2">15+</span>
              <span className="text-white text-sm uppercase tracking-widest font-bold">Years of Excellence</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-6 leading-tight">
              A Symphony of Spices and Sophistication
            </h2>
            <p className="text-brown-700 text-lg mb-8 leading-relaxed">
              Founded in 2008, Spice Garden began with a simple mission: to elevate the perception of traditional cuisine. 
              Our chefs blend age-old family recipes with contemporary culinary artistry to create dishes that are both 
              familiar and wonderfully surprising.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <div className="border-l-2 border-gold pl-4">
                <h4 className="font-bold text-brown-900 mb-1">Authentic</h4>
                <p className="text-sm text-brown-700">Real flavors from around the globe.</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <h4 className="font-bold text-brown-900 mb-1">Passionate</h4>
                <p className="text-sm text-brown-700">Dedicated to culinary perfection.</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <h4 className="font-bold text-brown-900 mb-1">Exquisite</h4>
                <p className="text-sm text-brown-700">Refined dining in every detail.</p>
              </div>
            </div>

            <motion.button
              whileHover={{ x: 10 }}
              className="flex items-center gap-2 text-brown-900 font-bold uppercase tracking-widest"
            >
              Read Full Story <span className="text-gold">→</span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
