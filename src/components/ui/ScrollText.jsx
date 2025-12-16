import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

const ScrollText = ({ children, className, delay = 0 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2 + delay, 0.8, 1],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.2 + delay, 0.8, 1],
    [50, 0, 0, -50]
  );

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
};

export default ScrollText;
