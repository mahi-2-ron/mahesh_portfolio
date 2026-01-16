
import React from 'react';
import { motion } from 'framer-motion';
import { Users, Handshake, MessageSquare } from 'lucide-react';

const Collaboration: React.FC = () => {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 md:py-24 px-6 relative overflow-hidden bg-midnight">
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-surface/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative glass rounded-[3rem] p-8 md:p-16 text-center border border-white/10 overflow-hidden group"
        >
          {/* Animated background glow */}
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-pink-600/10 rounded-full blur-3xl group-hover:bg-pink-600/20 transition-all duration-700"></div>
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl group-hover:bg-amber-500/20 transition-all duration-700"></div>

          <div className="flex justify-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-pink-500/10 flex items-center justify-center text-pink-500">
              <Users className="w-6 h-6" />
            </div>
            <div className="w-12 h-12 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-500">
              <Handshake className="w-6 h-6" />
            </div>
          </div>

          <h3 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight font-unbounded uppercase tracking-tight">
            Let's build the <span className="text-pink-500">Future</span> together.
          </h3>
          
          <p className="text-lg md:text-2xl text-slate-300 font-medium leading-relaxed max-w-3xl mx-auto mb-10">
            I am open to <span className="text-pink-400 font-bold">collaboration on meaningful projects</span> and <span className="text-amber-400 font-bold">volunteering</span> for technical events, hackathons, and developer community initiatives.
          </p>
          
          <p className="text-slate-400 text-lg mb-12">
            Feel free to reach out if you’d like to build or organize something impactful together.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-midnight font-black uppercase tracking-widest text-sm hover:bg-pink-500 hover:text-white transition-all shadow-2xl shadow-white/5 group"
          >
            <MessageSquare className="w-5 h-5" />
            Reach Out Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Collaboration;
