import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Header } from "./components/layout/Header";
import { ProgressBar } from "./components/layout/ProgressBar";
import { FloatingElements } from "./components/common/FloatingElements";
import { HeroSection } from "./components/sections/hero/HeroSection";
import { SkillsSection } from "./components/sections/skills/SkillsSection";
import { ProjectsSection } from "./components/sections/projects/ProjectsSection";
import { AboutSection } from "./components/sections/AboutSection";
import { Footer } from "./components/layout/Footer";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen transition-colors duration-300">
          <FloatingElements />
          <ProgressBar />
          <Header />

          <main>
            <HeroSection />
            <SkillsSection />
            <ProjectsSection />
            <AboutSection />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
