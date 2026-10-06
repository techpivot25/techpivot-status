import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface StatusNeoPromiseProps {
  onOpenConsultation: () => void;
  onOpenMaturityScan: () => void;
}

export const StatusNeoPromise: React.FC<StatusNeoPromiseProps> = ({
  onOpenConsultation,
  onOpenMaturityScan
}) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>The StatusNeo Promise</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
            AI That’s Authentic. Engineering That’s Relentless. Transformation That’s Real.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Everyone is talking about AI. Only a handful are building it responsibly, with integrity, engineering rigor, and clarity.
          </p>
        </div>

        {/* Feature Box: What Is AuthenticAI™? */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 lg:p-12 shadow-md relative overflow-hidden">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-700 font-bold">Core Philosophy</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
              What Is AuthenticAI™?
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              StatusNeo is the company that created the <strong className="text-slate-900 font-semibold">AuthenticAI™</strong> philosophy – AI that is:
            </p>
          </div>

          {/* 5 Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="text-xs font-mono text-amber-700 uppercase font-bold">01</div>
              <div className="text-base font-bold text-slate-900 mt-1">Engineered, not assembled</div>
              <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">Built with architectural depth, not glued third-party wrappers.</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="text-xs font-mono text-amber-700 uppercase font-bold">02</div>
              <div className="text-base font-bold text-slate-900 mt-1">Responsible, not reckless</div>
              <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">Grounded in security posture, data privacy, and deterministic rules.</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="text-xs font-mono text-amber-700 uppercase font-bold">03</div>
              <div className="text-base font-bold text-slate-900 mt-1">Business-driven, not demo-driven</div>
              <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">Targeting verifiable ROI, operational margin, and release speed.</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-2xs transition-all">
              <div className="text-xs font-mono text-amber-700 uppercase font-bold">04</div>
              <div className="text-base font-bold text-slate-900 mt-1">Loop-powered, not project-bound</div>
              <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">Continuously improving systems that learn, adapt, and self-heal.</div>
            </div>

            <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:shadow-2xs transition-all sm:col-span-2 lg:col-span-2">
              <div className="text-xs font-mono text-amber-700 uppercase font-bold">05</div>
              <div className="text-base font-bold text-slate-900 mt-1">Observable, governed, ethical, and true</div>
              <div className="text-xs text-slate-600 mt-1.5 leading-relaxed">Real-time OpenTelemetry tracing, audit-proof lineage, and zero hallucination debt.</div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-600 max-w-xl">
              We bring this AuthenticAI™ mindset into every engagement, every architecture, every line of code, and every loop.
            </p>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3 text-xs font-bold uppercase tracking-wider btn-statusneo shrink-0 flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Explore AuthenticAI™</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
