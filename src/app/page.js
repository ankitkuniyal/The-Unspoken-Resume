"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/story/HeroSection";
import SignatureTransition from "../components/ui/SignatureTransition";
import { LazyChapter } from "../components/story/LazyChapter";
import Conclusion from "../components/story/Conclusion";
import Footer from "../components/ui/Footer";

export default function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    // Check session storage on mount to avoid hydration mismatch
    const introShown = sessionStorage.getItem("introShown");
    if (introShown) {
      setShowIntro(false);
    }
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-[#020202] text-white selection:bg-accent/30 selection:text-white bg-[radial-gradient(circle_at_50%_0%,rgba(50,50,50,0.15)_0%,transparent_60%)]">
      {/* Global Grain/Texture Overlay */}
      <div className="pointer-events-none fixed inset-0 z-0 bg-[url('/noise.svg')] opacity-15 brightness-90 contrast-150" />

      <AnimatePresence mode="wait">
        {showIntro ? (
          <SignatureTransition
            key="intro"
            onComplete={() => setShowIntro(false)}
          />
        ) : (
          <>
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
}
