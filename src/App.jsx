import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StoryPage from './pages/StoryPage';
import ProjectsPage from './pages/ProjectsPage';
import ResumePage from './pages/ResumePage';

import ContactPage from './pages/ContactPage';

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-white selection:bg-accent/30 selection:text-white">
        <Routes>
          <Route path="/" element={<StoryPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
