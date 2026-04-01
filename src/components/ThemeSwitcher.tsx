import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check } from 'lucide-react';
import { useTheme, ThemeType } from '../context/ThemeContext';
import { cn } from '../lib/utils';

const themes: { id: ThemeType; name: string; color: string }[] = [
  { id: 'default', name: 'Original Dark', color: '#C5A059' },
  { id: 'midnight', name: 'Midnight Blue', color: '#38bdf8' },
  { id: 'forest', name: 'Forest Green', color: '#10b981' },
  { id: 'sunset', name: 'Sunset Warm', color: '#f97316' },
  { id: 'elegant', name: 'Elegant Light', color: '#78716c' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 rounded-xl bg-brand-dark/50 border border-white/10 text-brand-gold hover:bg-brand-gold hover:text-brand-dark transition-all duration-300"
        title="Switch Theme"
      >
        <Palette className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="absolute right-0 mt-3 w-56 bg-brand-dark border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="p-4 border-b border-white/5">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-brand-gold">Preview Themes</span>
              </div>
              <div className="p-2">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      setTheme(t.id);
                      setIsOpen(false);
                    }}
                    className={cn(
                      "w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                      theme === t.id ? "bg-brand-gold/10 text-brand-gold" : "text-brand-cream/60 hover:bg-white/5 hover:text-brand-cream"
                    )}
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-3 h-3 rounded-full shadow-sm" 
                        style={{ backgroundColor: t.color }}
                      />
                      <span className="text-xs font-bold tracking-wide">{t.name}</span>
                    </div>
                    {theme === t.id && <Check className="w-4 h-4" />}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
