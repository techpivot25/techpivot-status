import React, { useState } from 'react';
import { 
  Gauge, 
  CheckCircle2, 
  ArrowRight, 
  Download
} from 'lucide-react';

interface AIMaturityScanProps {
  onOpenConsultation: () => void;
}

interface Question {
  id: string;
  category: string;
  question: string;
  options: {
    label: string;
    points: number;
    description: string;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 'code-arch',
    category: 'Code & Architecture',
    question: 'How is generative AI currently integrated into your engineering codebase?',
    options: [
      { label: 'Ad-hoc developer experimentation without corporate standards', points: 15, description: 'Individual engineers use personal tools without centralized policies.' },
      { label: 'Licensed Copilots with basic IDE integration', points: 40, description: 'Code autocompletion enabled, but without repo-specific fine-tuning or context grounding.' },
      { label: 'Context-Aware AI agents integrated with corporate repositories', points: 75, description: 'Agents understand domain schemas, internal libraries, and architectural patterns.' },
      { label: 'AI-Native SDLC with autonomous code synthesis and self-refactoring', points: 100, description: 'Continuous agentic loops refactor legacy modules and enforce architecture contracts.' }
    ]
  },
  {
    id: 'cicd-delivery',
    category: 'CI/CD & Delivery Pipelines',
    question: 'What level of automation governs your software release pipelines?',
    options: [
      { label: 'Manual deployment scripts with bi-weekly or monthly release windows', points: 20, description: 'High deployment risk, extensive manual verification gates.' },
      { label: 'Standard CI/CD with automated unit tests and staging environments', points: 45, description: 'Predictable builds, but release signoffs still require manual meetings.' },
      { label: 'AI-augmented release hazard simulation and automated PR triage', points: 80, description: 'LLM agents detect breaking contracts and estimate blast radius before merge.' },
      { label: 'Autonomic continuous delivery with automated rollback and canary AI', points: 100, description: 'Production deployments are continuous, self-monitoring, and autonomic.' }
    ]
  },
  {
    id: 'security-gov',
    category: 'Security & Governance',
    question: 'How does your organization enforce security, compliance, and AI guardrails?',
    options: [
      { label: 'Standard annual penetration testing without dedicated AI governance', points: 15, description: 'No visibility into model prompt injection, data leakage, or model drift.' },
      { label: 'Basic secret scanning and open-source vulnerability dependency checks', points: 40, description: 'Catches basic CVEs, but lacks real-time runtime hallucination guardrails.' },
      { label: 'Centralized model registry with automated token budgeting and audit logs', points: 75, description: 'All AI calls route through proxy gateways enforcing corporate compliance.' },
      { label: 'Deterministic guardrails with real-time OpenTelemetry tracing & compliance', points: 100, description: 'Zero hallucination leakage, continuous compliance enforcement, and audit lineage.' }
    ]
  },
  {
    id: 'qa-testing',
    category: 'Quality Automation',
    question: 'What is your current test engineering and verification maturity?',
    options: [
      { label: 'Predominantly manual regression and spreadsheet-based QA plans', points: 20, description: 'Slow feedback cycles, frequent production regressions.' },
      { label: 'Automated E2E suites with Selenium/Cypress requiring regular maintenance', points: 50, description: 'Brittle tests, frequent broken selectors slowing down pipeline releases.' },
      { label: 'AI-assisted test generation with synthetic test data creation', points: 80, description: 'Agents generate mock fixtures and edge cases automatically.' },
      { label: 'Autonomous self-healing testing with TestCraft™ agent orchestration', points: 100, description: 'Zero flaky tests; AI dynamically updates test definitions on UI changes.' }
    ]
  },
  {
    id: 'devex-backstage',
    category: 'Developer Experience',
    question: 'How do engineers discover services, documentation, and scaffold microservices?',
    options: [
      { label: 'Fragmented Confluence wikis and tribal knowledge across teams', points: 15, description: 'Onboarding takes weeks, duplicative services created regularly.' },
      { label: 'Centralized internal wiki with basic code cataloging', points: 45, description: 'Static documentation, often outdated and disconnected from production.' },
      { label: 'Internal Developer Portal (Backstage) with basic software templates', points: 80, description: 'Self-service microservice scaffolding and plugin integration.' },
      { label: 'StatusNeo DevX OS Fabric with agentic developer workflows & Golden Paths', points: 100, description: 'One-click compliant scaffolding, automated telemetry, and zero developer friction.' }
    ]
  }
];

