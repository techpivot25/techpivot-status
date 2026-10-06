import React, { useState } from 'react';
import { 
  Workflow, 
  Play, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  RefreshCw, 
  ArrowRight,
  Code
} from 'lucide-react';

interface TestCraftProps {
  onOpenConsultation: () => void;
}

export const TestCraftSection: React.FC<TestCraftProps> = ({ onOpenConsultation }) => {
  const [targetUrl, setTargetUrl] = useState('https://enterprise.internal.app/checkout');
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<null | {
    testsGenerated: number;
    flakyRepairs: number;
    coverageDelta: string;
    cases: string[];
  }>(null);

  const handleSimulateScan = () => {
    setIsScanning(true);
    setScanResult(null);
    setTimeout(() => {
      setIsScanning(false);
      setScanResult({
        testsGenerated: 42,
        flakyRepairs: 7,
        coverageDelta: '+28.4%',
        cases: [
          'Synthesized auth session timeout with token refresh edge condition',
          'Self-healed dynamic DOM selector mismatch on checkout button',
          'Automated WCAG 2.1 AA keyboard focus trap verification',
          'Simulated API latency spike and graceful retry fallback'
        ]
      });
    }, 1200);
  };

  return (
    <section id="testcraft" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Autonomous Quality Platform</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
            TestCraft™: AI-Native Test Engineering
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Eliminate testing bottlenecks in high-speed release cycles. 
            TestCraft synthesizes enterprise test suites, automatically heals flaky test selectors, and guarantees zero-defect releases.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-lg">
              <div className="aspect-[16/11] overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/testcraft_testing_lab_1790617415689.jpg"
                  alt="TestCraft Automated Testing Lab"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 bg-white border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-mono text-slate-900 font-bold">TestCraft Engine Core</span>
                  <span className="text-emerald-700 font-mono font-bold flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    AUTONOMOUS
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-slate-500">Regression Pass</div>
                    <div className="font-bold text-slate-900 text-base">99.4%</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    <div className="text-slate-500">Flakiness Reduction</div>
                    <div className="font-bold text-amber-700 text-base">89%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive TestCraft Console Simulator */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                <div className="flex items-center gap-2 font-mono text-xs text-slate-800 font-bold">
                  <Terminal className="w-4 h-4 text-amber-600" />
                  <span>TestCraft Interactive Synthesizer</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500 font-medium">Agent Mode: Playwright/Cypress</span>
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-slate-700 font-semibold mb-1.5">
                    Endpoint or User Journey Under Verification
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={targetUrl}
                      onChange={(e) => setTargetUrl(e.target.value)}
                      placeholder="https://app.enterprise.com/feature"
                      className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-900 font-mono focus:outline-none focus:border-amber-400 focus:bg-white transition-colors"
                    />
                    <button
                      onClick={handleSimulateScan}
                      disabled={isScanning}
                      className="px-5 py-2.5 btn-statusneo disabled:opacity-50 text-black text-xs font-bold uppercase tracking-wider rounded-xl flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-sm"
                    >
                      {isScanning ? (
                        <>
                          <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                          <span>Synthesizing...</span>
                        </>
                      ) : (
                        <>
                          <Play className="w-3.5 h-3.5 fill-current" />
                          <span>Run Agent</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Scan Results View */}
                {scanResult && (
                  <div className="mt-4 p-4 rounded-xl bg-amber-50/50 border border-amber-200 space-y-3 animate-in fade-in duration-200">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-semibold text-slate-900 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                        Autonomous Synthesis Complete
                      </span>
                      <span className="font-mono text-emerald-700 font-bold">{scanResult.coverageDelta} Coverage</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                        Generated: <strong className="text-slate-900 font-mono">{scanResult.testsGenerated} test specs</strong>
                      </div>
                      <div className="p-2 rounded-lg bg-white border border-slate-200 text-slate-700">
                        Repairs: <strong className="text-emerald-700 font-mono">{scanResult.flakyRepairs} self-healed selectors</strong>
                      </div>
                    </div>

                    <div className="space-y-1.5 pt-1">
                      <div className="text-[11px] font-mono text-slate-500 uppercase font-semibold">Verified Test Artifacts:</div>
                      {scanResult.cases.map((c, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                          <span>{c}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Core Feature Bullet Points */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <Code className="w-4 h-4 text-amber-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">Zero Code Test Creation</div>
                      <div className="text-slate-600 mt-0.5">Synthesizes robust assertions directly from UI journeys and OpenAPI specs.</div>
                    </div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5">
                    <RefreshCw className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                    <div>
                      <div className="font-bold text-slate-900">Self-Healing Selectors</div>
                      <div className="text-slate-600 mt-0.5">Detects DOM mutations in CI pipelines and adapts locators automatically.</div>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="pt-3 flex items-center justify-between">
                  <span className="text-xs text-slate-500">Available as an open extension &amp; enterprise platform.</span>
                  <button
                    onClick={onOpenConsultation}
                    className="flex items-center gap-1.5 text-xs font-bold text-amber-800 hover:text-amber-900 uppercase tracking-wider cursor-pointer"
                  >
                    <span>Request TestCraft Pilot</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
