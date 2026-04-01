import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu as MenuIcon, X, UtensilsCrossed, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';
import ThemeSwitcher from './ThemeSwitcher';

export default function Navbar({ cartCount }: { cartCount: number }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
      isScrolled ? "glass-nav py-3" : "bg-transparent py-6"
    )}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              whileHover={{ rotate: 15, scale: 1.1 }}
              className="w-11 h-11 bg-brand-dark rounded-xl flex items-center justify-center shadow-xl shadow-brand-dark/20"
            >
              <UtensilsCrossed className="text-brand-gold w-6 h-6" />
            </motion.div>
            <div className="flex flex-col">
              <span className={cn(
                "text-2xl font-serif font-bold tracking-tight transition-colors duration-300",
                "text-brand-cream"
              )}>
                mswills demo
              </span>
              <span className={cn(
                "text-[9px] uppercase tracking-[0.3em] font-bold transition-colors duration-300",
                "text-brand-gold"
              )}>
                Premium Culinary Experience
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "text-xs font-bold uppercase tracking-widest transition-all duration-300 relative group",
                  location.pathname === link.path ? "text-brand-gold" : "text-brand-cream/70 hover:text-brand-gold"
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute -bottom-1 left-0 h-0.5 bg-brand-gold transition-all duration-300",
                  location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
                )}></span>
              </Link>
            ))}
            
            <div className="flex items-center space-x-6 pl-6 border-l border-brand-dark/10">
              <ThemeSwitcher />
              <Link to="/cart" className="relative p-2 group transition-colors">
                <ShoppingCart className={cn(
                  "w-5 h-5 transition-colors",
                  "text-brand-cream group-hover:text-brand-gold"
                )} />
                <AnimatePresence>
                  {cartCount > 0 && (
                    <motion.span 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      exit={{ scale: 0 }}
                      className="absolute -top-1 -right-1 bg-brand-gold text-brand-dark text-[9px] font-black w-4 h-4 flex items-center justify-center rounded-full shadow-lg"
                    >
                      {cartCount}
                    </motion.span>
                  )}
                </AnimatePresence>
              </Link>
              
              <Link to="/reservations" className="btn-premium btn-primary text-[11px] uppercase tracking-widest py-3 px-6 hover-glow">
                Reserve a Table
              </Link>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeSwitcher />
              <Link to="/cart" className="relative p-2 text-brand-cream">
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-brand-gold text-brand-dark text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="w-10 h-10 flex items-center justify-center bg-brand-dark text-brand-gold rounded-xl border border-brand-cream/5"
            >
              {isOpen ? <X className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] md:hidden bg-brand-bg flex flex-col"
          >
            <div className="flex justify-between items-center p-8 border-b border-brand-cream/5 bg-brand-dark/50">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-brand-dark rounded-xl flex items-center justify-center border border-brand-cream/5 shadow-2xl">
                  <UtensilsCrossed className="text-brand-gold w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-xl text-brand-cream tracking-tight">mswills demo</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-12 h-12 flex items-center justify-center bg-brand-dark text-brand-gold rounded-full border border-brand-cream/5 hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="flex-grow flex flex-col justify-center px-10 space-y-8 py-12 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={cn(
                      "text-5xl font-serif font-bold flex items-center justify-between group py-2",
                      location.pathname === link.path ? "text-brand-gold" : "text-brand-cream/30 hover:text-brand-cream transition-colors"
                    )}
                  >
                    <span className="relative">
                      {link.name}
                      {location.pathname === link.path && (
                        <motion.span 
                          layoutId="activeNavMobile"
                          className="absolute -left-6 top-1/2 -translate-y-1/2 w-2 h-2 bg-brand-gold rounded-full"
                        />
                      )}
                    </span>
                    <ChevronRight className={cn(
                      "w-8 h-8 transition-all duration-500",
                      location.pathname === link.path ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    )} />
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 space-y-8 bg-brand-dark/30 border-t border-brand-cream/5">
              <Link 
                to="/reservations" 
                onClick={() => setIsOpen(false)} 
                className="w-full btn-premium btn-primary py-6 text-sm uppercase tracking-widest flex items-center justify-center space-x-3 shadow-2xl shadow-brand-gold/10"
              >
                <UtensilsCrossed className="w-4 h-4" />
                <span>Reserve a Table</span>
              </Link>
              <div className="text-center space-y-2">
                <p className="text-[10px] text-brand-gold font-bold uppercase tracking-[0.4em]">
                  Custom demo prepared for your business
                </p>
                <p className="text-[9px] text-brand-cream/20 uppercase tracking-widest font-medium">
                  Designed & Developed by Mustafa
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
