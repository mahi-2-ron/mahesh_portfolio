import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';
import { Code2, Server, Layout, Database, Terminal } from 'lucide-react';

const ICON_MAP: Record<string, any> = {
  'Languages': Code2,
  'Backend': Server,
  'Frontend & Tools': Layout,
  'Databases': Database,
  'Core CS': Terminal,
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 md:py-20 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-black uppercase tracking-[0.2em] mb-6"
          >
            Technical Stack
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 text-white"
          >
            My <span className="text-pink-500">Toolkit.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            A curated selection of tools and technologies I use to architect robust, scalable backend solutions.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {SKILL_CATEGORIES.map((category, idx) => {
            const Icon = ICON_MAP[category.title] || Code2;
            return (
              <motion.div 
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 md:p-8 rounded-[2rem] glass hover:border-pink-500/30 transition-all duration-500 group flex flex-col"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-pink-500/10 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500 group-hover:text-white transition-all duration-500">
                    <Icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-slate-100 uppercase tracking-wider">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.span 
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3.5 py-2 rounded-lg bg-midnight/40 border border-white/5 text-slate-400 text-xs md:text-sm font-bold hover:text-white hover:bg-pink-600/10 hover:border-pink-500/40 transition-all cursor-default flex items-center gap-2 group/skill"
                    >
                      <div className="w-1 h-1 rounded-full bg-slate-700 group-hover/skill:bg-pink-500 transition-colors"></div>
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;