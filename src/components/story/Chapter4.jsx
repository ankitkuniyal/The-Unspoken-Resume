import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import PatternCard from '../ui/PatternCard';

const patterns = [
    {
            title: "Real Users Expose Assumptions",
            context: "Production systems",
            initial: "Designed flows assuming predictable user behavior.",
            broke: "Unexpected inputs, retries, timing issues, and edge cases.",
            changed: "Designed for failure paths and non-ideal usage from the start.",
            learned: "Users don’t break systems — assumptions do."
        },
        {
        title: "Authentication Is a System Decision",
        context: "Multi-user backend systems",
        initial: "Treated authentication as a feature to plug in after core logic was ready.",
        broke: "Access rules became inconsistent, edge cases multiplied, and changes forced rewrites.",
        changed: "Designed authentication and authorization flows before business logic.",
        learned: "Auth decisions shape the entire system, not just login screens."
    },
    {
        title: "Blocking Requests Hide Bigger Problems",
        context: "APIs performing heavy processing",
        initial: "Handled everything inside a single request for simplicity.",
        broke: "Latency increased, timeouts appeared, and users felt the system was unreliable.",
        changed: "Separated user-facing requests from heavy processing paths.",
        learned: "Responsiveness is part of system correctness."
    },
    {
        title: "More AI Context ≠ Better Results",
        context: "LLM-powered features",
        initial: "Sent large inputs assuming better context would improve accuracy.",
        broke: "Higher latency, increased cost, and diminishing quality gains.",
        changed: "Scoped inputs tightly and optimized what the model actually needed.",
        learned: "AI systems improve through control, not excess."
    },
    {
        title: "Async Makes Bugs Harder to See",
        context: "Concurrent operations",
        initial: "Used async everywhere assuming performance gains by default.",
        broke: "Execution flow became harder to reason about and debug.",
        changed: "Used async only where it clearly improved throughput or responsiveness.",
        learned: "Async is a trade-off, not a free optimization."
    }
];

const Chapter4 = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    // Horizontal scroll effect
    // Desktop: Scroll vertically to move horizontally
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
    
    // Watermark opacity - fades in near the end of the scroll
    const watermarkOpacity = useTransform(scrollYProgress, [0.8, 1], [0, 0.1]);

    return (
        <section ref={targetRef} className="relative h-[400vh]"> 
            <div className="sticky top-0 h-screen flex flex-col lg:flex-row bg-neutral-900/20 overflow-hidden">
                
                {/* Left Panel: Static Content */}
                 <div className="flex-shrink-0 w-full lg:w-[450px] p-8 lg:p-12 flex flex-col justify-center z-20 bg-gradient-to-b from-neutral-900 via-neutral-900/90 to-transparent lg:bg-none lg:border-r border-neutral-800/50">
                    <span className="text-accent font-mono text-sm mb-4 block">Chapter 4</span>
                    <AnimatedHeading text="Patterns I Learned the Hard Way" className="text-3xl md:text-5xl leading-tight" />
                    <p className="text-neutral-400 mt-6 text-lg leading-relaxed">
                        Repeated mistakes eventually turn into instincts. 
                        <br/> <span className="text-neutral-500 text-sm mt-2 block">Scroll to explore the lessons.</span>
                    </p>
                    
                     {/* Desktop Indicator */}
                     <div className="hidden lg:flex items-center gap-2 text-neutral-500 font-mono text-xs mt-12">
                        <div className="w-10 h-[1px] bg-neutral-700" />
                        <span>KEEP SCROLLING</span>
                     </div>
                </div>

                {/* Right Panel: Horizontal Scroll Area */}
                <div className="flex-1 relative flex items-center overflow-hidden h-full">
                    
                    {/* Watermark - Fixed Position, Fades in */}
                    <motion.div 
                        style={{ opacity: watermarkOpacity }}
                        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0"
                    >
                         <span className="text-[20vw] md:text-[12vw] font-black text-white leading-none tracking-tighter text-center px-4">
                            LEARNING
                        </span>
                    </motion.div>

                    <motion.div style={{ x }} className="flex gap-8 px-8 lg:px-12 items-center min-w-max h-full relative z-10">
                        {patterns.map((pattern, index) => (
                             <PatternCard key={index} pattern={pattern} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Chapter4;