export const AIMaturityIndexScan: React.FC<AIMaturityScanProps> = ({ onOpenConsultation }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [answers, setAnswers] = useState<Record<string, number>>({
    'code-arch': 40,
    'cicd-delivery': 45,
    'security-gov': 40,
    'qa-testing': 50,
    'devex-backstage': 45
  });
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const totalScore = Math.round(
    Object.values(answers).reduce((sum, val) => sum + val, 0) / QUESTIONS.length
  );

  const getStage = (score: number) => {
    if (score < 35) return { level: 'Level 1: Exploratory', title: 'Ad-hoc & Fragmented', color: 'text-amber-800' };
    if (score < 65) return { level: 'Level 2: Enabled', title: 'Tactical & Augmented', color: 'text-blue-700' };
    if (score < 85) return { level: 'Level 3: Operational', title: 'Standardized & Scaled', color: 'text-emerald-700' };
    return { level: 'Level 4: AI-Native', title: 'Autonomic & Loop-Governed', color: 'text-purple-700' };
  };

  const stage = getStage(totalScore);

  const handleSelectOption = (questionId: string, points: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: points }));
    if (activeTab < QUESTIONS.length - 1) {
      setActiveTab(prev => prev + 1);
    }
  };

  const handleDownloadReport = () => {
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <section id="ai-maturity-scan" className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-xs font-mono text-amber-900 font-bold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#FAC400]" />
            <span>Interactive Diagnostic Assessment</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#111013] tracking-tight">
            StatusNeo AI Maturity Index Scan™
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Benchmark your enterprise SDLC across 5 critical AI readiness vectors: 
            Code Architecture, CI/CD Pipelines, Quality Automation, Security Governance, and Developer Experience.
          </p>
        </div>

        {/* Diagnostic Cockpit */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Assessment Flow (Left) */}
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md">
            
            {/* Vector Progress Tabs */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 overflow-x-auto gap-2">
              {QUESTIONS.map((q, idx) => (
                <button
                  key={q.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono uppercase whitespace-nowrap transition-colors cursor-pointer ${
                    activeTab === idx 
                      ? 'bg-amber-100 text-amber-900 border border-amber-300 font-bold' 
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  <span>0{idx + 1}</span>
                  <span className="hidden sm:inline">· {q.category.split(' ')[0]}</span>
                </button>
              ))}
            </div>

            {/* Current Question */}
            <div className="space-y-6">
              <div>
                <span className="text-xs font-mono text-amber-700 font-bold uppercase tracking-widest">
                  Vector 0{activeTab + 1}: {QUESTIONS[activeTab].category}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mt-1">
                  {QUESTIONS[activeTab].question}
                </h3>
              </div>

              {/* Options */}
              <div className="space-y-3">
                {QUESTIONS[activeTab].options.map((opt, oIdx) => {
                  const isSelected = answers[QUESTIONS[activeTab].id] === opt.points;
                  return (
                    <button
                      key={oIdx}
                      onClick={() => handleSelectOption(QUESTIONS[activeTab].id, opt.points)}
                      className={`w-full p-4 rounded-xl text-left border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                        isSelected 
                          ? 'bg-amber-50/70 border-amber-400 shadow-sm' 
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/60'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="text-sm font-semibold text-slate-900 flex items-center gap-2">
                          <div className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-amber-500 bg-amber-500' : 'border-slate-400'
                          }`}>
                            {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </div>
                          <span>{opt.label}</span>
                        </div>
                        <p className="text-xs text-slate-600 pl-5.5 leading-relaxed">
                          {opt.description}
                        </p>
                      </div>

                      <span className="font-mono text-xs text-slate-500 font-bold shrink-0">
                        {opt.points} pts
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Navigation Foot */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                <button
                  onClick={() => setActiveTab(prev => Math.max(0, prev - 1))}
                  disabled={activeTab === 0}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-slate-500 hover:text-slate-900 disabled:opacity-30 cursor-pointer font-semibold"
                >
                  Previous Vector
                </button>

                <button
                  onClick={() => {
                    if (activeTab < QUESTIONS.length - 1) {
                      setActiveTab(prev => prev + 1);
                    }
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo shadow-sm cursor-pointer"
                >
                  <span>{activeTab === QUESTIONS.length - 1 ? 'Assessment Complete' : 'Next Vector'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>

          {/* Real-time Maturity Scorecard & Recommendations (Right) */}
          <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-md space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                Enterprise AI Readiness Score
              </span>
              <span className={`px-2.5 py-1 rounded-full text-xs font-mono uppercase tracking-wider font-bold bg-amber-50 border border-amber-200 ${stage.color}`}>
                {stage.level}
              </span>
            </div>

            {/* Score Display */}
            <div className="text-center py-4 relative">
              <div className="inline-flex flex-col items-center justify-center w-36 h-36 rounded-full bg-slate-50 border-2 border-slate-200 relative shadow-inner">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 tabular-nums">
                  {totalScore}
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold">OUT OF 100</span>
              </div>

              <div className="mt-4">
                <div className={`text-base font-bold ${stage.color}`}>
                  {stage.title}
                </div>
                <div className="text-xs text-slate-600 mt-1 max-w-xs mx-auto">
                  {totalScore >= 75 
                    ? 'Advanced engineering maturity. Ready for autonomic agent orchestration and self-healing systems.'
                    : 'Significant acceleration opportunity by unifying DevSecOps, Backstage, and autonomous QA.'}
                </div>
              </div>
            </div>

            {/* Dimension Breakdown Bar Chart */}
            <div className="space-y-3 pt-2 border-t border-slate-200">
              <div className="text-xs font-mono text-slate-500 uppercase tracking-wider font-semibold">
                Vector Breakdown
              </div>
              {QUESTIONS.map((q) => {
                const score = answers[q.id] || 0;
                return (
                  <div key={q.id} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-700 font-medium">{q.category}</span>
                      <span className="font-mono text-slate-500 font-bold tabular-nums">{score}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-amber-500 rounded-full transition-all duration-500"
                        style={{ width: `${score}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo shadow-md cursor-pointer"
              >
                <span>Schedule Architectural Audit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={handleDownloadReport}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-xs font-bold uppercase tracking-wider btn-statusneo-outline cursor-pointer shadow-2xs"
              >
                {downloadSuccess ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Report Generated Successfully</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Download Diagnostic PDF Summary</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
