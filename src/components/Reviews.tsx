import React from 'react';
import { motion } from 'motion/react';
import { REVIEWS } from '../data/mockData';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
  return (
    <section className="py-32 bg-brand-bg overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-brand-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Guest Experiences</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-brand-cream tracking-tight leading-tight">
              Voices of <br />
              <span className="italic text-brand-gold">Excellence</span>
            </h2>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex -space-x-4">
              {REVIEWS.map((r) => (
                <img 
                  key={r.id} 
                  src={r.avatar} 
                  alt={r.name} 
                  className="w-12 h-12 rounded-full border-4 border-brand-bg object-cover"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <div className="text-sm">
              <div className="flex text-brand-gold mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-current" />
                ))}
              </div>
              <p className="text-brand-cream/40 font-bold uppercase tracking-widest text-[10px]">
                4.9/5 Average Rating
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-10 rounded-[40px] relative group hover:-translate-y-2 transition-all duration-500"
            >
              <Quote className="absolute top-8 right-10 w-16 h-16 text-brand-gold/5 group-hover:text-brand-gold/10 transition-colors" />
              
              <div className="flex text-brand-gold mb-8">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              
              <p className="text-brand-cream/70 text-xl font-serif italic mb-10 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center space-x-4 pt-8 border-t border-white/5">
                <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-lg">
                  <img 
                    src={review.avatar} 
                    alt={review.name} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-brand-cream text-lg tracking-tight">{review.name}</h4>
                  <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.2em]">{review.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
