import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

interface GCCSectionProps {
  onOpenConsultation: () => void;
}

export const GCCSection: React.FC<GCCSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold">
              <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
              <span>A Global Advantage</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
              GCCs Built for the AI-Native Era
            </h2>

            <p className="text-base text-slate-600 leading-relaxed max-w-xl font-normal">
              We help global enterprises build, operate, and scale Global Capability Centers (GCCs) that deliver authentic velocity:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Platform-engineering ready</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Secure &amp; audit compliant</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Operated with Silicon Valley discipline</span>
              </div>
              <div className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-200 text-xs font-semibold text-slate-800 shadow-2xs">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>High-velocity &amp; Loop-governed</span>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Build Your GCC</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Card: Your GCC Becomes */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-lg space-y-5">
              <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-wider block">
                Transformational Impact
              </span>
              <h3 className="text-xl font-bold text-slate-900">
                Your GCC becomes:
              </h3>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                  <span>A product engineering engine</span>
                  <span className="text-xs font-mono text-amber-700 font-bold">01</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                  <span>An AI &amp; innovation hub</span>
                  <span className="text-xs font-mono text-amber-700 font-bold">02</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                  <span>An autonomous platform center</span>
                  <span className="text-xs font-mono text-amber-700 font-bold">03</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm font-bold text-slate-900 flex items-center justify-between hover:bg-slate-100/70 transition-colors">
                  <span>A delivery velocity accelerator</span>
                  <span className="text-xs font-mono text-amber-700 font-bold">04</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
