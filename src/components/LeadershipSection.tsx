import React, { useState } from 'react';
import { LEADERSHIP_TEAM, Leader } from '../data/statusneoData';
import { Users, MapPin, X, ArrowRight, Linkedin } from 'lucide-react';

interface LeadershipSectionProps {
  onOpenConsultation: () => void;
}

export const LeadershipSection: React.FC<LeadershipSectionProps> = ({ onOpenConsultation }) => {
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  return (
    <section id="leadership" className="py-20 bg-white border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-14">
          <div className="lg:col-span-8">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-wider uppercase text-amber-800 font-bold mb-3">
              <Users className="w-4 h-4 text-amber-600" />
              <span>World-Class Engineering Leadership</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
              Led by Architects, Engineers &amp; Practitioners
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
              StatusNeo was founded by seasoned enterprise technology leaders who have spent decades engineering mission-critical architectures for Fortune 500 organizations.
            </p>
          </div>

          <div className="lg:col-span-4 flex lg:justify-end">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo shadow-md cursor-pointer"
            >
              <span>Connect with Leadership</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Marquee Leadership Banner Card */}
        <div className="mb-14 rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 aspect-[16/9] lg:aspect-auto overflow-hidden relative">
              <img
                src="/src/assets/images/leadership_collaboration_1790617391886.jpg"
                alt="StatusNeo Global Executive Leadership Team"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-900/10 to-transparent" />
            </div>

            <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-white">
              <span className="text-xs font-mono text-amber-700 uppercase tracking-wider font-bold">
                Founder&apos;s Conviction
              </span>
              <blockquote className="text-base sm:text-lg text-slate-900 font-medium leading-relaxed italic">
                &ldquo;Enterprises cannot afford AI experimentation that evaporates in production. True transformation requires marrying frontier AI intelligence with ruthless engineering discipline.&rdquo;
              </blockquote>
              <div className="pt-2">
                <div className="font-bold text-slate-900 text-sm">Karan Nangru</div>
                <div className="text-xs text-slate-500 font-medium">Founder &amp; CEO, StatusNeo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {LEADERSHIP_TEAM.map((leader, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${leader.avatarBg} border border-slate-200 flex items-center justify-center text-white text-lg font-bold shadow-xs`}>
                    {leader.initials}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-mono">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{leader.region.split(',')[0]}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-800 transition-colors">
                  {leader.name}
                </h3>
                <div className="text-xs font-semibold text-amber-700 mt-0.5">
                  {leader.role}
                </div>

                <p className="mt-3 text-xs text-slate-600 leading-relaxed line-clamp-3">
                  {leader.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => setSelectedLeader(leader)}
                  className="text-xs font-mono text-slate-900 hover:text-amber-800 uppercase tracking-wider flex items-center gap-1 cursor-pointer font-bold"
                >
                  <span>View Profile</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
                <a
                  href={`https://www.linkedin.com/search/results/all/?keywords=${encodeURI(leader.name + ' StatusNeo')}`}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label={`${leader.name} LinkedIn Profile`}
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Leader Bio Modal */}
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white border border-slate-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative">
              <button
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-900 hover:bg-slate-100"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-5">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${selectedLeader.avatarBg} border border-slate-200 flex items-center justify-center text-white text-2xl font-bold shadow-md`}>
                  {selectedLeader.initials}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">
                    {selectedLeader.name}
                  </h3>
                  <div className="text-xs font-semibold text-amber-700">
                    {selectedLeader.role}
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-500 font-mono mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-600" />
                    <span>{selectedLeader.region}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>{selectedLeader.bio}</p>
                <p className="text-xs text-slate-500">
                  Leading strategic engagements across enterprise AI adoption, digital operating models, and multi-region transformation practices for StatusNeo.
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => {
                    setSelectedLeader(null);
                    onOpenConsultation();
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo shadow-sm"
                >
                  <span>Schedule Briefing</span>
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
