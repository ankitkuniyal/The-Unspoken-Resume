import StorySection from '../ui/StorySection';
import AnimatedHeading from '../ui/AnimatedHeading';
import ScrollRevealText from '../ui/ScrollRevealText';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const Conclusion = () => {
  return (
    <StorySection
      id="conclusion"
      className="flex min-h-screen flex-col justify-center bg-neutral-950 text-center"
    >
      <div className="mx-auto w-full max-w-4xl px-4">
        {/* Visual Anchor */}
        <motion.div 
          initial={{ height: 0 }}
          whileInView={{ height: 60 }}
          transition={{ duration: 1 }}
          className="mx-auto mb-12 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent"
        />

        <AnimatedHeading
          text="Where I’m Headed"
          className="mb-12 justify-center text-5xl font-bold tracking-tight text-white md:text-7xl"
        />

        <div className="space-y-12">
          <ScrollRevealText>
            <p className="text-xl font-light leading-relaxed text-neutral-400 md:text-3xl">
              I’m actively looking for problems where <br />
              <span className="text-white">scale breaks assumptions</span> and <span className="text-white">data reveals truth</span>.
            </p>
          </ScrollRevealText>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Distributed Systems',
              'High-Performance UIs',
              'AI Engineering',
            ].map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                viewport={{ once: true }}
                className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-neutral-300 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white hover:border-white/20"
              >
                {text}
              </motion.div>
            ))}
          </div>

          <ScrollRevealText>
            <p className="mx-auto max-w-2xl text-lg font-medium italic text-neutral-500">
               "I’m still learning. Just with better questions — and fewer shortcuts."
            </p>
          </ScrollRevealText>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link
            href="/projects"
            className="group relative flex items-center gap-4 overflow-hidden rounded-full bg-white px-8 py-4 text-base font-bold text-black transition-all hover:scale-105 hover:bg-neutral-200"
          >
            <span className="relative z-10">See My Work</span>
            <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-neutral-100 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
          </Link>
          
          <Link
            href="/contact"
            className="group flex items-center gap-2 px-8 py-4 text-sm font-medium uppercase tracking-widest text-neutral-500 transition-colors hover:text-white"
          >
            Get in Touch
            <span className="block h-[1px] w-0 bg-white transition-all group-hover:w-full" />
          </Link>
        </motion.div>
      </div>
    </StorySection>
  );
};

export default Conclusion;
