import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogosSection } from './components/ClientLogosSection';
import { StatusNeoPromise } from './components/StatusNeoPromise';
import { TheLoopDiagram } from './components/TheLoopDiagram';
import { GCCSection } from './components/GCCSection';
import { PartnershipsSection } from './components/PartnershipsSection';
import { TransformationLoops } from './components/TransformationLoops';
import { DecisionFabricSection } from './components/DecisionFabricSection';
import { AIPlaygroundSection } from './components/AIPlaygroundSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { WhitepapersInsights } from './components/WhitepapersInsights';
import { ReadyToBuildBanner } from './components/ReadyToBuildBanner';
import { TestCraftSection } from './components/TestCraftSection';
import { AIMaturityIndexScan } from './components/AIMaturityIndexScan';
import { AIPeriodicTable } from './components/AIPeriodicTable';
import { CompanyView } from './components/CompanyView';
import { ServicesView } from './components/ServicesView';
import { CareersView } from './components/CareersView';
import { ContactView } from './components/ContactView';
import { Footer } from './components/Footer';
import { ScheduleConsultationModal } from './components/ScheduleConsultationModal';
import { ManifestoModal } from './components/ManifestoModal';
import { FloatingQuickActions } from './components/FloatingQuickActions';
import { GeminiChatbot } from './components/GeminiChatbot';

