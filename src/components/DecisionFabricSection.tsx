import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface DecisionFabricProps {
  onOpenConsultation: () => void;
  onOpenMaturityScan: () => void;
}

export const DecisionFabricSection: React.FC<DecisionFabricProps> = ({
  onOpenConsultation,
  onOpenMaturityScan
}) => {
  return (
    <section id="enterprise-os" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
              <span>Our Signature Product</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
              The Enterprise OS Fabric™: AI-Native by Design
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl">
              It becomes the central nervous system of your engineering organization – unifying developer experience, automated quality gates, and AI-native delivery.
            </p>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 shadow-2xs">
              <span className="text-xs font-mono text-amber-800 uppercase font-bold block">An integrated fabric that powers:</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs text-slate-800">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">GenAI-enabled SDLC</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Agentic Engineering Workflows</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Intelligent CI/CD &amp; QA</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">AIOps &amp; Autonomous Ops</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Executive-level Observability</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold">Loop-based Governance</span>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Learn the Enterprise OS Fabric™</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenMaturityScan}
                className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo-dark cursor-pointer shadow-2xs"
              >
                <span>Assess Architecture Readiness</span>
              </button>
            </div>
          </div>

          {/* Visual Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg relative group">
              <div className="aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/enterprise_os_fabric_1790617405371.jpg"
                  alt="StatusNeo Enterprise OS Fabric"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-5 bg-white border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-900 font-bold">Spotify Backstage DevX Fabric</span>
                  <span className="text-[10px] font-mono text-slate-500 font-medium">Standardized Golden Paths</span>
                </div>
                <div className="text-xs text-slate-600">
                  Pre-configured plugins, catalog entities, software templates, and autonomous agent loops for modern enterprise engineering.
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
