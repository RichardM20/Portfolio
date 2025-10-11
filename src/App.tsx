import { ErrorBoundary } from "./components/common/ErrorBoundary";
import { FloatingElements } from "./components/common/FloatingElements";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import { ProgressBar } from "./components/layout/ProgressBar";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/hero/HeroSection";
import { ProjectsSection } from "./components/sections/projects/ProjectsSection";
import { SkillsSection } from "./components/sections/skills/SkillsSection";
import { LanguageProvider } from "./contexts/LanguageContext";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <LanguageProvider>
          <div className="min-h-screen transition-colors duration-300">
            <FloatingElements />
            <ProgressBar />
            <Header />

            <main>
              <ErrorBoundary
                fallback={
                  <div className="py-20 text-center">
                    <p className="text-red-600 dark:text-red-400">
                      error al cargar una sección
                    </p>
                  </div>
                }
              >
                <HeroSection />
                <SkillsSection />
                <ProjectsSection />
                <AboutSection />
              </ErrorBoundary>
            </main>

            <Footer />
          </div>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
