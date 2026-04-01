import React from 'react';
import Hero from '../components/Hero';
import FeaturedDishes from '../components/FeaturedDishes';
import WhyChooseUs from '../components/WhyChooseUs';
import Reviews from '../components/Reviews';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function Home({ onAddToCart }: { onAddToCart: (id: string) => void }) {
  return (
    <main>
      <Hero />
      <FeaturedDishes onAddToCart={onAddToCart} />
      <WhyChooseUs />
      <Reviews />
      
      {/* CTA Banner */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-brand-brown rounded-[40px] p-12 md:p-20 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1920" 
              alt="Pattern" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-brand-cream mb-6">
              Order your favorite <br /> meal today
            </h2>
            <p className="text-brand-cream/70 text-lg mb-10 max-w-xl mx-auto">
              Join thousands of happy customers enjoying the best Canadian cuisine 
              delivered straight to their doorstep.
            </p>
            <Link to="/menu" className="btn-premium bg-brand-gold text-brand-dark hover:bg-brand-gold-light inline-flex items-center space-x-2 glow-hover">
              <span>Start Your Order</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
