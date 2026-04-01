import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/mockData';
import { Plus, Search, Filter } from 'lucide-react';
import { cn } from '../lib/utils';

export default function Menu({ onAddToCart }: { onAddToCart: (id: string) => void }) {
  const categories = ['All', 'Starters', 'Main Courses', 'Desserts', 'Drinks'];
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = MENU_ITEMS.filter(item => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      {/* Menu Hero */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=1920" 
            alt="Menu Background" 
            className="w-full h-full object-cover opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-bg via-brand-bg/20 to-brand-bg" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">mswills demo Selection</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold text-brand-cream mb-8 tracking-tight">
              Our <span className="italic text-brand-gold">Menu</span>
            </h1>
            <p className="text-brand-cream/60 max-w-2xl mx-auto text-lg leading-relaxed">
              Experience the finest seasonal ingredients, sourced locally and prepared 
              with artisanal precision for an unforgettable dining experience.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Filters & Search */}
        <div className="sticky top-[68px] z-30 mb-12 md:mb-16 py-4 md:py-6 bg-brand-bg/95 backdrop-blur-xl border-y border-white/5">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
            <div className="flex overflow-x-auto pb-1 md:pb-0 w-full md:w-auto gap-2 md:gap-3 px-2 md:px-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-xs font-bold tracking-widest uppercase transition-all duration-500 whitespace-nowrap shrink-0",
                    activeCategory === cat 
                      ? "bg-brand-gold text-brand-dark shadow-xl shadow-brand-gold/20" 
                      : "bg-brand-dark/40 text-brand-cream/40 border border-white/5 hover:border-brand-gold/30 hover:text-brand-gold"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full md:w-80 px-2 md:px-0">
              <Search className="absolute left-6 md:left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-brand-gold/50" />
              <input
                type="text"
                placeholder="Search our collection..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-brand-dark/40 border border-white/5 rounded-full pl-11 md:pl-12 pr-6 py-3.5 md:py-4 text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-brand-cream/20 text-brand-cream"
              />
            </div>
          </div>
        </div>

        {/* Menu Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] overflow-hidden rounded-[40px] mb-8 shadow-2xl shadow-black/40">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                  
                  <div className="absolute top-6 right-6">
                    <div className="bg-brand-dark/90 backdrop-blur-md px-4 py-2 rounded-2xl text-brand-gold font-bold text-sm shadow-xl border border-white/5">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                  
                  <div className="absolute bottom-8 left-8 right-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <button
                      onClick={() => onAddToCart(item.id)}
                      className="w-full py-4 bg-brand-gold text-brand-dark rounded-2xl font-bold text-sm flex items-center justify-center space-x-2 hover:bg-brand-gold-light transition-colors shadow-2xl"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add to Order</span>
                    </button>
                  </div>
                </div>

                <div className="px-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="w-8 h-[1px] bg-brand-gold" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-brand-cream mb-4 group-hover:text-brand-gold transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-brand-cream/50 text-sm leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-brand-cream/40 font-serif text-xl italic">No dishes found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
