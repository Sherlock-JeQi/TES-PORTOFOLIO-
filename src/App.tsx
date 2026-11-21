import { useEffect, useState } from 'react';
import { CapabilitiesToolkit } from './components/CapabilitiesToolkit';
import { ContactSection } from './components/ContactSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { IdentityMatrix } from './components/IdentityMatrix';
import { MetricsAndExperience } from './components/MetricsAndExperience';
import {
  InquiryModal,
  PersonaDetailModal,
  ProjectDetailModal,
} from './components/Modals';
import { RecognitionSection } from './components/RecognitionSection';
import { ServicesAndTestimonial } from './components/ServicesAndTestimonial';
import { StarfieldCanvas } from './components/StarfieldCanvas';
import type { PersonaItem, ProjectItem } from './data/portfolioData';

const SECTION_IDS = [
  'hero',
  'about',
  'experience',
  'projects',
  'capabilities',
  'services',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [highlightedPersonaId, setHighlightedPersonaId] = useState<string | null>(null);
  const [selectedPersona, setSelectedPersona] = useState<PersonaItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [inquiryOpen, setInquiryOpen] = useState(false);
  const [inquiryTopic, setInquiryTopic] = useState('General Collaboration');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-35% 0px -50% 0px', threshold: 0.05 },
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const showToast = (message: string) => {
    setToastMessage(message);
    window.setTimeout(() => {
      setToastMessage((prev) => (prev === message ? null : prev));
    }, 3200);
  };

  const openInquiry = (topic: string) => {
    setInquiryTopic(topic);
    setInquiryOpen(true);
  };

  const handleSelectDiscipline = (personaId: string) => {
    setHighlightedPersonaId(personaId);
    const aboutEl = document.getElementById('about');
    if (aboutEl) {
      aboutEl.scrollIntoView({ behavior: 'smooth' });
    }
    window.setTimeout(() => {
      setHighlightedPersonaId((prev) => (prev === personaId ? null : prev));
    }, 2800);
  };

  const handleExplorePortfolio = () => {
    const projectsEl = document.getElementById('projects');
    if (projectsEl) {
      projectsEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-space-950 text-slate-200 min-h-screen relative flex flex-col">
      <StarfieldCanvas />

      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          activeSection={activeSection}
          onStartChat={() => openInquiry('General Collaboration')}
        />

        <main className="flex-grow pt-24">
          <HeroSection
            onStartConversation={() => openInquiry('General Collaboration')}
            onExplorePortfolio={handleExplorePortfolio}
            onSelectDiscipline={handleSelectDiscipline}
          />

          <IdentityMatrix
            highlightedPersonaId={highlightedPersonaId}
            onInspectPersona={(persona) => setSelectedPersona(persona)}
          />

          <MetricsAndExperience />

          <FeaturedProjects onSelectProject={(project) => setSelectedProject(project)} />

          <CapabilitiesToolkit />

          <RecognitionSection />

          <ServicesAndTestimonial
            onOpenDatasetModal={() => openInquiry('CNN Pest Dataset')}
            onBookSpeaking={() => openInquiry('Speaking & Brand Partnership')}
          />

          <ContactSection onNotify={showToast} />
        </main>

        <footer className="border-t border-white/10 py-10 px-4 sm:px-8 mt-auto relative z-10 glass-panel">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div>
              <span className="font-display font-bold text-white tracking-widest text-sm">
                JUHAIRI QUSHAY
              </span>
              <p className="font-mono text-xs text-slate-500 mt-1">
                ENGINEERED WITH CLEAN CODE · DARK SCI-FI EDITION
              </p>
            </div>
            <div className="font-mono text-xs text-slate-400">
              © 2026 JUHAIRI QUSHAY. ALL RIGHTS RESERVED.
            </div>
          </div>
        </footer>
      </div>

      {/* Interactive Modals */}
      <PersonaDetailModal
        persona={selectedPersona}
        onClose={() => setSelectedPersona(null)}
        onOpenInquiry={openInquiry}
      />

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenInquiry={openInquiry}
      />

      <InquiryModal
        open={inquiryOpen}
        initialTopic={inquiryTopic}
        onClose={() => setInquiryOpen(false)}
        onNotify={showToast}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 px-5 py-3 rounded-full glass-panel-glow border border-cyanGlow/40 text-xs font-mono text-cyanGlow shadow-2xl"
        >
          {toastMessage}
        </div>
      )}
    </div>
  );
}
