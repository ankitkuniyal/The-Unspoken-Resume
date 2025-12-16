import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const SignatureTransition = ({ onComplete }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    let timeoutId;
    const checkMobile = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsMobile(window.innerWidth < 768);
      }, 150); // Debounce by 150ms
    };
    
    // Initial check
    const isMobileDevice = window.innerWidth < 768;
    setIsMobile(isMobileDevice);

    // If mobile, complete immediately
    if (isMobileDevice) {
      onComplete && onComplete();
    }

    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile);
      clearTimeout(timeoutId);
    };
  }, [onComplete]);

  // Animation variants for the paths
  const pathVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: [0.37, 0, 0.63, 1], // Smooth easeInOut
      },
    },
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      transition: { duration: 0.8, ease: 'easeInOut' },
    },
  };

  if (isMobile) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex cursor-default items-center justify-center bg-[#030303]"
      initial={{ opacity: 1 }}
      exit="exit"
      variants={containerVariants}
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03),transparent_70%)]" />
    <div className="absolute inset-0 z-0">
        <div className="absolute right-[-10%] top-[-10%] h-[50%] w-[50%] rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative flex w-full max-w-5xl flex-col items-center justify-center px-10">
        <svg
          viewBox="0 0 550 300"
          className="h-auto w-full fill-none stroke-current text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
          style={{ strokeWidth: 1.2, strokeLinecap: 'round', strokeLinejoin: 'round' }}
        >
          {/* "Ankit" Group */}
          <motion.g initial="hidden" animate="visible" transition={{ staggerChildren: 0.12 }}>
            {/* A */}
            <motion.path
              variants={pathVariants}
              d="M 60 140 C 60 140 100 60 110 50 C 120 40 130 140 130 140"
            />
            <motion.path
              variants={pathVariants}
              d="M 70 110 C 80 100 120 100 130 110 C 140 120 140 110 140 110"
            />

            {/* n */}
            <motion.path
              variants={pathVariants}
              d="M 140 110 L 140 140 M 140 125 C 150 110 160 110 160 125 L 160 140"
            />

            {/* k */}
            <motion.path
              variants={pathVariants}
              d="M 170 140 L 170 40 L 170 140 M 170 120 C 180 110 190 120 180 130 C 175 135 185 140 190 140"
            />

            {/* i */}
            <motion.path variants={pathVariants} d="M 200 110 L 200 140" />

            {/* t */}
            <motion.path variants={pathVariants} d="M 210 140 L 210 60" />
            <motion.path variants={pathVariants} d="M 200 80 L 220 80" />

            {/* i dot */}
            <motion.path variants={pathVariants} d="M 200 95 L 201 95" />
          </motion.g>

          {/* "Kuniyal" Group - Starts after delay */}
          <motion.g
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: 1.8, staggerChildren: 0.12 }}
            onAnimationComplete={() => {
              // Start exit sequence after a brief pause
              setTimeout(() => {
                sessionStorage.setItem('introShown', 'true');
                onComplete && onComplete();
              }, 800);
            }}
          >
            {/* K */}
            <motion.path
              variants={pathVariants}
              d="M 260 140 L 260 50 M 260 100 C 280 60 290 60 300 70 M 250 90 C 290 130 300 170 310 140"
            />

            {/* u */}
            <motion.path
              variants={pathVariants}
              d="M 320 110 L 320 135 C 320 145 330 145 330 135 L 330 110"
            />

            {/* n */}
            <motion.path
              variants={pathVariants}
              d="M 340 110 L 340 140 M 340 125 C 350 110 360 110 360 125 L 360 140"
            />

            {/* i */}
            <motion.path variants={pathVariants} d="M 370 110 L 370 140" />
            <motion.path variants={pathVariants} d="M 370 95 L 371 95" />

            {/* y */}
            <motion.path
              variants={pathVariants}
              d="M 380 110 L 380 135 C 380 145 390 145 390 135 L 390 110 M 390 135 L 390 160 C 390 180 370 180 365 170"
            />

            {/* a */}
            <motion.path
              variants={pathVariants}
              d="M 420 120 C 400 125 400 140 410 140 C 420 140 420 120 420 120 L 420 140"
            />

            {/* l */}
            <motion.path variants={pathVariants} d="M 430 130 C 430 140 440 50 430 60 L 430 140" />
          </motion.g>
        </svg>
      </div>
    </motion.div>
  );
};
export default SignatureTransition;
