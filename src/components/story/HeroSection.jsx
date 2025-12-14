import { motion, useScroll, useTransform } from 'framer-motion';
import NavBar from '../ui/NavBar';

const HeroSection = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.95]);

  return (
    <section className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden bg-background">
      {/* Background Ambience */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px]" />
       </div>
        <NavBar/>
      
      {/* Main Content with Scroll Fade */}
      <motion.div 
        style={{ opacity, scale }}
        className="relative z-10 container mx-auto px-6 text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6"
          >
          <span className="inline-block py-1 px-3 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-sm tracking-wide">
            THE UNSPOKEN RESUME
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6"
        >
          Forged by errors. <br className="md:hidden" /> Refined by understanding.
        </motion.h1>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.4 }}
           className="mb-8"
        >
            <h2 className="text-2xl md:text-4xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-500">
              
            </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed mb-10"
        >
          Everything here began as something unclear. <br className="hidden md:block" />
          What remained is what I learned by staying with it long enough.
        </motion.p>
      
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() => document.getElementById('chapter-1')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-neutral-500 text-xs font-mono tracking-widest uppercase">Scroll</span>
        
        {/* Animated Gradient Line with Glow */}
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="relative w-[1px] h-12"
        >
          {/* Pulsing Glow Effect */}
          <motion.div
            animate={{
              opacity: [0.2, 0.5, 0.2],
              scaleX: [1, 1.5, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-accent/40 blur-md"
          />
          
          {/* Gradient Line */}
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-500 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
