import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../../lib/utils';

import Link from 'next/link';

const ProjectCard = ({ project, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -10 }}
      className={cn(
        'group relative flex h-[500px] min-w-[350px] flex-col justify-between overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)] md:min-w-[450px]',
        className,
      )}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div>
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-2 text-2xl font-bold transition-colors group-hover:text-accent"
        >
          {project.name}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-muted-foreground mb-6 font-mono text-sm"
        >
          {project.tech.join(' • ')}
        </motion.p>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="text-xs uppercase tracking-wider text-neutral-500">The Problem</span>
            <p className="mt-1 text-sm text-neutral-300">{project.problem}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <span className="text-xs uppercase tracking-wider text-red-400/80">My Mistake</span>
            <p className="mt-1 text-sm text-neutral-300">{project.mistake}</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <span className="text-xs uppercase tracking-wider text-emerald-400/80">
              Lesson Learned
            </span>
            <p className="mt-1 text-sm text-neutral-300">{project.lesson}</p>
          </motion.div>
        </div>
      </div>

      <div className="z-10 mt-auto flex gap-4 border-t border-neutral-800 pt-6">
        <Link
          href="/projects"
          className="flex items-center gap-2 text-sm text-white transition-colors hover:text-accent"
        >
          View Architecture <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
