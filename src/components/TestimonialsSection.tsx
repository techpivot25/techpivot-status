import React from 'react';
import { Star, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  onOpenConsultation: () => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({ onOpenConsultation }) => {
  const industries = [
    'BANKING',
    'AIRLINES',
    'TELECOM',
    'HOSPITALITY',
    'REAL ESTATE',
    'RETAIL',
    'AUTOMOBILES',
    'GAMING'
  ];

  const testimonials = [
    {
      quote: "StatusNeo built the most authentic AI-driven engineering model we’ve ever seen.",
      author: "CTO",
      organization: "Global Digital Bank"
    },
    {
      quote: "Their loops transformed our delivery velocity and cut release cycle times by 40%.",
      author: "VP Engineering",
      organization: "Tier-1 Telecom Operator"
    },
    {
      quote: "Our GCC runs like a Silicon Valley product shop from day one with complete governance.",
      author: "CHRO & Managing Director",
      organization: "Enterprise Fintech"
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Proof: Trusted by Global Leaders */}
        <div className="mb-20 pb-16 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight mb-8">
            Trusted by Global Leaders
          </h2>

          {/* Industry Sectors Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {industries.map((ind, i) => (
              <div 
                key={i} 
                className="p-4 rounded-xl bg-white border border-slate-200 text-xs font-mono font-bold text-slate-700 hover:text-slate-900 hover:border-slate-400 hover:shadow-2xs transition-all shadow-2xs"
              >
                {ind}
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials: What Industry Leaders Say */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-10">
            What Industry Leaders Say
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-base text-slate-800 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <div className="font-bold text-slate-900 text-sm">{t.author}</div>
                  <div className="text-xs text-amber-700 font-semibold">{t.organization}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <button
              onClick={onOpenConsultation}
              className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>See All Testimonials</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Awards: Recognized for Excellence */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <span className="text-xs font-mono text-amber-800 font-bold uppercase tracking-wider block">Awards</span>
            <h3 className="text-2xl font-bold text-slate-900 mt-1">Recognized for Excellence</h3>
            <p className="text-xs text-slate-600 mt-1">Great Place to Work® certified across North America, EMEA, and APAC hubs.</p>
          </div>

          <button
            onClick={onOpenConsultation}
            className="px-5 py-3 text-xs font-bold uppercase tracking-wider btn-statusneo-dark cursor-pointer shrink-0 shadow-2xs"
          >
            <span>View Awards &amp; Recognitions</span>
          </button>
        </div>

      </div>
    </section>
  );
};
