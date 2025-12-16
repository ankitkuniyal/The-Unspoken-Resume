import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { AlertCircle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const PatternCard = ({ pattern, className }) => {
  return (
    <motion.div
      whileHover={{ y: -10, scale: 1.02 }}
      className={cn(
        'group relative flex min-w-[350px] flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-8 backdrop-blur-3xl transition-all duration-500 hover:border-accent/20 hover:bg-white/10 hover:shadow-2xl md:min-w-[450px]',
        className,
      )}
    >
      <div className="absolute right-0 top-0 p-6 opacity-30 transition-opacity duration-500 group-hover:opacity-100">
        <div className="h-24 w-24 rounded-full bg-accent/10 blur-2xl" />
      </div>

      <div className="mb-8">
        <h3 className="mb-2 text-2xl font-bold text-white transition-colors group-hover:text-accent">
          {pattern.title}
        </h3>
        <p className="font-mono text-xs uppercase tracking-widest text-neutral-500">
          {pattern.context}
        </p>
      </div>

      <div className="relative z-10 flex-1 space-y-6">
        <div className="relative border-l-2 border-white/5 pl-6 transition-colors group-hover:border-white/10">
          <p className="mb-2 font-mono text-xs font-semibold uppercase text-neutral-400">Initially</p>
          <p className="text-base text-neutral-300 font-light leading-relaxed">{pattern.initial}</p>
        </div>

        <div className="relative border-l-2 border-red-500/20 pl-6 transition-colors group-hover:border-red-500/40">
          <p className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-red-400">
            <XCircle size={14} /> The Break
          </p>
          <p className="text-base text-red-200/90 font-light leading-relaxed">{pattern.broke}</p>
        </div>

        <div className="relative border-l-2 border-emerald-500/20 pl-6 transition-colors group-hover:border-emerald-500/40">
          <p className="mb-2 flex items-center gap-2 font-mono text-xs font-semibold uppercase text-emerald-400">
            <CheckCircle2 size={14} /> The Fix
          </p>
          <p className="text-base text-emerald-200/90 font-light leading-relaxed">{pattern.changed}</p>
        </div>
      </div>

      <div className="mt-8 border-t border-white/5 pt-6">
        <p className="mb-3 font-mono text-[10px] uppercase tracking-widest text-accent">Key Learning</p>
        <p className="text-lg font-medium italic text-white/90">"{pattern.learned}"</p>
      </div>
    </motion.div>
  );
};

export default PatternCard;
