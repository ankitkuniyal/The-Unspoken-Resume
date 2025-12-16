import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';

const Chapter3 = () => {
  return (
    <StorySection id="chapter-3">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Left Narrative */}
        <div className="space-y-10">
          <div>
            <span className="mb-6 block font-mono text-sm tracking-[0.2em] text-accent uppercase opacity-70">
              Chapter 03
            </span>
             <AnimatedHeading 
              text="Tutorials Stopped Working" 
              className="text-3xl font-bold leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-7xl" 
            />
          </div>

          <div className="space-y-8 text-lg font-light leading-relaxed text-neutral-300 md:text-2xl">
            <ScrollRevealText>
              <p className="font-medium text-white">Copying solutions stopped helping.</p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                Real engineering isn't about clean happy paths. It's about when things break.
                <br />
                <span className="text-white bg-red-500/10 px-2 py-0.5 rounded">
                  Race conditions. Memory leaks. Distributed failures.
                </span>
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                I stopped asking "how do I resize this div?" and started asking
                <span className="mt-4 block border-l-2 border-accent pl-4 font-mono text-xl text-accent/90 italic">
                  "What are the failure modes of this system?"
                </span>
              </p>
            </ScrollRevealText>
          </div>
        </div>

        {/* Right Visual - Holographic Console */}
        <div className="relative flex h-full min-h-[400px] w-full items-center justify-center md:h-[600px]">
          <motion.div
            initial={{ opacity: 0, rotateY: -20, x: 50 }}
            whileInView={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
             className="relative w-full max-w-md overflow-hidden rounded-xl border border-neutral-800 bg-neutral-950 p-1 shadow-2xl"
          >
             {/* Header */}
            <div className="flex h-10 items-center justify-between border-b border-neutral-800 bg-neutral-900 px-4">
              <div className="flex gap-2">
                 <div className="h-3 w-3 rounded-full bg-red-500/20" />
                 <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
              </div>
              <div className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase">System_Monitor</div>
            </div>

            {/* Console Output Animation */}
            <div className="bg-black/50 p-6 font-mono text-sm leading-relaxed text-neutral-400">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
              >
                <motion.div className="flex justify-between text-green-500/80">
                  <span>✓ Service initialized</span>
                  <span>[0.02ms]</span>
                </motion.div>
                <motion.div className="flex justify-between text-green-500/80">
                   <span>✓ DB connected</span>
                   <span>[10/10]</span>
                </motion.div>
                <motion.div className="mt-4 border-t border-dashed border-neutral-800 pt-2 text-neutral-500">
                  {'>'} Incoming Load: 500 req/s...
                </motion.div>
                <motion.div className="text-yellow-500/80">
                  {'>'} Warning: High latency detected
                </motion.div>
                <motion.div className="mt-2 text-red-400">Error: Connection timeout</motion.div>
                <motion.div className="text-red-400">
                  Error: Deadlock found in process 421
                </motion.div>
                <motion.div
                  className="mt-6 flex justify-center rounded bg-red-500/10 py-2 font-bold tracking-widest text-red-500"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                >
                  ⚠ CRITICAL FAILURE
                </motion.div>
              </motion.div>
            </div>
             
             {/* Scanlines */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%] z-20 opacity-20" />
          </motion.div>
           
           {/* Ambient Glow */}
            <div className="absolute -right-20 -bottom-20 h-64 w-64 rounded-full bg-red-500/10 blur-[80px]" />
        </div>
      </div>
    </StorySection>
  );
};

export default Chapter3;
