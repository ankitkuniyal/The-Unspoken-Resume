import { motion } from 'framer-motion';
import { ArrowLeft, Download, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResumePage = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-20 flex flex-col items-center justify-center">
       <div className="absolute top-6 left-6 md:top-20 md:left-20">
        <Link to="/" className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
            <ArrowLeft size={20} /> Back to Story
        </Link>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-2xl"
      >
        <div className="w-20 h-20 bg-neutral-800 rounded-full flex items-center justify-center mx-auto mb-8">
            <FileText size={40} className="text-accent" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Resume</h1>
        <p className="text-neutral-400 mb-8">
            Clean, ATS-friendly, and to the point.
        </p>

        <button className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors inline-flex items-center gap-2">
            <Download size={20} /> Download PDF
        </button>

        <div className="mt-12 p-8 border border-neutral-800 rounded-xl bg-neutral-900/50 text-left text-sm font-mono text-neutral-500 whitespace-pre-wrap">
            {`// Preview
const Experience = [
  {
    role: "Backend Engineer Intern",
    company: "Tech Corp",
    highlights: ["Optimized API latency by 40%", "Migrated legacy auth to OAuth2"]
  },
  ...
]`}
        </div>
      </motion.div>
    </div>
  );
};

export default ResumePage;
