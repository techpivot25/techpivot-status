import React from 'react';
import { Compass, Code2, Zap, ShieldCheck, ArrowRight } from 'lucide-react';

interface TransformationLoopsProps {
  selectedLoopId?: string;
  onOpenConsultation: () => void;
}

export const TransformationLoops: React.FC<TransformationLoopsProps> = ({
  selectedLoopId,
  onOpenConsultation
}) => {
  const loops = [
    {
      id: 'design',
      name: 'The Design Loop',
      category: 'Product & Experience',
      icon: <Compass className="w-5 h-5 text-amber-600" />,
      items: [
        'Product Management',
        'Product Strategy & Vision',
        'AI Product Design',
        'User Experience & Visual Design',
        'Business Process & Domain Design',
        'API-First & Composable Architecture'
      ]
    },
    {
      id: 'engineer',
      name: 'The Engineer Loop',
      category: 'Product & Platform Engg',
      icon: <Code2 className="w-5 h-5 text-blue-600" />,
      items: [
        'Full-Stack Cloud Engineering',
        'Mobile, Web, Microservices',
        'Backstage Developer Portals',
        'Data & AI/ML Engineering',
        'GenAI Application Development',
        'Enterprise APIs & Service Meshes'
      ]
    },
    {
      id: 'automate',
      name: 'The Automate Loop',
      category: 'DevSecOps, QA, CloudOps',
      icon: <Zap className="w-5 h-5 text-emerald-600" />,
      items: [
        'DevSecOps-as-a-Service',
        'CloudOps & SRE Autonomous Care',
        'Agentic CI/CD Pipelines',
        'Infrastructure as Code (IaC)',
        'Autonomous QA with TestCraft™',
        'AIOps & Incident Intelligence'
      ]
    },
    {
      id: 'govern',
      name: 'The Govern Loop',
      category: 'Governance & GCC Scale',
      icon: <ShieldCheck className="w-5 h-5 text-purple-600" />,
      items: [
        'AI & Algorithmic Governance',
        'Engineering Governance & SLOs',
        'AI Maturity Index Assessments',
        'Continuous Compliance & Audits',
        'MIS & Executive Dashboards',
        'GCC Setup & Managed Scaling'
      ]
    }
  ];

  return (
    <section id="what-we-build" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>What We Build</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
            Design. Engineer. Automate. Govern.
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Not fragmented services. Not an agency menu. A complete operating system for modern enterprise transformation.
          </p>
        </div>

        {/* 4 Loops Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {loops.map((loop) => (
            <div
              key={loop.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-slate-100 border border-slate-200">
                    {loop.icon}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">
                    {loop.category.split(',')[0]}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {loop.name}
                </h3>
                <div className="text-xs text-amber-800 font-semibold mt-0.5">
                  {loop.category}
                </div>

                <ul className="mt-5 space-y-2.5">
                  {loop.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FAC400] mt-1.5 shrink-0" />
                      <span className="font-medium leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-mono text-slate-900 group-hover:text-amber-800 hover:underline uppercase tracking-wider flex items-center gap-1.5 cursor-pointer font-bold"
                >
                  <span>Explore {loop.name.split(' ')[1]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore What We Build</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
