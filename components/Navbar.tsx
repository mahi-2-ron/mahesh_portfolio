
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight, Globe } from 'lucide-react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Intersection Observer to track active section
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'skills', 'projects', 'achievements', 'contact'];
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const elem = document.getElementById(targetId);
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      isScrolled ? 'py-2 md:py-4' : 'py-6 md:py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className={`flex justify-between items-center transition-all duration-500 px-5 md:px-8 py-3 rounded-2xl ${
          isScrolled || isMobileMenuOpen ? 'bg-midnight-surface/90 backdrop-blur-xl border border-white/5 shadow-2xl' : 'bg-transparent'
        }`}>
          <a 
            href="#home" 
            onClick={(e) => scrollToSection(e, '#home')}
            className="text-xl md:text-2xl font-black tracking-tighter group flex items-center gap-2 font-unbounded"
          >
            <span className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-pink-600 flex items-center justify-center text-white text-[10px] md:text-xs">M</span>
            <span className="bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent group-hover:from-pink-400 group-hover:to-pink-300 transition-all uppercase">
              MAHESH<span className="text-pink-500">.</span>
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`text-sm font-semibold transition-all hover:translate-y-[-1px] relative group/item ${
                    isActive ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {item.label}
                  <motion.span 
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    className="absolute -bottom-1 left-0 h-px bg-pink-500 transition-all"
                  ></motion.span>
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink-500/50 transition-all group-hover/item:w-full opacity-50"></span>
                </a>
              );
            })}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-pink-500" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="md:hidden mt-2 mx-4 overflow-hidden rounded-3xl bg-midnight-surface/98 backdrop-blur-2xl border border-white/5 shadow-2xl z-[101]"
          >
            <div className="flex flex-col p-8 space-y-2">
              <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-4 border-b border-white/5 pb-4">
                <Globe className="w-3 h-3 text-pink-500" /> Global Navigation
              </div>
              {NAV_ITEMS.map((item, idx) => {
                const isActive = activeSection === item.href.replace('#', '');
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => scrollToSection(e, item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    className={`text-2xl font-black py-3 flex items-center justify-between group transition-all ${
                      isActive ? 'text-pink-500 translate-x-2' : 'text-slate-300 hover:text-pink-500'
                    }`}
                  >
                    {item.label}
                    <ArrowRight className={`w-5 h-5 transition-all ${
                      isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0'
                    }`} />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
