import React, { useState } from 'react';
import { 
  ArrowRight, 
  CheckCircle2, 
  Repeat
} from 'lucide-react';

interface TheLoopDiagramProps {
  onOpenConsultation: () => void;
  onOpenMaturityScan: () => void;
}

export const TheLoopDiagram: React.FC<TheLoopDiagramProps> = ({
  onOpenConsultation,
  onOpenMaturityScan
}) => {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages = [
    {
      number: '01',
      title: 'Product Management & Experience Design',
      tagline: 'Where strategy meets design. Where purpose becomes defined. Where AI becomes meaningful.',
      conclusion: 'This is where transformation begins: with clarity.',
      items: [
        'Product Strategy & Value Modeling',
        'Roadmaps & OKRs Prioritization',
        'AI Opportunity Maps & Feasibility',
        'User-Centered Experience Design',
        'Composable Experience Architecture',
        'API & Domain Modeling',
        'Human-in-the-Loop Workflow Design'
      ]
    },
    {
      number: '02',
      title: 'Engineer',
      tagline: 'Where ideas become robust software, scalable platforms, and AI-native systems.',
      conclusion: 'This is your full-stack product & platform engine.',
      items: [
        'Modern Digital Products & Microservices',
        'Cloud-Native Scalable Architectures',
        'Enterprise APIs & Service Meshes',
        'Data & AI Core Architectures',
        'Enterprise GenAI Applications',
        'Internal Developer Portals (Backstage.io)',
        'Event-Driven Distributed Systems'
      ]
    },
    {
      number: '03',
      title: 'Automate',
      tagline: 'Where delivery becomes intelligent, autonomous, and drastically faster.',
      conclusion: 'This is how enterprises achieve 3×–5× engineering velocity.',
      items: [
        'DevSecOps, SRE & CloudOps Automation',
        'Agentic CI/CD Pipelines & Self-Healing Builds',
        'Autonomous QA with TestCraft™',
        'AIOps & Intelligent Incident Runbooks',
        'Infrastructure as Code (Terraform / Pulumi)',
        'Delivery Telemetry & Release Gates',
        'Automated Security Vulnerability Triage'
      ]
    },
    {
      number: '04',
      title: 'Govern',
      tagline: 'Where systems remain trusted, responsible, governed, and continuously improving.',
      conclusion: 'This is enterprise-grade AI – stable, governed, transparent.',
      items: [
        'Engineering Observability & Tracing',
        'Execution Governance & Model Registries',
        'Automated Compliance & Audit Proofs',
        'GCC Operational Governance',
        'Security Posture & Hallucination Guardrails',
        'SLO/SLA Performance Verification',
        'AI Maturity Index Benchmarking'
      ]
    }
  ];

  return (
    <section id="the-loop" className="py-24 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>AuthenticAI™ Loop (The Operating System)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
            Transformation Isn’t a Project. It’s a Loop.
          </h2>
          <p className="mt-3 text-base text-slate-600 font-normal">
            The continuous operating model behind every enterprise transformation we deliver.
          </p>
        </div>

        {/* Formula Bar */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
              <Repeat className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono uppercase text-amber-800 font-bold">The Equation of Continuity</div>
              <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                The AuthenticAI™ Loop = Product Management &amp; Experience Design → Engineer → Automate → Govern → (repeat)
              </div>
            </div>
          </div>

          <div className="text-xs text-slate-500 font-mono font-medium">
            Evolves continually · Self-learning
          </div>
        </div>

        {/* 4 Stages Tabs / Interactive View */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {stages.map((st, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-xl border text-left transition-all cursor-pointer ${
                  isActive 
                    ? 'bg-amber-50/80 border-amber-400 shadow-sm' 
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                }`}
              >
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className={isActive ? 'text-amber-800 font-bold' : 'text-slate-500'}>STAGE {st.number}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#FAC400]" />}
                </div>
                <div className="font-bold text-sm text-slate-900 mt-1 line-clamp-1">
                  {st.title.split('&')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Stage Detail Card */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 shadow-lg relative overflow-hidden">
          
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-mono uppercase text-amber-800 font-bold">
              <span>STAGE {stages[activeStage].number} OF THE LOOP</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 mt-1">
              {stages[activeStage].title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
              {stages[activeStage].tagline}
            </p>
          </div>

          {/* Items Grid */}
          <div className="mb-8">
            <div className="text-xs font-mono uppercase text-slate-500 tracking-wider mb-3 font-semibold">
              We Articulate &amp; Build:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {stages[activeStage].items.map((item, iIdx) => (
                <div key={iIdx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs text-slate-800 font-medium hover:border-slate-300 hover:bg-slate-100/50 transition-all">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Callout */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-amber-800 font-bold">
              {stages[activeStage].conclusion}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onOpenMaturityScan}
                className="px-4 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-slate-800 border border-slate-300 hover:border-slate-800 bg-white transition-colors cursor-pointer shadow-2xs"
              >
                Scan Loop Readiness
              </button>
              <button
                onClick={onOpenConsultation}
                className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Explore the AuthenticAI™ Loop</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
