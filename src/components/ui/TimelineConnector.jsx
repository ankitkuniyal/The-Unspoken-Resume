import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

const TimelineConnector = ({ className }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const height = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={containerRef}
      className={cn(
        'absolute left-6 top-full z-0 h-[200px] w-px -translate-x-1/2 bg-neutral-800 md:left-1/2',
        className,
      )}
    >
      <motion.div
        style={{ height }}
        className="w-full bg-gradient-to-b from-accent to-transparent"
      />
    </div>
  );
};

export default TimelineConnector;
