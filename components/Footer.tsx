
import React from 'react';
import { UtensilsCrossed, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-900 text-white pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <UtensilsCrossed className="text-gold w-8 h-8" />
              <span className="text-2xl font-serif font-bold text-white tracking-wider">SPICE GARDEN</span>
            </div>
            <p className="text-white/50 leading-relaxed">
              Exquisite flavors, premium atmosphere, and unforgettable memories. Join us for a unique culinary experience that celebrates the art of fine dining.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gold hover:bg-gold hover:text-brown-900 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8 border-b border-gold/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-white/60 hover:text-gold transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/60 hover:text-gold transition-colors">About Our Story</a></li>
              <li><a href="#menu" className="text-white/60 hover:text-gold transition-colors">Gourmet Menu</a></li>
              <li><a href="#booking" className="text-white/60 hover:text-gold transition-colors">Table Booking</a></li>
              <li><a href="#contact" className="text-white/60 hover:text-gold transition-colors">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8 border-b border-gold/30 pb-2 inline-block">Recent News</h4>
            <div className="space-y-6">
              <div className="group cursor-pointer">
                <span className="text-gold text-xs font-bold block mb-1 uppercase tracking-widest">Oct 12, 2023</span>
                <p className="text-white/80 group-hover:text-gold transition-colors">Winning the Culinary Excellence Award for 2023</p>
              </div>
              <div className="group cursor-pointer">
                <span className="text-gold text-xs font-bold block mb-1 uppercase tracking-widest">Sep 28, 2023</span>
                <p className="text-white/80 group-hover:text-gold transition-colors">New Autumn Flavors Menu is now available</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-serif font-bold mb-8 border-b border-gold/30 pb-2 inline-block">Newsletter</h4>
            <p className="text-white/60 mb-6">Subscribe to get the latest updates and exclusive offers.</p>
            <form className="flex flex-col gap-4">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white outline-none focus:border-gold transition-all"
              />
              <button className="bg-gold text-brown-900 font-bold py-3 rounded-full hover:bg-gold-light transition-all">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© 2024 Spice Garden Restaurant. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
