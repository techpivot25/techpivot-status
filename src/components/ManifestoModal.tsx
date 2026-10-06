import React, { useState } from 'react';
import { X, CheckCircle2, Download, Check, Share2, Sparkles, ArrowRight } from 'lucide-react';

interface ManifestoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export const ManifestoModal: React.FC<ManifestoModalProps> = ({ isOpen, onClose, onOpenConsultation }) => {
  const [signed, setSigned] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [signatoryName, setSignatoryName] = useState('');
  const [signatoryEmail, setSignatoryEmail] = useState('');
  const [signatoryRole, setSignatoryRole] = useState('');

  if (!isOpen) return null;

  const tenets = [
    {
      num: '01',
      title: 'Truth in Architecture over Prototype Gen-Wash',
      text: 'We reject fragile wrappers and vanity AI demonstrations. An enterprise system is only as intelligent as the underlying data foundations, clean APIs, and distributed architecture supporting it.'
    },
    {
      num: '02',
      title: 'Transformation is a Loop, Never a Project',
      text: 'Software delivery is not a linear waterfall that ends at a deployment milestone. Intelligent systems evolve continuously through Design, Engineering, Automation, and Governance loops.'
    },
    {
      num: '03',
      title: 'Deterministic Safety & Zero Hallucination Debt',
      text: 'Probabilistic AI outputs must be bounded by deterministic security guardrails, input/output validation, and cryptographic auditability from day zero.'
    },
    {
      num: '04',
      title: 'Engineering Craftsmanship Over Glued Shortcuts',
      text: 'We build systems designed to endure. Robust domain modeling, clean code, event-driven decoupling, and continuous testing outperform hastily assembled point solutions.'
    },
    {
      num: '05',
      title: 'Developer Experience as First-Class Infrastructure',
      text: 'Engineering velocity multiplies when developers have standardized Golden Paths, unified internal catalogs via Spotify Backstage, and autonomous scaffolding.'
    },
    {
      num: '06',
      title: 'Autonomous Quality as Continuous Confidence',
      text: 'Manual regression is an anti-pattern. Quality engineering must be autonomous, self-healing, and continuous — ensuring zero-defect releases at scale.'
    },
    {
      num: '07',
      title: 'Full-Stack Observability from Day Zero',
      text: 'What cannot be traced cannot be governed. OpenTelemetry distributed tracing, token consumption economics, and real-time latency auditing must be embedded in every service.'
    },
    {
      num: '08',
      title: 'Business-Anchored ROI over Metric Vanity',
      text: 'AI transformations must translate into verified commercial margin, operational throughput, and cycle time reduction — never token counts or buzzword compliance.'
    },
    {
      num: '09',
      title: 'Global Capability Centers as Strategic Engines',
      text: 'Offshore hubs must operate as product innovation engines, not low-cost task factories — driven by Silicon Valley engineering discipline and platform ownership.'
    },
    {
      num: '10',
      title: 'Human-in-the-Loop as Moral & Operational Anchor',
      text: 'Autonomous agents exist to empower human capability, not displace human judgment in critical ethical, financial, and clinical decisions.'
    }
  ];

  const handleSign = (e: React.FormEvent) => {
    e.preventDefault();
    if (!signatoryName || !signatoryEmail) return;
    setSigned(true);
  };

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-4xl w-full p-6 sm:p-10 shadow-2xl relative max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-800 font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>StatusNeo Thought Leadership</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-normal text-[#111013] tracking-tight leading-tight">
            The AuthenticAI™ Loop Manifesto
          </h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
            A global declaration for enterprise software leaders: 10 foundational principles establishing how modern organizations build real, responsible, and loop-governed AI systems.
          </p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs font-mono text-slate-500">
            <span className="font-semibold text-slate-800">1,840+ Signatories</span>
            <span>·</span>
            <span>Version 2.4</span>
            <span>·</span>
            <span className="text-amber-700 font-bold">StatusNeo Global Standard</span>
          </div>
        </div>

        {/* The 10 Tenets */}
        <div className="space-y-4 mb-10">
          {tenets.map((t) => (
            <div 
              key={t.num}
              className="p-5 rounded-2xl bg-slate-50 border border-slate-200/90 hover:border-slate-300 hover:bg-white hover:shadow-xs transition-all"
            >
              <div className="flex items-start gap-4">
                <span className="font-mono text-sm font-black text-amber-700 shrink-0 mt-0.5">
                  {t.num}
                </span>
                <div className="space-y-1">
                  <h3 className="text-base font-bold text-slate-900">
                    {t.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {t.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Signatory Action Section */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-amber-50/80 via-slate-50 to-blue-50/50 border border-amber-200/80 mb-6">
          {signed ? (
            <div className="text-center py-4 space-y-2">
              <div className="w-12 h-12 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-600 mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">You Are an Official Signatory</h4>
              <p className="text-xs text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{signatoryName}</strong>. Your commitment to Authentic AI engineering has been recorded in the global register.
              </p>
            </div>
          ) : (
            <div>
              <div className="mb-4">
                <span className="text-xs font-mono uppercase text-amber-800 font-bold tracking-wider">Become a Signatory</span>
                <h4 className="text-lg font-bold text-slate-900 mt-0.5">Endorse the AuthenticAI™ Principles</h4>
                <p className="text-xs text-slate-600 mt-1">Join engineering executives, principal architects, and CTOs committed to responsible, engineered AI transformation.</p>
              </div>

              <form onSubmit={handleSign} className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <input
                  type="text"
                  required
                  value={signatoryName}
                  onChange={(e) => setSignatoryName(e.target.value)}
                  placeholder="Your Full Name *"
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-400"
                />
                <input
                  type="email"
                  required
                  value={signatoryEmail}
                  onChange={(e) => setSignatoryEmail(e.target.value)}
                  placeholder="Work Email *"
                  className="px-3.5 py-2.5 rounded-xl bg-white border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="py-2.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider btn-statusneo shadow-sm cursor-pointer"
                >
                  Sign the Manifesto
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-3">
            <button
              onClick={handleDownload}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider text-slate-700 hover:text-slate-900 border border-slate-300 hover:border-slate-800 bg-white transition-colors cursor-pointer font-semibold"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">PDF Downloaded</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Manifesto PDF</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                onClose();
                onOpenConsultation();
              }}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Apply Loops in Your Enterprise</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
