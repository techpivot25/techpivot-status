export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  deliverables: string[];
  metrics: string;
}

export interface TransformationLoop {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: string;
  accentClass: string;
  services: ServiceItem[];
}

export interface Leader {
  name: string;
  role: string;
  region: string;
  bio: string;
  avatarBg: string;
  initials: string;
}

export interface Location {
  city: string;
  country: string;
  type: string;
  address: string;
  email: string;
  phone?: string;
  isHq?: boolean;
}

export interface PeriodicElement {
  symbol: string;
  number: number;
  name: string;
  category: 'Foundation' | 'Agents' | 'DevX' | 'Orchestration' | 'VectorData' | 'Governance' | 'MLOps' | 'EdgeUI';
  description: string;
  maturity: 'Enterprise Ready' | 'Rapidly Evolving' | 'Pioneering';
  useCases: string[];
  keyTools: string[];
}

export interface CaseStudy {
  client: string;
  sector: string;
  challenge: string;
  solution: string;
  impact: string;
  tag: string;
}

export interface Whitepaper {
  title: string;
  author: string;
  readTime: string;
  category: string;
  description: string;
  downloads: string;
}

export const TRANSFORMATION_LOOPS: TransformationLoop[] = [
  {
    id: 'clarity',
    name: 'Clarity Loop',
    tagline: 'Product & Experience',
    description: 'Bridging enterprise strategy and user intent with AI-native product strategy, user journey mapping, and high-fidelity interface design.',
    color: '#00D2FF',
    accentClass: 'text-cyan-400 border-cyan-500/30 bg-cyan-950/20',
    services: [
      {
        id: 'exp-interface-design',
        title: 'Experience & Interface Design',
        description: 'Crafting responsive, high-empathy digital experiences for complex enterprise workflows, multi-persona portals, and agent-human interaction canvases.',
        deliverables: ['Design Systems & Design Tokens', 'Multi-Persona Journey Architectures', 'Interactive Prototypes', 'Accessibility & WCAG Audits'],
        metrics: '+45% User Task Completion Velocity'
      },
      {
        id: 'product-mgmt-strategy',
        title: 'Product Management & Strategy',
        description: 'Aligning business economics with engineering capability to define clear roadmaps, outcome-driven metrics, and composable capability portfolios.',
        deliverables: ['Opportunity Solution Trees', 'Outcome KPI Scorecards', 'Competitive Moat Analysis', 'Product Operating Model Design'],
        metrics: '3.2x Faster Release Cadence'
      },
      {
        id: 'ai-product-design',
        title: 'AI Product Design',
        description: 'Reimagining products around generative UI, autonomous agents, prompt affordances, and human-in-the-loop control loops.',
        deliverables: ['Agentic Persona Blueprints', 'Dynamic Contextual Canvas UX', 'Confidence & Provenance Indicators', 'Failure-State Recovery Journeys'],
        metrics: '88% Adoption Across Enterprise Users'
      }
    ]
  },
  {
    id: 'build',
    name: 'Build Loop',
    tagline: 'Engineering',
    description: 'Engineering resilient, scalable, and secure distributed software architectures, streaming data foundations, and high-throughput AI pipelines.',
    color: '#00F5A0',
    accentClass: 'text-emerald-400 border-emerald-500/30 bg-emerald-950/20',
    services: [
      {
        id: 'product-engineering',
        title: 'Product Engineering',
        description: 'Full-stack cloud-native software engineering applying domain-driven design, clean architecture, event sourcing, and modern reactive frontends.',
        deliverables: ['Microservices & Event-Driven Systems', 'Modern Web & Mobile Architectures', 'Legacy Refactoring & Modular Monoliths', 'Zero-Downtime Migration Blueprints'],
        metrics: '99.99% Reliability on High-Volume APIs'
      },
      {
        id: 'data-ai-engineering',
        title: 'Data & AI Engineering',
        description: 'Unifying operational databases, real-time feature stores, streaming pipelines, and vector knowledge graphs for generative AI models.',
        deliverables: ['Enterprise RAG & Hybrid Retrieval Pipelines', 'Real-time Vector Databases & Embeddings', 'Lakehouse Architectures (Databricks/Snowflake)', 'Automated Feature Engineering'],
        metrics: '10x Faster Retrieval at Scale'
      },
      {
        id: 'platform-automation',
        title: 'Platform Automation Engineering',
        description: 'Building modern Internal Developer Platforms (IDPs), Backstage portals, golden paths, and infrastructure-as-code automation.',
        deliverables: ['Spotify Backstage IDP Implementation', 'Terraform & OpenTofu Enterprise Modules', 'Multi-Cloud Kubernetes Topology', 'Self-Service Developer Portals'],
        metrics: '85% Drop in Developer Onboarding Time'
      }
    ]
  },
  {
    id: 'velocity',
    name: 'Velocity Loop',
    tagline: 'Automation',
    description: 'Accelerating software delivery lifecycles with AI-augmented CI/CD pipelines, autonomous test generation, and continuous SRE resilience.',
    color: '#818CF8',
    accentClass: 'text-indigo-400 border-indigo-500/30 bg-indigo-950/20',
    services: [
      {
        id: 'devsecops-sre',
        title: 'DevSecOps, SRE & CloudOps',
        description: 'Embedding automated compliance, shift-left static/dynamic vulnerability scans, chaos testing, and autonomic autoscaling.',
        deliverables: ['Air-Gapped & Ephemeral Environments', 'Policy-as-Code (OPA / Kyverno)', 'SLO-Driven Alerting & Incident Runbooks', 'FinOps Cloud Spend Optimization'],
        metrics: '62% Reduction in Mean Time to Recover (MTTR)'
      },
      {
        id: 'test-engineering',
        title: 'Test Engineering & Automation (TestCraft)',
        description: 'Autonomous synthetic data generation, self-healing test automation, accessibility validation, and performance benchmarking.',
        deliverables: ['Autonomous Test Synthesis', 'Self-Healing Playwright/Cypress Frameworks', 'Contract-Based API Verification', 'Cross-Platform Chaos Validation'],
        metrics: '94% Regression Testing Automation'
      },
      {
        id: 'ai-native-sdlc',
        title: 'AI in CI/CD & DevSecOps',
        description: 'Integrating LLM code reviewers, automatic changelog generation, test-gap analyzers, and intelligent release hazard detection.',
        deliverables: ['Automated PR Copilots & Security Triage', 'Release Blast-Radius Simulation', 'Semantic Dependency Scanners', 'Synthetic Production Canary Testing'],
        metrics: '4x More Frequent Safe Deployments'
      }
    ]
  },
  {
    id: 'improvement',
    name: 'Improvement Loop',
    tagline: 'Governance & Scale',
    description: 'Securing the enterprise with comprehensive AI governance, compliance guardrails, full-stack observability, and continuous maturity benchmarking.',
    color: '#F59E0B',
    accentClass: 'text-amber-400 border-amber-500/30 bg-amber-950/20',
    services: [
      {
        id: 'ai-governance',
        title: 'AI & Engineering Governance',
        description: 'Establishing ethical AI frameworks, guardrails against data exfiltration, model drift tracking, and model card registries.',
        deliverables: ['Model Card & Lineage Registries', 'Bias & Hallucination Guardrails', 'EU AI Act & NIST AI RMF Alignment', 'Prompt Security & Jailbreak Defense'],
        metrics: '100% Audit-Ready AI Operations'
      },
      {
        id: 'compliance-security',
        title: 'Compliance, Security & Risk',
        description: 'Zero Trust architectural design, cryptographic identity verification, SOC2/ISO27001 readiness, and regulatory compliance.',
        deliverables: ['Zero Trust Network Architectures', 'Continuous Posture Auditing', 'Threat Modeling & Red Teaming', 'Cryptographic Key Management'],
        metrics: 'Zero High-Severity Cloud Breaches'
      },
      {
        id: 'observability-maturity',
        title: 'Observability & Maturity Index',
        description: 'End-to-end distributed telemetry with OpenTelemetry, LLM observability (cost, latency, token consumption), and organizational benchmarking.',
        deliverables: ['OpenTelemetry Instrumentation', 'LLM Tracing & Token Cost Auditing', 'Observability Maturity Scan Assessment', 'Executive Executive Telemetry Dashboards'],
        metrics: 'Sub-second Root-Cause Identification'
      }
    ]
  }
];

