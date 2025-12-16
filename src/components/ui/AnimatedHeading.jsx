import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const AnimatedHeading = ({ text, className, viewport, whileInView }) => {
  const words = text.split(' ');
  return (
    <h2
      className={cn('relative pb-4 text-4xl font-bold leading-tight tracking-tight md:text-6xl', className)}
    >
      {/* Render each word with animation */}
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={whileInView === undefined ? { opacity: 1, y: 0 } : whileInView}
          animate={whileInView === null ? { opacity: 1, y: 0 } : undefined}
          viewport={viewport || { once: false, margin: "-10% 0px -10% 0px" }}
          transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
          className="mr-3 inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text py-2 text-transparent"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedHeading;
