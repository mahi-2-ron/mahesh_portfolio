import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Medal, Code, Star, Sparkles } from 'lucide-react';

const IconMap = {
  trophy: Trophy,
  medal: Medal,
  code: Code,
  star: Star,
};

const Achievements: React.FC = () => {
  return (
    <section id="achievements" className="py-16 md:py-20 bg-midnight relative overflow-hidden scroll-mt-20">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/5 blur-[120px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6">
            <Sparkles className="w-3 h-3" /> Impact & Recognition
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6">
            Honors & <span className="text-amber-400 italic">Milestones.</span>
          </h2>
          <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
            A showcase of technical leadership, competitive rankings, and community contributions.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACHIEVEMENTS.map((ach, idx) => {
            const Icon = IconMap[ach.icon || 'star'];
            return (
              <motion.div 
                key={ach.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-[2.5rem] glass hover:border-amber-400/30 transition-all duration-500 flex flex-col h-full"
              >
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 border border-amber-400/20 flex items-center justify-center text-amber-400 group-hover:bg-amber-400 group-hover:text-midnight transition-all shadow-inner">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-midnight-light/50 px-3 py-1.5 rounded-xl border border-white/5">
                    {ach.date}
                  </span>
                </div>
                
                <div className="flex-grow">
                  <h4 className="text-amber-500 text-xs font-bold uppercase tracking-wider mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                    {ach.organization}
                  </h4>
                  <h3 className="text-2xl font-black text-white mb-4 leading-tight group-hover:text-amber-400 transition-colors">
                    {ach.title}
                  </h3>
                  <p className="text-slate-400 text-base leading-relaxed font-medium">
                    {ach.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;