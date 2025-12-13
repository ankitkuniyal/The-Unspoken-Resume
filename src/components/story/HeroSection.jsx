import { motion } from "framer-motion";
import StorySection from "../ui/StorySection";
import AnimatedHeading from "../ui/AnimatedHeading";
import NavBar from "../ui/NavBar";

const HeroSection = () => {
  return (
    <StorySection
      id="hero"
      className="relative justify-center text-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* ─────────── NAV ─────────── */}
      <NavBar />

      {/* ─────────── BACKGROUND ─────────── */}
      <div className="absolute inset-0 -z-10">
        {/* Base */}
        <div className="absolute inset-0 bg-black" />

        {/* Soft ambient glow */}
        <motion.div
          animate={{ opacity: [0.25, 0.4, 0.25], scale: [1, 1.05, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full"
        />

        <motion.div
          animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-purple-500/20 blur-[120px] rounded-full"
        />

        {/* Subtle grain */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"200\" height=\"200\"><filter id=\"n\"><feTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"4\"/></filter><rect width=\"200\" height=\"200\" filter=\"url(%23n)\" opacity=\"0.4\"/></svg>')",
          }}
        />

        {/* Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black/80" />
      </div>

      {/* ─────────── EYEBROW TOP LEFT ─────────── */}
      <motion.span
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="absolute top-6 left-6 md:left-20 z-10 px-3 py-1 rounded-full border border-neutral-800 text-neutral-400 text-xs font-mono tracking-widest uppercase"
      >
        The Unspoken Resume
      </motion.span>

      {/* ─────────── CONTENT ─────────── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center">
        {/* Main Quote */}
        <AnimatedHeading
          text="Forged by mistakes. Refined by understanding."
          className="mb-10 text-4xl md:text-6xl font-semibold tracking-tight leading-tighter"
          viewport={null}
          whileInView={null}
        />

        {/* Supporting Text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed"
        >
          Everything here began as something unclear.  
          What remained is what I learned by staying with it long enough.
        </motion.p>
      </div>

      {/* ─────────── SCROLL CUE ─────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-widest uppercase text-neutral-600">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-px h-14 bg-gradient-to-b from-blue-700 to-blue-400"
        />
      </motion.div>
    </StorySection>
  );
};

export default HeroSection;
