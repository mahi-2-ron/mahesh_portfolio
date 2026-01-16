
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import React from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Collaboration from './components/Collaboration';
import { SOCIAL_LINKS } from './constants';

const App: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const elem = document.getElementById(id.replace('#', ''));
    if (elem) {
      window.scrollTo({
        top: elem.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Collaboration />
        <Achievements />
        <Contact />
      </main>

      <footer className="py-20 px-6 border-t border-white/5 bg-midnight text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Brand & Title */}
          <h3 className="text-2xl font-black text-white mb-3 font-unbounded uppercase tracking-tighter">
            MAHESH<span className="text-pink-500">.</span>
          </h3>
          <p className="text-slate-400 text-sm md:text-base font-bold mb-8 max-w-2xl px-4">
            Backend-Focused E&C Engineering Student | GDG DSA Co-Lead | E-Cell Technical Co-Lead
          </p>
          
          {/* Page Links */}
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-10 text-sm font-black uppercase tracking-widest text-slate-500">
            <a href="#home" onClick={(e) => scrollToSection(e, '#home')} className="hover:text-pink-500 transition-colors">Home</a>
            <span>·</span>
            <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-pink-500 transition-colors">About</a>
            <span>·</span>
            <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-pink-500 transition-colors">Projects</a>
            <span>·</span>
            <a href="#achievements" onClick={(e) => scrollToSection(e, '#achievements')} className="hover:text-pink-500 transition-colors">Achievements</a>
            <span>·</span>
            <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-pink-500 transition-colors">Contact</a>
          </div>

          {/* Social Links as Small Boxes */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href={SOCIAL_LINKS.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-midnight-surface/50 border border-white/5 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:border-pink-500/40 hover:bg-pink-500/10 transition-all group"
            >
              <Github className="w-4 h-4 text-slate-500 group-hover:text-pink-500 transition-colors" />
              GitHub
            </a>
            <a 
              href={SOCIAL_LINKS.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-midnight-surface/50 border border-white/5 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:border-blue-400/40 hover:bg-blue-400/10 transition-all group"
            >
              <Linkedin className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
              LinkedIn
            </a>
            <a 
              href={`mailto:${SOCIAL_LINKS.email}`} 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-midnight-surface/50 border border-white/5 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:border-amber-400/40 hover:bg-amber-400/10 transition-all group"
            >
              <Mail className="w-4 h-4 text-slate-500 group-hover:text-amber-400 transition-colors" />
              Email
            </a>
            <a 
              href={SOCIAL_LINKS.resume} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-midnight-surface/50 border border-white/5 text-xs font-black uppercase tracking-widest text-slate-300 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all group"
            >
              <FileText className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
              Resume
            </a>
          </div>

          {/* Statement */}
          <p className="text-slate-500 text-sm md:text-base font-medium max-w-xl mb-6 italic">
            Open to collaboration and volunteering for technical events and community initiatives.
          </p>

          {/* Semester Note */}
          <p className="text-pink-500/60 text-[10px] font-black uppercase tracking-[0.2em] mb-12">
            Information current up to 3rd Semester
          </p>
          
          {/* Copyright */}
          <div className="pt-8 border-t border-white/5 w-full">
            <p className="text-slate-600 text-[10px] md:text-xs font-black uppercase tracking-[0.3em]">
              Designed & built by Mahesh R Madiwalar &copy; 2026
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
