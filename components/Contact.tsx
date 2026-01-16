
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Check } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(SOCIAL_LINKS.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-midnight relative overflow-hidden scroll-mt-20">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-600/5 blur-[150px] -z-10 rounded-full"></div>
      <div className="absolute top-1/3 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/5 blur-[150px] -z-10 rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-8xl font-black mb-8 text-white">
              Let's <span className="text-pink-500">Connect.</span>
            </h2>
            <p className="text-slate-400 text-xl md:text-2xl mb-16 leading-relaxed font-medium max-w-2xl mx-auto">
              I'm always open to discussing new projects, backend opportunities, or just chatting about technical architecture. Reach out through any of these platforms.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Email Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -8, scale: 1.02 }}
            onClick={copyToClipboard}
            className="p-10 rounded-[2.5rem] bg-midnight-surface/40 border border-white/5 cursor-pointer hover:border-pink-500/30 transition-all glass flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500 mb-6 group-hover:bg-pink-500 group-hover:text-white transition-all">
              <Mail className="w-8 h-8" />
            </div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Direct Email</h4>
            <p className="text-slate-200 font-bold text-lg mb-2">{SOCIAL_LINKS.email}</p>
            {copied ? (
              <div className="flex items-center gap-2 text-green-500 text-xs font-bold bg-green-500/10 px-3 py-1 rounded-full">
                <Check className="w-3 h-3" /> Copied to clipboard
              </div>
            ) : (
              <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Click to copy</p>
            )}
          </motion.div>

          {/* LinkedIn Card */}
          <motion.a 
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-midnight-surface/40 border border-white/5 hover:border-blue-500/30 transition-all glass flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-all">
              <Linkedin className="w-8 h-8" />
            </div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Professional Network</h4>
            <p className="text-slate-200 font-bold text-lg mb-2">LinkedIn</p>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Connect with me</p>
          </motion.a>

          {/* GitHub Card */}
          <motion.a 
            href={SOCIAL_LINKS.github}
            target="_blank"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="p-10 rounded-[2.5rem] bg-midnight-surface/40 border border-white/5 hover:border-slate-300/30 transition-all glass flex flex-col items-center text-center group"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white mb-6 group-hover:bg-white group-hover:text-midnight transition-all">
              <Github className="w-8 h-8" />
            </div>
            <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest mb-2">Code Portfolio</h4>
            <p className="text-slate-200 font-bold text-lg mb-2">GitHub</p>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">View my repositories</p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
