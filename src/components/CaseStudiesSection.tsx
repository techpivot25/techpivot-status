import React, { useState } from 'react';
import { CASE_STUDIES, CaseStudy } from '../data/statusneoData';
import { Briefcase, TrendingUp, ArrowRight, X, CheckCircle2, Download, Check } from 'lucide-react';

interface CaseStudiesProps {
  onOpenConsultation: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesProps> = ({ onOpenConsultation }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedStudy, setSelectedStudy] = useState<CaseStudy | null>(null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  // Extend case studies with airline and telecom stories for full coverage
  const allCaseStudies: CaseStudy[] = [
    ...CASE_STUDIES,
    {
      client: 'Major Transatlantic Star Alliance Airline',
      sector: 'Airlines & Aviation',
      challenge: 'Peak load flight booking surges resulting in checkout timeouts, inventory desync, and sluggish flight crew scheduling.',
      solution: 'Re-architected seat booking microservices with event-driven Kafka caching, autonomous TestCraft load validation, and dynamic disruption recovery.',
      impact: '99.99% Core API availability during holiday surge; checkout latency dropped from 3.8s to 420ms.',
      tag: 'Aviation'
    },
    {
      client: 'Tier-1 Transatlantic Telecom Operator',
      sector: 'Telecom & 5G Infrastructure',
      challenge: 'Over 180 fragmented engineering teams duplicating infrastructure tooling, with 4-hour mean time to resolve (MTTR) on network alarms.',
      solution: 'Deployed Backstage-led DevX platform unifying internal developer templates with AIOps self-healing incident triage and automated runbooks.',
      impact: '40% Drop in incident resolution MTTR; 85% developer satisfaction score across 2,400+ engineers.',
      tag: 'Telecom & DevX'
    }
  ];

  const sectors = ['All', 'Financial Services & Banking', 'Healthcare & Life Sciences', 'Retail & Supply Chain', 'Airlines & Aviation', 'Telecom & 5G Infrastructure'];

  const filteredStudies = activeFilter === 'All' 
    ? allCaseStudies 
    : allCaseStudies.filter(c => c.sector === activeFilter || c.tag.includes(activeFilter.split(' ')[0]));

  const handleDownload = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 2500);
  };

  return (
    <section id="case-studies" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Proven Enterprise Outcomes</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
            Case Studies: Real Impact at Scale
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            How Fortune 500 enterprises partner with StatusNeo to modernize distributed architectures, automate compliance, and deploy AI systems safely.
          </p>
        </div>

        {/* Sector Filter Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 scrollbar-none">
          {sectors.map((sec) => (
            <button
              key={sec}
              onClick={() => setActiveFilter(sec)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === sec
                  ? 'bg-slate-900 text-white shadow-xs'
                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
              }`}
            >
              {sec}
            </button>
          ))}
        </div>

        {/* Case Studies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStudies.map((study, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-amber-800 uppercase tracking-wider font-bold truncate max-w-[200px]">
                    {study.sector.split('&')[0]}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-700 border border-slate-200 font-semibold shrink-0">
                    {study.tag}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {study.client}
                </h3>

                <div className="space-y-3 text-xs leading-relaxed">
                  <div>
                    <span className="font-mono text-slate-500 uppercase tracking-wider block text-[10px] font-bold">The Challenge</span>
                    <p className="text-slate-600 mt-1 line-clamp-3">{study.challenge}</p>
                  </div>

                  <div>
                    <span className="font-mono text-slate-500 uppercase tracking-wider block text-[10px] font-bold">The StatusNeo Solution</span>
                    <p className="text-slate-600 mt-1 line-clamp-3">{study.solution}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 space-y-3">
                <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-800 font-bold flex items-center gap-1.5">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Validated Impact</span>
                  </div>
                  <div className="text-xs font-semibold text-emerald-950 mt-1">
                    {study.impact}
                  </div>
                </div>

                <button
                  onClick={() => setSelectedStudy(study)}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 font-bold transition-colors cursor-pointer group-hover:text-amber-800"
                >
                  <span>Request Full Architecture Spec</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-bold text-slate-900">Have a Mission-Critical Architecture Challenge?</h4>
            <p className="text-xs text-slate-600 mt-1">Our Principal Architects in Dallas, London, and Gurugram can provide an architectural assessment of your stack.</p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md shrink-0"
          >
            <span>Schedule Architecture Review</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedStudy(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-800 font-bold uppercase">
                <span>{selectedStudy.sector}</span>
                <span>·</span>
                <span>{selectedStudy.tag}</span>
              </div>

              <h3 className="text-2xl font-black text-slate-900">
                {selectedStudy.client}
              </h3>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-mono text-slate-500 uppercase font-bold">The Challenge &amp; Bottleneck</span>
                <p className="text-slate-700 leading-relaxed font-normal">{selectedStudy.challenge}</p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <span className="font-mono text-slate-500 uppercase font-bold">The StatusNeo Solution &amp; Architecture</span>
                <p className="text-slate-700 leading-relaxed font-normal">{selectedStudy.solution}</p>
              </div>

              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-300 space-y-1 text-xs">
                <span className="font-mono text-emerald-800 uppercase font-bold flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4" />
                  Validated Business Impact
                </span>
                <p className="text-emerald-950 font-semibold leading-relaxed">{selectedStudy.impact}</p>
              </div>

              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  onClick={handleDownload}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 border border-slate-300 bg-white cursor-pointer font-semibold flex items-center justify-center gap-1.5"
                >
                  {downloadSuccess ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Spec Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Spec (PDF)</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => {
                    setSelectedStudy(null);
                    onOpenConsultation();
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center justify-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span>Discuss Similar Transformation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
