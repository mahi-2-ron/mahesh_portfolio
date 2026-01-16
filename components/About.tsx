
import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, MapPin, GraduationCap, Award } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 relative overflow-hidden scroll-mt-20">
      {/* Cinematic Background Ambiance */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-500/5 blur-[120px] -z-10 rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-pink-500/5 blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-32 items-center">
          
          {/* Portrait Side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
            className="relative group mb-12 md:mb-0"
          >
            <div className="absolute -inset-2 bg-gradient-to-br from-pink-500/20 via-amber-400/20 to-pink-600/20 rounded-[3rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-1000"></div>
            
            <div className="relative bg-midnight-surface rounded-[2.5rem] overflow-hidden aspect-[4/5] border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
              <img 
                src="/profile.jpeg" 
                alt="Mahesh R Madiwalar" 
                className="w-full h-full object-cover transition-all duration-1000 scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent opacity-60"></div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 md:right-10 glass p-6 rounded-3xl border border-white/10 shadow-2xl">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center text-amber-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">CGPA (1st Year)</p>
                  <p className="text-xl font-black text-white">8.5 / 10</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "circOut" }}
          >
            <div className="flex flex-wrap items-center gap-4 mb-8 md:mb-10">
              <span className="px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-black uppercase tracking-[0.25em]">
                Educational Background
              </span>
              <div className="h-px w-6 md:w-10 bg-midnight-light"></div>
              <div className="flex items-center gap-2 text-slate-500 text-xs font-bold">
                <MapPin className="w-3.5 h-3.5" /> Bengaluru, India
              </div>
            </div>
            
            <h2 className="text-4xl md:text-7xl font-black mb-8 md:mb-10 leading-[1.1] md:leading-[1] tracking-tight text-white">
              Mahesh R<br />
              <span className="bg-gradient-to-r from-pink-500 via-pink-300 to-amber-400 bg-clip-text text-transparent italic">Madiwalar.</span>
            </h2>
            
            <div className="space-y-6 md:space-y-8 text-slate-400 text-lg leading-relaxed font-medium">
              <div className="bg-white/5 border border-white/5 p-6 rounded-2xl">
                <h4 className="text-white font-black text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-pink-500" /> Current Education
                </h4>
                <p className="text-slate-300">
                  <span className="font-bold text-white">Bachelor of Engineering (BE) – Electronics and Communication</span><br />
                  Dr. Ambedkar Institute of Technology, Bengaluru (2024 – Present)
                </p>
                <div className="mt-4 flex gap-6">
                  <div className="text-xs uppercase tracking-widest font-black text-slate-500">Class XII: <span className="text-white ml-2">93%</span></div>
                  <div className="text-xs uppercase tracking-widest font-black text-slate-500">Class X: <span className="text-white ml-2">98%</span></div>
                </div>
              </div>

              <p>
                As an E&C student with a profound interest in Computer Science, I bridge the gap between hardware intuition and software architecture. My focus lies in <span className="text-pink-400 font-bold">scalable backend systems</span> and <span className="text-amber-400 font-bold">algorithmic efficiency</span>.
              </p>
              
              <div className="flex items-center gap-4 text-slate-300 text-sm font-bold">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 flex items-center justify-center">
                  <Award className="w-4 h-4 text-pink-400" />
                </div>
                DSA Co-Lead @ Google Developer Groups (GDG)
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-5 mt-10 md:mt-14">
              <motion.a 
                whileHover={{ y: -5, scale: 1.05 }}
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 md:px-10 py-4 rounded-2xl bg-pink-600 text-white transition-all text-sm font-black uppercase tracking-widest shadow-xl shadow-pink-600/30"
              >
                <Linkedin className="w-5 h-5" /> LinkedIn
              </motion.a>
              <motion.a 
                whileHover={{ y: -5, scale: 1.05 }}
                href={SOCIAL_LINKS.github}
                target="_blank"
                className="flex items-center justify-center gap-3 px-8 md:px-10 py-4 rounded-2xl bg-midnight-light border border-white/5 hover:border-amber-400/50 transition-all text-sm font-black uppercase tracking-widest text-slate-300"
              >
                <Github className="w-5 h-5" /> GitHub
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
