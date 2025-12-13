import HeroSection from '../components/story/HeroSection';
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
  return (
    <div className="bg-background min-h-screen text-white selection:bg-accent/30 selection:text-white pb-20">
      <main>
        <HeroSection />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Chapter4 />
        <Chapter5 />
        <Chapter6 />
        <Chapter7 />
        <Conclusion />
      </main>
      <Footer />
    </div>
  );
};

export default StoryPage;
