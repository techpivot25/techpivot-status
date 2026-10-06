import React from 'react';
import { StatusNeoLogo } from './StatusNeoLogo';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Youtube, Instagram, Award, Upload } from 'lucide-react';

interface FooterProps {
  onNavigate: (view: string) => void;
  onOpenConsultation: () => void;
  onOpenMaturityScan: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenConsultation,
  onOpenMaturityScan
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800/80">
          
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button onClick={() => onNavigate('home')} className="cursor-pointer focus:outline-none">
                <StatusNeoLogo showTagline={true} inverted={true} />
              </button>
              <button
                onClick={() => window.dispatchEvent(new Event('open-logo-manager'))}
                className="text-[10px] font-mono px-2 py-1 rounded bg-neutral-900 border border-neutral-700 text-neutral-400 hover:text-white hover:border-[#FAC400] transition-colors flex items-center gap-1 cursor-pointer"
                title="Change or upload logo"
              >
                <Upload className="w-3 h-3 text-[#FAC400]" />
                <span>Upload Logo</span>
              </button>
            </div>

            <p className="text-neutral-400 text-xs leading-relaxed max-w-sm">
              Authentic AI-led transformations designed &amp; engineered for modern digital enterprises. Build AI-native systems, agentic workflows, and governed loops.
            </p>

            <div className="space-y-2 text-neutral-400 text-xs pt-1">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FAC400] shrink-0 mt-0.5" />
                <span className="leading-snug">Global HQ · 5830 Granite Pkwy, Suite 100, Plano / Dallas, TX 75024</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FAC400] shrink-0" />
                <a href="mailto:reach@statusneo.com" className="text-neutral-300 hover:text-white transition-colors font-medium">
                  reach@statusneo.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FAC400] shrink-0" />
                <a href="tel:+12149195557" className="text-neutral-300 hover:text-white transition-colors font-medium">
                  +1 (214) 919-5557
                </a>
              </div>
            </div>

            {/* Socials & Certification Badge */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.linkedin.com/company/statusneo/" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all shadow-2xs"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="https://www.youtube.com/@StatusNeoInc" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all shadow-2xs"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a 
                href="https://www.instagram.com/statusneo__" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-neutral-600 transition-all shadow-2xs"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button
                onClick={() => onNavigate('careers')}
                className="ml-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-emerald-400 text-[10.5px] font-mono font-bold cursor-pointer hover:border-neutral-700 transition-colors"
              >
                <Award className="w-3 h-3 text-emerald-400" />
                <span>Great Place to Work®</span>
              </button>
            </div>
          </div>

          {/* Practices & Services */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
              Services &amp; Practices
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('services')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  All Practices Overview
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  GenAI &amp; Transformations
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  Product &amp; Platform Engineering
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  DevSecOps &amp; CloudOps
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('testcraft')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  Autonomous QA (TestCraft™)
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('enterprise-os')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  Backstage.io Developer Portals
                </button>
              </li>
            </ul>
          </div>

          {/* Platform & Accelerators */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
              Accelerators &amp; IP
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('playground')} className="text-[#FAC400] hover:text-[#ffd84d] transition-colors cursor-pointer text-left font-medium">
                  StatusNeo AI Playground™
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('loops')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  The AuthenticAI™ Loop
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('case-studies')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  Enterprise Case Studies
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('periodic-table')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  The AI Periodic Table™
                </button>
              </li>
              <li>
                <button onClick={onOpenMaturityScan} className="text-[#FAC400] hover:underline font-medium cursor-pointer text-left">
                  AI Maturity Index Scan
                </button>
              </li>
            </ul>
          </div>

          {/* Company & Careers */}
          <div className="space-y-3">
            <div className="font-mono text-xs text-white uppercase tracking-wider font-semibold">
              Company &amp; Careers
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => onNavigate('company')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  About StatusNeo
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('careers')} className="text-emerald-400 hover:text-emerald-300 font-semibold cursor-pointer text-left flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.2 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded text-[9.5px]">Hiring</span>
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('insights')} className="text-neutral-400 hover:text-white transition-colors cursor-pointer text-left">
                  Insights &amp; Publications
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="text-neutral-200 hover:text-white transition-colors cursor-pointer text-left font-semibold">
                  Contact Us
                </button>
              </li>
              <li>
                <button onClick={onOpenConsultation} className="text-[#FAC400] hover:underline font-semibold cursor-pointer text-left">
                  Book Executive Advisory
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Global Locations Bar */}
        <div className="py-8 border-b border-neutral-800/80">
          <div className="font-mono text-[11px] text-neutral-500 uppercase tracking-wider font-semibold mb-3">
            Global Hubs &amp; GCC Footprint
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-neutral-400">
            <span>• Plano / Dallas (US HQ)</span>
            <span>• Palo Alto (Silicon Valley)</span>
            <span>• Manhattan, New York</span>
            <span>• London (UK &amp; EMEA)</span>
            <span>• Dubai &amp; Abu Dhabi (UAE)</span>
            <span>• Singapore (APAC)</span>
            <span>• Gurgaon (Cyber City)</span>
            <span>• Bengaluru</span>
            <span>• Mumbai</span>
            <span>• Hyderabad</span>
            <span>• Tbilisi</span>
          </div>
        </div>

        {/* Copyright & Legal Sub-Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500">
          <div>
            © {new Date().getFullYear()} StatusNeo Inc. All rights reserved. 
            <span className="hidden sm:inline"> | AuthenticAI™ and TestCraft™ are trademarks of StatusNeo Inc.</span>
          </div>

          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('company')} className="hover:text-neutral-300 transition-colors cursor-pointer">
              Privacy Policy
            </button>
            <button onClick={() => onNavigate('company')} className="hover:text-neutral-300 transition-colors cursor-pointer">
              Terms of Service
            </button>
            <button 
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors cursor-pointer group"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
