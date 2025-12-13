import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';

import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <StorySection 
        id="hero" 
        className="justify-center text-center"
        // Performance: Force immediate animation, disable scroll observer
        animate={{ opacity: 1, y: 0 }}
        whileInView={null} 
        viewport={null}
        initial={{ opacity: 0, y: 20 }}
    >
      {/* Navigation Buttons */}
      <nav className="absolute top-0 left-0 w-full p-6 z-20 flex justify-center md:justify-end gap-4">
        <Link to="/" className="px-4 py-2 rounded-full border border-transparent hover:border-neutral-700 text-sm md:text-base text-neutral-400 hover:text-white transition-all">
          Story
        </Link>
        <Link to="/projects" className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-sm md:text-base text-white transition-all backdrop-blur-sm">
          Projects
        </Link>
        <Link to="/resume" className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 hover:bg-neutral-800 text-sm md:text-base text-white transition-all backdrop-blur-sm">
          Resume
        </Link>
        <Link to="/contact" className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 text-sm md:text-base transition-all">
          Contact
        </Link>
      </nav>

      {/* Completely New Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Dark Base */}
        <div className="absolute inset-0 bg-black" />
        
        {/* Animated Gradient Orbs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-br from-emerald-500/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-purple-500/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl"
        />
        
        {/* Dot Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent)',
          }}
        />
        
        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black" />
      </div>

      <div className="flex flex-col items-center z-10 max-w-5xl mx-auto px-4">
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex justify-center"
        >
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-mono tracking-widest uppercase">
                Portfolio 2024
            </span>
        </motion.div>

        <AnimatedHeading 
            text="I didn’t become an engineer overnight. I became one by breaking things." 
            className="mb-10 text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.1]"
            viewport={null}
            whileInView={null}
        />
        
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-lg font-mono text-neutral-400"
        >
            <span className="hover:text-accent transition-colors cursor-default">Backend</span>
            <span className="text-neutral-800">•</span>
            <span className="hover:text-accent transition-colors cursor-default">AI Systems</span>
            <span className="text-neutral-800">•</span>
            <span className="hover:text-accent transition-colors cursor-default">Infrastructure</span>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-600 font-medium">Start the Journey</span>
        <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-12 bg-gradient-to-b from-neutral-800 to-accent"
        />
      </motion.div>
    </StorySection>
  );
};

export default HeroSection;
