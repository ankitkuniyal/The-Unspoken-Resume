import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '../ui/NavBar';
import { useRef } from 'react';

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll();
  
  // Parallax effects
  const yBackground = useTransform(scrollY, [0, 1000], [0, 200]);
  const yText = useTransform(scrollY, [0, 600], [0, 100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const scaleHero = useTransform(scrollY, [0, 600], [1, 0.9]);

  return (
    <section 
      id="hero-section" 
      ref={ref}
      className="relative flex h-screen w-full flex-col overflow-hidden bg-neutral-950"
    >
      <NavBar />
      
      {/* Background Layers - Deep Parallax */}
      <motion.div 
        style={{ y: yBackground }}
        className="absolute inset-0 z-0"
      >
        {/* Central Ambient Glow */}
        <div className="absolute left-1/2 top-1/2 h-[100vh] w-[100vw] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]" />
        
        {/* Cinematic Atmospheric Gradients */}
        <div className="absolute top-[-10%] right-[-10%] h-[70vh] w-[70vh] rounded-full bg-blue-600/20 blur-[120px] animate-pulse" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-[-10%] left-[-10%] h-[70vh] w-[70vh] rounded-full bg-indigo-600/15 blur-[120px] animate-pulse" style={{ animationDuration: '10s' }} />
        
        {/* Global Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/80 to-neutral-950" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{ backgroundImage: 'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
        />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 flex h-full flex-grow flex-col items-center justify-center px-4 text-center">
        <motion.div
           style={{ y: yText, opacity: opacityText, scale: scaleHero }}
           className="flex max-w-5xl flex-col items-center gap-8"
        >
          {/* Headline - Single Line, Space Grotesk */}
          <h1 className="flex flex-col items-center text-center font-display font-black leading-none tracking-tight text-white uppercase">
            <div className="overflow-hidden py-4">
              <motion.span
                className="block text-4xl sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6.5rem] whitespace-nowrap"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="bg-gradient-to-b from-white via-white to-neutral-400 bg-clip-text text-transparent">THE UNSPOKEN </span>
                <span className="relative inline-block text-transparent" style={{ WebkitTextStroke: "1px rgba(255,255,255,0.7)" }}>
                  <span className="absolute inset-0 bg-blue-500/20 blur-xl"></span>
                  RESUME
                </span>
              </motion.span>
            </div>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="flex flex-col items-center gap-4"
          >
            <p className="max-w-2xl font-sans text-lg md:text-2xl text-neutral-400 font-semibold tracking-wide">
              Forged by Errors. Refined by Understanding.
            </p>
            <div className="h-px w-12 bg-blue-500/50" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="max-w-xl font-sans text-base md:text-lg text-neutral-400 leading-relaxed font-light"
          >
            A journey through code, architecture, and the lessons 
            learned from every debugger session.
          </motion.p>
        </motion.div>
      </div>

      {/* Footer Scroll Indication */}
      <motion.div
         className="absolute bottom-12 left-0 right-0 z-20 flex flex-col items-center gap-4"
         style={{ opacity: opacityText }}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.5, duration: 1 }}
      >
        <div 
          onClick={() => document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex cursor-pointer flex-col items-center gap-4 transition-all hover:translate-y-1"
        >
          <div className="relative h-12 w-7 rounded-full border-2 border-white/10 p-1 transition-colors group-hover:border-white/20">
            <motion.div 
              animate={{ 
                y: [0, 16, 0],
                opacity: [1, 0.5, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="h-2 w-1.5 mx-auto rounded-full bg-blue-500"
            />
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.4em] text-neutral-500 transition-colors group-hover:text-white">
            Discover
          </span>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
