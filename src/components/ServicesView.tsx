import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Cpu, 
  ShieldCheck, 
  Zap, 
  Layers, 
  CheckCircle2, 
  ArrowRight, 
  Server, 
  Terminal, 
  GitBranch, 
  Cloud, 
  Compass, 
  Activity, 
  Check, 
  ExternalLink 
} from 'lucide-react';

interface ServicesViewProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenConsultation, onNavigate }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'genai', name: 'GenAI & Transformation' },
    { id: 'engineering', name: 'Platform & Product' },
    { id: 'devsecops', name: 'DevSecOps & SRE' },
    { id: 'testing', name: 'Autonomous Testing' },
    { id: 'backstage', name: 'Developer Portals' },
    { id: 'cloud', name: 'Cloud & Salesforce' },
  ];

  const services = [
    {
      id: 1,
      category: 'genai',
      badge: 'Flagship Practice',
      title: 'GenAI-Powered Delivery & AI-Led Transformations',
      subtitle: 'From AI Proof-of-Concept to Production-Grade Enterprise Scale',
      description: 'We help global enterprises move beyond toys and chat demos into autonomous, governed, multi-agent systems embedded directly into core workflows.',
      icon: Sparkles,
      color: 'amber',
      deliverables: [
        'Enterprise Agentic Architecture & Orchestration (LangGraph, CrewAI, AutoGen)',
        'Fine-Tuning, Domain RAG & Vector Knowledge Repositories',
        'Model Evaluation, Hallucination Guardrails & Token Economics',
        'AI SDLC Modernization: Accelerating developer velocity by 40%+'
      ],
      metrics: '40% Cycle Time Reduction · Deterministic LLM Guardrails',
      tags: ['LangGraph', 'RAG Pipelines', 'Llama 3 / Claude / GPT-4o', 'Guardrails', 'Agentic Workflows']
    },
    {
      id: 2,
      category: 'engineering',
      badge: 'Core Competency',
      title: 'Product & Platform Engineering',
      subtitle: 'Precision Full-Stack Engineering for Mission-Critical Digital Products',
      description: 'Modernizing architectures from monolithic legacy systems to high-throughput, event-driven microservices with world-class engineering discipline.',
      icon: Code2,
      color: 'blue',
      deliverables: [
        'Cloud-Native Microservices Architecture (Spring Boot, Go, Node.js, Python)',
        'Event-Driven Systems with Kafka, EventBridge & RabbitMQ',
        'High-Performance UI/UX Design Systems & Web/Mobile Engineering',
        'Domain-Driven Design (DDD) & Clean Enterprise Architecture'
      ],
      metrics: '99.99% Availability · Sub-50ms Global P99 Latency',
      tags: ['Microservices', 'Apache Kafka', 'Distributed Systems', 'React / Next.js', 'Go / Java']
    },
    {
      id: 3,
      category: 'devsecops',
      badge: 'Continuous Reliability',
      title: 'DevSecOps, SRE & CloudOps',
      subtitle: 'Zero-Trust Reliability Engineering with Autonomous CI/CD Pipelines',
      description: 'We engineer self-healing cloud infrastructure and automated security scanning to turn deployments from high-risk events into routine, painless operations.',
      icon: Zap,
      color: 'emerald',
      deliverables: [
        'Automated CI/CD Pipelines with Built-in SAST, DAST & Dependency Auditing',
        'Infrastructure as Code (Terraform, OpenTofu, Pulumi, Kubernetes)',
        'Full-Stack Observability & SRE (OpenTelemetry, Prometheus, Datadog)',
        'Cloud FinOps & Cost Optimization across AWS, Google Cloud & Azure'
      ],
      metrics: '15-Minute Commit-to-Prod · 32% Cloud Infrastructure Savings',
      tags: ['Kubernetes', 'Terraform', 'ArgoCD', 'OpenTelemetry', 'AWS / GCP / Azure']
    },
    {
      id: 4,
      category: 'testing',
      badge: 'Proprietary IP',
      title: 'Autonomous Testing & Quality Engineering (TestCraft™)',
      subtitle: 'The Brain Behind Continuous Confidence: AI-Native QA Automation',
      description: 'Replacing brittle, manual test maintenance with self-healing, LLM-generated test suites and autonomous synthetic data bots that run with every pull request.',
      icon: ShieldCheck,
      color: 'rose',
      deliverables: [
        'TestCraft™ Autonomous Self-Healing Test Engine',
        'LLM-Driven Test Case Generation from User Stories and API Schemas',
        'Synthetic Test Data Generators with Strict PII Masking',
        'Chaos Engineering & Performance Benchmark Automation'
      ],
      metrics: '85% Test Suite Maintenance Savings · Zero Regression Escapes',
      tags: ['TestCraft™', 'Playwright', 'Autonomous QA', 'Synthetic Data', 'Self-Healing']
    },
    {
      id: 5,
      category: 'backstage',
      badge: 'Spotify Backstage Experts',
      title: 'Backstage Developer Portals & Internal Developer Platforms (IDP)',
      subtitle: 'StatusNeo’s Enterprise Developer Portal & Golden Path Accelerators',
      description: 'We implement and scale Spotify’s open-source Backstage into an enterprise-wide developer operating system, unifying catalogs, docs, and scaffolding.',
      icon: Layers,
      color: 'purple',
      deliverables: [
        'Custom Backstage Plugins for CI/CD, Cloud Costs & Security Insights',
        'Standardized "Golden Path" Software Templates for Instant Service Scaffolding',
        'Unified Software Catalog & API Documentation Hub',
        'Developer Experience (DevEx) Analytics & DORA Metrics Dashboards'
      ],
      metrics: 'Day-1 Developer Onboarding · 12,000+ Services Managed',
      tags: ['Backstage.io', 'Spotify Open Source', 'Golden Paths', 'Software Catalog', 'DevEx']
    },
    {
      id: 6,
      category: 'cloud',
      badge: 'Strategic Practice',
      title: 'Cloud Solutions & Salesforce Modernization',
      subtitle: 'Enterprise Cloud Migration, Architecture, & High-Scale CRM Platforms',
      description: 'End-to-end cloud transformation and enterprise Salesforce engineering, unlocking unified customer journeys, predictive analytics, and automated operations.',
      icon: Cloud,
      color: 'indigo',
      deliverables: [
        'Cloud Modernization & Multi-Cloud Migration Strategy',
        'Salesforce Sales Cloud, Service Cloud, Marketing Cloud & Pardot Engineering',
        'Salesforce Einstein 1 AI Integration & Agentforce Readiness',
        'Legacy ERP & CRM Integration via MuleSoft and Modern Event Streams'
      ],
      metrics: '100% On-Time Cloud Migrations · Seamless Legacy Integration',
      tags: ['Salesforce', 'Agentforce', 'MuleSoft', 'Multi-Cloud', 'Cloud Migration']
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(s => s.category === activeCategory);

  return (
    <div className="bg-white">
      {/* Breadcrumb Header */}
      <div className="bg-slate-50 border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 text-xs text-slate-500">
          <button 
            onClick={() => onNavigate('home')}
            className="hover:text-slate-900 transition-colors cursor-pointer"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Services &amp; Practices</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-mono font-bold tracking-wide mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Comprehensive Technology Consulting
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#111013] leading-[1.15]">
              Engineered for the AI-Native Era.
            </h1>
            <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              StatusNeo partners with Global 2000 enterprises to architect, engineer, and operate mission-critical platforms. 
              From autonomous GenAI agent networks to self-healing quality engineering and developer experience portals, we deliver verified business outcomes.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo shadow-md cursor-pointer flex items-center gap-2"
              >
                <span>Book Strategic Practice Discovery</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => onNavigate('loops')}
                className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 rounded-full transition-all cursor-pointer flex items-center gap-2 shadow-2xs"
              >
                <span>Explore The AuthenticAI™ Loop</span>
              </button>
            </div>
          </div>

          {/* Quick Metrics Strip */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-10 border-t border-slate-200">
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">40%+</div>
              <div className="text-xs text-slate-500 mt-1">Faster Engineering Cycle Time</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">100%</div>
              <div className="text-xs text-slate-500 mt-1">Production-Grade Delivery (No Slide Ware)</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">99.99%</div>
              <div className="text-xs text-slate-500 mt-1">Availability on Core Systems</div>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs">
              <div className="text-2xl sm:text-3xl font-black text-slate-900 font-mono">10+</div>
              <div className="text-xs text-slate-500 mt-1">Global Delivery Hubs &amp; GCCs</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs & Services Catalog */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
                Specialized Practices
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111013] tracking-tight">
                Our Core Engineering Disciplines
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 p-1.5 bg-white border border-slate-200 rounded-xl shadow-2xs">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-slate-900 text-white shadow-2xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <div 
                  key={service.id}
                  className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[11px] font-mono uppercase font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                        {service.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-800 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <h3 className="text-lg font-black text-slate-900 group-hover:text-amber-700 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-500 mt-1">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-5 pt-4 border-t border-slate-100 space-y-2">
                      <div className="text-[11px] font-mono uppercase font-bold text-slate-400">Key Capabilities</div>
                      {service.deliverables.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-4 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs font-mono font-medium text-slate-800">
                      ⚡ <span className="font-bold">Metric:</span> {service.metrics}
                    </div>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {service.tags.map((tag, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <button
                      onClick={onOpenConsultation}
                      className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-slate-900 text-slate-700 hover:text-white border border-slate-200 hover:border-slate-900 text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5"
                    >
                      <span>Consult Our Practice Leads</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Flexible Engagement Models
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111013] tracking-tight">
              How We Co-Engineer With You
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Whether you need a dedicated Global Capability Center (GCC), an autonomous engineering pod, or fixed-outcome modernization, we adapt to your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-amber-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-bold font-mono text-sm mb-4">
                01
              </div>
              <h3 className="text-lg font-bold text-slate-900">AI-Native GCCs</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Build-Operate-Transfer (BOT) or long-term high-velocity capability centers across India, EMEA, and the Americas, pre-configured with StatusNeo's AuthenticAI™ tooling.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">✓ Dedicated engineering cohorts</li>
                <li className="flex items-center gap-1.5">✓ High governance &amp; IP ownership</li>
                <li className="flex items-center gap-1.5">✓ 60% operational efficiency</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center font-bold font-mono text-sm mb-4">
                02
              </div>
              <h3 className="text-lg font-bold text-slate-900">Autonomous Pods-as-a-Service</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Cross-functional pods of Staff Engineers, AI Architects, and SRE Leads dropped directly into your product roadmap to execute complex modernization sprints.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">✓ Zero ramp-up latency</li>
                <li className="flex items-center gap-1.5">✓ DORA metric benchmarked</li>
                <li className="flex items-center gap-1.5">✓ Fortnightly value drops</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-all">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold font-mono text-sm mb-4">
                03
              </div>
              <h3 className="text-lg font-bold text-slate-900">Outcome-Based Transformations</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Tied directly to tangible performance deliverables: Backstage adoption, autonomous test coverage with TestCraft™, or complete cloud modernization.
              </p>
              <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                <li className="flex items-center gap-1.5">✓ Milestone-governed SLAs</li>
                <li className="flex items-center gap-1.5">✓ Guaranteed code quality</li>
                <li className="flex items-center gap-1.5">✓ Shared risk &amp; alignment</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-md"
            >
              <span>Schedule Architecture Advisory Session</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
