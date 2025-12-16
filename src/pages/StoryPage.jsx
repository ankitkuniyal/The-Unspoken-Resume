import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from '../components/story/HeroSection';
import SignatureTransition from '../components/ui/SignatureTransition';
import { LazyChapter } from '../components/story/LazyChapter';
import Conclusion from '../components/story/Conclusion';
import Footer from '../components/ui/Footer';
import StoryProgress from '../components/ui/StoryProgress';

const StoryPage = () => {
  const [showIntro, setShowIntro] = useState(() => {
    return !sessionStorage.getItem('introShown');
  });

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white selection:bg-accent/30 selection:text-white">
      {/* Global Grain/Texture Overlay */}
      <div className="fixed inset-0 z-0 bg-[url('/noise.svg')] opacity-15 brightness-100 contrast-150 pointer-events-none" />
      
      <AnimatePresence mode="wait">
        {showIntro ? (
          <SignatureTransition key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <>
            <StoryProgress />
            <motion.main
              key="main"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <HeroSection />
              <LazyChapter number={1} />
              <LazyChapter number={2} />
              <LazyChapter number={3} />
              <LazyChapter number={4} />
              <LazyChapter number={5} />
              <LazyChapter number={6} />
              <LazyChapter number={7} />
              <Conclusion />
              <Footer />
            </motion.main>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StoryPage;
