import { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const StoryProgress = () => {
  const [activeChapter, setActiveChapter] = useState(0);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Since we are using native scroll snapping, we can determine the active chapter
  // by scroll position or by IntersectionObserver. Given the structure, IntersectionObserver is cleaner.
  // Or simpler: We know the page is split into 100vh chunks (mostly).
  
  useEffect(() => {
    const handleScroll = () => {
       const vh = window.innerHeight;
       const scrollY = window.scrollY;
       // Approximate chapter logic - this might need refinement if sections vary in height
       // However, we made most sections h-screen.
       // Let's rely on IntersectionObserver for accuracy if possible, but scrollY is cheaper.
       // Actually, let's just listen to which element is in view.
    };
    
    // Better approach: Intersection Observer on IDs
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (id === 'hero-section') setActiveChapter(0);
          if (id === 'chapter-1') setActiveChapter(1);
          if (id === 'chapter-2') setActiveChapter(2);
          if (id === 'chapter-3') setActiveChapter(3);
          if (id === 'chapter-4') setActiveChapter(4);
          if (id === 'chapter-5') setActiveChapter(5);
          if (id === 'chapter-6') setActiveChapter(6);
          if (id === 'chapter-7') setActiveChapter(7);
          if (id === 'conclusion') setActiveChapter(8);
        }
      });
    }, { threshold: 0.5 }); // Trigger when 50% visible

    const observeIds = [
      'hero-section',
      'chapter-1', 'chapter-2', 'chapter-3', 'chapter-4', 'chapter-5', 'chapter-6', 'chapter-7', 'conclusion'
    ];

    observeIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const chapters = [
     { id: 'hero-section', label: 'Start' },
     { id: 'chapter-1', label: '01' },
     { id: 'chapter-2', label: '02' },
     { id: 'chapter-3', label: '03' },
     { id: 'chapter-4', label: '04' },
     { id: 'chapter-5', label: '05' },
     { id: 'chapter-6', label: '06' },
     { id: 'chapter-7', label: '07' },
  ];

  return (
    <>
      {/* Top Progress Bar */}
      <motion.div
        className="fixed left-0 right-0 top-0 z-50 h-1 bg-accent origin-left"
        style={{ scaleX }}
      />
      
      {/* Side Dots Navigation (Desktop only) */}
      <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-4 md:flex">
         {chapters.map((chapter, index) => (
            <a
              key={chapter.id}
              href={`#${chapter.id}`}
              className="group relative flex items-center justify-end"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
               {/* Label on Hover */}
               <span 
                 className={`mr-4 rounded-md bg-neutral-900/80 px-2 py-1 text-xs font-mono text-white opacity-0 transition-opacity backdrop-blur-sm group-hover:opacity-100 ${activeChapter === index ? 'opacity-100' : ''}`}
               >
                 {chapter.label}
               </span>
               
               {/* Dot */}
               <div 
                 className={`h-2 w-2 rounded-full transition-all duration-300 ${
                    activeChapter === index 
                    ? 'bg-accent scale-125' 
                    : 'bg-neutral-600 hover:bg-neutral-400 group-hover:scale-125'
                 }`} 
               />
               
               {/* Active glow */}
               {activeChapter === index && (
                  <div className="absolute right-0 h-2 w-2 animate-ping rounded-full bg-accent opacity-50" />
               )}
            </a>
         ))}
      </div>
    </>
  );
};

export default StoryProgress;