export const LEADERSHIP_TEAM: Leader[] = [
  {
    name: 'Karan Nangru',
    role: 'Founder & CEO',
    region: 'Dallas, TX',
    bio: 'Pioneering technologist and strategist guiding Fortune 500 enterprises through AI-native digital transformation, platform engineering, and modern operating models.',
    avatarBg: 'from-emerald-500/30 to-cyan-500/30',
    initials: 'KN'
  },
  {
    name: 'Nitin Parab',
    role: 'Managing Partner & Board Member',
    region: 'San Francisco, CA',
    bio: 'Senior executive and board advisor with deep experience scaling high-growth technology consultancies and driving strategic enterprise alliances worldwide.',
    avatarBg: 'from-blue-500/30 to-indigo-500/30',
    initials: 'NP'
  },
  {
    name: 'Rohit Dokania',
    role: 'Chief Financial Officer (CFO)',
    region: 'Dallas, TX',
    bio: 'Directs global financial operations, capital allocation, and compliance frameworks supporting StatusNeo rapid cross-border expansion.',
    avatarBg: 'from-purple-500/30 to-pink-500/30',
    initials: 'RD'
  },
  {
    name: 'Shankar Garg',
    role: 'Managing Director & Co-Founder – EMEA',
    region: 'London, UK',
    bio: 'Leads StatusNeo enterprise client partnerships, banking transformations, and consulting practices across the UK, Europe, and the Middle East.',
    avatarBg: 'from-cyan-500/30 to-blue-500/30',
    initials: 'SG'
  },
  {
    name: 'Gaurav Sarien',
    role: 'Managing Director & Co-Founder – APAC',
    region: 'Gurugram, India',
    bio: 'Spearheads high-volume engineering delivery, innovation centers of excellence, and Global Capability Center (GCC) scaling initiatives across APAC.',
    avatarBg: 'from-amber-500/30 to-orange-500/30',
    initials: 'GS'
  },
  {
    name: 'Preeti Kanwar',
    role: 'Chief Operating Officer (COO)',
    region: 'Gurugram, India',
    bio: 'Drives operational excellence, talent empowerment, global program governance, and cross-functional engineering execution across all regional delivery hubs.',
    avatarBg: 'from-rose-500/30 to-purple-500/30',
    initials: 'PK'
  },
  {
    name: 'Kartik Bhanot',
    role: 'Chief Technology & AI – Americas',
    region: 'Dallas, TX',
    bio: 'Architect of StatusNeo AuthenticAI™ framework, guiding enterprise generative AI stacks, agentic architectures, and autonomous SDLC transformations.',
    avatarBg: 'from-emerald-500/30 to-teal-500/30',
    initials: 'KB'
  },
  {
    name: 'Maria Voskanyan',
    role: 'GM, Tbilisi Hub & COE Lead – Product Design',
    region: 'Tbilisi, Georgia',
    bio: 'Directs Eastern European delivery operations and heads the global design center of excellence, shaping user experience and interface innovations.',
    avatarBg: 'from-fuchsia-500/30 to-cyan-500/30',
    initials: 'MV'
  },
  {
    name: 'Neeti Sukhtankar',
    role: 'SVP – Americas',
    region: 'New York, NY',
    bio: 'Manages strategic enterprise client relationships, digital transformation portfolios, and consultative engineering engagements across North America.',
    avatarBg: 'from-sky-500/30 to-indigo-500/30',
    initials: 'NS'
  }
];

