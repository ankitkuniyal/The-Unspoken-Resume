import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Brain, Sparkles, Command, Users, CheckCircle } from 'lucide-react';
import AnimatedHeading from '../../ui/AnimatedHeading';

const MiniSimulator = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: Countdown, 2: Recording
  
  useEffect(() => {
     const interval = setInterval(() => {
        setStep(prev => (prev + 1) % 3);
     }, 3500);
     return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative mx-auto max-w-4xl bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl">
       {/* Mock Browser Header */}
       <div className="bg-neutral-800 px-4 py-3 flex items-center gap-2 select-none border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
          <div className="ml-4 bg-black/20 px-3 py-1 rounded-md text-[10px] text-neutral-400 flex-1 text-center font-mono truncate">
            https://verve.io/interview/active
          </div>
       </div>
       
       <div className="relative aspect-video bg-black flex flex-col md:flex-row">
          <div className="flex-1 p-6 md:p-8 flex flex-col justify-center border-r border-white/5 relative overflow-hidden">
             
             {/* Dynamic State Overlay */}
             <div className="absolute top-4 left-4">
                {step === 0 && <span className="text-neutral-500 text-[10px] font-bold uppercase tracking-wider">Waiting...</span>}
                {step === 1 && <span className="text-amber-500 text-[10px] font-bold uppercase tracking-wider">Preparing...</span>}
                {step === 2 && (
                    <div className="inline-flex items-center gap-2">
                         <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                         <span className="text-red-500 text-[10px] font-bold uppercase tracking-wider">Live Analysis</span>
                    </div>
                )}
             </div>

             <h3 className="text-lg md:text-xl text-white font-medium mb-6 leading-snug relative z-10 font-serif">
               "Tell me about a time you led a team through a significant crisis."
             </h3>
             
             <div className="space-y-4 relative z-10 bg-neutral-900/50 p-4 rounded-xl backdrop-blur-sm border border-white/5">
               <div className="space-y-2">
                 <div className="flex justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
                    <span>Clarity</span>
                    <span className="text-blue-400">High</span>
                 </div>
                 <div className="h-1 bg-neutral-800 rounded-full overflow-hidden w-full">
                    <motion.div 
                      animate={{ width: ["10%", "60%", "40%", "85%"] }} 
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="h-full bg-blue-500"
                    />
                 </div>
               </div>

               <div className="space-y-2">
                 <div className="flex justify-between text-[10px] text-neutral-400 uppercase tracking-wider">
                    <span>Confidence</span>
                    <span className="text-purple-400">88/100</span>
                 </div>
                 <div className="h-1 bg-neutral-800 rounded-full overflow-hidden w-full">
                    <motion.div 
                      animate={{ width: ["80%", "88%", "85%", "90%"] }} 
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      className="h-full bg-purple-500"
                    />
                 </div>
               </div>
             </div>
          </div>
          
          <div className="w-1/3 bg-neutral-900 relative hidden md:block">
             {/* Fake Person Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-900">
                <div className="w-24 h-24 bg-neutral-700/50 rounded-full flex items-center justify-center animate-pulse">
                   <Users size={32} className="text-neutral-500" />
                </div>
             </div>
             
             {/* AI Overlay Bubble */}
             <AnimatePresence mode="wait">
               {step === 2 && (
                 <motion.div 
                   initial={{ opacity: 0, y: 10, scale: 0.9 }}
                   animate={{ opacity: 1, y: 0, scale: 1 }}
                   exit={{ opacity: 0, scale: 0.9 }}
                   className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md p-3 rounded-xl border border-white/10 shadow-lg"
                 >
                    <div className="flex items-start gap-3">
                       <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 shrink-0">
                          <CheckCircle size={14} />
                       </div>
                       <div>
                          <p className="text-xs text-green-200 font-bold mb-0.5">Great Eye Contact!</p>
                          <p className="text-[10px] text-neutral-400 leading-tight">You're engaging well with the camera.</p>
                       </div>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>
       </div>
       
    </div>
    
  );
};

const VerveIO = () => {
    return (
        <section className="h-screen snap-start bg-[#080808] text-neutral-200 relative overflow-hidden flex items-center">
            
            {/* Ultra-subtle background noise/grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-purple-900/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.2fr,1.8fr] gap-16 relative z-10 h-full max-h-[80vh] items-center">
                
                {/* Left: Project Identity & Core Value */}
                <div className="flex flex-col justify-center h-full">
                    <div className="mb-6 flex items-center gap-3 text-purple-400">
                        <Brain size={20} />
                        <span className="font-mono text-xs tracking-[0.2em] uppercase">AI-Powered EdTech</span>
                    </div>

                    <AnimatedHeading 
                        text="verve.io" 
                        className="text-7xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9]"
                    />

                    <p className="text-xl text-neutral-400 leading-relaxed mb-8 border-l-2 border-white/10 pl-6">
                        An adaptive MBA interview preparation platform analyzing verbal, non-verbal, and emotional intelligence cues to provide holistic candidate feedback.
                    </p>

                   

                    <div className="flex flex-wrap gap-4 mb-12">
                        <a 
                            href="https://github.com/ankitkuniyal/verve.io" 
                            target="_blank" 
                            rel="noreferrer" 
                            className="flex items-center gap-2 px-6 py-3 bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
                        >
                            <Github size={18} /> Source Code
                        </a>
                        <a 
                            href="http://verve-io-frontend.onrender.com" 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center gap-2 px-6 py-3 border border-neutral-700 text-white font-medium text-sm hover:bg-neutral-800 transition-colors"
                        >
                            <ExternalLink size={18} /> Website
                        </a>
                    </div>

                    <div className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8">
                        <div>
                            <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                                <Sparkles size={14} className="text-yellow-400" /> GPT-4 Engine
                            </h4>
                            <p className="text-xs text-neutral-500">Context-aware question generation based on resume parsing.</p>
                        </div>
                        <div>
                            <h4 className="flex items-center gap-2 text-sm font-bold text-white mb-2">
                                <Command size={14} className="text-blue-400" /> NLP Analysis
                            </h4>
                            <p className="text-xs text-neutral-500">Sentiment & tone detection for behavioral assessment.</p>
                        </div>
                    </div>
                </div>

                {/* Right: Mini Simulator Interaction */}
                <div className="h-full flex flex-col justify-center">
                    <MiniSimulator />
                     {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-4 pt-10 pl-5 text-xs font-mono text-neutral-500">
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10">React 18</span>
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Tailwind</span>
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Node.js</span>
                        <span className="px-2 py-1 bg-white/5 rounded border border-white/10">Firebase</span>
                         <span className="px-2 py-1 bg-purple-500/10 text-purple-300 rounded border border-purple-500/20">Gemini</span>
                        <span className="px-2 py-1 bg-blue-500/10 text-blue-300 rounded border border-blue-500/20">Vision AI</span>
                    </div>
                </div>
                

            </div>
        </section>
    );
};

export default VerveIO;
