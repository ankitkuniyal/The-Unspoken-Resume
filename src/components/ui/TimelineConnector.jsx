import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '../../lib/utils';

const TimelineConnector = ({ className }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={containerRef} className={cn("absolute left-6 md:left-1/2 top-full h-[200px] w-px bg-neutral-800 -translate-x-1/2 z-0", className)}>
            <motion.div 
                style={{ height }} 
                className="w-full bg-gradient-to-b from-accent to-transparent" 
            />
        </div>
    );
};

export default TimelineConnector;
