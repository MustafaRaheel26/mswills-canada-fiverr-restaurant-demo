import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MENU_ITEMS, REVIEWS } from '../data/mockData';
import { 
  BarChart3, 
  Utensils, 
  Star, 
  Settings, 
  Plus, 
  Edit2, 
  Trash2, 
  Save, 
  X,
  LayoutDashboard,
  MessageSquare,
  Info
} from 'lucide-react';
import { cn } from '../lib/utils';

export default function Admin() {
  const [activeTab, setActiveTab] = useState<'overview' | 'menu' | 'reviews' | 'settings'>('overview');
  const [menuItems, setMenuItems] = useState(MENU_ITEMS);
  const [editingId, setEditingId] = useState<string | null>(null);

  const stats = [
    { label: 'Total Orders', value: '1,284', icon: <BarChart3 className="w-5 h-5" />, color: 'bg-blue-500' },
    { label: 'Menu Items', value: menuItems.length.toString(), icon: <Utensils className="w-5 h-5" />, color: 'bg-brand-brown' },
    { label: 'Avg Rating', value: '4.8', icon: <Star className="w-5 h-5" />, color: 'bg-brand-accent' },
    { label: 'New Reviews', value: '12', icon: <MessageSquare className="w-5 h-5" />, color: 'bg-green-500' },
  ];

  const handleDelete = (id: string) => {
    setMenuItems(menuItems.filter(item => item.id !== id));
  };

  return (
    <div className="pt-32 pb-24 min-h-screen bg-brand-bg relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/5 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-64 shrink-0">
            <div className="bg-brand-dark/60 backdrop-blur-xl rounded-3xl p-4 border border-white/5 shadow-2xl sticky top-32">
              <div className="space-y-1">
                {[
                  { id: 'overview', label: 'Overview', icon: <LayoutDashboard className="w-4 h-4" /> },
                  { id: 'menu', label: 'Manage Menu', icon: <Utensils className="w-4 h-4" /> },
                  { id: 'reviews', label: 'Reviews', icon: <MessageSquare className="w-4 h-4" /> },
                  { id: 'settings', label: 'Site Settings', icon: <Settings className="w-4 h-4" /> },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                      activeTab === tab.id 
                        ? "bg-brand-gold text-brand-dark shadow-xl shadow-brand-gold/20" 
                        : "text-brand-cream/40 hover:bg-brand-gold/10 hover:text-brand-gold"
                    )}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/5 px-4">
                <div className="flex items-center space-x-2 text-brand-gold">
                  <Info className="w-4 h-4" />
                  <span className="text-[10px] font-bold uppercase tracking-widest">Admin Demo</span>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-grow">
            <div className="bg-brand-dark/40 backdrop-blur-xl rounded-[40px] p-8 md:p-12 border border-white/5 shadow-2xl min-h-[600px]">
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-serif font-bold text-brand-cream mb-8">Dashboard Overview</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                    {stats.map((stat, i) => (
                      <div key={i} className="p-6 rounded-3xl bg-brand-dark/60 border border-white/5">
                        <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white mb-4", stat.color)}>
                          {stat.icon}
                        </div>
                        <p className="text-xs font-bold text-brand-cream/30 uppercase tracking-widest mb-1">{stat.label}</p>
                        <p className="text-2xl font-bold text-brand-cream">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-brand-bg/40 rounded-3xl p-8 border border-white/5">
                    <h3 className="font-serif font-bold text-xl text-brand-cream mb-4">Recent Activity</h3>
                    <div className="space-y-4">
                      {[
                        "New order #1284 received - $45.50",
                        "Review from Michael Chen: 'Best poutine...'",
                        "Menu item 'Bison Burger' updated",
                        "New customer registered: sarah.j@email.com"
                      ].map((activity, i) => (
                        <div key={i} className="flex items-center space-x-3 text-sm text-brand-cream/50">
                          <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                          <span>{activity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'menu' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-serif font-bold text-brand-cream">Menu Management</h2>
                    <button className="btn-premium btn-primary flex items-center space-x-2 py-2 px-6 text-sm">
                      <Plus className="w-4 h-4" />
                      <span>Add Item</span>
                    </button>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-white/5">
                          <th className="pb-4 text-xs font-bold uppercase tracking-widest text-brand-cream/30">Item</th>
                          <th className="pb-4 text-xs font-bold uppercase tracking-widest text-brand-cream/30">Category</th>
                          <th className="pb-4 text-xs font-bold uppercase tracking-widest text-brand-cream/30">Price</th>
                          <th className="pb-4 text-xs font-bold uppercase tracking-widest text-brand-cream/30 text-right">Actions</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/5">
                        {menuItems.map((item) => (
                          <tr key={item.id} className="group">
                            <td className="py-4">
                              <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 rounded-lg overflow-hidden shrink-0">
                                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                                </div>
                                <span className="font-bold text-brand-cream">{item.name}</span>
                              </div>
                            </td>
                            <td className="py-4 text-sm text-brand-cream/50">{item.category}</td>
                            <td className="py-4 text-sm font-bold text-brand-cream">${item.price.toFixed(2)}</td>
                            <td className="py-4 text-right">
                              <div className="flex justify-end space-x-2">
                                <button className="p-2 text-brand-cream/20 hover:text-brand-gold transition-colors">
                                  <Edit2 className="w-4 h-4" />
                                </button>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="p-2 text-brand-cream/20 hover:text-red-500 transition-colors"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-serif font-bold text-brand-cream mb-8">Customer Reviews</h2>
                  <div className="space-y-6">
                    {REVIEWS.map((review) => (
                      <div key={review.id} className="p-6 rounded-3xl bg-brand-dark/60 border border-white/5">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-brand-gold text-brand-dark flex items-center justify-center font-bold">
                              {review.name.charAt(0)}
                            </div>
                            <div>
                              <h4 className="font-bold text-brand-cream">{review.name}</h4>
                              <p className="text-[10px] text-brand-cream/30 uppercase tracking-wider">{review.date}</p>
                            </div>
                          </div>
                          <div className="flex text-brand-gold">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-sm text-brand-cream/60 italic">"{review.comment}"</p>
                        <div className="mt-4 flex space-x-4">
                          <button className="text-[10px] font-bold uppercase tracking-widest text-brand-gold hover:text-brand-gold-light transition-colors">Approve</button>
                          <button className="text-[10px] font-bold uppercase tracking-widest text-red-400 hover:text-red-600 transition-colors">Hide</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'settings' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                  <h2 className="text-3xl font-serif font-bold text-brand-cream mb-8">Site Settings</h2>
                  <div className="space-y-8 max-w-xl">
                    <div className="space-y-4">
                      <h3 className="font-bold text-brand-gold uppercase tracking-widest text-xs">Business Info</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs text-brand-cream/30">Business Name</label>
                          <input type="text" defaultValue="mswills demo" className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 text-brand-cream" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-brand-cream/30">Tagline</label>
                          <input type="text" defaultValue="Fresh • Local • Delicious" className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 text-brand-cream" />
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="font-bold text-brand-gold uppercase tracking-widest text-xs">Contact Details</h3>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-xs text-brand-cream/30">Email</label>
                          <input type="email" defaultValue="hello@mswills.ca" className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 text-brand-cream" />
                        </div>
                        <div className="space-y-2">
                          <label className="text-xs text-brand-cream/30">Phone</label>
                          <input type="text" defaultValue="+1 (416) 555-0198" className="w-full bg-brand-bg border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-brand-gold/50 text-brand-cream" />
                        </div>
                      </div>
                    </div>

                    <button className="btn-premium btn-primary w-full py-4 flex items-center justify-center space-x-2">
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </button>
                  </div>
                </motion.div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
