import React from 'react';
import { GLOBAL_LOCATIONS } from '../data/statusneoData';
import { Globe, MapPin, Mail, Phone, Building2, CheckCircle2, ArrowRight } from 'lucide-react';

interface GlobalLocationsProps {
  onOpenConsultation: () => void;
}

export const GlobalLocationsSection: React.FC<GlobalLocationsProps> = ({ onOpenConsultation }) => {
  return (
    <section id="locations" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-800 font-bold mb-3">
            <Globe className="w-4 h-4 text-amber-600" />
            <span>Global Delivery Network</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
            Worldwide Presence &amp; Centers of Excellence
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Headquartered in Dallas, Texas with strategic engineering hubs across North America, Europe, and Asia-Pacific.
          </p>
        </div>

        {/* Global Hubs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {GLOBAL_LOCATIONS.map((loc, idx) => (
            <div
              key={idx}
              className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
                loc.isHq 
                  ? 'bg-white border-amber-300 shadow-md ring-1 ring-amber-100' 
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs hover:shadow-md'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs uppercase tracking-wider text-amber-800 font-bold flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-amber-600" />
                    {loc.isHq ? 'Global Corporate HQ' : 'Regional Delivery Hub'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">{loc.country}</span>
                </div>

                <h3 className="text-xl font-bold text-slate-900">
                  {loc.city}
                </h3>
                <div className="text-xs text-amber-700 font-semibold mt-0.5">
                  {loc.type}
                </div>

                <div className="mt-4 space-y-2 text-xs text-slate-600">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mt-0.5 shrink-0" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <a href={`mailto:${loc.email}`} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                      {loc.email}
                    </a>
                  </div>
                  {loc.phone && (
                    <div className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <a href={`tel:${loc.phone}`} className="text-slate-700 hover:text-slate-900 transition-colors font-medium">
                        {loc.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-mono text-slate-500">Active Delivery 24/7</span>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-mono text-slate-900 hover:text-amber-800 uppercase tracking-wider flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span>Connect with Hub</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Global Capability Centers (GCC) Setup & Scale Callout */}
        <div className="rounded-2xl bg-white border border-slate-200 p-8 sm:p-10 relative overflow-hidden shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold">
                StatusNeo GCC Acceleration
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                GCC Setup &amp; Scale Services (Global Capability Centers)
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed font-normal">
                Establish high-performance capability centers in India and Eastern Europe using our turnkey Build-Operate-Transfer (BOT) model. From legal entities and physical infrastructure to hiring elite platform talent and establishing DevSecOps governance.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3">
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Turnkey BOT Model</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>40-60% Cost Arbitrage</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>ISO &amp; SOC2 Compliant</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Request GCC Playbook</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
