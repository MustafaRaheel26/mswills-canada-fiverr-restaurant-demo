import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <div className="pt-40 pb-32 bg-brand-bg overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-24 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              Get In Touch
            </span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-brand-cream mb-8 leading-[1.1]">
              We'd Love to <br />
              <span className="text-brand-gold italic">Hear From You</span>
            </h1>
            <p className="text-brand-cream/60 text-lg leading-relaxed">
              Have questions about our menu, catering for a special event, or just want to say hello? 
              Our team is dedicated to providing an exceptional experience.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
          {/* Contact Info & Map */}
          <div className="lg:col-span-5 space-y-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12">
              {[
                { icon: MapPin, title: 'Our Location', content: '123 Maple Avenue, Toronto, ON M5V 2L7, Canada' },
                { icon: Phone, title: 'Phone Number', content: '+1 (416) 555-0198' },
                { icon: Mail, title: 'Email Address', content: 'hello@mswills.ca' },
                { icon: Clock, title: 'Opening Hours', content: 'Mon - Sun: 11am - 10pm' },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex items-start space-x-6 group"
                >
                  <div className="w-14 h-14 bg-brand-dark rounded-2xl flex items-center justify-center text-brand-gold shadow-sm border border-white/5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500 group-hover:rotate-6">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="pt-2">
                    <h4 className="font-bold text-brand-cream text-sm uppercase tracking-widest mb-2">{item.title}</h4>
                    <p className="text-brand-cream/50 text-sm leading-relaxed font-medium">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium Map Placeholder */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="aspect-[4/3] bg-brand-dark rounded-[48px] overflow-hidden relative group shadow-2xl shadow-brand-dark/5 border border-brand-gold/10"
            >
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Placeholder"
                className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 scale-110 group-hover:scale-100"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-brand-dark/90 backdrop-blur-md px-8 py-5 rounded-3xl shadow-2xl flex items-center space-x-4 border border-white/10 transform group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="w-10 h-10 bg-brand-gold rounded-xl flex items-center justify-center text-brand-dark shadow-lg shadow-brand-gold/30">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-bold text-brand-cream text-sm">Find us in Toronto</span>
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">View on Google Maps</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form Container */}
          <div className="lg:col-span-7">
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-brand-dark p-10 md:p-16 rounded-[56px] border border-white/5 shadow-2xl relative overflow-hidden"
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
                    <h3 className="text-4xl font-serif font-bold text-brand-cream mb-6">Message Received</h3>
                    <p className="text-brand-cream/50 mb-12 max-w-sm mx-auto leading-relaxed">
                      Thank you for reaching out. Our concierge team will review your message and respond within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormState('idle')}
                      className="px-10 py-5 bg-brand-gold text-brand-dark rounded-2xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-brand-gold-light transition-all duration-500 hover-lift"
                    >
                      Send Another Message
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
                    
                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1">Subject</label>
                      <select className="w-full bg-brand-bg border border-white/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 focus:bg-brand-dark transition-all text-brand-cream/60 appearance-none">
                        <option>General Inquiry</option>
                        <option>Catering Services</option>
                        <option>Private Events</option>
                        <option>Feedback</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-1">Your Message</label>
                      <textarea
                        required
                        rows={6}
                        placeholder="How can we assist you today?"
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
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                          <span>Send Message</span>
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
    </div>
  );
}
