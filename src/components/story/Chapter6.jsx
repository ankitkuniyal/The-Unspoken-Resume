import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import { Sparkles, Bot, Cpu, Zap } from 'lucide-react';

const MultiModelVisual = () => {
    const models = [
        { name: "GPT-4", x: -30, y: -20, color: "text-green-400", delay: 0 },
        { name: "CLAUDE", x: 30, y: -30, color: "text-orange-400", delay: 1 },
        { name: "GEMINI", x: -20, y: 30, color: "text-blue-400", delay: 2 },
        { name: "LLAMA", x: 40, y: 20, color: "text-purple-400", delay: 3 },
    ];

    return (
        <div className="relative w-full h-[350px] flex items-center justify-center bg-neutral-900/20 rounded-2xl overflow-hidden border border-neutral-800">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black,transparent)]" />

            {/* Central "User/Synthesis" Core */}
            <div className="relative z-10 flex flex-col items-center">
                <motion.div 
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [0.9, 1, 0.9] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="w-20 h-20 bg-neutral-950 border border-neutral-700 rounded-xl flex items-center justify-center shadow-2xl relative z-20 group"
                >
                    <div className="absolute inset-0 bg-accent/10 blur-xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
                    <Cpu size={32} className="text-white relative z-10" />
                </motion.div>
                <div className="mt-4 text-[10px] font-mono text-neutral-500 tracking-widest uppercase">My Judgement</div>
            </div>

            {/* Orbiting AI Models */}
            {models.map((model, i) => (
                <motion.div
                    key={i}
                    className={`absolute flex items-center gap-2 px-3 py-1.5 rounded-full bg-neutral-900/80 border border-neutral-800 backdrop-blur-md shadow-lg z-10`}
                    initial={{ opacity: 0, x: 0, y: 0 }}
                    animate={{ 
                        opacity: 1, 
                        x: [0, model.x * 2, 0],   // Gentle float
                        y: [0, model.y * 2, 0],
                    }}
                    style={{
                        top: `50%`,
                        left: `50%`,
                        marginTop: model.y * 3, // Initial offset positions
                        marginLeft: model.x * 5,
                    }}
                    transition={{ 
                        duration: 5, 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        delay: model.delay 
                    }}
                >
                    <Bot size={14} className={model.color} />
                    <span className={`text-xs font-bold font-mono ${model.color} opacity-90`}>{model.name}</span>
                    
                    {/* Beam to Center */}
                    <motion.div 
                        className={`absolute top-1/2 ${model.x < 0 ? 'right-0 -mr-[100px]' : 'left-0 -ml-[100px]'} h-[1px] w-[100px] bg-gradient-to-r from-transparent via-${model.color.split('-')[1]}-500/50 to-transparent -z-10`}
                        style={{ 
                            transformOrigin: model.x < 0 ? 'right' : 'left',
                            rotate: model.x < 0 ? '15deg' : '-15deg' // Rough angle towards center
                         }}
                         animate={{ opacity: [0, 0.5, 0] }}
                         transition={{ duration: 2, repeat: Infinity, delay: model.delay }}
                    />
                </motion.div>
            ))}

            {/* Particle Stream Effects (Data Flow) */}
            <div className="absolute inset-0 pointer-events-none">
                 {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ 
                            opacity: [0, 1, 0],
                            x: [ (Math.random()-0.5)*300, 0 ], // Move exactly to center
                            y: [ (Math.random()-0.5)*300, 0 ],
                        }}
                        style={{ top: '50%', left: '50%' }}
                        transition={{ duration: 1.5, repeat: Infinity, delay: Math.random() * 2 }}
                    />
                 ))}
            </div>

            <div className="absolute bottom-4 right-6 text-[10px] text-neutral-700 font-mono flex items-center gap-2">
                <Sparkles size={10} />
                <span>MODEL_AGGREGATION_ACTIVE</span>
            </div>
        </div>
    );
};

const Chapter6 = () => {
    return (
        <StorySection id="chapter-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                
                {/* Right: Visual */}
                 <div className="order-2 md:order-2 bg-neutral-950/50 rounded-2xl border border-neutral-900 p-2">
                    <MultiModelVisual />
                </div>

                {/* Left: Narrative */}
                <div className="order-1 md:order-1 space-y-10">
                    <div>
                        <span className="text-accent font-mono text-sm mb-4 block">Chapter 6</span>
                        <AnimatedHeading text="AI as a Learning Accelerator" className="text-3xl md:text-5xl" />
                    </div>

                    <div className="space-y-6">
                        <ScrollRevealText>
                            <p className="text-xl text-white font-medium">
                                I don’t use AI to bypass the struggle. <br/>
                                <span className="text-accent">I use it to deepen the layer.</span>
                            </p>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p className="text-neutral-300">
                                When I encounter a new problem, I don’t ask for the solution. 
                                I ask for the <span className="text-white">mental model</span>. 
                                I use models to map the terrain, challenge my assumptions, and expose what I don’t know.
                            </p>
                        </ScrollRevealText>

                         <ScrollRevealText>
                            <div className="pl-4 border-l-2 border-neutral-800 space-y-2 my-4">
                                <p className="text-neutral-400">The loop isn't copy-paste. It's:</p>
                                <ul className="list-disc list-inside text-neutral-300 space-y-1 font-mono text-sm">
                                    <li>Question the constraint</li>
                                    <li>Validate the logic</li>
                                    <li>Refactor the suggestion</li>
                                </ul>
                            </div>
                        </ScrollRevealText>

                        <ScrollRevealText>
                            <p>
                                The difference between a junior and a senior isn't speed. It's judgment. 
                                AI suggests. I decide.
                            </p>
                        </ScrollRevealText>
                        
                         <ScrollRevealText>
                            <p className="text-white font-medium italic pt-2">
                                AI doesn’t replace my thinking — it sharpens it.
                            </p>
                        </ScrollRevealText>
                    </div>
                </div>
            </div>
        </StorySection>
    );
};

export default Chapter6;
