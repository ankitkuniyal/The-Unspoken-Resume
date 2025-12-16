import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Download,
  FileText,
  ExternalLink,
  ChevronRight,
  Hash,
  Terminal,
} from 'lucide-react';
import NavBar from '../components/ui/NavBar';
import AnimatedHeading from '../components/ui/AnimatedHeading';

const ResumePage = () => {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#050505] text-white selection:bg-white/20">
      <NavBar />

      {/* Background Grid & Noise */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      <div className="pointer-events-none absolute right-[-10%] top-[-20%] h-[60vw] w-[60vw] rounded-full bg-neutral-800/20 blur-[120px]" />

      <main className="relative z-10 flex flex-grow items-center justify-center p-6 md:p-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Context & Actions */}
          <div className="space-y-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-neutral-400">
              <Terminal size={12} />
              <span>cat résumé.pdf</span>
            </div>

            <div>
              <AnimatedHeading
                text="Expertise"
                className="mb-2 text-6xl font-bold tracking-tighter text-white md:text-8xl"
                whileInView={null}
              />
              <AnimatedHeading
                text="& Experience"
                className="mb-6 font-serif text-6xl italic text-neutral-500 md:text-8xl"
                whileInView={null}
              />
              <p className="max-w-lg border-l-2 border-neutral-800 pl-6 text-lg leading-relaxed text-neutral-400">
                A comprehensive overview of my technical journey, architectural decisions, and the
                systems I've engineered. Designed for clarity and ATS compatibility.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-8 py-4 text-lg font-bold text-black"
              >
                <div className="absolute inset-0 translate-y-full bg-neutral-200 transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  View Resume <ExternalLink size={18} />
                </span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="/Resume.pdf"
                download="Ankit_Kuniyal_Resume.pdf"
                className="flex items-center justify-center gap-2 rounded-full border border-neutral-800 px-8 py-4 text-lg font-medium text-neutral-300 transition-colors hover:bg-neutral-900 hover:text-white"
              >
                <Download size={18} /> Download PDF
              </motion.a>
            </div>

            <div className="flex items-center gap-6 pt-4 font-mono text-sm text-neutral-600">
              <span className="flex items-center gap-2">
                <Hash size={14} /> Last Updated: Dec 2025
              </span>
              <span className="flex items-center gap-2">
                <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
                Open for Work
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Preview Card */}
          <motion.div
            initial={{ opacity: 0, rotateY: 10, x: 50 }}
            animate={{ opacity: 1, rotateY: 0, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="perspective-1000 group relative"
          >
            {/* Decorative Backdrop */}
            <div className="absolute inset-0 translate-x-4 translate-y-4 transform rounded-[2rem] bg-gradient-to-tr from-neutral-800 to-neutral-900 opacity-50 blur-sm" />

            {/* The Card */}
            <div className="relative rounded-[2rem] border border-neutral-800 bg-[#0A0A0A] p-8 shadow-2xl transition-shadow duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] md:p-10">
              {/* Card Header */}
              <div className="mb-8 flex items-start justify-between border-b border-neutral-900 pb-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-neutral-800 bg-neutral-900">
                    <FileText className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">resume_final_v2.pdf</h3>
                    <p className="font-mono text-xs uppercase tracking-wider text-neutral-500">
                      74 KB • PDF Document
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Preview (Code style) */}
              <div className="space-y-6 font-mono text-sm leading-relaxed">
                <div className="opacity-50">
                  <span className="text-purple-400">class</span>{' '}
                  <span className="text-yellow-200">Engineer</span>{' '}
                  <span className="text-white">{'{'}</span>
                </div>
                <div className="space-y-2 pl-6">
                  <div className="flex gap-4">
                    <span className="text-neutral-600">01</span>
                    <span>
                      <span className="text-blue-400">name</span>:{' '}
                      <span className="text-green-400">"Ankit Kuniyal"</span>;
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-neutral-600">02</span>
                    <span>
                      <span className="text-blue-400">status</span>:{' '}
                      <span className="text-green-400">"Building cool stuff"</span>;
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-neutral-600">03</span>
                    <span>
                      <span className="text-blue-400">stack</span>: [
                      <span className="text-orange-300">"React"</span>,{' '}
                      <span className="text-orange-300">"Node"</span>,{' '}
                      <span className="text-orange-300">"Python"</span>,
                      <span className="text-orange-300">"Java"</span>];
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <span className="text-neutral-600">04</span>
                    <span>
                      <span className="text-blue-400">location</span>:{' '}
                      <span className="text-green-400">"Global / Remote"</span>;
                    </span>
                  </div>
                </div>
                <div className="opacity-50">
                  <span className="text-white">{'}'}</span>
                </div>
              </div>

              {/* Fake Scan Line */}
              <div className="group-hover:animate-scan absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0" />
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ResumePage;
