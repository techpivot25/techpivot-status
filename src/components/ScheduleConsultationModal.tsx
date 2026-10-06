import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ScheduleConsultationModal: React.FC<ConsultationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    phone: '',
    serviceInterest: 'AI-Native Transformation Advisory',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.workEmail)) {
      errs.workEmail = 'Valid business email is required';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white border border-slate-200 rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Advisory Request Received
            </h3>

            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. A Principal AI Architect from StatusNeo will review your inquiry ({formData.serviceInterest}) and reach out to <strong className="text-amber-800">{formData.workEmail}</strong> within 1 business day.
            </p>

            <div className="pt-4">
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-black btn-statusneo shadow-md"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-mono text-amber-800 font-bold uppercase tracking-wider">
                StatusNeo Executive Advisory
              </span>
              <h3 className="text-xl font-normal text-[#111013] mt-1">
                Schedule a Strategic AI Advisory Session
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Connect directly with our Principal Architects and Practice Directors in Silicon Valley, Dallas, London, or Gurugram.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                  {errors.fullName && <p className="text-red-600 text-[11px] mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="jane@enterprise.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                  {errors.workEmail && <p className="text-red-600 text-[11px] mt-1">{errors.workEmail}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                    Company / Organization *
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Global Financial Corp"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                  {errors.company && <p className="text-red-600 text-[11px] mt-1">{errors.company}</p>}
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                    Phone (Optional)
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+1 (555) 000-0000"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                  Primary Transformation Focus
                </label>
                <select
                  value={formData.serviceInterest}
                  onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white"
                >
                  <option value="AI-Native Transformation Advisory">AI-Native Transformation Advisory</option>
                  <option value="The AuthenticAI™ Loop Implementation">The AuthenticAI™ Loop Implementation</option>
                  <option value="Enterprise OS Fabric™ & Backstage DevX">Enterprise OS Fabric™ & Backstage DevX</option>
                  <option value="Global Capability Center (GCC) Build & Scale">Global Capability Center (GCC) Build & Scale</option>
                  <option value="TestCraft™ Autonomous QA Platform">TestCraft™ Autonomous QA Platform</option>
                  <option value="AI Maturity Index Assessment">AI Maturity Index Assessment</option>
                  <option value="DevSecOps & Platform Automation">DevSecOps & Platform Automation</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                  Project Context / Goals (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding your current systems, engineering team size, or target timeline..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-slate-900 text-xs focus:outline-none focus:border-amber-400 focus:bg-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Strategic Advisory</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-center text-[10px] text-slate-500 mt-2">
                  Strict enterprise confidentiality. Non-Disclosure Agreement (NDA) available upon request.
                </p>
              </div>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
