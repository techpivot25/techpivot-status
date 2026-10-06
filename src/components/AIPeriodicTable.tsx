import React, { useState } from 'react';
import { PERIODIC_ELEMENTS, PeriodicElement } from '../data/statusneoData';
import { Sparkles, Search, X, CheckCircle2, ArrowRight } from 'lucide-react';

interface AIPeriodicTableProps {
  onOpenConsultation: () => void;
}

export const AIPeriodicTable: React.FC<AIPeriodicTableProps> = ({ onOpenConsultation }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeElement, setActiveElement] = useState<PeriodicElement | null>(null);

  const categories = [
    { id: 'All', label: 'All Elements', color: 'border-slate-300 text-slate-800' },
    { id: 'Foundation', label: 'Foundation Models', color: 'border-emerald-500 text-emerald-800 bg-emerald-50' },
    { id: 'Agents', label: 'Autonomous Agents', color: 'border-cyan-500 text-cyan-800 bg-cyan-50' },
    { id: 'DevX', label: 'DevX & Copilots', color: 'border-indigo-500 text-indigo-800 bg-indigo-50' },
    { id: 'Orchestration', label: 'Orchestration', color: 'border-purple-500 text-purple-800 bg-purple-50' },
    { id: 'VectorData', label: 'Vector & Data', color: 'border-blue-500 text-blue-800 bg-blue-50' },
    { id: 'Governance', label: 'Governance & Security', color: 'border-amber-500 text-amber-800 bg-amber-50' },
    { id: 'MLOps', label: 'MLOps & Eval', color: 'border-rose-500 text-rose-800 bg-rose-50' },
    { id: 'EdgeUI', label: 'Edge & GenUI', color: 'border-teal-500 text-teal-800 bg-teal-50' }
  ];

  const filteredElements = PERIODIC_ELEMENTS.filter(el => {
    const matchesCat = selectedCategory === 'All' || el.category === selectedCategory;
    const matchesSearch = 
      el.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.symbol.toLowerCase().includes(searchQuery.toLowerCase()) ||
      el.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const getElementColors = (cat: string) => {
    switch (cat) {
      case 'Foundation': return { border: 'border-emerald-300 hover:border-emerald-500', bg: 'bg-emerald-50/60', text: 'text-emerald-800' };
      case 'Agents': return { border: 'border-cyan-300 hover:border-cyan-500', bg: 'bg-cyan-50/60', text: 'text-cyan-800' };
      case 'DevX': return { border: 'border-indigo-300 hover:border-indigo-500', bg: 'bg-indigo-50/60', text: 'text-indigo-800' };
      case 'Orchestration': return { border: 'border-purple-300 hover:border-purple-500', bg: 'bg-purple-50/60', text: 'text-purple-800' };
      case 'VectorData': return { border: 'border-blue-300 hover:border-blue-500', bg: 'bg-blue-50/60', text: 'text-blue-800' };
      case 'Governance': return { border: 'border-amber-300 hover:border-amber-500', bg: 'bg-amber-50/60', text: 'text-amber-800' };
      case 'MLOps': return { border: 'border-rose-300 hover:border-rose-500', bg: 'bg-rose-50/60', text: 'text-rose-800' };
      case 'EdgeUI': return { border: 'border-teal-300 hover:border-teal-500', bg: 'bg-teal-50/60', text: 'text-teal-800' };
      default: return { border: 'border-slate-200 hover:border-slate-400', bg: 'bg-white', text: 'text-slate-800' };
    }
  };

  return (
    <section id="periodic-table" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>StatusNeo Architectural Taxonomy</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
            The AI Periodic Table™
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            The comprehensive enterprise taxonomy mapping modern LLMs, autonomous agents, vector infrastructure, and governance loops into a unified architectural stack.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white border border-slate-200 p-4 rounded-2xl shadow-sm">
          {/* Categories */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap border transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white border-slate-900 font-bold shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:border-slate-400 hover:bg-slate-50'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search elements or tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white"
            />
          </div>
        </div>

        {/* Periodic Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-10">
          {filteredElements.map((el) => {
            const colors = getElementColors(el.category);
            return (
              <div
                key={el.symbol}
                onClick={() => setActiveElement(el)}
                className={`p-4 rounded-xl border ${colors.border} ${colors.bg} hover:shadow-md hover:-translate-y-0.5 transition-all cursor-pointer relative group flex flex-col justify-between min-h-[140px]`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-slate-500 font-semibold">{el.number}</span>
                  <span className="text-[10px] font-mono uppercase text-slate-500 line-clamp-1">{el.category}</span>
                </div>

                <div className="my-2">
                  <div className={`font-mono text-2xl font-black ${colors.text}`}>
                    {el.symbol}
                  </div>
                  <div className="text-xs font-bold text-slate-900 line-clamp-1 mt-0.5">
                    {el.name}
                  </div>
                </div>

                <div className="text-[11px] text-slate-600 line-clamp-2 leading-tight">
                  {el.description}
                </div>
              </div>
            );
          })}
        </div>

        {/* Element Modal / Detail Drawer */}
        {activeElement && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setActiveElement(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-amber-50 border-2 border-amber-300 flex flex-col items-center justify-center shadow-sm">
                  <span className="text-[10px] font-mono text-slate-500">{activeElement.number}</span>
                  <span className="font-mono text-2xl font-black text-amber-900">{activeElement.symbol}</span>
                </div>
                <div>
                  <span className="text-xs font-mono uppercase text-amber-800 font-bold">{activeElement.category}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-0.5">{activeElement.name}</h3>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-700 leading-relaxed mb-6">
                <p>{activeElement.description}</p>
                <div>
                  <div className="font-mono uppercase text-slate-900 font-bold mb-2">Key Enterprise Use Cases:</div>
                  <ul className="space-y-1.5">
                    {activeElement.useCases.map((uc, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{uc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  onClick={() => setActiveElement(null)}
                  className="px-4 py-2 rounded-full text-xs font-semibold text-slate-700 hover:bg-slate-100"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setActiveElement(null);
                    onOpenConsultation();
                  }}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-1.5"
                >
                  <span>Integrate into Stack</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
