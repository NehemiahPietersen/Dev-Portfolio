import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/NavBar';
import { HomeLayout } from './components/HomeLayout';
import { AboutPage } from './AboutPage';
import { ExperiencePage } from './ExperiencePage';
import { SkillsPage } from './SkillsPage';
import { ContactPage } from './ContactPage';
import { Footer } from './components/Footer';
import { ProjectDetail } from './components/ProjectDetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/experience" element={<ExperiencePage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/Contact" element={<ContactPage />} />

        {/* Project Details routes */}
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;