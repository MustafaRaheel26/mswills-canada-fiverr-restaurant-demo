import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, Clock, Users, Send, CheckCircle, Utensils } from 'lucide-react';

export default function Reservation() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-40 pb-32 bg-brand-bg overflow-hidden relative min-h-screen">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              Reservations
            </span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-brand-cream mb-8 leading-[1.1]">
              Book Your <br />
              <span className="text-brand-gold italic">Table</span>
            </h1>
            <p className="text-brand-cream/60 text-lg leading-relaxed">
              Join us for an unforgettable culinary journey. Secure your spot at mswills demo 
              and experience the finest Canadian flavors.
            </p>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-brand-dark p-8 md:p-16 rounded-[56px] border border-white/5 shadow-2xl relative overflow-hidden"
          >
            {/* Form Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <AnimatePresence mode="wait">
              {formState === 'success' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                    <CheckCircle className="w-12 h-12" />
                  </div>
                  <h3 className="text-4xl font-serif font-bold text-brand-cream mb-6">Table Reserved</h3>
                  <p className="text-brand-cream/50 mb-12 max-w-sm mx-auto leading-relaxed">
                    Your reservation has been confirmed. A confirmation email has been sent to your inbox. 
                    We look forward to serving you!
                  </p>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-10 py-5 bg-brand-gold text-brand-dark rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-light transition-all duration-500 hover-lift"
                  >
                    Make Another Reservation
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-10 relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        placeholder="Your Name"
                        className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all placeholder:text-brand-cream/20 text-brand-cream"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1">Email Address</label>
                      <input
                        required
                        type="email"
                        placeholder="your@email.com"
                        className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all placeholder:text-brand-cream/20 text-brand-cream"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1 flex items-center gap-2">
                        <Calendar className="w-3 h-3" /> Date
                      </label>
                      <input
                        required
                        type="date"
                        className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all text-brand-cream"
                      />
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> Time
                      </label>
                      <select className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all text-brand-cream appearance-none">
                        <option>17:00</option>
                        <option>18:00</option>
                        <option>19:00</option>
                        <option>20:00</option>
                        <option>21:00</option>
                      </select>
                    </div>
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1 flex items-center gap-2">
                        <Users className="w-3 h-3" /> Guests
                      </label>
                      <select className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all text-brand-cream appearance-none">
                        <option>1 Person</option>
                        <option>2 People</option>
                        <option>3 People</option>
                        <option>4 People</option>
                        <option>5+ People</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1">Special Requests</label>
                    <textarea
                      rows={4}
                      placeholder="Any dietary requirements or special occasions?"
                      className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all placeholder:text-brand-cream/20 resize-none text-brand-cream"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={formState === 'submitting'}
                    className="w-full bg-brand-gold text-brand-dark rounded-2xl py-6 text-xs font-bold uppercase tracking-[0.3em] flex items-center justify-center space-x-4 hover:bg-brand-gold-light transition-all duration-700 hover-lift group"
                  >
                    {formState === 'submitting' ? (
                      <div className="w-5 h-5 border-2 border-brand-dark/30 border-t-brand-dark rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Utensils className="w-4 h-4 group-hover:rotate-12 transition-transform duration-500" />
                        <span>Confirm Reservation</span>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
