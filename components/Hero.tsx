
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const ROLES = [
  "Engineering Student",
  "Backend Developer",
  "Scalable Systems Architect",
  "DSA Enthusiast",
  "Problem Solver"
];

const Hero: React.FC = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = projectsSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center px-6 overflow-hidden pt-20 scroll-mt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-pink-600/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-amber-600/10 rounded-full blur-[120px] -z-10 animate-pulse delay-700"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-5xl z-10"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 leading-[1.1]">
          Backend-focused <br />
          <span className="bg-gradient-to-r from-pink-500 via-pink-400 to-amber-400 bg-clip-text text-transparent italic">
            Engineering Student.
          </span>
        </h1>
        
        <div className="h-12 md:h-16 mb-10 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.p
              key={ROLES[roleIndex]}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -40, opacity: 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="text-2xl md:text-4xl font-bold text-slate-300 mono"
            >
              {ROLES[roleIndex]}
            </motion.p>
          </AnimatePresence>
        </div>
        
        <p className="text-lg md:text-2xl text-slate-400 mb-14 max-w-5xl mx-auto leading-relaxed font-semibold">
          <span className="text-white">E&C Engineering Student</span> at Dr. Ambedkar Institute of Technology | Backend-Focused Developer | GDG DSA Co-Lead | E-Cell Technical Co-Lead
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <motion.a
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            href="#projects"
            onClick={scrollToProjects}
            className="w-full sm:w-auto px-12 py-5 bg-pink-600 hover:bg-pink-500 text-white rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all shadow-2xl shadow-pink-600/30 flex items-center justify-center gap-3 group cursor-pointer"
          >
            View Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <div className="flex flex-wrap gap-4 w-full sm:w-auto justify-center">
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={SOCIAL_LINKS.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-5 bg-slate-900/80 border border-slate-800 hover:border-amber-400/50 text-slate-200 rounded-[2rem] font-black uppercase tracking-widest text-sm transition-all glass flex items-center justify-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </motion.a>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-slate-900/80 border border-slate-800 hover:border-pink-500/50 text-slate-200 rounded-[2rem] font-bold transition-all glass flex items-center justify-center"
              >
                <Github className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 bg-slate-900/80 border border-slate-800 hover:border-blue-500/50 text-slate-200 rounded-[2rem] font-bold transition-all glass flex items-center justify-center"
              >
                <Linkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
      
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="text-slate-600 hover:text-amber-400 transition-colors">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
