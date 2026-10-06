import React from 'react';
import { ArrowRight } from 'lucide-react';

interface PartnershipsSectionProps {
  onOpenConsultation: () => void;
}

export const PartnershipsSection: React.FC<PartnershipsSectionProps> = ({ onOpenConsultation }) => {
  const partners = [
    { name: 'Amazon Web Services', category: 'Cloud & GenAI' },
    { name: 'Google Cloud', category: 'Vertex AI & Cloud' },
    { name: 'Microsoft Azure', category: 'Enterprise OpenAI' },
    { name: 'Snowflake', category: 'Data & Lakehouse' },
    { name: 'Databricks', category: 'AI & Lakehouse' },
    { name: 'Backstage.io', category: 'Developer Portals' },
    { name: 'HashiCorp', category: 'Terraform & Vault' },
    { name: 'Salesforce', category: 'CRM & Einstein AI' },
    { name: 'Glean', category: 'Enterprise Search' },
    { name: 'Broadcom', category: 'Enterprise Agile' }
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Partnerships</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
            Built with the World’s Leading Platforms
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            We architect, co-manage, and co-sell across:&nbsp;
            <span className="text-amber-800 font-mono font-semibold">
              Cloud ✦ Data ✦ Automation ✦ DevOps ✦ Workflows ✦ Developer Experience ✦ AI API Ecosystems
            </span>
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-10">
          {partners.map((p, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">{p.category}</div>
              <div className="font-bold text-sm text-slate-900 mt-3">{p.name}</div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div>
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>See Partner-Led Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
