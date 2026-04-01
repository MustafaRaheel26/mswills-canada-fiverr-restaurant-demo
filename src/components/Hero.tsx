import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Star, Play, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-brand-dark">
      {/* Background Image with Parallax-like Overlay */}
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, repeat: Infinity, repeatType: 'reverse' }}
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920"
          alt="Fine Dining"
          className="w-full h-full object-cover opacity-60"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-bg via-brand-bg/40 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full pt-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.div variants={itemVariants} className="flex items-center space-x-3 mb-6">
            <span className="w-12 h-px bg-brand-gold"></span>
            <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.4em]">
              mswills demo • Premium Experience
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-6xl md:text-8xl font-serif font-bold text-brand-cream leading-[1.1] mb-8 text-balance">
            Elevated <span className="italic text-brand-gold-light">Canadian</span> <br />
            Culinary Artistry
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-brand-cream/70 mb-12 leading-relaxed max-w-xl text-balance">
            Experience a symphony of flavors crafted from the finest heritage ingredients 
            sourced across the Canadian landscape.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-6 mb-16">
            <Link to="/menu" className="btn-premium btn-gold group w-full sm:w-auto hover-glow">
              <span>Explore the Menu</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/reservations" className="btn-premium btn-outline group w-full sm:w-auto border-brand-cream/20 text-brand-cream hover:bg-brand-cream hover:text-brand-dark transition-all">
              <span>Reserve a Table</span>
            </Link>
          </motion.div>

          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-8 border-t border-brand-cream/10">
            <div className="space-y-1">
              <div className="flex items-center text-brand-gold">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <p className="text-brand-cream font-bold text-sm">Michelin Recommended</p>
              <p className="text-[9px] text-brand-cream/40 uppercase tracking-widest">Excellence in Service</p>
            </div>
            <div className="space-y-1">
              <p className="text-brand-cream font-bold text-xl">100%</p>
              <p className="text-brand-cream font-bold text-sm">Locally Sourced</p>
              <p className="text-[9px] text-brand-cream/40 uppercase tracking-widest">Heritage Ingredients</p>
            </div>
            <div className="hidden md:block space-y-1">
              <div className="w-8 h-8 bg-brand-gold/20 rounded-lg flex items-center justify-center text-brand-gold mb-2">
                <Award className="w-4 h-4" />
              </div>
              <p className="text-brand-cream font-bold text-sm">Top 50 Canada</p>
              <p className="text-[9px] text-brand-cream/40 uppercase tracking-widest">Best New Restaurants</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <span className="text-[8px] text-brand-cream/30 uppercase tracking-[0.4em] font-bold">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
}
