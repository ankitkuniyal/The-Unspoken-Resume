import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import { Bot, Sparkles } from 'lucide-react';
import { useMemo } from 'react';

const NeuralHub = () => {
  const models = [
    { name: 'GPT-4o', angle: 0, color: 'bg-green-500', text: 'text-green-400' },
    { name: 'Claude 3.5', angle: 90, color: 'bg-orange-500', text: 'text-orange-400' },
    { name: 'Gemini 1.5', angle: 180, color: 'bg-blue-500', text: 'text-blue-400' },
    { name: 'Llama 3', angle: 270, color: 'bg-purple-500', text: 'text-purple-400' },
  ];

  return (
    <div className="relative flex h-[500px] w-full items-center justify-center overflow-hidden rounded-3xl border border-white/5 bg-neutral-900/40 backdrop-blur-sm md:h-[600px]">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20" />

      {/* Center Core: Human Judgement */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-20 flex h-32 w-32 items-center justify-center rounded-full border border-white/20 bg-neutral-950 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
      >
        <div className="absolute inset-0 animate-pulse rounded-full bg-white/5 blur-xl" />
        <div className="text-center">
            <span className="block text-2xl">🧠</span>
            <span className="mt-2 block font-mono text-[10px] tracking-widest text-neutral-400 uppercase">Judgement</span>
        </div>
      </motion.div>

      {/* Orbiting AI Nodes */}
      <div className="absolute inset-0 flex items-center justify-center">
         {models.map((model, i) => (
            <OrbitingNode key={i} model={model} index={i} />
         ))}
      </div>
      
       {/* Ambient Glow */}
       <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/5 blur-[100px]" />
    </div>
  );
};

const OrbitingNode = ({ model, index }) => {
    return (
        <motion.div
           className="absolute h-[280px] w-[280px]"
           initial={{ rotate: model.angle, opacity: 0 }}
           whileInView={{ rotate: model.angle + 360, opacity: 1 }}
           transition={{ 
               rotate: { duration: 20 + index * 5, repeat: Infinity, ease: "linear" },
               opacity: { duration: 1, delay: index * 0.2 }
           }}
        >
           <motion.div 
             className="absolute -top-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
             style={{ rotate: -(model.angle) }} // Counter-rotate to keep text upright? No, simpler to just rotate the container.
           >
              <div className={`h-3 w-3 rounded-full ${model.color} shadow-[0_0_20px_currentColor]`} />
              <div className={`rounded-full border border-white/10 bg-neutral-950/80 px-3 py-1 backdrop-blur-md`}>
                  <span className={`font-mono text-xs font-bold ${model.text}`}>{model.name}</span>
              </div>
           </motion.div>
           
           {/* Beam to Center (Visual only, simple line) */}
            <div className="absolute left-1/2 top-0 h-1/2 w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/20 to-transparent" />
        </motion.div>
    )
}

const Chapter6 = () => {
  return (
    <StorySection id="chapter-6">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Visual Left (Alternating) */}
        <div className="order-2 w-full md:order-1">
             <NeuralHub />
        </div>

        {/* Narrative Right */}
        <div className="order-1 space-y-10 md:order-2">
          <div>
            <span className="mb-6 block font-mono text-sm tracking-[0.2em] text-accent uppercase opacity-70">
              Chapter 06
            </span>
            <AnimatedHeading 
              text="AI as a Learning Accelerator" 
              className="text-3xl font-bold leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-7xl" 
            />
          </div>

          <div className="space-y-8 text-lg font-light leading-relaxed text-neutral-300 md:text-2xl">
            <ScrollRevealText>
               <p>
                I don’t use AI to bypass the struggle. <br />
                <span className="text-white font-medium underline decoration-neutral-700 underline-offset-8">I use it to deepen the layer.</span>
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                When I encounter a new problem, I don’t ask for the solution. I ask for the {' '}
                <span className="text-accent italic">mental model</span>.
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <ul className="space-y-4 border-l-2 border-white/10 pl-6 text-base md:text-xl">
                 <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>Question the constraint</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>Validate the logic</span>
                 </li>
                 <li className="flex items-center gap-3">
                    <div className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span>Refactor the suggestion</span>
                 </li>
              </ul>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                The difference between a junior and a senior isn't speed. It's judgment. AI
                suggests. <span className="text-white font-semibold">I decide.</span>
              </p>
            </ScrollRevealText>
          </div>
        </div>
      </div>
    </StorySection>
  );
};

export default Chapter6;
