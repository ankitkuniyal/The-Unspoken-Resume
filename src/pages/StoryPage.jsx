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

const StoryPage = () => {
  const [showIntro, setShowIntro] = useState(() => {
      return !sessionStorage.getItem('introShown');
  });

  return (
    <div className="bg-background min-h-screen text-white selection:bg-accent/30 selection:text-white pb-10">
      <AnimatePresence mode="wait">
        {showIntro ? (
            <SignatureTransition key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
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
            </motion.main>
        )}
      {!showIntro && <Footer />}
      </AnimatePresence>
    </div>
  );
};

export default StoryPage;
