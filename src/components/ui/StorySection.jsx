import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

const StorySection = ({ children, className, id, viewport, initial, animate, whileInView }) => {
  return (
    <motion.section
      id={id}
      initial={initial || { opacity: 0, y: 50 }}
      whileInView={whileInView === undefined ? { opacity: 1, y: 0 } : whileInView}
      animate={animate}
      viewport={viewport || { once: true, margin: '-10%' }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'relative flex min-h-screen w-full flex-col justify-center py-20 px-6 md:px-20',
        className,
      )}
    >
      {children}
    </motion.section>
  );
};

export default StorySection;
