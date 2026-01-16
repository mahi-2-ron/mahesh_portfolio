import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS, SOCIAL_LINKS } from '../constants';
import { Github, ExternalLink, Code2 } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-16 md:py-20 px-6 bg-midnight scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-8">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-[10px] font-black uppercase tracking-[0.25em] mb-6"
            >
              Selected Works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black mb-8 text-white"
            >
              Building <span className="text-pink-500">Solutions.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-400 text-xl max-w-2xl leading-relaxed font-medium"
            >
              Focused engineering projects that solve real-world problems with scalable logic and clean architecture.
            </motion.p>
          </div>
          
          <motion.a 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            href={SOCIAL_LINKS.github} 
            target="_blank"
            className="group flex items-center gap-4 text-slate-300 hover:text-pink-400 font-bold text-lg transition-all"
          >
            All Repositories
            <div className="w-12 h-12 rounded-2xl bg-midnight-surface flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all shadow-xl">
              <Github className="w-6 h-6" />
            </div>
          </motion.a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
          {PROJECTS.map((project, idx) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="group flex flex-col rounded-[2.5rem] bg-midnight-surface/30 border border-white/5 p-8 md:p-10 hover:border-pink-500/30 transition-all duration-500 hover:bg-midnight-surface/50"
            >
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-lg bg-pink-500/5 border border-pink-500/10 text-[9px] font-black text-pink-400 uppercase tracking-widest">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex-grow flex flex-col">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white group-hover:text-pink-400 transition-colors">
                    {project.name}
                  </h3>
                  <Code2 className="w-6 h-6 text-slate-700 group-hover:text-pink-500/50 transition-colors" />
                </div>
                
                <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed font-medium">
                  {project.description}
                </p>
                
                <div className="mt-auto">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white text-[10px] font-black uppercase tracking-[0.2em] transition-all shadow-lg shadow-pink-600/20"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;