import React from 'react';
import { motion } from 'motion/react';
import { Heart, Leaf, Users, Award } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion for Cooking",
      description: "Every dish is a labor of love, crafted with traditional techniques and modern flair."
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Local Ingredients",
      description: "We source 80% of our ingredients from within a 200km radius of our kitchen."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community First",
      description: "Proudly serving our Canadian neighbors and supporting local food initiatives."
    }
  ];

  return (
    <div className="pt-40 pb-32 bg-brand-bg overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-brand-gold/5 rounded-full blur-[150px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-48">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-8">
              Our Story
            </span>
            <h1 className="text-6xl md:text-7xl font-serif font-bold text-brand-cream mb-10 leading-[1.1]">
              A Journey Through <br /> 
              <span className="text-brand-gold italic">mswills Flavors</span>
            </h1>
            <div className="space-y-8 text-brand-cream/60 text-lg leading-relaxed max-w-xl">
              <p>
                Founded in 2018, mswills demo began with a simple vision: to showcase 
                the incredible richness of Canadian ingredients in a way that feels both 
                sophisticated and comforting.
              </p>
              <p>
                Our founder, Chef Wills, spent years traveling from the rugged coasts of 
                Newfoundland to the fertile valleys of British Columbia, learning from local 
                producers and indigenous traditions.
              </p>
              <p>
                Today, we continue that journey by bringing those authentic flavors to your 
                table, ensuring that every bite tells a story of our beautiful land.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[80px] overflow-hidden shadow-2xl shadow-brand-dark/10 border border-brand-gold/10 relative group">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1000"
                alt="Chef Cooking"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute -bottom-12 -left-12 bg-brand-dark p-10 rounded-[40px] shadow-2xl border border-white/5 hidden md:block"
            >
              <div className="text-5xl font-serif font-bold text-brand-gold mb-2">15+</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40">Years of Culinary<br />Excellence</div>
            </motion.div>
            
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl pointer-events-none" />
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-brand-dark rounded-[80px] p-16 md:p-32 mb-48 shadow-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          
          <div className="text-center max-w-3xl mx-auto mb-24 relative z-10">
            <h2 className="text-5xl font-serif font-bold text-brand-cream mb-8">What We Stand For</h2>
            <p className="text-brand-cream/50 text-lg leading-relaxed">
              Our values guide every decision we make, from the farmers we partner with 
              to the way we package our deliveries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-20 relative z-10">
            {values.map((value, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-brand-bg rounded-3xl flex items-center justify-center text-brand-gold mx-auto mb-10 shadow-sm border border-white/5 group-hover:bg-brand-gold group-hover:text-brand-dark transition-all duration-500 group-hover:rotate-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-serif font-bold text-brand-cream mb-6">{value.title}</h3>
                <p className="text-brand-cream/50 text-sm leading-relaxed font-medium">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <div className="text-center mb-24">
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-gold/10 text-brand-gold font-bold text-[10px] uppercase tracking-[0.3em] mb-6">
              The Team
            </span>
            <h2 className="text-5xl font-serif font-bold text-brand-cream">Meet Our Visionaries</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "mswills", role: "Executive Chef", img: "https://i.pravatar.cc/600?u=1" },
              { name: "Sophie Laurent", role: "Pastry Chef", img: "https://i.pravatar.cc/600?u=2" },
              { name: "David Miller", role: "Operations Manager", img: "https://i.pravatar.cc/600?u=3" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                whileHover={{ y: -15 }}
                className="group"
              >
                <div className="aspect-[4/5] rounded-[48px] overflow-hidden mb-10 shadow-xl shadow-black/40 border border-white/5 relative">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-bg/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-2xl font-serif font-bold text-brand-cream mb-2">{member.name}</h4>
                <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
