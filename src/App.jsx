import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import ProjectsPage from './pages/ProjectsPage';
// Lazy load pages for code splitting
const StoryPage = lazy(() => import('./pages/StoryPage'));
const ResumePage = lazy(() => import('./pages/ResumePage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

import SmoothScroll from './components/ui/SmoothScroll';
import CustomCursor from './components/ui/CustomCursor';

// Minimal loading fallback
const PageLoader = () => (
  <div className="flex min-h-screen items-center justify-center bg-background">
    <div className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-white" />
  </div>
);

function App() {
  return (
    <Router>
      <CustomCursor />
      <SmoothScroll>
        <div className="min-h-screen bg-background text-white selection:bg-accent/30 selection:text-white">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<StoryPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/resume" element={<ResumePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
        </div>
      </SmoothScroll>
    </Router>
  );
}

export default App;
