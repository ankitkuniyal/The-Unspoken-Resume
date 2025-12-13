import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className=" border-t border-neutral-900 bg-neutral-950 relative z-10 h-5 mb-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="text-sm text-neutral-500 font-mono py-5">
           © {new Date().getFullYear()} Ankit Kuniyal. Built with Intent.
        </div>

        <div className="flex items-center gap-6">
            <a href="https://github.com/ankitkuniyal" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/ankitkuniyal" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Linkedin size={18} />
            </a>
            <a href="https://instagram.com/ankit.kuniyal_" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-white transition-colors">
                <Instagram size={18} />
            </a>
            <a href="mailto:ankitkuniyal520@gmail.com" className="text-neutral-500 hover:text-white transition-colors">
                <Mail size={18} />
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