export default function App() {
  const [activeView, setActiveView] = useState<string>('home');
  const [selectedLoopId, setSelectedLoopId] = useState<string>('clarity');
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [isManifestoOpen, setIsManifestoOpen] = useState<boolean>(false);

  // Sync with browser hash for true separate page routing and back/forward navigation
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveView(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: string) => {
    setActiveView(view);
    window.location.hash = view;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectLoop = (loopId: string) => {
    setSelectedLoopId(loopId);
    navigateTo('loops');
  };

  const handleOpenMaturityScan = () => {
    navigateTo('maturity-scan');
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#FAC400] selection:text-black">
      {/* Top Sticky Navbar with Credibility Ribbon */}
      <Navbar
        activeView={activeView}
        setActiveView={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenMaturityScan={handleOpenMaturityScan}
        onOpenManifesto={() => setIsManifestoOpen(true)}
        onSelectLoop={handleSelectLoop}
      />

      {/* Main Content Area: Separate Pages */}
      <main className="flex-1">
        
        {/* 1. Home Page */}
        {activeView === 'home' && (
          <>
            {/* Hero: AI-led Transformations */}
            <Hero
              onOpenMaturityScan={handleOpenMaturityScan}
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onSelectLoop={handleSelectLoop}
              onNavigate={navigateTo}
              onOpenManifesto={() => setIsManifestoOpen(true)}
            />

            {/* Client Marquee: Global Leaders */}
            <ClientLogosSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* The StatusNeo Promise: Authentic Engineering */}
            <StatusNeoPromise
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenMaturityScan={handleOpenMaturityScan}
            />

            {/* The AuthenticAI™ Loop (The Operating System) */}
            <TheLoopDiagram
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenMaturityScan={handleOpenMaturityScan}
            />

            {/* Global Advantage: GCCs Built for the AI-Native Era */}
            <GCCSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Partnerships: World's Leading Platforms */}
            <PartnershipsSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* What We Build: Design. Engineer. Automate. Govern. */}
            <TransformationLoops
              selectedLoopId={selectedLoopId}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Signature Platform: The Enterprise OS Fabric™ */}
            <DecisionFabricSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenMaturityScan={handleOpenMaturityScan}
            />

            {/* Interactive StatusNeo AI Playground™ */}
            <AIPlaygroundSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Real Case Studies at Scale */}
            <CaseStudiesSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Proof & Verified Client Testimonials */}
            <TestimonialsSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />

            {/* Insights & Community Publications */}
            <WhitepapersInsights
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenManifesto={() => setIsManifestoOpen(true)}
            />

            {/* Ready to Build Banner */}
            <ReadyToBuildBanner
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onNavigate={navigateTo}
            />
          </>
        )}

        {/* 2. Separate Page: About Us & Company */}
        {activeView === 'company' && (
          <CompanyView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {/* 3. Separate Page: Services & Solutions */}
        {activeView === 'services' && (
          <ServicesView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {/* 4. Separate Page: The AuthenticAI™ Loop (Offerings) */}
        {activeView === 'loops' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">The AuthenticAI™ Loop</span>
              </div>
            </div>
            <TheLoopDiagram
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenMaturityScan={handleOpenMaturityScan}
            />
            <TransformationLoops
              selectedLoopId={selectedLoopId}
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {/* 5. Separate Page: Careers (Great Place to Work & Jobs) */}
        {activeView === 'careers' && (
          <CareersView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {/* 6. Separate Page: Contact Us */}
        {activeView === 'contact' && (
          <ContactView
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onNavigate={navigateTo}
          />
        )}

        {/* 7. Separate Page: Case Studies */}
        {activeView === 'case-studies' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Client Stories &amp; Case Studies</span>
              </div>
            </div>
            <CaseStudiesSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {/* 8. Separate Page: StatusNeo AI Playground™ */}
        {activeView === 'playground' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">StatusNeo AI Playground™</span>
              </div>
            </div>
            <AIPlaygroundSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {/* 9. Separate Page: TestCraft™ Autonomous QA */}
        {activeView === 'testcraft' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">TestCraft™ Autonomous QA</span>
              </div>
            </div>
            <TestCraftSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {/* 10. Separate Page: Enterprise OS Fabric & Backstage.io */}
        {(activeView === 'enterprise-os' || activeView === 'decision-fabric') && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">The Enterprise OS Fabric™ (Backstage.io)</span>
              </div>
            </div>
            <DecisionFabricSection
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenMaturityScan={handleOpenMaturityScan}
            />
          </div>
        )}

        {/* 11. Separate Page: The AI Periodic Table™ */}
        {activeView === 'periodic-table' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">The AI Periodic Table™</span>
              </div>
            </div>
            <AIPeriodicTable
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {/* 12. Separate Page: AI Maturity Index Scan */}
        {activeView === 'maturity-scan' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">AI Maturity Index Scan</span>
              </div>
            </div>
            <AIMaturityIndexScan
              onOpenConsultation={() => setIsConsultationOpen(true)}
            />
          </div>
        )}

        {/* 13. Separate Page: Insights & Manifesto */}
        {activeView === 'insights' && (
          <div className="bg-white">
            <div className="bg-slate-50 border-b border-slate-200 py-3">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
                <button onClick={() => navigateTo('home')} className="hover:text-slate-900 cursor-pointer">Home</button>
                <span>/</span>
                <span className="text-slate-900 font-semibold">Insights &amp; Publications</span>
              </div>
            </div>
            <WhitepapersInsights
              onOpenConsultation={() => setIsConsultationOpen(true)}
              onOpenManifesto={() => setIsManifestoOpen(true)}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer
        onNavigate={navigateTo}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenMaturityScan={handleOpenMaturityScan}
      />

      {/* Floating Quick Action Widget */}
      <FloatingQuickActions
        onOpenConsultation={() => setIsConsultationOpen(true)}
        onOpenMaturityScan={handleOpenMaturityScan}
        onOpenManifesto={() => setIsManifestoOpen(true)}
      />

      {/* Multi-turn Gemini AI Chatbot */}
      <GeminiChatbot />

      {/* Strategic Advisory Consultation Modal */}
      <ScheduleConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* The AuthenticAI™ Loop Manifesto Modal */}
      <ManifestoModal
        isOpen={isManifestoOpen}
        onClose={() => setIsManifestoOpen(false)}
        onOpenConsultation={() => {
          setIsManifestoOpen(false);
          setIsConsultationOpen(true);
        }}
      />
    </div>
  );
}
