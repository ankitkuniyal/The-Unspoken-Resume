import { useRef, lazy, Suspense } from 'react';

import NavBar from '../components/ui/NavBar';
import ProjectsHero from '../components/projects/ProjectsHero';

// Lazy load heavy project components
const VerveIO = lazy(() => import('../components/projects/items/verve.io'));
const AetherLens = lazy(() => import('../components/projects/items/AetherLens'));
const KrishiSakhi = lazy(() => import('../components/projects/items/KrishiSakhi'));
const HireHive = lazy(() => import('../components/projects/items/HireHive'));

// Minimal loading fallback for individual projects
const ProjectLoader = () => (
  <div className="h-screen snap-start flex items-center justify-center bg-background">
    <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin" />
  </div>
);

const ProjectsPage = () => {
  return (
    <div className="bg-background h-screen overflow-y-scroll snap-y snap-mandatory text-white selection:bg-blue-500/30 supports-[height:100dvh]:h-[100dvh]">
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
          <Suspense fallback={<ProjectLoader />}>
            {/* <AetherLens /> */}
          </Suspense>
      </div>

    </div>
  );
};

export default ProjectsPage;
