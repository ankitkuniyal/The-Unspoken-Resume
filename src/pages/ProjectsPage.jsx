import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-20">
      <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-12">
        <ArrowLeft size={20} /> Back to Story
      </Link>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Detailed Projects</h1>
        <p className="text-neutral-400 text-lg mb-12">
            A deeper dive into the architecture, trade-offs, and failure modes of my key projects.
        </p>

        {/* Content placeholder - to be populated with detailed project info */}
        <div className="grid gap-8">
            <div className="p-8 border border-neutral-800 rounded-xl bg-neutral-900/30">
                <h2 className="text-2xl font-bold mb-4">Distributed Task Queue</h2>
                <div className="h-40 bg-neutral-800/50 rounded-lg flex items-center justify-center text-neutral-500 mb-4">
                    Architecture Diagram Placeholder
                </div>
                <p className="text-neutral-300 leading-relaxed">
                    Full technical breakdown coming soon. Will include Go channel patterns, Redis pipelining details, and gRPC definitions.
                </p>
            </div>
            {/* More projects... */}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
