import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { cn } from '../../lib/utils';

import { Link } from 'react-router-dom';

const ProjectCard = ({ project, className }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={cn(
        "min-w-[350px] md:min-w-[450px] h-[500px] bg-neutral-900/50 border border-neutral-800 rounded-xl p-8 flex flex-col justify-between relative group overflow-hidden transition-all duration-300 hover:border-accent/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.2)]",
        className
      )}
    >
      {/* Background Gradient on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
          {project.name}
        </h3>
        <p className="text-muted-foreground text-sm mb-6 font-mono">
            {project.tech.join(" • ")}
        </p>
        
        <div className="space-y-4">
            <div>
                <span className="text-xs uppercase tracking-wider text-neutral-500">The Problem</span>
                <p className="text-sm text-neutral-300 mt-1">{project.problem}</p>
            </div>
            <div>
                <span className="text-xs uppercase tracking-wider text-red-400/80">My Mistake</span>
                <p className="text-sm text-neutral-300 mt-1">{project.mistake}</p>
            </div>
            <div>
                <span className="text-xs uppercase tracking-wider text-emerald-400/80">Lesson Learned</span>
                <p className="text-sm text-neutral-300 mt-1">{project.lesson}</p>
            </div>
        </div>
      </div>

      <div className="flex gap-4 z-10 pt-6 mt-auto border-t border-neutral-800">
        <Link to="/projects" className="flex items-center gap-2 text-sm text-white hover:text-accent transition-colors">
            View Architecture <ExternalLink size={14} />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
