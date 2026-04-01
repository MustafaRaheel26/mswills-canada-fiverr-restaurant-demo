import React from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS } from '../data/mockData';
import { Plus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FeaturedDishes({ onAddToCart }: { onAddToCart: (id: string) => void }) {
  const featured = MENU_ITEMS.slice(0, 3);

  return (
    <section className="section-padding bg-brand-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-4"
            >
              <span className="w-8 h-px bg-brand-gold"></span>
              <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em]">Chef's Selection</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold text-brand-cream"
            >
              Signature Seasonal <br /> <span className="italic text-brand-gold">Masterpieces</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link to="/menu" className="group flex items-center space-x-3 text-brand-cream font-bold text-xs uppercase tracking-widest">
              <span>View Full Menu</span>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-brand-gold group-hover:text-brand-dark transition-all">
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {featured.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[32px] aspect-[3/4] mb-8 shadow-2xl shadow-black/40">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/90 via-brand-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                  <p className="text-brand-cream/70 text-xs mb-4 line-clamp-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    {item.description}
                  </p>
                  <button
                    onClick={() => onAddToCart(item.id)}
                    className="w-full bg-brand-gold text-brand-dark py-4 rounded-2xl font-bold flex items-center justify-center space-x-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-150 hover:bg-brand-gold-light"
                  >
                    <Plus className="w-4 h-4" />
                    <span className="text-xs uppercase tracking-widest">Add to Order</span>
                  </button>
                </div>
                <div className="absolute top-6 right-6 bg-brand-dark/90 backdrop-blur-md px-4 py-2 rounded-2xl text-brand-gold font-bold text-sm border border-white/5">
                  ${item.price.toFixed(2)}
                </div>
              </div>
              <div className="px-2">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-2xl font-serif font-bold text-brand-cream group-hover:text-brand-gold transition-colors">{item.name}</h3>
                  <span className="text-[9px] uppercase tracking-widest font-black text-brand-gold bg-brand-gold/10 px-2 py-1 rounded">Featured</span>
                </div>
                <p className="text-brand-cream/50 text-sm leading-relaxed line-clamp-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
