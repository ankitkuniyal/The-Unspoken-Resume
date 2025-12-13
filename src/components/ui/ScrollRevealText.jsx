import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const ScrollRevealText = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
      whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      viewport={{ once: true }}
      className={cn("text-lg md:text-xl text-secondary leading-relaxed max-w-5xl", className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;
