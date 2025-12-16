import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';

const Chapter1 = () => {
  return (
    <StorySection id="chapter-1">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2 md:items-center">
        {/* Left: Text Content */}
        <div className="space-y-10">
          <div>
             <motion.span 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, delay: 0.2 }}
               className="mb-6 block font-mono text-sm tracking-[0.2em] text-accent uppercase opacity-70"
             >
              Chapter 01
            </motion.span>
            <AnimatedHeading 
              text="Learning without clarity" 
              className="text-3xl font-bold leading-[0.9] tracking-tighter text-white md:text-5xl lg:text-7xl" 
            />
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0 }} // Strong delay for "segregation" effect
            className="space-y-8 text-lg font-light leading-relaxed text-neutral-300 md:text-2xl"
          >
            <ScrollRevealText>
              <p>
                I started like everyone else — memorizing syntax, fighting compiler errors, 
                and wondering why <span className="text-white font-normal">nothing I built felt real.</span>
              </p>
            </ScrollRevealText>
            
            <ScrollRevealText>
              <p className="border-l-2 border-accent/50 pl-6 font-mono text-base text-accent/80 italic md:text-lg">
                Python loops. Java classes. <br/>
                Theoretical problems with perfect inputs.
              </p>
            </ScrollRevealText>

            <ScrollRevealText>
              <p>
                Action without purpose. <br/>
                <span className="text-white font-medium">Curiosity, but no direction.</span>
              </p>
            </ScrollRevealText>
          </motion.div>
        </div>

        {/* Right: Visual Experience */}
        <div className="relative flex h-full min-h-[400px] w-full items-center justify-center md:h-[600px]">
          <motion.div 
            initial={{ opacity: 0, rotateX: 20, z: -100 }}
            whileInView={{ opacity: 1, rotateX: 0, z: 0 }}
            transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }} // Sync delay with text
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent p-8 shadow-2xl backdrop-blur-2xl"
          >
            {/* Window Controls */}
            <div className="mb-6 flex gap-2 opacity-50">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>

            {/* Code Chaos Visual */}
            <motion.div 
              className="space-y-3 font-mono text-sm text-neutral-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ staggerChildren: 0.2, delayChildren: 1.8 }} // Further delay for internal items
            >
              <motion.p initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 1.8 }}>
                <span className="text-purple-400 opacity-50">while</span>(true) {'{'}
              </motion.p>
              <motion.p initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 2.0 }} className="pl-6 text-white/80">
                learn(syntax);
              </motion.p>
              <motion.p initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 2.2 }} className="pl-6 text-white/80">
                confusion++;
              </motion.p>
               <motion.p initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 2.4 }} className="pl-6">
                <span className="text-red-400/80">// Where is the value?</span>
              </motion.p>
              <motion.p initial={{ x: -20, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: 2.6 }}>
                {'}'}
              </motion.p>
            </motion.div>

            {/* Ambient Glow */}
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/20 blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </StorySection>
  );
};

export default Chapter1;
