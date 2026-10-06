import React, { useState } from 'react';
import { ArrowRight, Calendar, Sparkles } from 'lucide-react';

interface WhitepapersProps {
  onOpenConsultation: () => void;
  onOpenManifesto?: () => void;
}

export const WhitepapersInsights: React.FC<WhitepapersProps> = ({ onOpenConsultation, onOpenManifesto }) => {
  const articles = [
    {
      title: "Surprising Ways to Master LLM Observability: A Practical Guide",
      author: "Arka Nath Roy",
      date: "September 11, 2026",
      readTime: "15 min read",
      category: "LLM Observability"
    },
    {
      title: "Authentic AI: Why the Future Belongs to Systems That Tell the Truth About Themselves",
      author: "Aviral Dwivedi",
      date: "July 24, 2026",
      readTime: "7 min read",
      category: "AuthenticAI™"
    },
    {
      title: "The New SDLC: How Software Development Changes When AI Joins the Team",
      author: "Aviral Dwivedi",
      date: "July 22, 2026",
      readTime: "7 min read",
      category: "AI SDLC"
    },
    {
      title: "The GCC of the Future: From Offshore Execution to Enterprise Transformation",
      author: "Aviral Dwivedi",
      date: "December 19, 2025",
      readTime: "6 min read",
      category: "GCC Strategy"
    },
    {
      title: "Engineering in the Age of GenAI: What Changes, What Doesn’t, and What Breaks",
      author: "Aviral Dwivedi",
      date: "December 17, 2025",
      readTime: "8 min read",
      category: "Platform Engineering"
    },
    {
      title: "Backstage × AI: Redefining Developer Experience for the Modern Enterprise",
      author: "Aviral Dwivedi",
      date: "December 17, 2025",
      readTime: "8 min read",
      category: "DevX & Backstage"
    }
  ];

  return (
    <section id="insights" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Insights */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Insights &amp; Publications</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight leading-tight">
            Ideas Shaping the Future of Enterprise Engineering
          </h2>
        </div>

        {/* 6 Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-slate-300 hover:bg-white hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-500">
                  <span className="text-amber-700 font-bold">{art.category}</span>
                  <span>{art.readTime}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors leading-snug">
                  {art.title}
                </h3>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-600 font-mono">
                <div>Posted by <span className="text-slate-900 font-semibold">{art.author}</span></div>
                <div className="text-[11px] text-slate-500 mt-0.5">{art.date}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <button
            onClick={onOpenConsultation}
            className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>Explore All Insights</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Events & Community Moments */}
        <div className="mb-20 p-8 sm:p-10 rounded-2xl bg-slate-50 border border-slate-200 shadow-2xs">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-amber-800 font-bold mb-2">
            <span>Events &amp; Community Moments</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
            We Build In Public. And With Our Community.
          </h3>
          <p className="text-xs text-slate-600 mt-1 mb-6">
            Engage with our core engineering practitioners across global conferences and technical keynotes.
          </p>

          <div className="p-6 rounded-xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-amber-700 font-bold">June 9, 2026</span>
                <h4 className="text-base font-bold text-slate-900 mt-0.5">
                  StatusNeo at ET Edge GCC Summit 2026
                </h4>
                <p className="text-xs text-slate-600 mt-0.5">Keynote and executive panel on AI-native capability centers.</p>
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo-dark cursor-pointer shrink-0 shadow-2xs"
            >
              View All Events
            </button>
          </div>
        </div>

        {/* Thought Leadership: The AuthenticAI™ Loop Manifesto */}
        <div id="manifesto" className="rounded-2xl bg-gradient-to-r from-amber-50/70 via-slate-50 to-blue-50/50 border border-amber-200/80 p-8 sm:p-12 relative overflow-hidden shadow-sm">
          <div className="max-w-3xl space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
              <span className="text-xs font-mono text-amber-800 uppercase tracking-widest block font-bold">
                Thought Leadership: The AuthenticAI™ Loop Manifesto
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              The Principles Behind Authentic, Responsible, Loop-Native AI
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed font-normal">
              Read our declaration of independence from AI hype, ungrounded wrappers, and brittle pipelines. Discover how the world’s most ambitious enterprises build systems that endure.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  if (onOpenManifesto) onOpenManifesto();
                  else onOpenConsultation();
                }}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Sparkles className="w-4 h-4" />
                <span>Read the Manifesto</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => {
                  if (onOpenManifesto) onOpenManifesto();
                  else onOpenConsultation();
                }}
                className="px-5 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo-dark cursor-pointer shadow-2xs"
              >
                <span>Become a Signatory</span>
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
