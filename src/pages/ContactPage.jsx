import { motion } from 'framer-motion';
import { ArrowLeft, Mail, Github, Linkedin, MessageSquare, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import NavBar from '../components/ui/NavBar';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-20 flex flex-col items-center justify-center relative overflow-hidden">
       
       <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/10 rounded-full blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-500/10 rounded-full blur-[100px]" />
       </div>

       <NavBar/>
      

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-xl z-10"
      >
        <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.6 }}
            className="w-20 h-20 bg-neutral-800/50 backdrop-blur-md border border-neutral-700 rounded-2xl flex items-center justify-center mx-auto mb-8 rotate-3 hover:rotate-6 transition-transform"
        >
            <MessageSquare size={40} className="text-white" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's build something sensible.</h1>
        <p className="text-neutral-400 text-lg mb-12 leading-relaxed">
            I'm currently looking for roles where I can build backend systems that matter. 
            No fluff, just good engineering.
        </p>

        <div className="flex flex-col gap-4 max-w-sm mx-auto w-full">
            <a href="mailto:ankitkuniyal520@gmail.com" className="group flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-accent hover:bg-neutral-900 transition-all">
                <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
                    <Mail size={20} /> Say hello
                </span>
                <span className="text-sm text-neutral-500 group-hover:text-accent">ankitkuniyal520@gmail.com</span>
            </a>
            
             <a href="https://github.com/ankitkuniyal" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-neutral-600 hover:bg-neutral-900 transition-all">
                <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
                    <Github size={20} /> Check the code
                </span>
                <span className="text-sm text-neutral-500 group-hover:text-white">GitHub</span>
            </a>

             <a href="https://linkedin.com/in/ankitkuniyal" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 hover:bg-neutral-900 transition-all">
                <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
                    <Linkedin size={20} /> Connect
                </span>
                <span className="text-sm text-neutral-500 group-hover:text-blue-400">LinkedIn</span>
            </a>
             <a href="https://instagram.com/ankit.kuniyal_" target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between p-4 bg-neutral-900/50 border border-neutral-800 rounded-xl hover:border-blue-500/50 hover:bg-neutral-900 transition-all">
                <span className="flex items-center gap-3 text-neutral-300 group-hover:text-white">
                    <Instagram size={20} /> More of Me
                </span>
                <span className="text-sm text-neutral-500 group-hover:text-blue-400">Instagram</span>
            </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
