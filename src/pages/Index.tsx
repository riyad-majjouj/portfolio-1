
import { MatrixRain } from '../components/MatrixRain';
import { Navigation } from '../components/Navigation';
import { HeroSection } from '../components/sections/HeroSection';
import { AboutSection } from '../components/sections/AboutSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { SecuritySection } from '../components/sections/SecuritySection';
import { ApiSection } from '../components/sections/ApiSection';
import { ThreeDSection } from '../components/sections/ThreeDSection';
import { ContactSection } from '../components/sections/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-terminal-bg text-terminal-primary relative">
      <MatrixRain />
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SecuritySection />
        <ApiSection />
        <ThreeDSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-terminal-border p-6 text-center">
        <div className="terminal-prompt">
          <span className="text-terminal-accent">system@portfolio:~$</span>{' '}
          <span className="text-terminal-muted">
            Built with React, Three.js, TypeScript & Security Best Practices
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Index;
