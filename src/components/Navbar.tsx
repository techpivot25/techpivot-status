import React, { useState, useRef, useEffect } from 'react';
import { StatusNeoLogo } from './StatusNeoLogo';
import { LogoManagerModal } from './LogoManagerModal';
import { 
  Plus,
  Minus,
  Menu, 
  X, 
  ArrowRight,
  Sparkles,
  Layers,
  Cpu,
  Compass,
  Zap,
  ShieldCheck,
  Gauge,
  Globe2,
  Users,
  BookOpen,
  FileText,
  Calendar,
  Building2,
  CheckCircle2,
  Bot,
  Workflow,
  Network,
  Upload
} from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
  onOpenConsultation: () => void;
  onOpenMaturityScan: () => void;
  onOpenManifesto?: () => void;
  onSelectLoop?: (loopId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenConsultation,
  onOpenMaturityScan,
  onOpenManifesto,
  onSelectLoop
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleOpenLogoModal = () => setIsLogoModalOpen(true);
    window.addEventListener('open-logo-manager', handleOpenLogoModal);
    return () => window.removeEventListener('open-logo-manager', handleOpenLogoModal);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 180);
  };

  const handleNavClick = (view: string) => {
    setActiveView(view);
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    window.location.hash = view;
  };

  const handleLoopSelect = (loopId: string) => {
    if (onSelectLoop) {
      onSelectLoop(loopId);
    } else {
      setActiveView('loops');
      window.location.hash = 'loops';
    }
    setMobileMenuOpen(false);
    setOpenDropdown(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMobileSection = (key: string) => {
    setMobileExpandedSection(prev => prev === key ? null : key);
  };

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setOpenDropdown(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white font-['Montserrat',sans-serif]">
      {/* Main Top Navigation Bar matching statusneo.com */}
      <div className="w-full bg-white border-b border-neutral-100 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-[82px]">
            
            {/* Brand Logo with Live Customizer / Uploader Trigger */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button 
                onClick={() => handleNavClick('home')}
                className="flex items-center cursor-pointer focus:outline-hidden py-2"
                aria-label="Home"
              >
                <StatusNeoLogo height={38} />
              </button>

              <button
                onClick={() => setIsLogoModalOpen(true)}
                className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-amber-100/70 hover:border-amber-300 rounded-full transition-all border border-slate-200 cursor-pointer shadow-2xs"
                title="Upload logo file or switch brand logo"
              >
                <Upload className="w-3 h-3 text-slate-800" />
                <span>Upload Logo</span>
              </button>
            </div>

            {/* Desktop Navigation Links matching statusneo.com layout */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8 text-[14px] font-semibold text-[#111013]">
              
              {/* 1. Vision & Leadership */}
              <div 
                className="relative h-[82px] flex items-center"
                onMouseEnter={() => handleMouseEnter('vision')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('company')}
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                    openDropdown === 'vision' || activeView === 'company' 
                      ? 'text-[#111013] font-bold' 
                      : 'text-[#111013]/90 hover:text-[#FAC400]'
                  }`}
                  aria-expanded={openDropdown === 'vision'}
                >
                  <span>Vision &amp; Leadership</span>
                  <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'vision' ? 'rotate-45 text-[#FAC400]' : 'text-[#111013]'}`} strokeWidth={2.4} />
                </button>

                {openDropdown === 'vision' && (
                  <div 
                    className="absolute top-[82px] left-0 w-72 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-neutral-100 rounded-xl bg-white p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('vision')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('company')}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Compass className="w-4 h-4 text-neutral-400 group-hover:text-[#FAC400] shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-amber-800">Our Story &amp; Mission</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Authentic engineering, relentless execution</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('company')}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Users className="w-4 h-4 text-neutral-400 group-hover:text-blue-600 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-blue-700">Leadership Team</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Architects, engineers &amp; practitioners</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('careers')}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 text-neutral-400 group-hover:text-emerald-600 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-emerald-700">Life at StatusNeo</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Culture, craftsmanship &amp; Great Place to Work®</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('company')}
                        className="w-full flex items-center gap-3 px-3 py-2.5 text-left rounded-lg hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Globe2 className="w-4 h-4 text-neutral-400 group-hover:text-purple-600 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-purple-700">Global Locations</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Dallas, Palo Alto, Gurugram, Paris, Dubai</div>
                        </div>
                      </button>

                      <div className="pt-1.5 mt-1 border-t border-neutral-100">
                        <button
                          onClick={() => {
                            setOpenDropdown(null);
                            if (onOpenManifesto) onOpenManifesto();
                          }}
                          className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-amber-900 bg-amber-50 hover:bg-amber-100 rounded-lg transition-colors cursor-pointer"
                        >
                          <span className="flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                            <span>The AuthenticAI™ Manifesto</span>
                          </span>
                          <ArrowRight className="w-3 h-3 text-amber-800" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. AI-Native Enterprise */}
              <div 
                className="relative h-[82px] flex items-center"
                onMouseEnter={() => handleMouseEnter('ai-enterprise')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                    openDropdown === 'ai-enterprise' || activeView === 'enterprise-os' || activeView === 'maturity-scan' || activeView === 'periodic-table'
                      ? 'text-[#111013] font-bold' 
                      : 'text-[#111013]/90 hover:text-[#FAC400]'
                  }`}
                  aria-expanded={openDropdown === 'ai-enterprise'}
                >
                  <span>AI-Native Enterprise</span>
                  <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'ai-enterprise' ? 'rotate-45 text-[#FAC400]' : 'text-[#111013]'}`} strokeWidth={2.4} />
                </button>

                {openDropdown === 'ai-enterprise' && (
                  <div 
                    className="absolute top-[82px] -left-8 w-88 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-neutral-100 rounded-xl bg-white p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('ai-enterprise')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-0.5">
                      <button
                        onClick={() => handleNavClick('enterprise-os')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Layers className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-purple-700">Enterprise OS Fabric™</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Internal developer portal &amp; AI-native golden paths</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setOpenDropdown(null);
                          onOpenConsultation();
                        }}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-amber-700">AuthenticAI™ Consulting</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Strategic roadmap, governance &amp; enterprise advisory</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('enterprise-os')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Cpu className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-blue-700">Decision Fabric™</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Autonomous enterprise reasoning &amp; system integration</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Workflow className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-emerald-700">AI-Native SDLC Transformation</div>
                          <div className="text-[11px] text-neutral-500 font-normal">From backlog to deployment with embedded intelligence</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('playground')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Bot className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-rose-700">Agentic Engineering Workflows</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Multi-agent collaboration in developer toolchains</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('testcraft')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <ShieldCheck className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-indigo-700">AI in CI/CD, DevSecOps, QA</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Autonomous guardrails, test generation &amp; security</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Zap className="w-4 h-4 text-amber-500 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-amber-700">AI DevX &amp; AIOps</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Cognitive monitoring, developer velocity &amp; SRE</div>
                        </div>
                      </button>

                      <div className="pt-2 mt-1 border-t border-neutral-100 grid grid-cols-2 gap-2">
                        <button
                          onClick={() => handleNavClick('maturity-scan')}
                          className="flex items-center gap-2 p-2 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                        >
                          <Gauge className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-[#111013] group-hover:text-emerald-700">AI Maturity Scan</div>
                            <div className="text-[10px] text-neutral-500">Benchmark readiness</div>
                          </div>
                        </button>

                        <button
                          onClick={() => handleNavClick('periodic-table')}
                          className="flex items-center gap-2 p-2 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                        >
                          <Sparkles className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <div>
                            <div className="text-xs font-semibold text-[#111013] group-hover:text-blue-700">Periodic Table™</div>
                            <div className="text-[10px] text-neutral-500">AI tools &amp; frameworks</div>
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. Offerings (StatusNeo 5-Column Mega Dropdown) */}
              <div 
                className="relative h-[82px] flex items-center"
                onMouseEnter={() => handleMouseEnter('offerings')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('services')}
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                    openDropdown === 'offerings' || activeView === 'services' || activeView === 'loops'
                      ? 'text-[#111013] font-bold' 
                      : 'text-[#111013]/90 hover:text-[#FAC400]'
                  }`}
                  aria-expanded={openDropdown === 'offerings'}
                >
                  <span>Offerings</span>
                  <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'offerings' ? 'rotate-45 text-[#FAC400]' : 'text-[#111013]'}`} strokeWidth={2.4} />
                </button>

                {openDropdown === 'offerings' && (
                  <div 
                    className="absolute top-[82px] -left-48 w-[1000px] shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-neutral-100 rounded-xl bg-white p-6 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('offerings')}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* 5 Column Grid matching statusneo.com */}
                    <div className="grid grid-cols-5 gap-6">
                      
                      {/* Col 1: Clarity Loop */}
                      <div className="space-y-3">
                        <button
                          onClick={() => handleLoopSelect('clarity')}
                          className="text-left w-full group cursor-pointer"
                        >
                          <div className="text-[11px] font-bold text-neutral-900 tracking-wider uppercase mb-0.5">
                            CLARITY LOOP
                          </div>
                          <div className="text-[12px] font-medium text-neutral-500 group-hover:text-amber-800">
                            PRODUCT &amp; EXPERIENCE
                          </div>
                        </button>
                        
                        <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Experience &amp; Interface Design
                          </button>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Product Management &amp; Strategy
                          </button>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            AI Product Design
                          </button>
                        </div>
                      </div>

                      {/* Col 2: Build Loop */}
                      <div className="space-y-3">
                        <button
                          onClick={() => handleLoopSelect('build')}
                          className="text-left w-full group cursor-pointer"
                        >
                          <div className="text-[11px] font-bold text-neutral-900 tracking-wider uppercase mb-0.5">
                            BUILD LOOP
                          </div>
                          <div className="text-[12px] font-medium text-neutral-500 group-hover:text-blue-700">
                            ENGINEERING
                          </div>
                        </button>
                        
                        <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Product Engineering
                          </button>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Data &amp; AI Engineering
                          </button>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Platform Automation Engineering
                          </button>
                        </div>
                      </div>

                      {/* Col 3: Velocity Loop */}
                      <div className="space-y-3">
                        <button
                          onClick={() => handleLoopSelect('velocity')}
                          className="text-left w-full group cursor-pointer"
                        >
                          <div className="text-[11px] font-bold text-neutral-900 tracking-wider uppercase mb-0.5">
                            VELOCITY LOOP
                          </div>
                          <div className="text-[12px] font-medium text-neutral-500 group-hover:text-emerald-700">
                            AUTOMATION
                          </div>
                        </button>
                        
                        <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            DevSecOps, SRE &amp; CloudOps
                          </button>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Test Engineering &amp; Automation
                          </button>
                        </div>
                      </div>

                      {/* Col 4: Improvement Loop */}
                      <div className="space-y-3">
                        <button
                          onClick={() => handleLoopSelect('governance')}
                          className="text-left w-full group cursor-pointer"
                        >
                          <div className="text-[11px] font-bold text-neutral-900 tracking-wider uppercase mb-0.5">
                            IMPROVEMENT LOOP
                          </div>
                          <div className="text-[12px] font-medium text-neutral-500 group-hover:text-purple-700">
                            GOVERNANCE &amp; SCALE
                          </div>
                        </button>
                        
                        <div className="space-y-1.5 pt-2 border-t border-neutral-100">
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            AI &amp; Engineering Governance
                          </button>
                          <button
                            onClick={() => handleNavClick('services')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Compliance, Security &amp; Risk
                          </button>
                          <button
                            onClick={() => handleNavClick('maturity-scan')}
                            className="w-full text-left py-1 text-[13px] text-neutral-600 hover:text-[#FAC400] transition-colors cursor-pointer font-medium"
                          >
                            Observability &amp; Maturity Index
                          </button>
                        </div>
                      </div>

                      {/* Col 5: Accelerators & IP */}
                      <div className="space-y-3 bg-neutral-50/80 p-3.5 rounded-lg border border-neutral-100">
                        <div>
                          <div className="text-[11px] font-bold text-[#111013] tracking-wider uppercase mb-0.5">
                            ACCELERATORS &amp; IP
                          </div>
                          <div className="text-[11px] text-neutral-500 font-normal">
                            Proprietary assets &amp; platforms
                          </div>
                        </div>
                        
                        <div className="space-y-1 pt-1.5 border-t border-neutral-200/80">
                          <button
                            onClick={() => handleNavClick('testcraft')}
                            className="w-full text-left py-1 text-[13px] font-semibold text-[#111013] hover:text-[#FAC400] transition-colors cursor-pointer"
                          >
                            TestCraft
                          </button>
                          <button
                            onClick={() => handleNavClick('playground')}
                            className="w-full text-left py-1 text-[13px] font-semibold text-[#111013] hover:text-[#FAC400] transition-colors cursor-pointer"
                          >
                            QueryButler
                          </button>
                          <button
                            onClick={() => handleNavClick('enterprise-os')}
                            className="w-full text-left py-1 text-[13px] font-semibold text-[#111013] hover:text-[#FAC400] transition-colors cursor-pointer"
                          >
                            Backstage.io By StatusNeo
                          </button>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>

              {/* 4. Global Delivery & GCCs */}
              <div 
                className="relative h-[82px] flex items-center"
                onMouseEnter={() => handleMouseEnter('gccs')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('company')}
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                    openDropdown === 'gccs'
                      ? 'text-[#111013] font-bold' 
                      : 'text-[#111013]/90 hover:text-[#FAC400]'
                  }`}
                  aria-expanded={openDropdown === 'gccs'}
                >
                  <span>Global Delivery &amp; GCCs</span>
                  <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'gccs' ? 'rotate-45 text-[#FAC400]' : 'text-[#111013]'}`} strokeWidth={2.4} />
                </button>

                {openDropdown === 'gccs' && (
                  <div 
                    className="absolute top-[82px] left-0 w-80 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-neutral-100 rounded-xl bg-white p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('gccs')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('company')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Building2 className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-amber-700">GCC Setup &amp; Scale Services</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Turnkey AI capability centers and engineering pods</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('company')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Globe2 className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-blue-700">Global Hubs &amp; CoEs</div>
                          <div className="text-[11px] text-neutral-500 font-normal">India, North America and EMEA talent networks</div>
                        </div>
                      </button>

                      <button
                        onClick={() => {
                          setOpenDropdown(null);
                          onOpenConsultation();
                        }}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-emerald-700">Dedicated Engineering Pods</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Pre-configured squads with embedded AI velocity</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. Insights & Community */}
              <div 
                className="relative h-[82px] flex items-center"
                onMouseEnter={() => handleMouseEnter('insights')}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  onClick={() => handleNavClick('insights')}
                  className={`flex items-center gap-1.5 py-2 transition-colors cursor-pointer ${
                    openDropdown === 'insights' || activeView === 'insights' || activeView === 'case-studies'
                      ? 'text-[#111013] font-bold' 
                      : 'text-[#111013]/90 hover:text-[#FAC400]'
                  }`}
                  aria-expanded={openDropdown === 'insights'}
                >
                  <span>Insights &amp; Community</span>
                  <Plus className={`w-3.5 h-3.5 transition-transform duration-200 ${openDropdown === 'insights' ? 'rotate-45 text-[#FAC400]' : 'text-[#111013]'}`} strokeWidth={2.4} />
                </button>

                {openDropdown === 'insights' && (
                  <div 
                    className="absolute top-[82px] -left-8 w-80 shadow-[0_12px_36px_rgba(0,0,0,0.12)] border border-neutral-100 rounded-xl bg-white p-3 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                    onMouseEnter={() => handleMouseEnter('insights')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <div className="space-y-1">
                      <button
                        onClick={() => handleNavClick('company')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Network className="w-4 h-4 text-indigo-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-indigo-700">Partnerships &amp; Alliances</div>
                          <div className="text-[11px] text-neutral-500 font-normal">AWS, Microsoft Azure, Google Cloud &amp; Databricks</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('services')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-amber-700">Glean Enterprise AI</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Workplace search &amp; conversational knowledge</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('insights')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <BookOpen className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-emerald-700">Blogs</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Engineering architecture briefs &amp; breakdowns</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('insights')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <Calendar className="w-4 h-4 text-rose-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-rose-700">Events</div>
                          <div className="text-[11px] text-neutral-500 font-normal">Keynotes, webinars &amp; technical workshops</div>
                        </div>
                      </button>

                      <button
                        onClick={() => handleNavClick('insights')}
                        className="w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-neutral-50 transition-colors group cursor-pointer"
                      >
                        <FileText className="w-4 h-4 text-purple-600 mt-0.5 shrink-0" />
                        <div>
                          <div className="text-[13px] font-semibold text-[#111013] group-hover:text-purple-700">Whitepaper</div>
                          <div className="text-[11px] text-neutral-500 font-normal">In-depth research on enterprise AI adoption</div>
                        </div>
                      </button>
                    </div>
                  </div>
                )}
              </div>

            </nav>

            {/* Right Action / Contact Button & Mobile trigger */}
            <div className="flex items-center gap-2.5">
              {/* Dedicated AI Assistant Button */}
              <button
                onClick={() => window.dispatchEvent(new Event('open-gemini-chat'))}
                className="hidden md:inline-flex items-center gap-2 px-3.5 py-2.5 text-[12.5px] font-bold tracking-wide bg-[#0B3558] hover:bg-[#07243d] text-white rounded-lg transition-all duration-200 cursor-pointer shadow-xs border border-sky-400/30 group"
                title="Open TechPivot AI Assistant"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
                </span>
                <Bot className="w-4 h-4 text-cyan-300 group-hover:rotate-12 transition-transform" />
                <span>AI Assistant</span>
              </button>

              <button
                onClick={onOpenConsultation}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-[12.5px] font-bold uppercase tracking-wider bg-[#FAC400] text-black hover:bg-[#E5B300] rounded-lg transition-all duration-200 cursor-pointer shadow-2xs"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {/* Mobile menu trigger */}
              <div className="flex items-center lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 rounded-lg text-neutral-800 hover:text-[#FAC400] hover:bg-neutral-50 cursor-pointer"
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Drawer with Accordion Sections matching statusneo.com */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-100 bg-white px-5 pt-4 pb-8 space-y-3 shadow-2xl max-h-[85vh] overflow-y-auto">
          
          <div className="grid grid-cols-1 gap-1 text-[14px] font-semibold">
            
            {/* 1. Vision & Leadership Accordion */}
            <div className="border border-neutral-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileSection('vision')}
                className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-neutral-900 bg-neutral-50/50"
              >
                <span>Vision &amp; Leadership</span>
                {mobileExpandedSection === 'vision' ? (
                  <Minus className="w-4 h-4 text-neutral-600" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-600" />
                )}
              </button>
              
              {mobileExpandedSection === 'vision' && (
                <div className="p-2 space-y-1 bg-white border-t border-neutral-100 text-xs">
                  <button
                    onClick={() => handleNavClick('company')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Our Story &amp; Mission
                  </button>
                  <button
                    onClick={() => handleNavClick('company')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Leadership Team
                  </button>
                  <button
                    onClick={() => handleNavClick('careers')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Life at StatusNeo
                  </button>
                  <button
                    onClick={() => handleNavClick('company')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Global Locations
                  </button>
                </div>
              )}
            </div>

            {/* 2. AI-Native Enterprise Accordion */}
            <div className="border border-neutral-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileSection('ai-enterprise')}
                className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-neutral-900 bg-neutral-50/50"
              >
                <span>AI-Native Enterprise</span>
                {mobileExpandedSection === 'ai-enterprise' ? (
                  <Minus className="w-4 h-4 text-neutral-600" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-600" />
                )}
              </button>
              
              {mobileExpandedSection === 'ai-enterprise' && (
                <div className="p-2 space-y-1 bg-white border-t border-neutral-100 text-xs">
                  <button
                    onClick={() => handleNavClick('enterprise-os')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Enterprise OS Fabric
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    AuthenticAI™ Consulting
                  </button>
                  <button
                    onClick={() => handleNavClick('enterprise-os')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Decision Fabric
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    AI-Native SDLC Transformation
                  </button>
                  <button
                    onClick={() => handleNavClick('playground')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Agentic Engineering Workflows
                  </button>
                  <button
                    onClick={() => handleNavClick('testcraft')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    AI in CI/CD, DevSecOps, QA
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    AI DevX &amp; AIOps
                  </button>
                  <button
                    onClick={() => handleNavClick('maturity-scan')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700 font-semibold text-emerald-800"
                  >
                    AI Maturity Index Scan
                  </button>
                  <button
                    onClick={() => handleNavClick('periodic-table')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700 font-semibold text-blue-800"
                  >
                    Periodic Table
                  </button>
                </div>
              )}
            </div>

            {/* 3. Offerings Accordion */}
            <div className="border border-neutral-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileSection('offerings')}
                className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-neutral-900 bg-neutral-50/50"
              >
                <span>Offerings</span>
                {mobileExpandedSection === 'offerings' ? (
                  <Minus className="w-4 h-4 text-neutral-600" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-600" />
                )}
              </button>
              
              {mobileExpandedSection === 'offerings' && (
                <div className="p-3 space-y-3 bg-white border-t border-neutral-100 text-xs">
                  <div>
                    <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">CLARITY LOOP - PRODUCT &amp; EXPERIENCE</div>
                    <div className="space-y-1 mt-1 pl-2 border-l-2 border-amber-300">
                      <button onClick={() => handleLoopSelect('clarity')} className="w-full text-left py-1 text-neutral-700 hover:text-amber-800">
                        Experience &amp; Interface Design
                      </button>
                      <button onClick={() => handleLoopSelect('clarity')} className="w-full text-left py-1 text-neutral-700 hover:text-amber-800">
                        Product Management &amp; Strategy
                      </button>
                      <button onClick={() => handleLoopSelect('clarity')} className="w-full text-left py-1 text-neutral-700 hover:text-amber-800">
                        AI Product Design
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">BUILD LOOP - ENGINEERING</div>
                    <div className="space-y-1 mt-1 pl-2 border-l-2 border-blue-300">
                      <button onClick={() => handleLoopSelect('build')} className="w-full text-left py-1 text-neutral-700 hover:text-blue-800">
                        Product Engineering
                      </button>
                      <button onClick={() => handleLoopSelect('build')} className="w-full text-left py-1 text-neutral-700 hover:text-blue-800">
                        Data &amp; AI Engineering
                      </button>
                      <button onClick={() => handleLoopSelect('build')} className="w-full text-left py-1 text-neutral-700 hover:text-blue-800">
                        Platform Automation Engineering
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">VELOCITY LOOP - AUTOMATION</div>
                    <div className="space-y-1 mt-1 pl-2 border-l-2 border-emerald-300">
                      <button onClick={() => handleLoopSelect('velocity')} className="w-full text-left py-1 text-neutral-700 hover:text-emerald-800">
                        DevSecOps, SRE &amp; CloudOps
                      </button>
                      <button onClick={() => handleLoopSelect('velocity')} className="w-full text-left py-1 text-neutral-700 hover:text-emerald-800">
                        Test Engineering &amp; Automation
                      </button>
                    </div>
                  </div>

                  <div>
                    <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px]">IMPROVEMENT LOOP - GOVERNANCE &amp; SCALE</div>
                    <div className="space-y-1 mt-1 pl-2 border-l-2 border-purple-300">
                      <button onClick={() => handleLoopSelect('governance')} className="w-full text-left py-1 text-neutral-700 hover:text-purple-800">
                        AI &amp; Engineering Governance
                      </button>
                      <button onClick={() => handleLoopSelect('governance')} className="w-full text-left py-1 text-neutral-700 hover:text-purple-800">
                        Compliance, Security &amp; Risk
                      </button>
                      <button onClick={() => handleLoopSelect('governance')} className="w-full text-left py-1 text-neutral-700 hover:text-purple-800">
                        Observability &amp; Maturity Index
                      </button>
                    </div>
                  </div>

                  <div className="bg-neutral-50 p-2.5 rounded-lg border border-neutral-100">
                    <div className="font-bold text-neutral-900 uppercase tracking-wider text-[11px] mb-1">ACCELERATORS &amp; IP</div>
                    <div className="space-y-1">
                      <button onClick={() => handleNavClick('testcraft')} className="w-full text-left py-1 font-medium text-neutral-800 hover:text-[#FAC400]">
                        TestCraft
                      </button>
                      <button onClick={() => handleNavClick('playground')} className="w-full text-left py-1 font-medium text-neutral-800 hover:text-[#FAC400]">
                        QueryButler
                      </button>
                      <button onClick={() => handleNavClick('enterprise-os')} className="w-full text-left py-1 font-medium text-neutral-800 hover:text-[#FAC400]">
                        Backstage.io By StatusNeo
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Global Delivery & GCCs Accordion */}
            <div className="border border-neutral-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileSection('gccs')}
                className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-neutral-900 bg-neutral-50/50"
              >
                <span>Global Delivery &amp; GCCs</span>
                {mobileExpandedSection === 'gccs' ? (
                  <Minus className="w-4 h-4 text-neutral-600" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-600" />
                )}
              </button>
              
              {mobileExpandedSection === 'gccs' && (
                <div className="p-2 space-y-1 bg-white border-t border-neutral-100 text-xs">
                  <button
                    onClick={() => handleNavClick('company')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    GCC Setup &amp; Scale Services
                  </button>
                  <button
                    onClick={() => handleNavClick('company')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Global Hubs &amp; CoEs
                  </button>
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Dedicated Engineering Pods
                  </button>
                </div>
              )}
            </div>

            {/* 5. Insights & Community Accordion */}
            <div className="border border-neutral-100 rounded-xl overflow-hidden">
              <button
                onClick={() => toggleMobileSection('insights')}
                className="w-full flex items-center justify-between p-3.5 text-left font-semibold text-neutral-900 bg-neutral-50/50"
              >
                <span>Insights &amp; Community</span>
                {mobileExpandedSection === 'insights' ? (
                  <Minus className="w-4 h-4 text-neutral-600" />
                ) : (
                  <Plus className="w-4 h-4 text-neutral-600" />
                )}
              </button>
              
              {mobileExpandedSection === 'insights' && (
                <div className="p-2 space-y-1 bg-white border-t border-neutral-100 text-xs">
                  <button
                    onClick={() => handleNavClick('company')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Partnerships &amp; Alliances
                  </button>
                  <button
                    onClick={() => handleNavClick('services')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Glean Enterprise AI
                  </button>
                  <button
                    onClick={() => handleNavClick('insights')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Blogs
                  </button>
                  <button
                    onClick={() => handleNavClick('insights')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Events
                  </button>
                  <button
                    onClick={() => handleNavClick('insights')}
                    className="w-full text-left p-2.5 rounded-lg hover:bg-neutral-50 text-neutral-700"
                  >
                    Whitepaper
                  </button>
                </div>
              )}
            </div>

          </div>

          <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                window.dispatchEvent(new Event('open-gemini-chat'));
              }}
              className="w-full py-2.5 rounded-lg bg-[#0B3558] text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer hover:bg-[#07243d] transition-colors shadow-2xs"
            >
              <Bot className="w-4 h-4 text-cyan-300" />
              <span>Ask AI Assistant (Gemini)</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsLogoModalOpen(true);
              }}
              className="w-full py-2 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold flex items-center justify-center gap-1.5 cursor-pointer hover:bg-slate-200 transition-colors"
            >
              <Upload className="w-3.5 h-3.5" />
              <span>Upload / Change Brand Logo</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenConsultation();
              }}
              className="w-full py-3 rounded-lg bg-[#FAC400] text-black text-xs font-bold uppercase tracking-wider text-center cursor-pointer shadow-sm hover:bg-[#E5B300] transition-colors"
            >
              Let's Talk
            </button>
          </div>
        </div>
      )}

      {/* Brand Logo Upload & Customizer Modal */}
      <LogoManagerModal 
        isOpen={isLogoModalOpen} 
        onClose={() => setIsLogoModalOpen(false)} 
      />
    </header>
  );
};
