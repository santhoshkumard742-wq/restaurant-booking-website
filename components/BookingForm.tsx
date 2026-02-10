
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, Calendar, Users, Clock, Phone, Mail, User } from 'lucide-react';
import { TIME_SLOTS } from '../constants';
import { BookingData, FormErrors } from '../types';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: 2
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: FormErrors = {};
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.date) newErrors.date = 'Please select a date';
    if (!formData.time) newErrors.time = 'Please select a time';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(true);
      }, 1500);
    }
  };

  const inputClasses = (error?: string) => `
    w-full bg-white/5 border ${error ? 'border-red-500' : 'border-white/20'} 
    focus:border-gold rounded-xl px-12 py-4 text-white placeholder-gray-400 
    outline-none transition-all
  `;

  return (
    <section id="booking" className="py-24 bg-brown-900 relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-gold font-serif text-lg tracking-widest uppercase mb-4 block">Reservations</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Book Your Table</h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Secure your spot for an unforgettable culinary journey. 
            For groups larger than 10, please call us directly.
          </p>
        </div>

        <AnimatePresence mode="wait">
          {!isSuccess ? (
            <motion.form
              key="booking-form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Name */}
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className={inputClasses(errors.name)}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 ml-4">{errors.name}</p>}
                </div>

                {/* Email */}
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={inputClasses(errors.email)}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 ml-4">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className={inputClasses(errors.phone)}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 ml-4">{errors.phone}</p>}
                </div>

                {/* Guests */}
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                  <select
                    value={formData.guests}
                    onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
                    className={`${inputClasses()} appearance-none`}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => (
                      <option key={n} value={n} className="bg-brown-900">{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                    ))}
                  </select>
                </div>

                {/* Date */}
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                  <input
                    type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={formData.date}
                    onChange={(e) => setFormData({...formData, date: e.target.value})}
                    className={inputClasses(errors.date)}
                  />
                  {errors.date && <p className="text-red-500 text-xs mt-1 ml-4">{errors.date}</p>}
                </div>

                {/* Time */}
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gold w-5 h-5" />
                  <select
                    value={formData.time}
                    onChange={(e) => setFormData({...formData, time: e.target.value})}
                    className={`${inputClasses(errors.time)} appearance-none`}
                  >
                    <option value="" className="bg-brown-900">Select Time Slot</option>
                    {TIME_SLOTS.map(time => (
                      <option key={time} value={time} className="bg-brown-900">{time}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-xs mt-1 ml-4">{errors.time}</p>}
                </div>
              </div>

              <div className="mt-12">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  className={`
                    w-full py-5 rounded-xl text-brown-900 font-bold text-xl uppercase tracking-widest
                    transition-all shadow-xl shadow-gold/20
                    ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gold hover:bg-gold-light'}
                  `}
                >
                  {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                </motion.button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success-ui"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-md p-16 rounded-3xl border border-white/10 text-center shadow-2xl"
            >
              <div className="flex justify-center mb-8">
                <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center shadow-2xl shadow-gold/40">
                  <CheckCircle2 className="w-12 h-12 text-brown-900" />
                </div>
              </div>
              <h3 className="text-4xl font-serif text-white mb-4">Reservation Confirmed!</h3>
              <p className="text-gray-300 text-lg mb-8 max-w-md mx-auto">
                Thank you, {formData.name}. We've sent a confirmation email to <span className="text-gold">{formData.email}</span>.
              </p>
              <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto mb-10 text-sm text-gray-400">
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="block text-gold font-bold uppercase tracking-tighter">Date</span>
                  {formData.date}
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="block text-gold font-bold uppercase tracking-tighter">Time</span>
                  {formData.time}
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="block text-gold font-bold uppercase tracking-tighter">Guests</span>
                  {formData.guests} Persons
                </div>
                <div className="bg-white/5 p-4 rounded-xl">
                  <span className="block text-gold font-bold uppercase tracking-tighter">Ref</span>
                  #SG-{Math.floor(Math.random()*10000)}
                </div>
              </div>
              <button
                onClick={() => {
                  setIsSuccess(false);
                  setFormData({ name: '', phone: '', email: '', date: '', time: '', guests: 2 });
                }}
                className="text-gold font-bold uppercase tracking-widest hover:text-white transition-colors"
              >
                Make Another Booking
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BookingForm;
