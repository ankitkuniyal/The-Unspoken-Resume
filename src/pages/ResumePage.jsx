import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText, ExternalLink, ChevronRight, Hash, Terminal } from 'lucide-react';
import NavBar from '../components/ui/NavBar';
import AnimatedHeading from '../components/ui/AnimatedHeading';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white/20 relative overflow-hidden flex flex-col">
       <NavBar/>
       
       {/* Background Grid & Noise */}
       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />
       <div className="absolute top-[-20%] right-[-10%] w-[60vw] h-[60vw] bg-neutral-800/20 rounded-full blur-[120px] pointer-events-none" />

       <main className="flex-grow flex items-center justify-center relative z-10 p-6 md:p-20">
          <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left Column: Context & Actions */}
              <div className="space-y-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-neutral-400">
                      <Terminal size={12} />
                      <span>cat résumé.pdf</span>
                  </div>

                  <div>
                      <AnimatedHeading 
                          text="Expertise"
                          className="text-6xl md:text-8xl font-bold tracking-tighter text-white mb-2"
                      />
                      <AnimatedHeading 
                          text="& Experience"
                          className="text-6xl md:text-8xl font-serif italic text-neutral-500 mb-6 "
                      />
                      <p className="text-lg text-neutral-400 max-w-lg leading-relaxed border-l-2 border-neutral-800 pl-6">
                          A comprehensive overview of my technical journey, architectural decisions, and the systems I've engineered. 
                          Designed for clarity and ATS compatibility.
                      </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                      <motion.a 
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         href="/Resume.pdf"
                         target="_blank"
                         rel="noopener noreferrer"
                         className="group relative px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden flex items-center justify-center gap-2"
                      >
                         <div className="absolute inset-0 bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                         <span className="relative flex items-center gap-2">
                             View Resume <ExternalLink size={18} />
                         </span>
                      </motion.a>

                      <motion.a 
                         whileHover={{ scale: 1.02 }}
                         whileTap={{ scale: 0.98 }}
                         href="/Resume.pdf" 
                         download="Ankit_Kuniyal_Resume.pdf"
                         className="px-8 py-4 border border-neutral-800 text-neutral-300 font-medium text-lg rounded-full hover:bg-neutral-900 hover:text-white transition-colors flex items-center justify-center gap-2"
                      >
                         <Download size={18} /> Download PDF
                      </motion.a>
                  </div>

                  <div className="flex items-center gap-6 text-sm text-neutral-600 font-mono pt-4">
                      <span className="flex items-center gap-2">
                          <Hash size={14} /> Last Updated: Dec 2025
                      </span>
                      <span className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          Open for Work
                      </span>
                  </div>
              </div>

              {/* Right Column: Interactive Preview Card */}
              <motion.div 
                  initial={{ opacity: 0, rotateY: 10, x: 50 }}
                  animate={{ opacity: 1, rotateY: 0, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="relative group perspective-1000"
              >
                  {/* Decorative Backdrop */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-neutral-800 to-neutral-900 rounded-[2rem] transform translate-y-4 translate-x-4 opacity-50 blur-sm" />
                  
                  {/* The Card */}
                  <div className="relative bg-[#0A0A0A] border border-neutral-800 rounded-[2rem] p-8 md:p-10 shadow-2xl hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] transition-shadow duration-500">
                      
                      {/* Card Header */}
                      <div className="flex justify-between items-start mb-8 border-b border-neutral-900 pb-6">
                          <div className="flex gap-4">
                              <div className="w-12 h-12 bg-neutral-900 rounded-xl flex items-center justify-center border border-neutral-800">
                                  <FileText className="text-white" size={24} />
                              </div>
                              <div>
                                  <h3 className="text-white font-bold text-lg">resume_final_v2.pdf</h3>
                                  <p className="text-neutral-500 text-xs font-mono uppercase tracking-wider">74 KB • PDF Document</p>
                              </div>
                          </div>
                      </div>

                      {/* Content Preview (Code style) */}
                      <div className="space-y-6 font-mono text-sm leading-relaxed">
                          <div className="opacity-50">
                              <span className="text-purple-400">class</span> <span className="text-yellow-200">Engineer</span> <span className="text-white">{'{'}</span>
                          </div>
                          <div className="pl-6 space-y-2">
                             <div className="flex gap-4">
                                 <span className="text-neutral-600">01</span>
                                 <span>
                                     <span className="text-blue-400">name</span>: <span className="text-green-400">"Ankit Kuniyal"</span>;
                                 </span>
                             </div>
                             <div className="flex gap-4">
                                 <span className="text-neutral-600">02</span>
                                 <span>
                                     <span className="text-blue-400">status</span>: <span className="text-green-400">"Building cool stuff"</span>;
                                 </span>
                             </div>
                             <div className="flex gap-4">
                                 <span className="text-neutral-600">03</span>
                                 <span>
                                     <span className="text-blue-400">stack</span>: [<span className="text-orange-300">"React"</span>, <span className="text-orange-300">"Node"</span>, <span className="text-orange-300">"Python"</span>,<span className="text-orange-300">"Java"</span>];
                                 </span>
                             </div>
                             <div className="flex gap-4">
                                 <span className="text-neutral-600">04</span>
                                 <span>
                                     <span className="text-blue-400">location</span>: <span className="text-green-400">"Global / Remote"</span>;
                                 </span>
                             </div>
                          </div>
                          <div className="opacity-50">
                              <span className="text-white">{'}'}</span>
                          </div>
                      </div>

                      {/* Fake Scan Line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:animate-scan" />
                  
                  </div>
              </motion.div>

          </div>
       </main>
    </div>
  );
};

export default ResumePage;
