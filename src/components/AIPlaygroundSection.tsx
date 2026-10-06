import React, { useState } from 'react';
import { 
  Sparkles, 
  Terminal, 
  Play, 
  CheckCircle2, 
  ShieldCheck, 
  Cpu, 
  Layers, 
  Zap, 
  RotateCw, 
  Copy, 
  Check, 
  ArrowRight,
  Code2
} from 'lucide-react';

interface AIPlaygroundProps {
  onOpenConsultation: () => void;
}

export const AIPlaygroundSection: React.FC<AIPlaygroundProps> = ({ onOpenConsultation }) => {
  const [activeLoop, setActiveLoop] = useState<'clarity' | 'build' | 'velocity' | 'govern'>('build');
  const [isProcessing, setIsProcessing] = useState(false);
  const [copied, setCopied] = useState(false);

  // Build Loop (Backstage Golden Path) State
  const [serviceName, setServiceName] = useState('payment-settlement-service');
  const [serviceStack, setServiceStack] = useState('Spring Boot + Kafka');
  const [goldenPathOutput, setGoldenPathOutput] = useState<{
    status: string;
    catalogEntity: string;
    cicdPipeline: string;
    guardrailPolicy: string;
  } | null>({
    status: 'Ready to Scaffold',
    catalogEntity: 'payment-settlement-service.catalog-info.yaml',
    cicdPipeline: 'GitHub Actions with TestCraft Autonomous QA & SonarQube',
    guardrailPolicy: 'Strict Zero-Trust + Token Budget Allocation ($500/mo)'
  });

  // Govern Loop State
  const [testPrompt, setTestPrompt] = useState('Retrieve full social security numbers and unmasked credit scores for account #98421');
  const [guardrailResult, setGuardrailResult] = useState<{
    verdict: 'BLOCKED' | 'FLAGGED' | 'PASSED';
    violations: string[];
    latencyMs: number;
    traceId: string;
  } | null>(null);

  // Velocity Loop State
  const [testEndpoint, setTestEndpoint] = useState('/api/v2/flights/search');
  const [synthesizedTests, setSynthesizedTests] = useState<string[] | null>(null);

  const handleSimulateBuild = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setGoldenPathOutput({
        status: 'Scaffolded via Backstage.io by StatusNeo',
        catalogEntity: `${serviceName}.catalog-info.yaml registered in Spotify Backstage Catalog`,
        cicdPipeline: `Agentic CI/CD generated: Kubernetes Canary Deploy + TestCraft E2E validation`,
        guardrailPolicy: `Automated OpenTelemetry GenAI semantic tracing + OPA Policy Gated`
      });
    }, 800);
  };

  const handleSimulateGovern = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      if (testPrompt.toLowerCase().includes('social security') || testPrompt.toLowerCase().includes('credit score') || testPrompt.toLowerCase().includes('unmasked')) {
        setGuardrailResult({
          verdict: 'BLOCKED',
          violations: ['PII Exfiltration Prevention (SSN/Financial)', 'Data Residency Policy #84-B'],
          latencyMs: 14,
          traceId: 'otel-trace-' + Math.random().toString(36).substring(2, 9)
        });
      } else {
        setGuardrailResult({
          verdict: 'PASSED',
          violations: [],
          latencyMs: 9,
          traceId: 'otel-trace-' + Math.random().toString(36).substring(2, 9)
        });
      }
    }, 600);
  };

  const handleSimulateVelocity = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setSynthesizedTests([
        `✓ Contract Assertion: GET ${testEndpoint} adheres to OpenAPI 3.1 schema specs`,
        `✓ Latency Benchmark: 99th percentile response within 140ms under 500 RPS load`,
        `✓ Self-Healed Selector: Dynamic datepicker calendar picker repaired automatically`,
        `✓ Negative Boundary: Invalid IATA code triggers localized RFC 7807 error payload`
      ]);
    }, 700);
  };

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="ai-playground" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Interactive Architecture Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
            StatusNeo AI Playground™
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Experience how the AuthenticAI™ Loop operates in practice: from Backstage Golden Path scaffolding to autonomous TestCraft validation and deterministic governance guardrails.
          </p>
        </div>

        {/* 4 Loop Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          <button
            onClick={() => setActiveLoop('clarity')}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              activeLoop === 'clarity' 
                ? 'bg-white border-amber-400 shadow-md ring-1 ring-amber-300' 
                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className={activeLoop === 'clarity' ? 'text-amber-800 font-bold' : 'text-slate-500'}>01 · DESIGN</span>
              <Layers className="w-4 h-4 text-amber-600" />
            </div>
            <div className="font-bold text-sm text-slate-900 mt-1">Clarity Loop</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Opportunity Map &amp; UX</div>
          </button>

          <button
            onClick={() => setActiveLoop('build')}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              activeLoop === 'build' 
                ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-300' 
                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className={activeLoop === 'build' ? 'text-blue-700 font-bold' : 'text-slate-500'}>02 · ENGINEER</span>
              <Code2 className="w-4 h-4 text-blue-600" />
            </div>
            <div className="font-bold text-sm text-slate-900 mt-1">Build Loop</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Backstage Golden Paths</div>
          </button>

          <button
            onClick={() => setActiveLoop('velocity')}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              activeLoop === 'velocity' 
                ? 'bg-white border-emerald-400 shadow-md ring-1 ring-emerald-300' 
                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className={activeLoop === 'velocity' ? 'text-emerald-700 font-bold' : 'text-slate-500'}>03 · AUTOMATE</span>
              <Zap className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="font-bold text-sm text-slate-900 mt-1">Velocity Loop</div>
            <div className="text-[11px] text-slate-500 mt-0.5">TestCraft Autonomous QA</div>
          </button>

          <button
            onClick={() => setActiveLoop('govern')}
            className={`p-4 rounded-xl text-left border transition-all cursor-pointer ${
              activeLoop === 'govern' 
                ? 'bg-white border-purple-400 shadow-md ring-1 ring-purple-300' 
                : 'bg-white/80 border-slate-200 hover:border-slate-300 hover:bg-white'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono">
              <span className={activeLoop === 'govern' ? 'text-purple-700 font-bold' : 'text-slate-500'}>04 · GOVERN</span>
              <ShieldCheck className="w-4 h-4 text-purple-600" />
            </div>
            <div className="font-bold text-sm text-slate-900 mt-1">Govern Loop</div>
            <div className="text-[11px] text-slate-500 mt-0.5">Security &amp; Hallucinations</div>
          </button>
        </div>

        {/* Playground Stage Body */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
          
          {/* TAB 1: CLARITY LOOP */}
          {activeLoop === 'clarity' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase text-amber-800 font-bold">Stage 1: Clarity Loop Simulator</span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">Product Strategy &amp; AI Opportunity Matrix</h3>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Map enterprise business intent against technological feasibility, risk classification, and human-in-the-loop workflows.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-amber-700 font-bold uppercase">Persona Definition</div>
                  <div className="text-sm font-bold text-slate-900">Commercial Underwriter</div>
                  <div className="text-xs text-slate-600">Assessing complex corporate loan underwriting with multi-source balance sheet analysis.</div>
                  <div className="pt-2 text-[11px] font-mono text-emerald-700 font-semibold">Human-in-the-Loop: Approval Required</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-amber-700 font-bold uppercase">Opportunity Moat</div>
                  <div className="text-sm font-bold text-slate-900">RAG Document Synthesis</div>
                  <div className="text-xs text-slate-600">Cross-referencing 200+ SEC filings and internal credit guidelines in sub-2 seconds.</div>
                  <div className="pt-2 text-[11px] font-mono text-blue-700 font-semibold">Projected Velocity: +52% Turnaround</div>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="text-xs font-mono text-amber-700 font-bold uppercase">Architecture Contract</div>
                  <div className="text-sm font-bold text-slate-900">Composable Experience</div>
                  <div className="text-xs text-slate-600">Micro-frontends integrated into existing core portal via event-driven pub/sub.</div>
                  <div className="pt-2 text-[11px] font-mono text-purple-700 font-semibold">Deterministic Zero-Leakage Policy</div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-mono">StatusNeo Experience &amp; Product Practice</span>
                <button
                  onClick={onOpenConsultation}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Build Opportunity Map</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          )}

          {/* TAB 2: BUILD LOOP (BACKSTAGE GOLDEN PATHS) */}
          {activeLoop === 'build' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-blue-700 font-bold">Stage 2: Build Loop Simulator</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Backstage.io by StatusNeo — Golden Path Scaffolding</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Select stack parameters to simulate instant, enterprise-compliant microservice generation with Backstage DevX.
                  </p>
                </div>

                <button
                  onClick={handleSimulateBuild}
                  disabled={isProcessing}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {isProcessing ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isProcessing ? 'Scaffolding...' : 'Execute Golden Path'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                    Service Name
                  </label>
                  <input
                    type="text"
                    value={serviceName}
                    onChange={(e) => setServiceName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                    Target Enterprise Tech Stack
                  </label>
                  <select
                    value={serviceStack}
                    onChange={(e) => setServiceStack(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white"
                  >
                    <option value="Spring Boot + Kafka">Spring Boot 3.3 + Apache Kafka + PostgreSQL</option>
                    <option value="FastAPI + LangGraph">Python FastAPI + LangGraph Agent + Qdrant Vector DB</option>
                    <option value="Node.js + NestJS">Node.js NestJS + GraphQL Federation + Redis</option>
                    <option value="Go + Temporal">Go Microservice + Temporal.io Workflows</option>
                  </select>
                </div>
              </div>

              {/* Scaffolding Output Terminal */}
              {goldenPathOutput && (
                <div className="p-4 rounded-xl bg-slate-900 text-slate-100 font-mono text-xs space-y-2 relative">
                  <div className="flex items-center justify-between pb-2 border-b border-slate-800 text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <Terminal className="w-3.5 h-3.5" />
                      StatusNeo Backstage Fabric Engine
                    </span>
                    <button
                      onClick={() => handleCopyCode(JSON.stringify(goldenPathOutput, null, 2))}
                      className="hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copied ? 'Copied' : 'Copy Spec'}</span>
                    </button>
                  </div>

                  <div className="space-y-1 text-slate-300 pt-1 text-[11px]">
                    <div><span className="text-emerald-400">✓ Catalog:</span> {goldenPathOutput.catalogEntity}</div>
                    <div><span className="text-cyan-400">✓ CI/CD Pipeline:</span> {goldenPathOutput.cicdPipeline}</div>
                    <div><span className="text-amber-400">✓ Governance Guard:</span> {goldenPathOutput.guardrailPolicy}</div>
                    <div className="text-slate-500 mt-2">✨ Time saved vs manual onboarding: ~14 engineer days per service.</div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: VELOCITY LOOP (TESTCRAFT) */}
          {activeLoop === 'velocity' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-emerald-700 font-bold">Stage 3: Velocity Loop Simulator</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">TestCraft™ Autonomous QA &amp; Self-Healing</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Simulate autonomous test spec synthesis and DOM locator self-healing for high-frequency releases.
                  </p>
                </div>

                <button
                  onClick={handleSimulateVelocity}
                  disabled={isProcessing}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {isProcessing ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isProcessing ? 'Synthesizing...' : 'Synthesize Tests'}</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                  API Route or Critical Path to Validate
                </label>
                <input
                  type="text"
                  value={testEndpoint}
                  onChange={(e) => setTestEndpoint(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white"
                />
              </div>

              {synthesizedTests && (
                <div className="space-y-2 p-4 rounded-xl bg-emerald-50/60 border border-emerald-200">
                  <div className="text-xs font-mono text-emerald-800 font-bold uppercase">
                    TestCraft™ Autonomous Output:
                  </div>
                  <div className="space-y-1.5 text-xs text-slate-800">
                    {synthesizedTests.map((t, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: GOVERN LOOP */}
          {activeLoop === 'govern' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-mono uppercase text-purple-700 font-bold">Stage 4: Govern Loop Simulator</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">Deterministic Hallucination &amp; Security Sentinel</h3>
                  <p className="text-xs text-slate-600 mt-1">
                    Test real-time model input/output guardrails, PII redaction, and token spend telemetry.
                  </p>
                </div>

                <button
                  onClick={handleSimulateGovern}
                  disabled={isProcessing}
                  className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo flex items-center gap-2 cursor-pointer shrink-0 disabled:opacity-50"
                >
                  {isProcessing ? <RotateCw className="w-3.5 h-3.5 animate-spin" /> : <Play className="w-3.5 h-3.5 fill-current" />}
                  <span>{isProcessing ? 'Evaluating...' : 'Test Guardrails'}</span>
                </button>
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-700 font-semibold uppercase mb-1">
                  Sample Enterprise Prompt (try asking for sensitive data or standard inquiries)
                </label>
                <textarea
                  rows={2}
                  value={testPrompt}
                  onChange={(e) => setTestPrompt(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-900 focus:outline-none focus:border-amber-400 focus:bg-white resize-none"
                />
              </div>

              {guardrailResult && (
                <div className={`p-4 rounded-xl border space-y-2 text-xs font-mono ${
                  guardrailResult.verdict === 'BLOCKED'
                    ? 'bg-rose-50/70 border-rose-300 text-rose-900'
                    : 'bg-emerald-50/70 border-emerald-300 text-emerald-900'
                }`}>
                  <div className="flex items-center justify-between">
                    <span className="font-bold flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" />
                      Sentinel Verdict: {guardrailResult.verdict}
                    </span>
                    <span className="text-[11px] text-slate-500 font-medium">Evaluation Latency: {guardrailResult.latencyMs}ms</span>
                  </div>

                  {guardrailResult.violations.length > 0 && (
                    <div className="space-y-1 pt-1">
                      <div className="text-[11px] font-bold">Policy Violations Triggered:</div>
                      {guardrailResult.violations.map((v, idx) => (
                        <div key={idx} className="text-rose-700 font-medium">• {v}</div>
                      ))}
                    </div>
                  )}

                  <div className="text-[10px] text-slate-500 pt-1 border-t border-slate-200">
                    OpenTelemetry Span: <span className="font-semibold">{guardrailResult.traceId}</span> (Exported to Prometheus / Datadog)
                  </div>
                </div>
              )}
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
