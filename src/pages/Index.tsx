
import { useState } from 'react';
import { Header } from '@/components/portfolio/Header';
import { Navigation } from '@/components/portfolio/Navigation';
import { ProjectsSection } from '@/components/portfolio/ProjectsSection';
import { ExperienceSection } from '@/components/portfolio/ExperienceSection';
import { ToolsSection } from '@/components/portfolio/ToolsSection';
import { Footer } from '@/components/portfolio/Footer';
import { ThemeToggle } from '@/components/portfolio/ThemeToggle';

const Index = () => {
  const [activeTab, setActiveTab] = useState('Projects');

  const renderContent = () => {
    switch (activeTab) {
      case 'Projects':
        return <ProjectsSection />;
      case 'Experience':
        return <ExperienceSection />;
      case 'Tools':
        return <ToolsSection />;
      default:
        return <ProjectsSection />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="flex justify-between items-start mb-8">
          <Header />
          <ThemeToggle />
        </div>
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="mt-8 animate-fade-in">
          {renderContent()}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
