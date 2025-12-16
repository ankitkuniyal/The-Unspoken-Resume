import { Github, Instagram, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/ankitkuniyal', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/ankitkuniyal', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/ankit.kuniyal_', label: 'Instagram' },
    { icon: Mail, href: 'mailto:ankitkuniyal520@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-neutral-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-16">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Ankit Kuniyal
            </h3>
            <p className="max-w-sm text-sm leading-relaxed text-neutral-400">
              Building systems with purpose. Solving problems that matter. Always learning, always refining.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Navigate
            </h4>
            <nav className="flex flex-col space-y-2">
              {['Story', 'Projects', 'Resume', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`/${item.toLowerCase()}`}
                  className="group inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white"
                >
                  <span className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4" />
                  {item}
                </a>
              ))}
            </nav>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs uppercase tracking-widest text-neutral-500">
              Connect
            </h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 backdrop-blur-sm transition-all hover:border-accent/30 hover:bg-accent/10 hover:text-accent hover:shadow-lg hover:shadow-accent/20"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
          <p className="font-mono text-xs text-neutral-500">
            © {new Date().getFullYear()} Ankit Kuniyal. Built with Intent.
          </p>
          <p className="font-mono text-xs text-neutral-600">
            Designed & Developed with <span className="text-red-500">♥</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
