import React, { useState } from 'react';
import { ArrowRight, ChevronRight, CheckCircle2, Terminal, Sparkles, Compass, Code2, Zap, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenMaturityScan: () => void;
  onOpenConsultation: () => void;
  onSelectLoop: (loopId: string) => void;
  onNavigate: (view: string) => void;
  onOpenManifesto?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenMaturityScan,
  onOpenConsultation,
  onSelectLoop,
  onNavigate,
  onOpenManifesto
}) => {
  const [activeStageKey, setActiveStageKey] = useState<'clarity' | 'build' | 'velocity' | 'govern'>('build');

  const loopDetails = {
    clarity: {
      name: 'DESIGN · Product UX',
      subtitle: 'Experience architecture, value modeling, and AI product design',
      metric: '+45% Faster Discovery',
      color: 'text-amber-800 bg-amber-50 border-amber-300'
    },
    build: {
      name: 'ENGINEER · Platforms',
      subtitle: 'Spotify Backstage DevX, cloud-native microservices & data core',
      metric: '3.8x Delivery Velocity',
      color: 'text-blue-800 bg-blue-50 border-blue-300'
    },
    velocity: {
      name: 'AUTOMATE · DevSecOps',
      subtitle: 'TestCraft™ autonomous QA, self-healing CI/CD & SRE care',
      metric: '94% Automated Regression',
      color: 'text-emerald-800 bg-emerald-50 border-emerald-300'
    },
    govern: {
      name: 'GOVERN · Safe & Scale',
      subtitle: 'Model registries, OpenTelemetry tracing & GCC governance',
      metric: '100% Audit-Ready Lineage',
      color: 'text-purple-800 bg-purple-50 border-purple-300'
    }
  };

  const currentLoop = loopDetails[activeStageKey];

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 border-b border-slate-200 bg-gradient-to-b from-slate-50/90 via-white to-white">
      
      {/* Background Subtle Gradient & Glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-amber-200/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-20 left-10 w-[450px] h-[450px] bg-blue-100/30 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute inset-0 bg-dot-pattern opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Eyebrow Pill Badge */}
        <div className="flex items-center gap-2 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono text-amber-900 font-semibold tracking-wider shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-[#FAC400] animate-pulse" />
            <span>The AuthenticAI™ Company</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#111013] leading-[1.15] text-balance">
              AI-led Transformations, Designed &amp; Engineered for the Modern Digital Enterprise.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
              Headquartered in Silicon Valley, we build real, responsible AI-native digital systems – engineered with clarity, grounded in truth, governed by intelligence, and powered by the <strong className="text-slate-900 font-semibold">AuthenticAI™ Loop</strong>.
            </p>

            <div className="p-3.5 rounded-xl bg-slate-100/90 border border-slate-200 text-xs font-mono text-slate-800 max-w-xl font-medium shadow-2xs">
              <span className="text-amber-700 font-bold mr-1">No hype. No Gen-wash. No shortcuts.</span> Just engineered transformation that works.
            </div>

            {/* 3 Action Buttons matching live StatusNeo homepage */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo cursor-pointer shadow-md flex items-center gap-2"
              >
                <span>Explore AuthenticAI™</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('loops')}
                className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo-dark cursor-pointer shadow-sm"
              >
                <span>How We Transform Enterprises</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenManifesto) {
                    onOpenManifesto();
                  } else {
                    const el = document.getElementById('manifesto');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else onNavigate('loops');
                  }
                }}
                className="text-xs font-mono uppercase tracking-wider text-slate-600 hover:text-slate-900 flex items-center gap-1.5 transition-colors cursor-pointer py-2 font-semibold"
              >
                <span>The AuthenticAI™ Loop Manifesto</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-600" />
              </button>
            </div>

            {/* Key Trust Assertions */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Engineered, Not Assembled</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Business-Driven Outcomes</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="text-slate-700 font-semibold">Loop-Powered &amp; Governed</span>
              </div>
            </div>
          </div>

          {/* Graphic Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-xl relative group">
              <div className="aspect-[16/11] overflow-hidden relative bg-slate-100">
                <img
                  src="https://statusneo.com/wp-content/uploads/2026/04/AAI_Thumbnail_003.webp"
                  onError={(e) => {
                    // Fallback to generated high-res image if remote webp fails
                    (e.target as HTMLImageElement).src = '/src/assets/images/hero_statusneo_ai_native_1790617377097.jpg';
                  }}
                  alt="StatusNeo AuthenticAI Loop Engine"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/65 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white flex items-end justify-between">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-amber-300 font-bold">Continuous Operating System</div>
                    <div className="text-sm font-bold">AuthenticAI™ Autonomous Engineering</div>
                  </div>
                  <span className="text-[10px] font-mono bg-white/20 backdrop-blur-xs px-2 py-0.5 rounded text-white font-semibold">
                    Silicon Valley Engine
                  </span>
                </div>
              </div>

              {/* StatusNeo Continuous Loop Pill Console */}
              <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-900 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-amber-600" />
                    The AuthenticAI™ Loop
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono font-medium">Interactive Console</span>
                </div>

                <div className="grid grid-cols-4 gap-2 text-center">
                  <button 
                    onClick={() => setActiveStageKey('clarity')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer group/btn ${
                      activeStageKey === 'clarity' 
                        ? 'bg-amber-50 border-amber-400 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 hover:border-amber-400 hover:bg-amber-50/50'
                    }`}
                  >
                    <span className="block text-[10px] font-bold text-slate-900 group-hover/btn:text-amber-800">DESIGN</span>
                    <span className="text-[9px] text-slate-500">Product UX</span>
                  </button>
                  <button 
                    onClick={() => setActiveStageKey('build')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer group/btn ${
                      activeStageKey === 'build' 
                        ? 'bg-blue-50 border-blue-400 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50'
                    }`}
                  >
                    <span className="block text-[10px] font-bold text-slate-900 group-hover/btn:text-blue-800">ENGINEER</span>
                    <span className="text-[9px] text-slate-500">Platforms</span>
                  </button>
                  <button 
                    onClick={() => setActiveStageKey('velocity')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer group/btn ${
                      activeStageKey === 'velocity' 
                        ? 'bg-emerald-50 border-emerald-400 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 hover:border-emerald-400 hover:bg-emerald-50/50'
                    }`}
                  >
                    <span className="block text-[10px] font-bold text-slate-900 group-hover/btn:text-emerald-800">AUTOMATE</span>
                    <span className="text-[9px] text-slate-500">DevSecOps</span>
                  </button>
                  <button 
                    onClick={() => setActiveStageKey('govern')}
                    className={`p-2.5 rounded-xl border transition-all cursor-pointer group/btn ${
                      activeStageKey === 'govern' 
                        ? 'bg-purple-50 border-purple-400 shadow-xs' 
                        : 'bg-slate-50 border-slate-200 hover:border-purple-400 hover:bg-purple-50/50'
                    }`}
                  >
                    <span className="block text-[10px] font-bold text-slate-900 group-hover/btn:text-purple-800">GOVERN</span>
                    <span className="text-[9px] text-slate-500">Scale &amp; Safe</span>
                  </button>
                </div>

                {/* Live Console Output Card */}
                <div className={`p-3 rounded-xl border text-xs flex items-center justify-between ${currentLoop.color}`}>
                  <div>
                    <div className="font-bold">{currentLoop.name}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{currentLoop.subtitle}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="font-mono text-xs font-black">{currentLoop.metric}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-1 text-[11px]">
                  <span className="text-slate-500 font-mono">Continuous Feedback Loop</span>
                  <button
                    onClick={() => onSelectLoop(activeStageKey)}
                    className="text-amber-800 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Inspect Loop Details</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Global Hubs Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="text-slate-900 font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            Global Delivery Hubs:
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <span className="text-slate-900 font-semibold">Silicon Valley HQ</span>
            <span className="hover:text-slate-800 transition-colors">Plano / Dallas, TX</span>
            <span className="hover:text-slate-800 transition-colors">London, UK</span>
            <span className="hover:text-slate-800 transition-colors">Gurugram APAC COE</span>
            <span className="hover:text-slate-800 transition-colors">Tbilisi Hub</span>
            <span className="hover:text-slate-800 transition-colors">Singapore</span>
          </div>
        </div>

      </div>
    </section>
  );
};
