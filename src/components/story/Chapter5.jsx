import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import { Target, Search, FlaskConical, LayoutTemplate } from 'lucide-react';

const SystemBuilder = () => {
    return (
        <div className="relative w-full h-[400px] md:h-[500px] flex items-center justify-center bg-neutral-900/20 rounded-2xl overflow-hidden border border-neutral-800">
             {/* Background Grid */}
             <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:30px_30px]" />

            <div className="relative w-64 h-64 flex flex-col items-center justify-end pb-8">
                 {/* Phase 4: Full System (Top Layers) */}
                 <motion.div 
                    className="absolute bottom-32 flex gap-1"
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 2.5, duration: 0.5 }}
                >
                    <div className="w-16 h-12 bg-neutral-700/50 rounded border border-neutral-600" />
                    <div className="w-16 h-12 bg-neutral-700/50 rounded border border-neutral-600" />
                    <div className="w-16 h-12 bg-neutral-700/50 rounded border border-neutral-600" />
                 </motion.div>

                 {/* Phase 3: Experiments (Middle Layer - Some erratic) */}
                 <div className="absolute bottom-20 flex gap-4">
                     {/* Successful Module */}
                    <motion.div 
                        className="w-20 h-10 bg-emerald-500/20 border border-emerald-500/50 rounded flex items-center justify-center"
                        initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                    >
                         <span className="text-[10px] text-emerald-400">Valid</span>
                    </motion.div>

                    {/* Failed Module (Red) */}
                    <motion.div 
                        className="w-20 h-10 bg-red-500/20 border border-red-500/50 rounded flex items-center justify-center"
                        initial={{ opacity: 0, y: -20, rotate: 0 }} whileInView={{ opacity: 0.5, y: 0, rotate: 12 }} transition={{ delay: 1.8 }}
                    >
                         <span className="text-[10px] text-red-400">Fragile</span>
                    </motion.div>
                 </div>

                 {/* Phase 2: Constraints (Boundaries) */}
                 <motion.div 
                    className="absolute bottom-0 w-64 h-48 border-x-2 border-dashed border-accent/30 pointer-events-none"
                    initial={{ height: 0, opacity: 0 }} whileInView={{ height: 192, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8 }}
                >
                     <div className="absolute top-0 right-[-80px] text-xs text-accent/50 font-mono">{'<Constraint />'}</div>
                </motion.div>

                 {/* Phase 1: The Truth (Foundation) */}
                 <motion.div 
                    className="w-48 h-12 bg-accent/20 border border-accent rounded-lg flex items-center justify-center backdrop-blur-md relative z-10"
                    initial={{ scale: 0, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, type: "spring" }}
                >
                    <span className="text-sm font-bold text-white tracking-wider">CORE TRUTH</span>
                 </motion.div>
            </div>

            {/* Labels reflecting the process */}
            <div className="absolute top-6 left-6 space-y-2">
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-accent" /> <span className="text-xs text-neutral-400">1. Define Truth</span>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.8 }} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-neutral-500" /> <span className="text-xs text-neutral-400">2. Set Boundaries</span>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500" /> <span className="text-xs text-neutral-400">3. Experiment</span>
                 </motion.div>
                 <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 2.5 }} className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-white" /> <span className="text-xs text-neutral-400">4. Build</span>
                 </motion.div>
            </div>
        </div>
    );
};

const Chapter5 = () => {
    return (
        <StorySection id="chapter-5">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Updated Narrative */}
                <div className="space-y-10">
                    <div>
                        <span className="text-accent font-mono text-sm mb-4 block">Chapter 5</span>
                        <AnimatedHeading text="How I Approach a New Problem" className="text-3xl md:text-5xl" />
                    </div>

                    <div className="space-y-6">
                        <ScrollRevealText>
                            <p className="text-xl text-white font-medium">
                                I don’t start by choosing tools. <br/>
                                <span className="text-accent">I start by defining what must be true.</span>
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p className="border-l-2 border-neutral-700 pl-4 text-neutral-400 italic">
                                "Who is this for? What needs to work reliability on day one? What can fail without breaking trust?"
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p>
                                I avoid committing to structure too early. Early implementations are meant to surface constraints, not hide them.
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p>
                                I treat initial versions as <span className="text-white">experiments</span> — not proofs. 
                                Their purpose is to reduce uncertainty, not to look complete.
                            </p>
                        </ScrollRevealText>
                        
                         <ScrollRevealText>
                            <p className="text-emerald-400 font-mono text-sm pt-4">
                                {'>'} Good systems come from clear boundaries, not from rushing to solutions.
                            </p>
                        </ScrollRevealText>
                    </div>
                </div>

                {/* Right: System Builder Visual */}
                <div className="bg-neutral-950/50 rounded-2xl border border-neutral-900 shadow-xl overflow-hidden">
                    <SystemBuilder />
                </div>
            </div>
        </StorySection>
    );
};

export default Chapter5;
