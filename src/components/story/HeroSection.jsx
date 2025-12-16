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
        {/* Central Spotlight */}
        <div className="absolute left-1/2 top-1/2 h-[80vh] w-[80vh] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[80px]" />
        
        {/* Blue-Purple Atmospheric Gradients */}
        <div className="absolute top-0 right-0 h-[60vh] w-[60vh] rounded-full bg-blue-900/40 blur-[80px] mix-blend-screen opacity-60" />
        <div className="absolute bottom-0 left-0 h-[60vh] w-[60vh] rounded-full bg-purple-900/65 blur-[80px] mix-blend-screen opacity-50" />
        <div className="absolute top-1/2 left-1/4 h-[50vh] w-[50vh] rounded-full bg-indigo-900/50 blur-[80px] mix-blend-screen opacity-40" />
        
        {/* Subtle Connective Layer */}
        <div className="absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.05)_0%,transparent_70%)]" />

        {/* Global Gradient Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-950/70 to-neutral-950" />

        {/* Grain/Texture Overlay */}
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.10] brightness-100 contrast-150" />
      </motion.div>

      {/* Main Content Area */}
      <div className="relative z-10 flex h-full flex-grow flex-col items-center justify-center px-4 text-center">
        <motion.div
           style={{ y: yText, opacity: opacityText, scale: scaleHero }}
           className="flex max-w-[90rem] flex-col items-center gap-5"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <span className="inline-block rounded-full border border-white/5 bg-white/5 px-6 py-2 font-sans text-sm font-small tracking-[0.2em] text-indigo-300/70 backdrop-blur-md transition-all duration-300 ease-out hover:border-white/10 hover:bg-white/10 hover:text-white">
              THE UNSPOKEN RESUME
            </span>
          </motion.div>

          {/* Headline - Clean & Modern with proper spacing */}
          <h1 className="flex flex-col items-center justify-center space-y-2 font-sans font-bold leading-none tracking-tight text-white">
            <div className="overflow-hidden py-2">
              <motion.span
                className="block text-6xl md:text-7xl lg:text-[8rem]"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                Forged by <span className="text-blue-500/100">Errors.</span>
              </motion.span>
            </div>
            <div className="overflow-hidden py-1">
              <motion.span
                 className="block text-5xl md:text-7xl lg:text-[8rem] pb-3 bg-gradient-to-br from-white via-white to-neutral-500 bg-clip-text text-transparent"
                 initial={{ y: "110%" }}
                 animate={{ y: 0 }}
                 transition={{ duration: 1, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
              >
                Refined by Understanding.
              </motion.span>
            </div>
          </h1>

          
        </motion.div>
      </div>

      {/* Footer Scroll Indication */}
      <motion.div
         className="absolute bottom-10 left-0 right-0 z-20 flex mt-4 justify-center"
         style={{ opacity: opacityText }}
      >
        <div 
          onClick={() => document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex cursor-pointer flex-col items-center gap-3 transition-opacity hover:opacity-80"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500">Scroll to reveal</span>
          <div className="h-10 w-[1px] overflow-hidden bg-neutral-800">
            <motion.div 
               animate={{ y: ['-100%', '100%'] }}
               transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
               className="h-full w-full bg-accent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
