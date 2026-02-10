
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            viewport={{ once: true }}
          >
            <span className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-serif text-brown-900 mb-8">Visit Us in Chennai</h2>
            
            <div className="space-y-8">
              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 cursor-default"
              >
                <div className="bg-cream p-4 rounded-xl text-gold shadow-inner">
                  <MapPin />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brown-900 mb-1">Our Location</h4>
                  <p className="text-brown-700">No. 42, Khader Nawaz Khan Road, Nungambakkam<br />Chennai, Tamil Nadu 600006</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 cursor-default"
              >
                <div className="bg-cream p-4 rounded-xl text-gold shadow-inner">
                  <Phone />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brown-900 mb-1">Call Reservations</h4>
                  <p className="text-brown-700">+91 44 2822 1234<br />+91 98400 12345</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 cursor-default"
              >
                <div className="bg-cream p-4 rounded-xl text-gold shadow-inner">
                  <Clock />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-brown-900 mb-1">Opening Hours</h4>
                  <p className="text-brown-700">Lunch: 12:00 PM - 3:30 PM<br />Dinner: 7:00 PM - 11:30 PM</p>
                </div>
              </motion.div>
            </div>

            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-8 bg-brown-900 rounded-3xl text-white relative overflow-hidden group"
            >
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gold/10 rounded-full group-hover:scale-150 transition-transform duration-700" />
              <h4 className="text-gold font-serif text-2xl mb-4 relative z-10">Private Events</h4>
              <p className="text-white/70 mb-6 relative z-10">Looking for a premium venue in the heart of Chennai? Our banquet hall is perfect for your celebrations.</p>
              <button className="relative z-10 border-2 border-gold text-gold hover:bg-gold hover:text-brown-900 px-6 py-3 rounded-full font-bold uppercase tracking-widest transition-all">
                Inquire Now
              </button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, type: "spring", damping: 20 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-auto min-h-[400px] rounded-3xl overflow-hidden shadow-2xl relative border-4 border-cream"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.626884617!2d80.2458023!3d13.0645094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664030615555%3A0xc39f8295f7253b7c!2sKhader%20Nawaz%20Khan%20Rd%2C%20Nungambakkam%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1711000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
