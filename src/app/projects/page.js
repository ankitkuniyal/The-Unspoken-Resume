"use client";

import dynamic from "next/dynamic";
import NavBar from "../../components/ui/NavBar";
import ProjectsHero from "../../components/projects/ProjectsHero";
import Footer from "../../components/ui/Footer";

// Dynamically import heavy project components
// equivalent to React.lazy
const VerveIO = dynamic(() => import("../../components/projects/items/verve.io"), {
  loading: () => <ProjectLoader />,
});
const KrishiSakhi = dynamic(() => import("../../components/projects/items/KrishiSakhi"), {
  loading: () => <ProjectLoader />,
});
const HireHive = dynamic(() => import("../../components/projects/items/HireHive"), {
  loading: () => <ProjectLoader />,
});
// const AetherLens = dynamic(() => import("../../components/projects/items/AetherLens"), { loading: () => <ProjectLoader /> });

// Minimal loading fallback for individual projects
const ProjectLoader = () => (
  <div className="flex h-screen items-center justify-center bg-background">
    <div className="h-6 w-6 animate-spin rounded-full border-2 border-white/20 border-t-white" />
  </div>
);

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-blue-500/30">
      <NavBar />

      {/* Projects Hero - First Snap Section */}
      <ProjectsHero />

      {/* Stacked Project Sections */}
      <div>
        <VerveIO />
        <KrishiSakhi />
        <HireHive />
        {/* <AetherLens /> */}
      </div>
      <Footer />
    </div>
  );
}
