import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticNavLink from './MagneticNavLink';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/projects', label: 'Projects' },
    { to: '/resume', label: 'Resume' },
    { to: '/contact', label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop & Mobile Nav */}
      <nav className="absolute left-0 top-0 z-20 w-full p-6">
        <div className="flex items-center justify-end">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-neutral-400 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden gap-8 md:flex">
            {navItems.map((item) => (
              <MagneticNavLink
                key={item.to}
                to={item.to}
                className={
                  isActive(item.to)
                    ? 'block bg-gradient-to-r from-white to-neutral-400 bg-clip-text px-4 py-2 text-sm font-bold text-transparent'
                    : 'block px-4 py-2 text-sm font-medium text-neutral-500 transition-colors hover:text-white'
                }
              >
                {item.label}
              </MagneticNavLink>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm md:hidden"
            onClick={() => setIsOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-6 top-6 text-neutral-400 transition-colors hover:text-white"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>

            {/* Mobile Menu Items */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ delay: 0.1 }}
              className="flex h-full flex-col items-center justify-center gap-8"
              onClick={(e) => e.stopPropagation()}
            >
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    to={item.to}
                    onClick={() => setIsOpen(false)}
                    className={
                      isActive(item.to)
                        ? 'bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-2xl font-bold text-transparent'
                        : 'text-2xl text-neutral-500 transition hover:text-white'
                    }
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;
