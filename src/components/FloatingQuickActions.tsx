import React, { useState } from 'react';
import { Sparkles, Gauge, Calendar, ChevronUp, X, ArrowRight, Upload, Bot } from 'lucide-react';

interface FloatingQuickActionsProps {
  onOpenConsultation: () => void;
  onOpenMaturityScan: () => void;
  onOpenManifesto: () => void;
}

export const FloatingQuickActions: React.FC<FloatingQuickActionsProps> = ({
  onOpenConsultation,
  onOpenMaturityScan,
  onOpenManifesto
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Quick Action Menu */}
      {isOpen && (
        <div className="mb-3 p-3 bg-white/95 backdrop-blur-md border border-slate-200/90 rounded-2xl shadow-xl w-64 space-y-2 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-2 border-b border-slate-100 text-xs font-mono text-slate-500 font-bold uppercase tracking-wider">
            <span>Quick Actions</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 rounded text-slate-400 hover:text-slate-800 hover:bg-slate-100"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new Event('open-gemini-chat'));
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-sky-50/80 border border-sky-200 hover:bg-sky-100/70 transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#008FD5] flex items-center justify-center text-white shadow-2xs">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-[#008FD5]">TechPivot Gemini AI</div>
                <div className="text-[10px] text-slate-600">Live multi-turn consultant</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenMaturityScan();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700">
                <Gauge className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-emerald-700">AI Maturity Scan</div>
                <div className="text-[10px] text-slate-500">Benchmark your SDLC</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenManifesto();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800">
                <Sparkles className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-amber-700">The Manifesto</div>
                <div className="text-[10px] text-slate-500">AuthenticAI™ principles</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              window.dispatchEvent(new Event('open-logo-manager'));
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl hover:bg-slate-100 transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-700">
                <Upload className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900 group-hover:text-blue-700">Replace / Upload Logo</div>
                <div className="text-[10px] text-slate-500">Custom image or TechPivot</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={() => {
              setIsOpen(false);
              onOpenConsultation();
            }}
            className="w-full flex items-center justify-between p-2.5 rounded-xl bg-amber-50/80 border border-amber-200 hover:bg-amber-100/70 transition-colors text-left group cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-[#FAC400] flex items-center justify-center text-black font-bold">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Talk to Leadership</div>
                <div className="text-[10px] text-slate-600">Executive AI advisory</div>
              </div>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {/* Main Trigger Pill */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-slate-900 text-white hover:bg-black shadow-xl border border-slate-700 text-xs font-bold tracking-wide transition-all cursor-pointer hover:scale-105 active:scale-95 group"
        aria-label="Toggle Quick Navigation"
      >
        <span className="w-2 h-2 rounded-full bg-[#FAC400] animate-pulse" />
        <span>AuthenticAI™ Hub</span>
        <ChevronUp className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
