import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  Check, 
  ArrowRight, 
  Building2, 
  Globe, 
  MessageSquare, 
  Calendar,
  Linkedin,
  Youtube,
  Instagram,
  Sparkles,
  Briefcase
} from 'lucide-react';
import { GLOBAL_LOCATIONS } from '../data/statusneoData';

interface ContactViewProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

export const ContactView: React.FC<ContactViewProps> = ({ onOpenConsultation, onNavigate }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>('AI-Led Transformation');
  const [fullName, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [company, setCompany] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [timeline, setTimeline] = useState<string>('Immediate (within 30 days)');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const topics = [
    'AI-Led Transformation & Agentic Workflows',
    'Autonomous Testing & TestCraft™ Demo',
    'Backstage.io Developer Portal Deployment',
    'DevSecOps, Cloud Migration & SRE',
    'Dedicated Global Capability Center (GCC)',
    'Strategic Partnership / Other'
  ];

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Contact StatusNeo</span>
        </div>
      </div>

      {/* Hero Header */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Direct Engineering Consultation
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#111013] leading-[1.15]">
              Let's Build Something Authentic &amp; Relentless.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Whether you are planning an AI-native architecture overhaul, seeking to adopt Backstage.io, or spinning up a dedicated GCC pod, our global practice leads are ready to co-engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Grid (Form + Channels) */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Column: Direct Inquiry Form */}
            <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Inquiry Received</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{fullName}</span> from <span className="font-bold text-slate-900">{company || 'your organization'}</span>. An Executive Practice Lead has been assigned and will connect with you at <span className="font-bold text-slate-900">{email}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Enterprise Inquiry &amp; Discovery</h3>
                    <p className="text-xs text-slate-500 mt-1">
                      Fill out the form below or email us directly at <span className="font-mono text-amber-700 font-bold">reach@statusneo.com</span>
                    </p>
                  </div>

                  {/* Topic Selector */}
                  <div>
                    <label className="block text-slate-800 font-bold mb-2">
                      What can we help you engineer? *
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {topics.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setSelectedTopic(t)}
                          className={`p-3 rounded-xl text-left font-medium transition-all border cursor-pointer ${
                            selectedTopic === t
                              ? 'border-amber-400 bg-amber-50/60 text-slate-900 font-bold shadow-2xs'
                              : 'border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Smith"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Corporate Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john.smith@enterprise.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Company and Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Company / Organization *</label>
                      <input
                        type="text"
                        required
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Global Inc."
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 text-slate-900"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Direct Phone Number</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (214) 919-5557"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 text-slate-900"
                      />
                    </div>
                  </div>

                  {/* Timeline Selector */}
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Desired Project Timeline</label>
                    <select
                      value={timeline}
                      onChange={(e) => setTimeline(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 text-slate-900"
                    >
                      <option>Immediate (within 30 days)</option>
                      <option>Next Quarter (1–3 months)</option>
                      <option>Exploring / R&amp;D Roadmap (3–6 months)</option>
                      <option>Annual Budget Cycle</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Project Scope &amp; Architecture Notes</label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell us about your current technology stack, key bottlenecks, or transformation goals..."
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50 text-slate-900"
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl btn-statusneo font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Direct Inquiry to Practice Leads</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 text-center font-mono">
                    Strict Confidentiality: We execute Mutual NDAs prior to deep architectural reviews.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Direct Channels & Fast Connect */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Strategic Advisory Fast Booking */}
              <div className="p-8 rounded-3xl bg-slate-900 text-white shadow-xl space-y-4">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#FAC400] font-bold block">
                  Fast Track
                </span>
                <h3 className="text-xl font-black tracking-tight">
                  Prefer a 30-Minute Executive Advisory Call?
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Skip the email thread. Schedule directly on our Chief Architecture team's calendar for a live technical whiteboard session.
                </p>
                <button
                  onClick={onOpenConsultation}
                  className="w-full py-3 rounded-xl bg-[#FAC400] hover:bg-[#e5b300] text-black font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Strategy Whiteboard</span>
                </button>
              </div>

              {/* Direct Touchpoints Card */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <h4 className="text-base font-bold text-slate-900">Direct Touchpoints</h4>

                <div className="space-y-4 text-xs">
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-800 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">General &amp; Client Inquiries</div>
                      <a href="mailto:reach@statusneo.com" className="text-amber-800 font-semibold hover:underline">
                        reach@statusneo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-800 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">US Headquarters Direct</div>
                      <a href="tel:+12149195557" className="text-slate-700 hover:text-slate-900 font-mono">
                        +1 (214) 919-5557
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 shrink-0">
                      <Briefcase className="w-4 h-4 text-emerald-700" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Talent &amp; Careers Squad</div>
                      <a href="mailto:careers@statusneo.com" className="text-slate-700 hover:text-slate-900 font-mono">
                        careers@statusneo.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-800 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900">Support &amp; Incident Escalation</div>
                      <span className="text-slate-600">24/7/365 SRE Managed Operations</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <div className="text-xs font-mono uppercase font-bold text-slate-400 mb-3">Connect on Social</div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://www.linkedin.com/company/statusneo/"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.youtube.com/@StatusNeoInc"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                      aria-label="YouTube"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a
                      href="https://www.instagram.com/statusneo__"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900 transition-colors"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Offices Directory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Worldwide Presence
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111013] tracking-tight">
              Our Global Offices &amp; Engineering Hubs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GLOBAL_LOCATIONS.map((loc, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 hover:bg-white transition-all shadow-2xs group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono uppercase font-bold text-amber-800">
                    {loc.isHq ? 'Global HQ' : 'Delivery Hub'}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">
                    {loc.country}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                  {loc.city}
                </h3>
                <div className="text-xs font-semibold text-amber-700 mt-0.5">
                  {loc.type}
                </div>

                <p className="text-xs text-slate-600 mt-2 font-mono leading-relaxed">
                  {loc.address}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
                  <span className="text-amber-700 font-semibold">{loc.email}</span>
                  <span className="text-emerald-700 font-medium">Active Center</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};
