import { useState } from "react";
import "./App.css";
import { AboutSection } from "./components/AboutSection";
import AnimatedBackground from "./components/AnimatedBackground";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import { MiniProjectsSection } from "./components/MiniProjectSection";
import Navbar from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectSection";
import ToolsSection from "./components/ToolSection";
function App() {
  const [reumeopen, setReumeopen] = useState<boolean>(false);
  return (
    <>
      <div className="min-h-screen bg-background">
        <AnimatedBackground />
        <Navbar resumeopen={reumeopen} setReumeopen={setReumeopen} />
        <HeroSection resumeopen={reumeopen} setReumeopen={setReumeopen} />
        <AboutSection />
        <ToolsSection />
        <ProjectsSection />
        <MiniProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
