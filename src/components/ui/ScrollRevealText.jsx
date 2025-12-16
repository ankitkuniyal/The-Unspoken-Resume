import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const ScrollRevealText = ({ children, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)', y: 30 }}
      whileInView={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2, margin: "-10% 0px -10% 0px" }}
      className={cn('max-w-5xl text-lg leading-relaxed text-secondary md:text-xl', className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealText;
