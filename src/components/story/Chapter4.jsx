import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import PatternCard from '../ui/PatternCard';

const patterns = [
  {
    title: 'Real Users Expose Assumptions',
    context: 'Production systems',
    initial: 'Designed flows assuming predictable user behavior.',
    broke: 'Unexpected inputs, retries, timing issues, and edge cases.',
    changed: 'Designed for failure paths and non-ideal usage from the start.',
    learned: 'Users don’t break systems — assumptions do.',
  },
  {
    title: 'Authentication Is a System Decision',
    context: 'Multi-user backend systems',
    initial: 'Treated authentication as a feature to plug in after core logic was ready.',
    broke: 'Access rules became inconsistent, edge cases multiplied, and changes forced rewrites.',
    changed: 'Designed authentication and authorization flows before business logic.',
    learned: 'Auth decisions shape the entire system, not just login screens.',
  },
  {
    title: 'Blocking Requests Hide Bigger Problems',
    context: 'APIs performing heavy processing',
    initial: 'Handled everything inside a single request for simplicity.',
    broke: 'Latency increased, timeouts appeared, and users felt the system was unreliable.',
    changed: 'Separated user-facing requests from heavy processing paths.',
    learned: 'Responsiveness is part of system correctness.',
  },
  {
    title: 'More AI Context ≠ Better Results',
    context: 'LLM-powered features',
    initial: 'Sent large inputs assuming better context would improve accuracy.',
    broke: 'Higher latency, increased cost, and diminishing quality gains.',
    changed: 'Scoped inputs tightly and optimized what the model actually needed.',
    learned: 'AI systems improve through control, not excess.',
  },
  {
    title: 'Async Makes Bugs Harder to See',
    context: 'Concurrent operations',
    initial: 'Used async everywhere assuming performance gains by default.',
    broke: 'Execution flow became harder to reason about and debug.',
    changed: 'Used async only where it clearly improved throughput or responsiveness.',
    learned: 'Async is a trade-off, not a free optimization.',
  },
];

const Chapter4 = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Horizontal scroll effect
  // Scroll from 0 to -85% to ensure the last card is visible
  const x = useTransform(scrollYProgress, [0, 1], ['2%', '-65%']);

  // Watermark opacity
  const watermarkOpacity = useTransform(scrollYProgress, [0.6, 0.9], [0, 0.1]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-neutral-950">
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden lg:flex-row">
        {/* Left Panel: Static Content */}
        <div className="z-20 flex w-full flex-shrink-0 flex-col justify-center p-8 lg:w-[480px] lg:p-16">
          <span className="mb-6 block font-mono text-sm tracking-[0.2em] text-accent uppercase opacity-70">Chapter 04</span>
          <AnimatedHeading
            text="Patterns I Learned the Hard Way"
            className="text-3xl font-bold leading-tight tracking-tighter text-white md:text-5xl lg:text-7xl"
          />
          <ScrollRevealText>
            <p className="mt-8 text-xl font-light leading-relaxed text-neutral-400">
              These aren't just best practices. <br/>
              They are <span className="text-white font-normal">scars turned into strategy.</span>
            </p>
          </ScrollRevealText>
          
           <div className="mt-12 flex items-center gap-4 text-sm font-medium text-neutral-500">
             <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5">
               <span className="animate-pulse">→</span>
             </div>
             <span>Scroll to explore lessons</span>
           </div>
        </div>

        {/* Right Panel: Horizontal Scroll Area */}
        <div className="relative flex h-full flex-1 items-center overflow-hidden">
          {/* Subtle Grid Background for this section */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />

          {/* Watermark */}
          <motion.div
            style={{ opacity: watermarkOpacity }}
            className="pointer-events-none absolute inset-0 z-0 flex select-none items-center justify-center"
          >
            <span className="text-[15vw] font-black leading-none tracking-tighter text-white/5 blur-sm">
              MASTERY
            </span>
          </motion.div>

          <motion.div
            style={{ x }}
            className="relative z-10 flex h-full min-w-max items-center gap-8 pl-12 pr-[50vw] lg:pl-20"
          >
            {patterns.map((pattern, index) => (
              <PatternCard key={index} pattern={pattern} />
            ))}
          </motion.div>
          
          {/* Side Fade Vignette */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-neutral-950 to-transparent z-20" />
           <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-neutral-950 to-transparent z-20" />
        </div>
      </div>
    </section>
  );
};

export default Chapter4;
