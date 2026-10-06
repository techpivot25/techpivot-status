import React, { useState } from 'react';
import { 
  Building2, 
  Plane, 
  Smartphone, 
  ShoppingBag, 
  HeartPulse, 
  ShieldCheck, 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';

interface ClientLogosProps {
  onOpenConsultation: () => void;
}

interface SectorInfo {
  id: string;
  name: string;
  icon: React.ReactNode;
  clientsTitle: string;
  subtext: string;
  metric: string;
  metricLabel: string;
  deliverables: string[];
}

export const ClientLogosSection: React.FC<ClientLogosProps> = ({ onOpenConsultation }) => {
  const [activeSector, setActiveSector] = useState<string>('banking');

  const sectors: SectorInfo[] = [
    {
      id: 'banking',
      name: 'Banking & Fintech',
      icon: <Building2 className="w-4 h-4" />,
      clientsTitle: 'Top-3 Global Investment Bank & Tier-1 Digital Banks',
      subtext: 'Replaced legacy monoliths with event-driven core banking APIs, real-time fraud mitigation agents, and automated regulatory reporting loops.',
      metric: '73%',
      metricLabel: 'Reduction in release verification cycles',
      deliverables: ['Real-time Payment Rails (ISO 20022)', 'Agentic Risk & Anti-Money Laundering', 'Zero-Downtime Microservices']
    },
    {
      id: 'airlines',
      name: 'Airlines & Travel',
      icon: <Plane className="w-4 h-4" />,
      clientsTitle: 'Global Star Alliance Carrier & Aviation Groups',
      subtext: 'Engineered mission-critical dynamic booking engines, flight crew scheduling optimizers, and unified passenger loyalty platforms.',
      metric: '99.99%',
      metricLabel: 'Uptime across 12M monthly passenger journeys',
      deliverables: ['High-throughput Seat Inventory APIs', 'Autonomous Disruption Recovery', 'Composable Mobile Experience']
    },
    {
      id: 'telecom',
      name: 'Telecom & 5G',
      icon: <Smartphone className="w-4 h-4" />,
      clientsTitle: 'Tier-1 Transatlantic Telecom Operator',
      subtext: 'Unified 180+ fragmented engineering teams onto Backstage-led DevX portals with automated network slice provisioning and self-healing SRE.',
      metric: '40%',
      metricLabel: 'Reduction in end-to-end incident MTTR',
      deliverables: ['Autonomous AIOps Incident Runbooks', '5G Edge Service Orchestration', 'Internal Developer Platform']
    },
    {
      id: 'retail',
      name: 'Retail & Omnichannel',
      icon: <ShoppingBag className="w-4 h-4" />,
      clientsTitle: 'Global Omnichannel Retail & Supply Chain Giant',
      subtext: 'Orchestrated real-time catalog search with hybrid vector embeddings, AI inventory demand forecasting, and automated TestCraft regression.',
      metric: '$3.4M',
      metricLabel: 'Annual cloud & CI/CD infrastructure savings',
      deliverables: ['Vector & GraphRAG Product Catalog', 'TestCraft Autonomous QA', 'Multi-Region Kubernetes Delivery']
    },
    {
      id: 'healthcare',
      name: 'Healthcare & Life Sciences',
      icon: <HeartPulse className="w-4 h-4" />,
      clientsTitle: 'Leading Telehealth & Provider Healthcare Network',
      subtext: 'Designed air-gapped Agentic Clinical Assist platforms with deterministic HIPAA guardrails and automated clinical documentation synthesis.',
      metric: '4.2x',
      metricLabel: 'Faster patient triage and clinical synthesis',
      deliverables: ['HIPAA / SOC2 Deterministic Guardrails', 'EHR Interoperability APIs', 'Human-in-the-Loop Clinical Verification']
    }
  ];

  const currentSectorData = sectors.find(s => s.id === activeSector) || sectors[0];

  // Marquee Brand Badges
  const marqueeItems = [
    { label: 'GLOBAL TIER-1 INVESTMENT BANK', industry: 'Financial Services' },
    { label: 'TRANSATLANTIC STAR ALLIANCE AIRLINE', industry: 'Aviation & Travel' },
    { label: 'TIER-1 TELECOM 5G OPERATOR', industry: 'Telecom' },
    { label: 'FORTUNE 50 RETAIL CONGLOMERATE', industry: 'Omnichannel Retail' },
    { label: 'NATIONWIDE TELEHEALTH PROVIDER', industry: 'Healthcare' },
    { label: 'GLOBAL FINTECH UNICORN', industry: 'Payments' },
    { label: 'AUTOMOTIVE EV MANUFACTURING', industry: 'Automotive' },
    { label: 'ENTERPRISE SAAS LEADER', industry: 'Cloud & AI' }
  ];

  return (
    <section className="py-16 bg-white border-b border-slate-200 relative overflow-hidden">
      
      {/* Top Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200/80 text-[11px] font-mono text-amber-900 font-semibold uppercase tracking-wider mb-3">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>Enterprise Scale &amp; Proven Resilience</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
              Trusted by Mission-Critical Global Enterprises
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl font-normal">
              From global airlines navigating high-volume peak loads to top-tier financial institutions demanding zero-hallucination compliance.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <span>Explore Client Case Studies</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Infinite Animated Marquee of Enterprise Sectors */}
      <div className="relative w-full overflow-hidden py-4 bg-slate-50 border-y border-slate-200/80 mb-12">
        <div className="animate-marquee gap-6">
          {[...marqueeItems, ...marqueeItems].map((item, idx) => (
            <div 
              key={idx}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-slate-200/90 shadow-2xs whitespace-nowrap"
            >
              <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
              <span className="text-xs font-mono font-bold text-slate-900 tracking-wide">{item.label}</span>
              <span className="text-[10px] font-mono text-slate-500 uppercase px-2 py-0.5 rounded bg-slate-100 border border-slate-200">
                {item.industry}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Sector Deep Dive */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Sector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 scrollbar-none">
          {sectors.map((sec) => {
            const isActive = activeSector === sec.id;
            return (
              <button
                key={sec.id}
                onClick={() => setActiveSector(sec.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-slate-900 text-white shadow-sm' 
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
                }`}
              >
                <span className={isActive ? 'text-[#FAC400]' : 'text-slate-500'}>
                  {sec.icon}
                </span>
                <span>{sec.name}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Sector Impact Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase text-amber-800 font-bold tracking-wider">
                  Transformation Blueprint
                </span>
                <span className="text-slate-300">·</span>
                <span className="text-xs font-mono text-slate-500">{currentSectorData.name}</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                {currentSectorData.clientsTitle}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {currentSectorData.subtext}
              </p>

              {/* Deliverables */}
              <div className="pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-semibold mb-2">
                  Engineered Capabilities &amp; Artifacts:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {currentSectorData.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-800 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Metric Box */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 text-center flex flex-col justify-center items-center shadow-2xs">
              <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-2">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight tabular-nums">
                {currentSectorData.metric}
              </div>
              <div className="text-xs font-semibold text-slate-700 mt-1 max-w-[200px]">
                {currentSectorData.metricLabel}
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200 w-full flex justify-center">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-mono font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1 cursor-pointer"
                >
                  <span>Request Full Case Spec</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
};
