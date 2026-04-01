import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Truck, ShieldCheck, Award, Sparkles } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    {
      icon: <Leaf className="w-6 h-6" />,
      title: "Ethical Sourcing",
      description: "We partner exclusively with regenerative Canadian farms that prioritize the land."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Artisanal Delivery",
      description: "Temperature-controlled logistics ensuring your meal arrives exactly as the chef intended."
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Uncompromising Quality",
      description: "Every ingredient is inspected daily to meet our rigorous standards of excellence."
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Awarded Excellence",
      description: "Recognized as a leader in modern Canadian gastronomy for five consecutive years."
    }
  ];

  return (
    <section className="section-padding bg-brand-dark text-brand-cream overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-6"
            >
              <Sparkles className="w-5 h-5 text-brand-gold" />
              <span className="text-brand-gold font-bold text-[10px] uppercase tracking-[0.4em]">mswills demo Standard</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-serif font-bold mb-8 leading-tight"
            >
              A Commitment to <br /> <span className="italic text-brand-gold-light">Pure Excellence</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-brand-cream/60 text-lg mb-12 leading-relaxed max-w-xl"
            >
              We believe that fine dining is more than just a meal—it's a responsibility. 
              From the soil to your table, every step is handled with artisanal care.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-2 gap-8"
            >
              <div className="space-y-2">
                <p className="text-4xl font-serif font-bold text-brand-gold">100%</p>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-cream/40">Traceable</p>
              </div>
              <div className="space-y-2">
                <p className="text-4xl font-serif font-bold text-brand-gold">50+</p>
                <p className="text-xs uppercase tracking-widest font-bold text-brand-cream/40">Local Partners</p>
              </div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-[32px] hover:bg-brand-cream/5 transition-all group"
              >
                <div className="w-14 h-14 bg-brand-gold/20 rounded-2xl flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-serif font-bold mb-3 text-brand-cream">{feature.title}</h3>
                <p className="text-brand-cream/40 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
