import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';

const Chapter2 = () => {
    return (
        <StorySection id="chapter-2" className="bg-neutral-900/40 relative">
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

             <div className="grid md:grid-cols-2 gap-16 items-center">
                 {/* Left Side: Visual / Quote */}
                <div className="order-2 md:order-1 flex justify-center relative">
                    
                    {/* The "Deep Work" Card */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-full max-w-md bg-neutral-950 border border-neutral-800 p-10 rounded-2xl shadow-2xl overflow-hidden group"
                    >
                        {/* Glow effect */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-50" />
                        
                        <div className="relative z-10">
                            <div className="mb-6 flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/20" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
                                <div className="w-3 h-3 rounded-full bg-green-500/20" />
                            </div>

                            <p className="text-2xl md:text-3xl font-mono text-neutral-200 leading-relaxed tracking-tight">
                                <TypewriterEffect text="Speed without understanding collapses under pressure." />
                            </p>

                            <div className="mt-8 flex items-center gap-3 opacity-50">
                                <div className="h-[1px] flex-1 bg-neutral-800" />
                                <span className="text-xs font-mono text-accent">LESSON_01.LOG</span>
                            </div>
                        </div>

                        {/* Background Grid Pattern */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)] pointer-events-none" />
                    </motion.div>
                </div>

                {/* Right Side: Narrative */}
                <div className="order-1 md:order-2 px-4 md:px-0">
                    <span className="text-accent font-mono text-sm mb-4 block flex items-center gap-2">
                        <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                        Chapter 2
                    </span>
                    <AnimatedHeading text="Nothing worked the first time" className="text-4xl md:text-6xl mb-8" />
                    
                    <div className="space-y-8 border-l border-neutral-800 pl-8 relative">
                         {/* Timeline dot */}
                         <div className="absolute top-0 -left-[5px] w-2.5 h-2.5 bg-neutral-800 rounded-full" />
                         
                        <ScrollRevealText>
                            <h3 className="text-xl text-white font-medium mb-2">The uncomfortable phase</h3>
                            <p className="text-neutral-400">
                                Things didn’t click quickly. DSA took time. Debugging took longer.
                                Backend bugs didn’t announce themselves — they just failed silently.
                            </p>
                        </ScrollRevealText>
                        
                         <ScrollRevealText>
                            <p className="text-lg text-neutral-300">
                                I watched others move faster. <br/>
                                <span className="text-white font-semibold">I moved deeper.</span>
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <div className="p-4 bg-accent/5 border border-accent/10 rounded-lg">
                                <p className="text-accent/90 font-mono text-sm">
                                    $Status: "I was slow. Not incapable — just thorough."
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
    // Simple staggered reveal for the quote
    const chars = text.split("");
    return (
        <span>
            {chars.map((char, index) => (
                <motion.span
                    key={index}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.05, delay: index * 0.05 }}
                >
                    {char}
                </motion.span>
            ))}
        </span>
    )
}

export default Chapter2;