export const GLOBAL_LOCATIONS: Location[] = [
  {
    city: 'Dallas, Texas',
    country: 'United States',
    type: 'Global Corporate Headquarters',
    address: 'StatusNeo Inc., 5830 Granite Pkwy, Suite 100, Plano / Dallas, TX 75024',
    email: 'reach@statusneo.com',
    phone: '+1 (214) 919-5557',
    isHq: true
  },
  {
    city: 'San Francisco & Palo Alto',
    country: 'United States',
    type: 'AI Innovation Hub & Executive Center',
    address: 'Silicon Valley Innovation Center, University Avenue, Palo Alto, CA 94301',
    email: 'us.west@statusneo.com'
  },
  {
    city: 'London',
    country: 'United Kingdom',
    type: 'EMEA Regional Headquarters',
    address: '1 Fore Street Avenue, London EC2Y 9DT, United Kingdom',
    email: 'emea@statusneo.com'
  },
  {
    city: 'Gurugram & Delhi NCR',
    country: 'India',
    type: 'APAC Headquarters & Global Delivery COE',
    address: 'DLF Cyber City, Tower B, Phase III, Gurugram, Haryana 122002',
    email: 'apac@statusneo.com',
    phone: '+91 (124) 489-3200'
  },
  {
    city: 'Tbilisi',
    country: 'Georgia',
    type: 'European Product Design & Engineering Hub',
    address: 'Chavchavadze Avenue, Vake District, Tbilisi, Georgia',
    email: 'tbilisi.coe@statusneo.com'
  },
  {
    city: 'Singapore',
    country: 'Singapore',
    type: 'Southeast Asia Strategic Hub',
    address: 'Marina Bay Financial Centre, Tower 1, Singapore 018981',
    email: 'apac.sea@statusneo.com'
  }
];

