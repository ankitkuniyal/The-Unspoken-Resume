import { motion, useScroll, useTransform } from 'framer-motion';


const ProjectsHero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="h-screen w-full relative flex flex-col justify-center px-6 md:px-12 snap-start overflow-hidden bg-[#050505]">
        
        {/* Noise Texture Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-10 mixed-blend-overlay" 
             style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }} 
        />
        
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#0a0a0a] to-[#050505] z-0" />
        
        {/* Content */}
        <div className="z-20 max-w-[90rem] mx-auto w-full relative">
            <motion.div style={{ y }} className="space-y-2">
                
                {/* Top Label */}
                <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex items-center gap-4 mb-8"
                >
                    <div className="h-[1px] w-12 bg-white/30" />
                    <span className="font-mono text-neutral-400 text-xs tracking-[0.2em] uppercase">
                        Projects
                    </span>
                </motion.div>

                {/* Main Title - Mix of Fonts */}
                <div className="relative">
                    <div className="overflow-hidden">
                        <motion.h1 
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl lg:text-[11rem] leading-[0.9] font-serif italic text-white/90"
                        >
                            Systems I’ve
                        </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                         <motion.h1 
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-6xl md:text-8xl lg:text-[11rem] leading-[0.8] font-bold tracking-tighter text-white uppercase"
                        >
                            Built<span className="text-accent">.</span>
                        </motion.h1>
                    </div>
                </div>

                {/* Subtext */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="mt-12 flex flex-col md:flex-row justify-between items-end gap-8 border-t border-white/10 pt-8"
                >
                    <p className="text-lg md:text-xl text-neutral-400 max-w-xl font-light leading-relaxed">
                        A curation of technical systems, experimental interfaces, and architectural decisions.
                    </p>
                
                </motion.div>
            </motion.div>
        </div>

        {/* Scroll Interaction */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="absolute bottom-12 right-12 z-20 flex flex-col items-end gap-4"
        >
             <span className="text-neutral-600 font-mono text-xs uppercase tracking-widest writing-vertical-rl ">
                 Scroll to Explore
             </span>
             <div className="w-[1px] h-16 bg-neutral-800 relative overflow-hidden">
                 <motion.div 
                    animate={{ y: ["-100%", "100%"] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-white"
                 />
             </div>
        </motion.div>

    </section>
  );
};

export default ProjectsHero;
