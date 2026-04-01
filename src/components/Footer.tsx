import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, UtensilsCrossed } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-cream pt-24 pb-12 overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/5 skew-x-12 translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-brand-gold rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:rotate-12">
                <UtensilsCrossed className="text-brand-dark w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-tight uppercase">mswills</span>
                <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-brand-gold">demo</span>
              </div>
            </Link>
            <p className="text-brand-cream/40 text-sm leading-relaxed max-w-xs">
              Elevating Canadian culinary traditions through artisanal preparation and 
              locally sourced seasonal ingredients.
            </p>
            <div className="flex space-x-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-xl bg-brand-cream/5 flex items-center justify-center text-brand-cream/60 hover:bg-brand-gold hover:text-brand-dark transition-all duration-500 hover:-translate-y-1"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-10">Navigation</h4>
            <ul className="space-y-4 text-sm text-brand-cream/40">
              {['Home', 'Menu', 'Our Story', 'Contact', 'Admin Dashboard'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '')}`} 
                    className="hover:text-brand-gold transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <span className="w-0 h-[1px] bg-brand-gold transition-all duration-300 group-hover:w-4" />
                    <span>{item}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-10">Contact</h4>
            <ul className="space-y-6 text-sm text-brand-cream/40">
              <li className="flex items-start space-x-4">
                <MapPin className="w-5 h-5 text-brand-gold shrink-0" />
                <span className="leading-relaxed">123 Maple Avenue, Toronto,<br />ON M5V 2L7, Canada</span>
              </li>
              <li className="flex items-center space-x-4">
                <Phone className="w-5 h-5 text-brand-gold shrink-0" />
                <span>+1 (416) 555-0198</span>
              </li>
              <li className="flex items-center space-x-4">
                <Mail className="w-5 h-5 text-brand-gold shrink-0" />
                <span>hello@mswills.ca</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-10">Newsletter</h4>
            <p className="text-sm text-brand-cream/40 mb-6 leading-relaxed">
              Join our inner circle for exclusive seasonal updates and private events.
            </p>
            <form className="relative">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-brand-cream/5 border border-brand-cream/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:border-brand-gold/50 transition-all placeholder:text-brand-cream/20 text-brand-cream"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 bottom-2 px-6 bg-brand-gold text-brand-dark rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-brand-gold-light transition-all duration-500"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="pt-12 border-t border-brand-cream/5">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
            <div className="flex flex-col items-center md:items-start space-y-2">
              <p className="text-[10px] text-brand-cream/20 font-bold uppercase tracking-[0.2em]">
                © 2024 mswills demo. All rights reserved.
              </p>
              <p className="text-[10px] text-brand-gold/60 font-bold uppercase tracking-[0.2em]">
                Custom demo prepared for your business
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end space-y-2">
              <p className="text-[10px] text-brand-cream/40 font-bold uppercase tracking-[0.2em] flex items-center space-x-2">
                <span>Designed & Developed by</span>
                <span className="text-brand-cream">Mustafa</span>
              </p>
              <div className="flex space-x-6 text-[10px] text-brand-cream/20 font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-brand-gold transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand-gold transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
