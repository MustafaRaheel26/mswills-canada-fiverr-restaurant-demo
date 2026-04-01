import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/mockData';
import { Trash2, Plus, Minus, ShoppingBag, CreditCard, Truck, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CartProps {
  cart: { id: string; quantity: number }[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
  onClear: () => void;
}

export default function Cart({ cart, onUpdateQuantity, onRemove, onClear }: CartProps) {
  const [checkoutStep, setCheckoutStep] = useState<'cart' | 'checkout' | 'success'>('cart');
  
  const cartItems = cart.map(item => {
    const dish = MENU_ITEMS.find(d => d.id === item.id);
    return { ...dish, quantity: item.quantity };
  }).filter(item => item.id !== undefined);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price! * item.quantity), 0);
  const deliveryFee = subtotal > 0 ? 5.00 : 0;
  const total = subtotal + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    setCheckoutStep('success');
    onClear();
  };

  if (checkoutStep === 'success') {
    return (
      <div className="pt-48 pb-32 min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl w-full glass-card rounded-[60px] p-16 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-gold via-brand-accent to-brand-gold" />
          
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, delay: 0.2 }}
            className="w-24 h-24 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center mx-auto mb-10 shadow-2xl shadow-brand-gold/20"
          >
            <CheckCircle className="w-12 h-12" />
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-brand-cream mb-6">Order Confirmed</h2>
          <p className="text-brand-cream/50 mb-12 text-lg leading-relaxed">
            Thank you for choosing <span className="text-brand-gold font-bold italic">mswills demo</span>. 
            Our artisans are now preparing your meal with the utmost care. 
            Expect delivery in approximately 30-45 minutes.
          </p>
          
          <div className="grid grid-cols-2 gap-4 mb-12">
            <div className="bg-brand-dark/40 p-6 rounded-3xl border border-brand-cream/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/30 block mb-1">Order ID</span>
              <span className="text-brand-cream font-bold">#MDK-82910</span>
            </div>
            <div className="bg-brand-dark/40 p-6 rounded-3xl border border-brand-cream/5">
              <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/30 block mb-1">Estimated Time</span>
              <span className="text-brand-cream font-bold">12:45 PM</span>
            </div>
          </div>

          <Link to="/" className="btn-premium btn-primary w-full py-5 text-lg glow-hover">
            Return to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-48 pb-32 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div>
            <span className="text-brand-gold font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Your Selection</span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-brand-cream tracking-tight drop-shadow-sm">
              {checkoutStep === 'cart' ? 'Shopping ' : 'Complete '}
              <span className="italic text-brand-gold">{checkoutStep === 'cart' ? 'Cart' : 'Order'}</span>
            </h1>
          </div>
          <p className="text-brand-cream/50 max-w-sm text-sm leading-relaxed">
            {checkoutStep === 'cart' 
              ? 'Review your artisanal selections before we begin the preparation of your exquisite meal.' 
              : 'Provide your delivery details to finalize your premium dining experience.'}
          </p>
        </div>

        {cartItems.length === 0 && checkoutStep === 'cart' ? (
          <div className="text-center py-32 glass-card rounded-[60px]">
            <div className="w-24 h-24 bg-brand-dark/40 rounded-full flex items-center justify-center mx-auto mb-8 text-brand-gold/40">
              <ShoppingBag className="w-12 h-12" />
            </div>
            <p className="text-brand-cream/40 font-serif text-2xl italic mb-10">Your cart is currently empty.</p>
            <Link to="/menu" className="btn-premium btn-primary inline-flex">
              Explore Our Menu
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Left Column: Cart Items or Checkout Form */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {checkoutStep === 'cart' ? (
                  <motion.div
                    key="cart-list"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6"
                  >
                    {cartItems.map((item) => (
                      <div key={item.id} className="bg-brand-dark/60 p-8 rounded-[40px] border border-brand-cream/5 flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-8 hover:bg-brand-dark/80 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="w-32 h-32 rounded-[30px] overflow-hidden shrink-0 shadow-2xl border border-brand-cream/5 bg-brand-bg">
                          <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
                        </div>
                        <div className="flex-grow text-center sm:text-left">
                          <h3 className="font-serif font-bold text-brand-cream text-2xl mb-2 group-hover:text-brand-gold transition-colors">{item.name}</h3>
                          <p className="text-brand-gold font-bold text-lg tracking-tight">${item.price?.toFixed(2)}</p>
                        </div>
                        <div className="flex items-center space-x-6 bg-brand-bg/80 rounded-2xl px-6 py-3 border border-brand-cream/5 shadow-inner">
                          <button onClick={() => onUpdateQuantity(item.id!, -1)} className="text-brand-cream/40 hover:text-brand-gold transition-colors p-1">
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-brand-cream min-w-[24px] text-center text-lg">{item.quantity}</span>
                          <button onClick={() => onUpdateQuantity(item.id!, 1)} className="text-brand-cream/40 hover:text-brand-gold transition-colors p-1">
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button onClick={() => onRemove(item.id!)} className="p-3 text-brand-cream/20 hover:text-brand-accent transition-colors group/delete">
                          <Trash2 className="w-6 h-6 group-hover/delete:scale-110 transition-transform" />
                        </button>
                      </div>
                    ))}
                  </motion.div>
                ) : (
                  <motion.form
                    key="checkout-form"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    onSubmit={handleCheckout}
                    className="bg-brand-dark/60 p-10 md:p-16 rounded-[60px] border border-brand-cream/5 space-y-12"
                  >
                    <div className="space-y-8">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                          <Truck className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-brand-cream">Delivery Details</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-2">Full Name</label>
                          <input required type="text" className="w-full bg-brand-dark/40 border border-brand-cream/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 transition-all text-brand-cream" placeholder="John Doe" />
                        </div>
                        <div className="space-y-3">
                          <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-2">Phone Number</label>
                          <input required type="tel" className="w-full bg-brand-dark/40 border border-brand-cream/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 transition-all text-brand-cream" placeholder="+1 (416) 555-0100" />
                        </div>
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-cream/40 ml-2">Delivery Address</label>
                        <textarea required rows={3} className="w-full bg-brand-dark/40 border border-brand-cream/5 rounded-2xl px-8 py-5 text-sm focus:outline-none focus:border-brand-gold/50 transition-all resize-none text-brand-cream" placeholder="123 Street Name, Toronto, ON"></textarea>
                      </div>
                    </div>

                    <div className="space-y-8 pt-12 border-t border-brand-cream/5">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-brand-gold/10 rounded-2xl flex items-center justify-center text-brand-gold">
                          <CreditCard className="w-6 h-6" />
                        </div>
                        <h3 className="text-3xl font-serif font-bold text-brand-cream">Payment Method</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <label className="relative flex items-center justify-center p-6 rounded-3xl border-2 border-brand-cream/5 cursor-pointer hover:border-brand-gold/30 transition-all has-[:checked]:border-brand-gold has-[:checked]:bg-brand-gold/5">
                          <input type="radio" name="payment" className="sr-only" defaultChecked />
                          <span className="font-bold text-brand-cream">Credit Card</span>
                        </label>
                        <label className="relative flex items-center justify-center p-6 rounded-3xl border-2 border-brand-cream/5 cursor-pointer hover:border-brand-gold/30 transition-all has-[:checked]:border-brand-gold has-[:checked]:bg-brand-gold/5">
                          <input type="radio" name="payment" className="sr-only" />
                          <span className="font-bold text-brand-cream">Cash on Delivery</span>
                        </label>
                      </div>
                    </div>

                    <div className="pt-8 space-y-4">
                      <button type="submit" className="w-full btn-premium btn-primary py-6 text-lg glow-hover">
                        Complete Order (${total.toFixed(2)})
                      </button>
                      <button type="button" onClick={() => setCheckoutStep('cart')} className="w-full text-xs font-bold uppercase tracking-[0.2em] text-brand-cream/30 hover:text-brand-cream transition-colors py-2">
                        Back to Cart
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-brand-dark/60 backdrop-blur-2xl p-10 rounded-[60px] border border-brand-cream/5 sticky top-32">
                <h3 className="text-3xl font-serif font-bold text-brand-cream mb-10">Summary</h3>
                <div className="space-y-6 mb-10">
                  <div className="flex justify-between text-brand-cream/50">
                    <span className="text-sm font-medium">Subtotal</span>
                    <span className="font-bold text-brand-cream">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-brand-cream/50">
                    <span className="text-sm font-medium">Delivery Fee</span>
                    <span className="font-bold text-brand-cream">${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="h-px bg-brand-cream/10 my-6"></div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-brand-cream/30 block mb-1">Total Amount</span>
                      <span className="text-4xl font-serif font-bold text-brand-gold">${total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {checkoutStep === 'cart' && (
                  <button
                    onClick={() => setCheckoutStep('checkout')}
                    className="w-full btn-premium btn-primary py-5 text-lg glow-hover"
                  >
                    Proceed to Checkout
                  </button>
                )}

                <div className="mt-10 p-6 bg-brand-dark/40 rounded-3xl border border-brand-cream/5">
                  <div className="flex items-center space-x-3 text-brand-gold mb-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest">Premium Service</span>
                  </div>
                  <p className="text-[10px] text-brand-cream/40 leading-relaxed">
                    Your order is protected by our quality guarantee. We source only the finest local ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
