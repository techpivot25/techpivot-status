import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ReadyToBuildBannerProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

export const ReadyToBuildBanner: React.FC<ReadyToBuildBannerProps> = ({
  onOpenConsultation,
  onNavigate
}) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="p-8 sm:p-12 lg:p-16 rounded-3xl bg-white border border-slate-200 text-center space-y-6 relative overflow-hidden shadow-lg">
          <div className="w-12 h-12 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mx-auto">
            <Sparkles className="w-6 h-6" />
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Build Something Authentic?
          </h3>

          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Move beyond generative AI prototypes to production systems engineered for continuous velocity, security, and truth.
          </p>

          {/* 4 Call to Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Start Your AI-Native Transformation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('company')}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo-dark cursor-pointer shadow-2xs"
            >
              <span>Build Your GCC</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo-outline cursor-pointer shadow-2xs"
            >
              <span>Explore AuthenticAI™</span>
            </button>

            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-900 cursor-pointer font-semibold"
            >
              <span>Talk to StatusNeo Leadership</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
