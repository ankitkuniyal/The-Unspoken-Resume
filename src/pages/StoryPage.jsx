import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import HeroSection from '../components/story/HeroSection';
import SignatureTransition from '../components/ui/SignatureTransition';
import Chapter1 from '../components/story/Chapter1';
import Chapter2 from '../components/story/Chapter2';
import Chapter3 from '../components/story/Chapter3';
import Chapter4 from '../components/story/Chapter4';
import Chapter5 from '../components/story/Chapter5';
import Chapter6 from '../components/story/Chapter6';
import Chapter7 from '../components/story/Chapter7';
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
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-15 brightness-100 contrast-150 pointer-events-none" />
      
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
              <Chapter1 />
              <Chapter2 />
              <Chapter3 />
              <Chapter4 />
              <Chapter5 />
              <Chapter6 />
              <Chapter7 />
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
