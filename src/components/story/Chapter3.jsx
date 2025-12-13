import { useRef } from 'react';
import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion, useScroll, useTransform } from 'framer-motion';

const Chapter3 = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    // Text Animation: Zooms in and "moves forward"
    const textScale = useTransform(scrollYProgress, [0.2, 0.8], [0.9, 1.1]);
    const textOpacity = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0, 1, 0]);

    // Visual Animation: Fades back and moves to center
    // Assuming "move into center" means moving left towards the text column (negative X) or just centering in its own frame?
    // Let's interpret "fades back" as getting smaller and darker.
    const visualScale = useTransform(scrollYProgress, [0.2, 0.8], [1.1, 0.8]);
    const visualOpacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.3]);
    const visualX = useTransform(scrollYProgress, [0.2, 0.8], ["0%", "-20%"]); // Moving left towards center

    return (
        <StorySection id="chapter-3">
             <div ref={containerRef} className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
                 {/* Left Narrative */}
                 <motion.div style={{ scale: textScale, opacity: textOpacity }}>
                    <span className="text-accent font-mono text-sm mb-4 block">Chapter 3</span>
                    <AnimatedHeading text="Tutorials Stopped Working" className="text-3xl md:text-5xl" />
                    
                    <div className="space-y-8 mt-8">
                         <ScrollRevealText>
                            <p className="text-xl text-white font-medium">
                                Copying solutions stopped helping.
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p className="text-neutral-400">
                                Real engineering isn't about clean happy paths. It's about when things break.
                                <br/>
                                <span className="text-white">Race conditions. Memory leaks. Distributed failures.</span>
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p>
                                I stopped asking "how do I resize this div?" and started asking 
                                <span className="text-accent block mt-2 font-mono">
                                    "What are the failure modes of this system?"
                                </span>
                            </p>
                        </ScrollRevealText>
                    </div>
                </motion.div>

                {/* Right Visual - Abstract 'System Overload' */}
                 <motion.div 
                    style={{ scale: visualScale, opacity: visualOpacity, x: visualX }}
                    className="pl-20 relative h-[500px] w-full hidden md:flex items-center justify-center perspective-1000 origin-center"
                 >
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]" />

                    <div className="relative w-[500px] h-[380px] border border-neutral-800/50 bg-neutral-900/40 rounded-xl backdrop-blur-sm overflow-hidden shadow-2xl">
                         {/* Header */}
                         <div className="h-8 bg-neutral-900/80 border-b border-neutral-800 flex items-center px-4 gap-2">
                             <div className="w-2 h-2 rounded-full bg-red-500/50" />
                             <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                             <div className="w-2 h-2 rounded-full bg-green-500/50" />
                             <div className="ml-auto text-[10px] font-mono text-neutral-500">TERMINAL</div>
                         </div>

                         {/* Console Output Animation */}
                         <div className="p-4 font-mono text-xs space-y-1">
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ staggerChildren: 0.1, delayChildren: 0.5 }}
                            >
                                <motion.div className="text-green-400">✓ Service initialized</motion.div>
                                <motion.div className="text-green-400">✓ DB connected (Pool: 10/10)</motion.div>
                                <motion.div className="text-neutral-400 mt-2">{'>'} Incoming Load: 500 req/s...</motion.div>
                                <motion.div className="text-yellow-400">{'>'} Warning: High latency detected</motion.div>
                                <motion.div className="text-red-400 mt-2">Error: Connection timeout</motion.div>
                                <motion.div className="text-red-400">Error: Deadlock found in process 421</motion.div>
                                <motion.div 
                                    className="text-red-500 font-bold mt-2 bg-red-500/10 p-1 inline-block"
                                    animate={{ opacity: [1, 0.5, 1] }}
                                    transition={{ duration: 0.8, repeat: Infinity }}
                                >
                                    ⚠ CRITICAL FAILURE
                                </motion.div>
                            </motion.div>
                         </div>

                         {/* Chaos Overlay */}
                         <motion.div 
                            className="absolute inset-0 bg-red-500/5 pointer-events-none"
                            animate={{ opacity: [0, 0.2, 0] }}
                            transition={{ duration: 0.2, repeat: Infinity, repeatDelay: 3 }}
                         />
                    </div>
                 </motion.div>
            </div>
             {/* Connecting Timeline Line */}
             <div className="absolute bottom-0 left-8 md:left-[50%] transform -translate-x-1/2 translate-y-full h-32 w-px bg-neutral-800 overflow-hidden">
                <motion.div 
                    initial={{ y: "-100%" }}
                    whileInView={{ y: "0%" }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className="w-full h-full bg-gradient-to-b from-accent to-transparent"
                />
            </div>
        </StorySection>
    );
};

export default Chapter3;
