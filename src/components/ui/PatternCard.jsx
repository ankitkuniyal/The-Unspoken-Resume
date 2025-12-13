import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { AlertCircle, ArrowRight, CheckCircle2, XCircle } from 'lucide-react';

const PatternCard = ({ pattern, className }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={cn(
        "min-w-[320px] md:min-w-[400px] bg-neutral-900/60 border border-neutral-800 rounded-xl p-6 flex flex-col relative group overflow-hidden transition-all duration-300 hover:border-accent/40 hover:bg-neutral-900/80 hover:shadow-xl",
        className
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-50 group-hover:opacity-100 transition-opacity">
        <div className="w-12 h-12 bg-accent/5 rounded-full blur-xl" />
      </div>

      <div className="mb-6">
          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-accent transition-colors">
            {pattern.title}
          </h3>
          <p className="text-xs font-mono text-neutral-500 uppercase tracking-wider">
             {pattern.context}
          </p>
      </div>

      <div className="space-y-5 flex-1 relative z-10">
        <div className="relative pl-4 border-l border-neutral-800">
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-neutral-800" />
            <p className="text-xs text-neutral-500 uppercase mb-1">Initially</p>
            <p className="text-sm text-neutral-300">{pattern.initial}</p>
        </div>

        <div className="relative pl-4 border-l border-red-500/20">
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-red-500/50" />
             <p className="text-xs text-red-400 uppercase mb-1 flex items-center gap-1">
                <XCircle size={10} /> What Broke
            </p>
            <p className="text-sm text-red-200/80">{pattern.broke}</p>
        </div>

        <div className="relative pl-4 border-l border-emerald-500/20">
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500/50" />
            <p className="text-xs text-emerald-400 uppercase mb-1 flex items-center gap-1">
                <CheckCircle2 size={10} /> The Fix
            </p>
            <p className="text-sm text-emerald-200/80">{pattern.changed}</p>
        </div>
      </div>

      <div className="mt-8 pt-4 border-t border-neutral-800">
         <p className="text-xs text-accent font-mono uppercase mb-2">Key Learning</p>
         <p className="text-sm text-white font-medium italic">"{pattern.learned}"</p>
      </div>
    </motion.div>
  );
};

export default PatternCard;