export const PERIODIC_ELEMENTS: PeriodicElement[] = [
  // Foundation Models
  { symbol: 'G4', number: 1, name: 'GPT-4o / Omni', category: 'Foundation', description: 'Multimodal foundation model for real-time complex reasoning and vision.', maturity: 'Enterprise Ready', useCases: ['Document parsing', 'Code reasoning', 'Conversational intelligence'], keyTools: ['Azure OpenAI', 'OpenAI API'] },
  { symbol: 'Cl', number: 2, name: 'Claude 3.5 Sonnet', category: 'Foundation', description: 'Premier frontier model for high-precision code synthesis, reasoning, and context window analysis.', maturity: 'Enterprise Ready', useCases: ['Refactoring', 'Complex agent coordination', 'Policy verification'], keyTools: ['Anthropic API', 'AWS Bedrock'] },
  { symbol: 'Ge', number: 3, name: 'Gemini 2.5 Flash', category: 'Foundation', description: 'High-speed multimodal intelligence with native long-context retrieval.', maturity: 'Enterprise Ready', useCases: ['Real-time streaming', 'Enterprise audio/video indexing', 'Large repo analysis'], keyTools: ['Google GenAI SDK', 'Vertex AI'] },
  { symbol: 'Ll', number: 4, name: 'Llama 3.3 70B', category: 'Foundation', description: 'Open-weights standard for on-premises enterprise sovereign deployment.', maturity: 'Enterprise Ready', useCases: ['Air-gapped data', 'Cost-effective internal summarization', 'Fine-tuning'], keyTools: ['vLLM', 'Ollama', 'Triton'] },
  { symbol: 'Ds', number: 5, name: 'DeepSeek R1', category: 'Foundation', description: 'Specialized mathematical and algorithmic reinforcement reasoning model.', maturity: 'Rapidly Evolving', useCases: ['Formal theorem proving', 'Complex query generation', 'Logic auditing'], keyTools: ['SGLang', 'HuggingFace TGI'] },

  // Agents
  { symbol: 'Ag', number: 6, name: 'Agentic Loop Engine', category: 'Agents', description: 'Autonomous task decomposition, tool invocation, and reflection control systems.', maturity: 'Enterprise Ready', useCases: ['Autonomous research', 'Bug diagnosis', 'Customer ticket resolution'], keyTools: ['LangGraph', 'CrewAI', 'AutoGen'] },
  { symbol: 'Rf', number: 7, name: 'Self-Reflection (Reflexion)', category: 'Agents', description: 'Dynamic heuristic verification loops where agents critique their own intermediate outputs.', maturity: 'Rapidly Evolving', useCases: ['Automated PR code review', 'SQL query validation', 'Contract checks'], keyTools: ['DSPy', 'Custom Eval Harness'] },
  { symbol: 'Pl', number: 8, name: 'Planner & ReAct', category: 'Agents', description: 'Structured Plan-and-Solve and Thought-Action-Observation cognitive loop architectures.', maturity: 'Enterprise Ready', useCases: ['Complex multi-step workflows', 'ERP data reconciliations'], keyTools: ['LangChain', 'LlamaIndex Workflows'] },
  { symbol: 'Mc', number: 9, name: 'Model Context Protocol (MCP)', category: 'Agents', description: 'Open protocol standard for standardized agent-to-tool client/server execution.', maturity: 'Enterprise Ready', useCases: ['Unified enterprise tool connectivity', 'Database querying', 'Git operations'], keyTools: ['Anthropic MCP SDK', 'FastMCP'] },

  // DevX & Copilots
  { symbol: 'Cp', number: 10, name: 'Enterprise Code Copilots', category: 'DevX', description: 'Context-aware code completion engines integrated with corporate repositories.', maturity: 'Enterprise Ready', useCases: ['Inline autocompletion', 'Test stub generation', 'API signature assistance'], keyTools: ['GitHub Copilot', 'Cursor', 'Continue.dev'] },
  { symbol: 'Bk', number: 11, name: 'Backstage DevX Fabric', category: 'DevX', description: 'Internal Developer Portal unifying microservices, golden paths, and documentation.', maturity: 'Enterprise Ready', useCases: ['Developer onboarding', 'Service ownership catalog', 'Standardized templating'], keyTools: ['Spotify Backstage', 'Roadie', 'StatusNeo DevX'] },
  { symbol: 'Pr', number: 12, name: 'Automated PR Triage', category: 'DevX', description: 'AI agents analyzing pull requests for breaking changes, test gaps, and styling compliance.', maturity: 'Enterprise Ready', useCases: ['Automated review feedback', 'Release risk scoring', 'Changelog authoring'], keyTools: ['CodiumAI', 'PR-Agent', 'GitHub Actions'] },
  { symbol: 'Tc', number: 13, name: 'TestCraft Synthesis', category: 'DevX', description: 'Autonomous synthetic test generation, self-healing Playwright/Cypress suites.', maturity: 'Enterprise Ready', useCases: ['End-to-end regression', 'Visual regression validation', 'Edge-case synthesis'], keyTools: ['TestCraft Engine', 'Playwright', 'Vitest'] },

  // Orchestration & Workflows
  { symbol: 'Lg', number: 14, name: 'LangGraph State Machines', category: 'Orchestration', description: 'Cyclic graph orchestration for fault-tolerant, persistent stateful AI agents.', maturity: 'Enterprise Ready', useCases: ['Human-in-the-loop approvals', 'Branching decision workflows', 'Long-running tasks'], keyTools: ['LangGraph', 'LangSmith'] },
  { symbol: 'Tm', number: 15, name: 'Temporal Orchestration', category: 'Orchestration', description: 'Durable execution engine ensuring zero loss of in-flight business workflow state.', maturity: 'Enterprise Ready', useCases: ['Payment settlement', 'Multi-day onboarding flows', 'Disaster recovery failover'], keyTools: ['Temporal.io', 'AWS Step Functions'] },
  { symbol: 'Fn', number: 16, name: 'Structured Tool Calling', category: 'Orchestration', description: 'Deterministic JSON schema function calling for strict type-safe execution.', maturity: 'Enterprise Ready', useCases: ['Database writes', 'ERP updates', 'REST endpoint triggers'], keyTools: ['JSON Schema', 'Zod', 'Pydantic'] },

  // Vector & Data
  { symbol: 'Qd', number: 17, name: 'Qdrant / Milvus', category: 'VectorData', description: 'High-throughput distributed vector database with filtered scalar search.', maturity: 'Enterprise Ready', useCases: ['Semantic document search', 'Image recommendation', 'Knowledge retrieval'], keyTools: ['Qdrant', 'Milvus', 'Pinecone'] },
  { symbol: 'Kg', number: 18, name: 'Knowledge Graph RAG (GraphRAG)', category: 'VectorData', description: 'Combining semantic vector retrieval with relational entity knowledge graphs.', maturity: 'Enterprise Ready', useCases: ['Regulatory compliance', 'Complex relationship traversal', 'Financial fraud detection'], keyTools: ['Neo4j', 'LlamaIndex Graph', 'NetworkX'] },
  { symbol: 'Em', number: 19, name: 'ColBERT & Dense Embeddings', category: 'VectorData', description: 'Multi-vector late-interaction retrieval for token-level precision.', maturity: 'Enterprise Ready', useCases: ['Technical manual search', 'Legal clause lookup', 'FAQ grounding'], keyTools: ['Cohere Embed v3', 'BGE-M3', 'Jina AI'] },

  // Governance & Guardrails
  { symbol: 'Gd', number: 20, name: 'NeMo & Llama Guard', category: 'Governance', description: 'Deterministic input/output filtering for toxicity, prompt injection, and PII redaction.', maturity: 'Enterprise Ready', useCases: ['Customer privacy compliance', 'Jailbreak protection', 'Off-topic containment'], keyTools: ['NVIDIA NeMo Guardrails', 'Meta Llama Guard 3'] },
  { symbol: 'Rg', number: 21, name: 'Model Registry & Lineage', category: 'Governance', description: 'Immutable artifact tracking for fine-tuned weights, training datasets, and prompts.', maturity: 'Enterprise Ready', useCases: ['SOC2 compliance', 'Model audit trails', 'Rollback verification'], keyTools: ['MLflow', 'Weights & Biases', 'AWS SageMaker'] },
  { symbol: 'Eu', number: 22, name: 'EU AI Act Compliance Engine', category: 'Governance', description: 'Risk classification framework scoring AI systems against global statutory requirements.', maturity: 'Enterprise Ready', useCases: ['High-risk system classification', 'Conformity assessment', 'Continuous compliance reporting'], keyTools: ['StatusNeo Governance Suite', 'NIST AI RMF'] },

  // MLOps & Eval
  { symbol: 'Ev', number: 23, name: 'Ragas & DeepEval', category: 'MLOps', description: 'Automated evaluation frameworks for faithfulness, answer relevance, and hallucination rates.', maturity: 'Enterprise Ready', useCases: ['CI/CD regression gating for RAG', 'Benchmark leaderboard tracking'], keyTools: ['Ragas', 'DeepEval', 'Promptfoo'] },
  { symbol: 'Ot', number: 24, name: 'OpenTelemetry GenAI Semantic', category: 'MLOps', description: 'Standardized distributed tracing attributes for prompt tokens, duration, and model calls.', maturity: 'Enterprise Ready', useCases: ['Latency bottleneck triage', 'Token budget observability', 'Cost attribution'], keyTools: ['OpenTelemetry', 'Langfuse', 'Arize Phoenix'] },

  // Edge & UI
  { symbol: 'Gu', number: 25, name: 'Generative UI (v0/CopilotKit)', category: 'EdgeUI', description: 'Dynamic on-the-fly rendering of bespoke UI components synthesized by model outputs.', maturity: 'Rapidly Evolving', useCases: ['Dynamic analytical charts', 'Custom forms generated on demand', 'Interactive agent widgets'], keyTools: ['CopilotKit', 'Vercel AI SDK Generative UI'] },
  { symbol: 'Wn', number: 26, name: 'WebGPU On-Device SLMs', category: 'EdgeUI', description: 'Running quantized small language models directly in the user browser without cloud latency.', maturity: 'Pioneering', useCases: ['Zero-data-leakage client forms', 'Offline diagnostics', 'Instant typing autocompletion'], keyTools: ['WebLLM', 'Transformers.js', 'ONNX Runtime Web'] }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    client: 'Global Tier-1 Investment Bank',
    sector: 'Financial Services & Banking',
    challenge: 'Legacy microservices with 14-day manual compliance verification cycles stalling new credit product launches.',
    solution: 'Engineered an AI-native DevSecOps pipeline with automated risk verification, synthetic test generation via TestCraft, and OpenTelemetry distributed tracing.',
    impact: '73% Reduction in release cycle time; 0 regulatory compliance infractions in 18 months.',
    tag: 'Fintech & Banking'
  },
  {
    client: 'Leading Healthcare & Telehealth Provider',
    sector: 'Healthcare & Life Sciences',
    challenge: 'Patient triage bottleneck with massive physician burnout and strict HIPAA data residency constraints.',
    solution: 'Designed an air-gapped Agentic Clinical Assist platform with deterministic Guardrails and human-in-the-loop audit checkpoints.',
    impact: '4.2x Faster triage turnaround; 98.4% clinical note synthesis accuracy with full data encryption.',
    tag: 'Healthcare'
  },
  {
    client: 'Multinational Retail & E-Commerce Giant',
    sector: 'Retail & Supply Chain',
    challenge: 'High developer fragmentation across 180+ teams resulting in duplicate microservices and sluggish cloud adoption.',
    solution: 'Deployed Spotify Backstage-led DevX Fabric with custom golden paths, automated Terraform provisioning, and real-time FinOps monitoring.',
    impact: '$3.4M Annual cloud infrastructure savings; developer onboarding reduced from 6 weeks to 3 days.',
    tag: 'Retail & CloudOps'
  }
];

export const WHITEPAPERS: Whitepaper[] = [
  {
    title: 'The AI-Native SDLC Architecture: From Ambition to Autonomous Systems',
    author: 'Karan Nangru & Kartik Bhanot',
    readTime: '16 min read',
    category: 'Engineering Architecture',
    description: 'An architectural blueprint for orchestrating agentic workflows, deterministic guardrails, and self-healing CI/CD pipelines in enterprise environments.',
    downloads: '14.2k'
  },
  {
    title: 'Enterprise DevX OS: Reimagining Backstage for the Generative Era',
    author: 'StatusNeo Platform Engineering Practice',
    readTime: '12 min read',
    category: 'Platform Engineering',
    description: 'How leading enterprises utilize internal developer portals, golden paths, and AI copilots to double software delivery throughput.',
    downloads: '9.8k'
  },
  {
    title: 'Observability & Telemetry Maturity Index 2026: Benchmarking SRE Readiness',
    author: 'StatusNeo SRE & CloudOps Group',
    readTime: '18 min read',
    category: 'CloudOps & Governance',
    description: 'Empirical survey of 400+ enterprise architectures evaluating distributed tracing, token consumption economics, and autonomic self-healing.',
    downloads: '11.5k'
  }
];
