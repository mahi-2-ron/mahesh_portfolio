import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, X, Bot, Sparkles } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Hey there! I'm Mahesh's virtual twin. Want to know about his LeetCode stats, hackathon projects, or tech stack?" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userText = inputValue.trim();
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setInputValue('');
    setIsLoading(true);

    const aiResponse = await getAIResponse(userText);
    setMessages(prev => [...prev, { role: 'ai', text: aiResponse }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[110] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9, transformOrigin: 'bottom right' }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="w-[calc(100vw-48px)] sm:w-[400px] h-[500px] md:h-[550px] bg-midnight-surface border border-white/5 rounded-3xl shadow-2xl flex flex-col overflow-hidden mb-6 glass max-h-[70vh] sm:max-h-none"
          >
            {/* Header */}
            <div className="p-4 md:p-5 border-b border-white/5 bg-midnight/50 flex justify-between items-center backdrop-blur-md">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-xl md:rounded-2xl bg-pink-600 flex items-center justify-center shadow-lg shadow-pink-600/30">
                    <Bot className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 md:w-4 md:h-4 rounded-full bg-green-500 border-2 border-midnight"></div>
                </div>
                <div>
                  <h4 className="text-xs md:text-sm font-black text-white">Mahesh AI Agent</h4>
                  <p className="text-[9px] md:text-[10px] text-pink-400 font-bold flex items-center gap-1 uppercase tracking-wider">
                    <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3" /> AI Assistant Online
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="p-2 rounded-xl text-slate-500 hover:text-white hover:bg-white/5 transition-all"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chat Body */}
            <div ref={scrollRef} className="flex-grow p-4 md:p-5 overflow-y-auto space-y-4 md:space-y-5">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-3 md:p-4 rounded-2xl text-xs md:text-sm leading-relaxed font-medium ${
                    m.role === 'user' 
                      ? 'bg-pink-600 text-white rounded-tr-none shadow-lg shadow-pink-600/20' 
                      : 'bg-midnight/80 text-slate-200 rounded-tl-none border border-white/5'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-midnight/80 p-3 md:p-4 rounded-2xl rounded-tl-none border border-white/5 flex gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 md:p-5 bg-midnight/50 border-t border-white/5 backdrop-blur-md">
              <div className="flex gap-2 md:gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  className="flex-grow bg-midnight border border-white/5 rounded-2xl px-4 md:px-5 py-2.5 md:py-3 text-xs md:text-sm focus:outline-none focus:border-pink-500 transition-all text-slate-200 placeholder:text-slate-600"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading || !inputValue.trim()}
                  className="bg-pink-600 hover:bg-pink-500 disabled:opacity-50 disabled:cursor-not-allowed w-10 h-10 md:w-12 md:h-12 flex items-center justify-center rounded-xl md:rounded-2xl transition-all shadow-lg shadow-pink-600/30 flex-shrink-0"
                >
                  <Send className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl md:rounded-3xl flex items-center justify-center shadow-2xl transition-all duration-300 ${
          isOpen ? 'bg-midnight-surface text-white rotate-90' : 'bg-pink-600 text-white shadow-pink-600/40'
        }`}
      >
        {isOpen ? (
          <X className="w-7 h-7 md:w-8 md:h-8" />
        ) : (
          <Bot className="w-7 h-7 md:w-8 md:h-8" />
        )}
      </motion.button>
    </div>
  );
};

export default AIChat;