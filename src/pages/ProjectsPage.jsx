import { lazy, Suspense } from 'react';

import NavBar from '../components/ui/NavBar';
import ProjectsHero from '../components/projects/ProjectsHero';
import Footer from '../components/ui/Footer';
// Lazy load heavy project components
const VerveIO = lazy(() => import('../components/projects/items/verve.io'));
const AetherLens = lazy(() => import('../components/projects/items/AetherLens'));
const KrishiSakhi = lazy(() => import('../components/projects/items/KrishiSakhi'));
const HireHive = lazy(() => import('../components/projects/items/HireHive'));

// Minimal loading fallback for individual projects
const ProjectLoader = () => (
  <div className="flex h-screen items-center justify-center bg-background">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <NavBar />

      {/* Projects Hero - First Snap Section */}
      <ProjectsHero />

      {/* Stacked Project Sections */}
      <div>
        <Suspense fallback={<ProjectLoader />}>
          <VerveIO />
        </Suspense>
        <Suspense fallback={<ProjectLoader />}>
          <KrishiSakhi />
        </Suspense>
        <Suspense fallback={<ProjectLoader />}>
          <HireHive />
        </Suspense>
        <Suspense fallback={<ProjectLoader />}>{/* <AetherLens /> */}</Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
