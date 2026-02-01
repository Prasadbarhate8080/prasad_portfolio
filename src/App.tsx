import "./App.css";
import { AboutSection } from "./components/AboutSection";
import AnimatedBackground from "./components/AnimatedBackground";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import { ProjectsSection } from "./components/ProjectSection";
function App() {
  return (
    <>
      <div className="min-h-screen bg-background">
        <AnimatedBackground />
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}

export default App;
