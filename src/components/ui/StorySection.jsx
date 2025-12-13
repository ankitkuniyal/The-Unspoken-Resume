import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const StorySection = ({ children, className, id, viewport, initial, animate, whileInView }) => {
  return (
    <motion.section
      id={id}
      initial={initial || { opacity: 0, y: 50 }}
      whileInView={whileInView === undefined ? { opacity: 1, y: 0 } : whileInView}
      animate={animate}
      viewport={viewport || { once: true, margin: "-20%" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={cn("min-h-screen flex flex-col justify-center px-6 md:px-20 py-20 relative overflow-hidden", className)}
    >
      {children}
    </motion.section>
  );
};

export default StorySection;
