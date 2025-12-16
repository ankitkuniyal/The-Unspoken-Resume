import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';

const SystemBuilder = () => {
  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-sm md:h-[600px]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20" />

      {/* Isometric Layers Container */}
      <div className="relative h-96 w-64 [perspective:1000px] [transform-style:preserve-3d]">
        
        {/* Layer 4: Build (Top) */}
        <motion.div
          initial={{ opacity: 0, y: 100, rotateX: 60, rotateZ: -45 }}
          whileInView={{ opacity: 1, y: -60, rotateX: 60, rotateZ: -45 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute inset-0 flex items-center justify-center rounded-xl border border-white/20 bg-white/10 shadow-[0_0_30px_rgba(255,255,255,0.1)] backdrop-blur-md"
        >
          <span className="rotate-45 text-lg font-bold tracking-widest text-white">BUILD</span>
        </motion.div>

        {/* Layer 3: Experiment */}
        <motion.div
           initial={{ opacity: 0, y: 100, rotateX: 60, rotateZ: -45 }}
           whileInView={{ opacity: 1, y: 0, rotateX: 60, rotateZ: -45 }}
           transition={{ duration: 1, delay: 0.6 }}
           className="absolute inset-x-0 bottom-0 h-64 border border-emerald-500/30 bg-emerald-500/10 shadow-[0_0_20px_rgba(16,185,129,0.1)] backdrop-blur-md rounded-xl flex items-center justify-center"
        >
          <span className="rotate-45 text-sm font-mono text-emerald-400">EXPERIMENTS</span>
        </motion.div>

        {/* Layer 2: Boundaries */}
        <motion.div
           initial={{ opacity: 0, y: 100, rotateX: 60, rotateZ: -45 }}
           whileInView={{ opacity: 1, y: 60, rotateX: 60, rotateZ: -45 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="absolute inset-x-0 bottom-0 h-64 border border-dashed border-red-500/30 bg-red-500/5 rounded-xl flex items-center justify-center"
        >
           <span className="rotate-45 text-xs font-mono text-red-400">CONSTRAINTS</span>
        </motion.div>
        
        {/* Layer 1: Truth (Bottom) */}
        <motion.div
           initial={{ opacity: 0, y: 100, rotateX: 60, rotateZ: -45 }}
           whileInView={{ opacity: 1, y: 120, rotateX: 60, rotateZ: -45 }}
           transition={{ duration: 1, delay: 0.2 }}
           className="absolute inset-x-0 bottom-0 h-64 border border-accent/30 bg-accent/10 shadow-[0_0_40px_rgba(59,130,246,0.1)] backdrop-blur-md rounded-xl flex items-center justify-center"
        >
           <span className="rotate-45 text-sm font-bold text-accent">CORE TRUTH</span>
        </motion.div>
      </div>
      
       {/* Connecting beam */}
       <motion.div 
         initial={{ height: 0, opacity: 0 }}
         whileInView={{ height: '60%', opacity: 1 }}
         transition={{ delay: 1.5, duration: 1}}
         className="absolute left-1/2 top-1/2 w-[2px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-white via-accent to-transparent rotate-[0deg] blur-[1px]"
       />
    </div>
  );
};

const Chapter5 = () => {
  return (
    <StorySection id="chapter-5">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Left: Updated Narrative */}
        <div className="space-y-10">
          <div>
            <span className="mb-6 block font-mono text-sm tracking-[0.2em] text-accent uppercase opacity-70">
              Chapter 05
            </span>
            <AnimatedHeading 
              text="How I Approach a New Problem" 
              className="text-3xl font-bold leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-7xl" 
            />
          </div>

          <div className="space-y-8 text-lg font-light leading-relaxed text-neutral-300 md:text-2xl">
            <ScrollRevealText>
              <p>
                I don’t start by choosing tools. <br />
                <span className="text-white font-medium underline decoration-accent underline-offset-8">I start by defining what must be true.</span>
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p className="border-l-4 border-white/10 pl-6 italic text-neutral-400">
                "Who is this for? What needs to work reliability on day one? What can fail without
                breaking trust?"
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                I avoid committing to structure too early. Early implementations are meant to
                <span className="text-red-400"> surface constraints</span>, not hide them.
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
               <div className="flex items-center gap-4 pt-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <p className="font-mono text-sm text-emerald-400 uppercase tracking-widest">
                    Boundaries {'>'} Solutions
                  </p>
               </div>
            </ScrollRevealText>
          </div>
        </div>

        {/* Right: System Builder Visual */}
        <div className="relative flex h-full min-h-[400px] w-full items-center justify-center md:h-[600px]">
           {/* Glow */}
           <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/10 blur-[100px]" />
          <SystemBuilder />
        </div>
      </div>
    </StorySection>
  );
};

export default Chapter5;
