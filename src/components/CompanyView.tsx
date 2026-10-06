import React, { useState } from 'react';
import { LeadershipSection } from './LeadershipSection';
import { GlobalLocationsSection } from './GlobalLocationsSection';
import { ShieldCheck, Target, Heart, Award, ArrowRight, Sparkles, Building2, CheckCircle2 } from 'lucide-react';

interface CompanyViewProps {
  onOpenConsultation: () => void;
  onNavigate?: (view: string) => void;
}

export const CompanyView: React.FC<CompanyViewProps> = ({ onOpenConsultation, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'story' | 'leadership' | 'locations'>('all');

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <button 
            onClick={() => onNavigate ? onNavigate('home') : window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">About StatusNeo</span>
        </div>
      </div>

      {/* Sub-nav Tab Bar */}
      <div className="bg-white border-b border-slate-200 sticky top-20 z-20 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between overflow-x-auto py-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              All Overview
            </button>
            <button
              onClick={() => setActiveTab('story')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'story'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Our Story &amp; Values
            </button>
            <button
              onClick={() => setActiveTab('leadership')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'leadership'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Leadership Squad
            </button>
            <button
              onClick={() => setActiveTab('locations')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'locations'
                  ? 'bg-slate-900 text-white'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              Global Hubs &amp; GCCs
            </button>
          </div>

          <button
            onClick={onOpenConsultation}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 cursor-pointer"
          >
            <span>Connect with Founders</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Story & Mission Hero */}
      {(activeTab === 'all' || activeTab === 'story') && (
        <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold tracking-wide mb-4">
                <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                Our Story &amp; Mission
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#111013] leading-[1.15]">
                Engineering with Speed, Precision &amp; Truth.
              </h1>
              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                StatusNeo was founded in 2020 on a simple conviction: enterprise transformation should not be an endless cycle of slide decks, vanity metrics, and fragile prototypes. 
                We are a craft-led, AI-optimized collective of software architects, platform engineers, and machine learning researchers building production software that scales.
              </p>
            </div>

            {/* Core Values 4-Grid */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 mb-4">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Truth in Engineering</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We measure impact in production availability, cycle time reduction, and verified business economics — never vanity AI demos.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-blue-100 border border-blue-300 flex items-center justify-center text-blue-800 mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Enterprise Realism</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  We meet enterprises where they are, modernizing complex legacy stacks and establishing deterministic security guardrails.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 border border-indigo-300 flex items-center justify-center text-indigo-800 mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Craftsmanship</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Clean architectures, domain-driven design, and robust platform engineering that scales cleanly across hundreds of developers.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-800 mb-4">
                  <Heart className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">People &amp; Empowerment</h3>
                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                  Great Place to Work certified across global hubs. We empower cross-functional teams with continuous learning and autonomous ownership.
                </p>
              </div>
            </div>

            {/* Founding Milestones Banner */}
            <div className="mt-12 p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">2020</div>
                <div className="text-xs text-slate-500 mt-1">Founded in Silicon Valley</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">10+</div>
                <div className="text-xs text-slate-500 mt-1">Global Delivery Hubs</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">94%+</div>
                <div className="text-xs text-slate-500 mt-1">Great Place to Work Index</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">500+</div>
                <div className="text-xs text-slate-500 mt-1">Senior Engineers &amp; AI Architects</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Leadership Section */}
      {(activeTab === 'all' || activeTab === 'leadership') && (
        <LeadershipSection onOpenConsultation={onOpenConsultation} />
      )}

      {/* Global Locations Section */}
      {(activeTab === 'all' || activeTab === 'locations') && (
        <GlobalLocationsSection onOpenConsultation={onOpenConsultation} />
      )}
    </div>
  );
};
