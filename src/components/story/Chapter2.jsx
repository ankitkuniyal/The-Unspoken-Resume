import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';

const Chapter2 = () => {
  return (
    <StorySection id="chapter-2">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Left Side: Visual / Quote */}
        <div className="relative order-2 flex h-full min-h-[400px] w-full items-center justify-center md:order-1 md:h-[600px]">
           <motion.div
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="group relative w-full max-w-md overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-10 shadow-2xl backdrop-blur-xl"
          >
            {/* Glow effect */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50" />

            <div className="relative z-10">
              <div className="mb-8 flex gap-2 opacity-30">
                <div className="h-3 w-3 rounded-full bg-neutral-600" />
                <div className="h-3 w-3 rounded-full bg-neutral-600" />
              </div>

              <p className="font-mono text-2xl leading-relaxed tracking-tight text-neutral-200 md:text-3xl">
                <span className="text-red-500 opacity-80">{'>'} </span>
                <TypewriterEffect text="Speed without understanding collapses under pressure." />
                <motion.span 
                  animate={{ opacity: [1, 0] }} 
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="inline-block h-6 w-3 bg-red-500 ml-2 align-middle"
                />
              </p>

              <div className="mt-12 flex items-center gap-4 text-neutral-500">
                <div className="h-px flex-1 bg-neutral-800" />
                <span className="font-mono text-xs tracking-widest uppercase">Error.log</span>
              </div>
            </div>

            {/* Background Grid Pattern */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px] opacity-20" />
          </motion.div>
          
           {/* Background Atmosphere */}
           <div className="absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-900/10 blur-[120px]" />
        </div>

        {/* Right Side: Narrative */}
        <div className="order-1 space-y-10 md:order-2">
          <div>
            <span className="mb-6 block font-mono text-sm tracking-[0.2em] text-neutral-500 uppercase">
              Chapter 02
            </span>
            <AnimatedHeading
              text="Nothing worked the first time"
              className="text-3xl font-bold leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-6xl"
            />
          </div>

          <div className="relative space-y-8 border-l border-neutral-800 pl-8 text-lg font-light text-neutral-300 md:text-2xl">
            <ScrollRevealText>
             <p className="font-medium text-white">The uncomfortable phase.</p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                DSA took time. Debugging took longer. <br/>
                <span className="text-red-400/80">Backend bugs didn’t announce themselves</span> — they just failed silently.
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                I watched others move faster. <br />
                <span className="text-white font-semibold underline decoration-neutral-700 underline-offset-8">I moved deeper.</span>
              </p>
            </ScrollRevealText>
            
             <ScrollRevealText>
              <div className="mt-8 inline-block rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-md">
                <p className="font-mono text-sm text-neutral-400">
                  STATUS: <span className="text-white">PATIENT</span>
                </p>
              </div>
            </ScrollRevealText>
          </div>
        </div>
      </div>
    </StorySection>
  );
};

const TypewriterEffect = ({ text }) => {
  const chars = text.split('');
  return (
    <span>
      {chars.map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.05, delay: index * 0.03 + 0.5 }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
};

export default Chapter2;

