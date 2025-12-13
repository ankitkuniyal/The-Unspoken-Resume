import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const AnimatedHeading = ({ text, className, viewport, whileInView }) => {
  const words = text.split(" ");
  return (
    <h2 className={cn("text-4xl md:text-6xl font-bold tracking-tight pb-4 leading-tight", className)}>
      {/* Render each word with animation */}
      {words.map((word, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={whileInView === undefined ? { opacity: 1, y: 0 } : whileInView}
          animate={whileInView === null ? { opacity: 1, y: 0 } : undefined}
          viewport={viewport || { once: true }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
          className="inline-block mr-3 p-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400"
        >
          {word}
        </motion.span>
      ))}
    </h2>
  );
};

export default AnimatedHeading;
