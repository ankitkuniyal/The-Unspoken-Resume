import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Brain, Sparkles, Command, Users, CheckCircle } from 'lucide-react';
import AnimatedHeading from '../../ui/AnimatedHeading';

const MiniSimulator = () => {
  const [step, setStep] = useState(0); // 0: Idle, 1: Countdown, 2: Recording

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hover:shadow-3xl relative mx-auto max-w-4xl transform overflow-hidden rounded-3xl bg-neutral-900 shadow-2xl ring-1 ring-white/10 transition-all duration-500 hover:scale-[1.02]">
      {/* Mock Browser Header */}
      <div className="flex select-none items-center gap-2 border-b border-white/5 bg-neutral-800 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-red-400/80"></div>
        <div className="h-3 w-3 rounded-full bg-amber-400/80"></div>
        <div className="h-3 w-3 rounded-full bg-green-400/80"></div>
        <div className="ml-4 flex-1 truncate rounded-md bg-black/20 px-3 py-1 text-center font-mono text-[10px] text-neutral-400">
          https://verve.io/interview/active
        </div>
      </div>

      <div className="relative flex aspect-video flex-col bg-black md:flex-row">
        <div className="relative flex flex-1 flex-col justify-center overflow-hidden border-r border-white/5 p-6 md:p-8">
          {/* Dynamic State Overlay */}
          <div className="absolute left-4 top-4">
            {step === 0 && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">
                Waiting...
              </span>
            )}
            {step === 1 && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-500">
                Preparing...
              </span>
            )}
            {step === 2 && (
              <div className="inline-flex items-center gap-2">
                <span className="h-2 w-2 animate-pulse rounded-full bg-red-500"></span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-red-500">
                  Live Analysis
                </span>
              </div>
            )}
          </div>

          <h3 className="relative z-10 mb-6 font-serif text-lg font-medium leading-snug text-white md:text-xl">
            "Tell me about a time you led a team through a significant crisis."
          </h3>

          <div className="relative z-10 space-y-4 rounded-xl border border-white/5 bg-neutral-900/50 p-4 backdrop-blur-sm">
            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-neutral-400">
                <span>Clarity</span>
                <span className="text-blue-400">High</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-800">
                <motion.div
                  animate={{ width: ['10%', '60%', '40%', '85%'] }}
                  transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                  className="h-full bg-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-[10px] uppercase tracking-wider text-neutral-400">
                <span>Confidence</span>
                <span className="text-purple-400">88/100</span>
              </div>
              <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-800">
                <motion.div
                  animate={{ width: ['80%', '88%', '85%', '90%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                  className="h-full bg-purple-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative hidden w-1/3 bg-neutral-900 md:block">
          {/* Fake Person Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-neutral-900 via-neutral-800 to-neutral-900">
            <div className="flex h-24 w-24 animate-pulse items-center justify-center rounded-full bg-neutral-700/50">
              <Users size={32} className="text-neutral-500" />
            </div>
          </div>

          {/* AI Overlay Bubble */}
          <AnimatePresence mode="wait">
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute bottom-6 left-6 right-6 rounded-xl border border-white/10 bg-white/10 p-3 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                    <CheckCircle size={14} />
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-bold text-green-200">Great Eye Contact!</p>
                    <p className="text-[10px] leading-tight text-neutral-400">
                      You're engaging well with the camera.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const VerveIO = () => {
  return (
    <section className="relative z-20 h-screen bg-gradient-to-br from-neutral-950 via-purple-950/20 to-neutral-950 text-neutral-200">
      {/* Sticky Container that stays at top */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden rounded-t-3xl">
        {/* Ultra-subtle background noise/grid */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        {/* Enhanced Gradient Blobs */}
        <div className="pointer-events-none absolute right-0 top-0 h-[60vh] w-[60vh] rounded-full bg-purple-600/20 blur-[150px] mix-blend-screen" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[50vh] w-[50vh] rounded-full bg-indigo-600/15 blur-[140px] mix-blend-screen" />

        <div className="relative z-10 mx-auto grid h-full max-h-[80vh] w-full max-w-7xl items-center gap-16 px-6 lg:grid-cols-[1.2fr,1.8fr]">
          {/* Left: Project Identity & Core Value */}
          <div className="flex h-full flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-6 flex items-center gap-3 text-purple-400"
            >
              <Brain size={20} />
              <span className="font-mono text-xs uppercase tracking-[0.2em]">AI-Powered EdTech</span>
            </motion.div>

            <AnimatedHeading
              text="verve.io"
              className="mb-8 text-7xl font-bold leading-[0.9] tracking-tighter text-white md:text-9xl"
            />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mb-8 border-l-2 border-white/10 pl-6 text-xl leading-relaxed text-neutral-400"
            >
              An adaptive MBA interview preparation platform analyzing verbal, non-verbal, and
              emotional intelligence cues to provide holistic candidate feedback.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="mb-12 flex flex-wrap gap-4"
            >
              <a
                href="https://github.com/ankitkuniyal/verve.io"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
              >
                <Github size={18} /> Source Code
              </a>
              <a
                href="http://verve-io-frontend.onrender.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 border border-neutral-700 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
              >
                <ExternalLink size={18} /> Website
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="grid grid-cols-2 gap-8 border-t border-neutral-800 pt-8"
            >
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                  <Sparkles size={14} className="text-yellow-400" /> GPT-4 Engine
                </h4>
                <p className="text-xs text-neutral-500">
                  Context-aware question generation based on resume parsing.
                </p>
              </div>
              <div>
                <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-white">
                  <Command size={14} className="text-blue-400" /> NLP Analysis
                </h4>
                <p className="text-xs text-neutral-500">
                  Sentiment & tone detection for behavioral assessment.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right: Mini Simulator Interaction */}
          <div className="flex h-full flex-col justify-center">
            <MiniSimulator />
            {/* Tech Stack Tags */}
            <div className="flex flex-wrap gap-4 pl-5 pt-10 font-mono text-xs text-neutral-500">
              <span className="rounded border border-white/10 bg-white/5 px-2 py-1">React 18</span>
              <span className="rounded border border-white/10 bg-white/5 px-2 py-1">Tailwind</span>
              <span className="rounded border border-white/10 bg-white/5 px-2 py-1">Node.js</span>
              <span className="rounded border border-white/10 bg-white/5 px-2 py-1">Firebase</span>
              <span className="rounded border border-purple-500/20 bg-purple-500/10 px-2 py-1 text-purple-300">
                Gemini
              </span>
              <span className="rounded border border-blue-500/20 bg-blue-500/10 px-2 py-1 text-blue-300">
                Vision AI
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VerveIO;
