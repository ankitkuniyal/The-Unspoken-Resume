import { useRef } from 'react';
import { motion } from 'framer-motion';
import NavBar from '../components/ui/NavBar';
import ProjectsHero from '../components/projects/ProjectsHero';

// Individual Projects
import VerveIO from '../components/projects/items/verve.io';
import AetherLens from '../components/projects/items/AetherLens';

const ProjectsPage = () => {
  return (
    <div className="bg-background h-screen overflow-y-scroll snap-y snap-mandatory text-white selection:bg-blue-500/30 supports-[height:100dvh]:h-[100dvh]">
      <NavBar />
      
      {/* Projects Hero - First Snap Section */}
      <ProjectsHero />

      {/* Stacked Project Sections */}
      <div>
          <VerveIO />
          <AetherLens />
      </div>

    </div>
  );
};

export default ProjectsPage;
