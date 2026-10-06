import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Award, 
  Heart, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Search, 
  Filter, 
  Sparkles, 
  X, 
  Upload, 
  Send,
  Users,
  ShieldCheck,
  Check
} from 'lucide-react';

interface CareersViewProps {
  onOpenConsultation: () => void;
  onNavigate: (view: string) => void;
}

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  skills: string[];
}

export const CareersView: React.FC<CareersViewProps> = ({ onOpenConsultation, onNavigate }) => {
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeJobForModal, setActiveJobForModal] = useState<Job | null>(null);
  const [applicationSubmitted, setApplicationSubmitted] = useState<boolean>(false);

  // Form State
  const [applicantName, setApplicantName] = useState<string>('');
  const [applicantEmail, setApplicantEmail] = useState<string>('');
  const [applicantPhone, setApplicantPhone] = useState<string>('');
  const [applicantLinkedIn, setApplicantLinkedIn] = useState<string>('');
  const [applicantResume, setApplicantResume] = useState<string>('resume.pdf');
  const [applicantNote, setApplicantNote] = useState<string>('');

  const jobs: Job[] = [
    {
      id: 'job-1',
      title: 'Senior DevOps / SRE Engineer (Kubernetes & Platform)',
      department: 'DevOps & Cloud',
      location: 'Plano, TX / Remote US',
      type: 'Full-Time',
      experience: '5-8 Years',
      description: 'Lead zero-trust cloud infrastructure and automated ArgoCD CI/CD pipelines across multi-cloud environments (AWS/GCP).',
      skills: ['Kubernetes', 'Terraform', 'ArgoCD', 'AWS', 'Prometheus']
    },
    {
      id: 'job-2',
      title: 'Staff AI Engineer / Agentic Systems Architect',
      department: 'Artificial Intelligence',
      location: 'Palo Alto, CA / Remote US',
      type: 'Full-Time',
      experience: '7+ Years',
      description: 'Architect production-grade enterprise multi-agent workflows using LangGraph, RAG pipelines, and deterministic LLM guardrails.',
      skills: ['Python', 'LangGraph', 'Vector DBs', 'Llama 3 / Claude', 'RAG']
    },
    {
      id: 'job-3',
      title: 'Lead Software Development Engineer in Test (SDET - TestCraft™)',
      department: 'Quality Engineering',
      location: 'Gurgaon / Bengaluru, India',
      type: 'Full-Time',
      experience: '4-7 Years',
      description: 'Build self-healing test frameworks and train autonomous LLM agents that author and maintain Playwright/Cypress end-to-end suites.',
      skills: ['TypeScript', 'Playwright', 'TestCraft™', 'CI/CD', 'GenAI QA']
    },
    {
      id: 'job-4',
      title: 'Principal Backstage.io Platform Architect',
      department: 'Platform Engineering',
      location: 'London, UK / Hybrid',
      type: 'Full-Time',
      experience: '8+ Years',
      description: 'Design and deploy Spotify Backstage internal developer platforms with custom plugins, golden paths, and enterprise software catalogs.',
      skills: ['Backstage.io', 'React', 'Node.js', 'Kubernetes', 'DevEx']
    },
    {
      id: 'job-5',
      title: 'Senior Java / Spring Cloud Microservices Engineer',
      department: 'Software Engineering',
      location: 'Gurgaon, India',
      type: 'Full-Time',
      experience: '5-9 Years',
      description: 'Build distributed high-throughput event-driven microservices for tier-1 banking and aviation clients.',
      skills: ['Java 21', 'Spring Boot 3', 'Apache Kafka', 'PostgreSQL', 'Docker']
    },
    {
      id: 'job-6',
      title: 'Enterprise Solution Architect - Salesforce Cloud & AI',
      department: 'Enterprise Solutions',
      location: 'Dubai, UAE / Hybrid',
      type: 'Full-Time',
      experience: '8-12 Years',
      description: 'Spearhead complex Salesforce Service & Sales Cloud implementations with Agentforce and MuleSoft integration.',
      skills: ['Salesforce', 'Agentforce', 'MuleSoft', 'Enterprise Architecture']
    },
    {
      id: 'job-7',
      title: 'Senior Data Engineer (Kafka, Spark & Databricks)',
      department: 'Artificial Intelligence',
      location: 'Bengaluru / Hyderabad, India',
      type: 'Full-Time',
      experience: '4-8 Years',
      description: 'Build real-time streaming data pipelines and feature stores for enterprise machine learning models.',
      skills: ['Apache Spark', 'Databricks', 'Kafka', 'dbt', 'Python / SQL']
    }
  ];

  const departments = ['all', 'Artificial Intelligence', 'Software Engineering', 'DevOps & Cloud', 'Quality Engineering', 'Platform Engineering', 'Enterprise Solutions'];
  const locations = ['all', 'Plano, TX / Remote US', 'Palo Alto, CA / Remote US', 'London, UK / Hybrid', 'Gurgaon / Bengaluru, India', 'Dubai, UAE / Hybrid'];

  const filteredJobs = jobs.filter(job => {
    const matchesDept = selectedDept === 'all' || job.department === selectedDept;
    const matchesLocation = selectedLocation === 'all' || job.location.toLowerCase().includes(selectedLocation.toLowerCase().split('/')[0].trim());
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDept && matchesLocation && matchesSearch;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setApplicationSubmitted(true);
  };

  const closeModal = () => {
    setActiveJobForModal(null);
    setApplicationSubmitted(false);
  };

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
          <span className="text-slate-900 font-semibold">Careers at StatusNeo</span>
        </div>
      </div>

      {/* Hero Banner with Great Place to Work */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-mono font-bold tracking-wide mb-4">
                <Award className="w-4 h-4 text-emerald-600" />
                Great Place to Work-Certified™ 2024–2026
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-normal tracking-tight text-[#111013] leading-[1.15]">
                A Craft-Led, AI-Optimized Collective.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                At StatusNeo, we don’t do corporate bureaucracy or endless middle management. 
                We are a flat, fast, and fluid team of makers, engineers, and AI pioneers building the systems powering the world's most critical enterprises.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a 
                  href="#open-roles"
                  className="px-6 py-3.5 text-xs font-bold uppercase tracking-wider btn-statusneo shadow-md cursor-pointer flex items-center gap-2"
                >
                  <span>Explore Open Opportunities</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <div className="flex items-center gap-2 text-xs font-mono font-medium text-slate-600 px-3 py-2 bg-slate-100/80 rounded-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>Direct Hiring · Fast 3-Stage Process</span>
                </div>
              </div>
            </div>

            {/* Certification & Culture Badge Card */}
            <div className="lg:col-span-5">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl -mr-10 -mt-10 pointer-events-none"></div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 flex items-center justify-center text-amber-800 shrink-0 font-black text-xl">
                    SN
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase font-bold text-amber-800">Certified Excellence</div>
                    <div className="text-lg font-black text-slate-900">Great Place to Work®</div>
                    <div className="text-xs text-slate-500">Global Trust Index Rating: 94%+</div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cutting-edge AI Tooling &amp; Unlimited Compute Budget</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Cross-Border Mobility across US, UK, UAE &amp; India</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>AuthenticAI™ Certification &amp; Continuous Learning Stipend</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-xs font-medium text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Flat Hierarchy: Work directly with CTO &amp; Practice Heads</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-center">
                  <span className="text-[11px] font-mono text-slate-500">
                    Questions? Email <a href="mailto:careers@statusneo.com" className="font-bold text-amber-700 hover:underline">careers@statusneo.com</a>
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Culture Pillars 4-Grid */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
              Life at StatusNeo
            </span>
            <h2 className="text-2xl sm:text-3xl font-normal text-[#111013] tracking-tight">
              Why Engineers Choose StatusNeo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center mb-4">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Zero Slop, Pure Code</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                We despise empty meetings and endless powerpoints. We value clean code, reproducible infra, and production deployment velocity.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">AI-Native Engineering</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Every engineer gets enterprise licenses to GitHub Copilot, Claude 3.5, OpenAI GPT-4o, and our internal TestCraft™ tools.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Global Hubs, Local Tribe</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Collaborate seamlessly with colleagues across Dallas, Silicon Valley, London, Dubai, and top-tier tech campuses across India.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-800 flex items-center justify-center mb-4">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Holistic Wellness</h3>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Comprehensive health insurance, flexible working models, paid parental leaves, and bi-annual company hackathons and retreats.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Roles Board */}
      <section id="open-roles" className="py-16 sm:py-24 bg-white border-b border-slate-200 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-amber-800 font-bold block mb-2">
                Join the Team
              </span>
              <h2 className="text-2xl sm:text-3xl font-normal text-[#111013] tracking-tight">
                Current Openings ({filteredJobs.length})
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Find your next career leap in AI-led engineering, cloud reliability, and quality engineering.
              </p>
            </div>

            {/* Search Bar */}
            <div className="w-full md:w-80 relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by role, skill, or keyword..."
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500 bg-slate-50"
              />
            </div>
          </div>

          {/* Department Filter Chips */}
          <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-100">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-slate-900 text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings List */}
          <div className="space-y-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
                <Briefcase className="w-10 h-10 text-slate-400 mx-auto mb-3" />
                <h4 className="text-sm font-bold text-slate-900">No open positions match your search</h4>
                <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
                  Try clearing your search query or department filter, or submit an open application directly.
                </p>
                <button
                  onClick={() => {
                    setSelectedDept('all');
                    setSelectedLocation('all');
                    setSearchQuery('');
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:text-slate-900 cursor-pointer shadow-2xs"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div 
                  key={job.id}
                  className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-amber-300 hover:shadow-md transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
                >
                  <div className="space-y-2 max-w-2xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-mono uppercase font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                        {job.department}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-400" />
                        {job.location}
                      </span>
                      <span className="text-[11px] font-mono text-slate-500 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-400" />
                        {job.type} · {job.experience}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer" onClick={() => setActiveJobForModal(job)}>
                      {job.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-100 text-slate-600 border border-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-3">
                    <button
                      onClick={() => setActiveJobForModal(job)}
                      className="w-full md:w-auto px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Open Pitch Card */}
          <div className="mt-12 p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-base font-bold text-slate-900">Don’t see your exact role listed?</h4>
              <p className="text-xs text-slate-600">
                We are constantly expanding our engineering squads for outstanding Staff Engineers, AI researchers, and Architects.
              </p>
            </div>
            <a
              href="mailto:careers@statusneo.com?subject=Open%20Application%20-%20StatusNeo"
              className="px-5 py-2.5 rounded-xl bg-white border border-slate-300 hover:border-slate-800 text-slate-900 text-xs font-bold transition-all shadow-2xs shrink-0 cursor-pointer"
            >
              Send Open Application to careers@statusneo.com
            </a>
          </div>

        </div>
      </section>

      {/* Application Modal */}
      {activeJobForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-300">
                  <Check className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-slate-900">Application Submitted!</h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <span className="font-bold text-slate-900">{applicantName || 'Candidate'}</span>. Your profile for <span className="font-bold text-slate-900">{activeJobForModal.title}</span> has been received by our Talent Acquisition Squad. Expect a response within 48 hours.
                </p>
                <button
                  onClick={closeModal}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-slate-900 text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Done
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-mono uppercase font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                  {activeJobForModal.department}
                </span>

                <h3 className="text-xl font-black text-slate-900 mt-2">
                  Apply for {activeJobForModal.title}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Location: {activeJobForModal.location} · {activeJobForModal.type}
                </p>

                <form onSubmit={handleApplySubmit} className="mt-6 space-y-4 text-xs">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                    <input 
                      type="text" 
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="Jane Doe"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Email Address *</label>
                      <input 
                        type="email" 
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="jane@example.com"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Phone Number *</label>
                      <input 
                        type="tel" 
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">LinkedIn Profile or GitHub URL</label>
                    <input 
                      type="url" 
                      value={applicantLinkedIn}
                      onChange={(e) => setApplicantLinkedIn(e.target.value)}
                      placeholder="https://linkedin.com/in/username"
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Resume / CV</label>
                    <div className="p-3 border border-dashed border-slate-300 rounded-lg bg-slate-50 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-slate-600">
                        <Upload className="w-4 h-4 text-amber-600" />
                        <span className="font-mono text-[11px]">{applicantResume}</span>
                      </div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase">Ready</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Why StatusNeo? (Brief Note)</label>
                    <textarea 
                      rows={3}
                      value={applicantNote}
                      onChange={(e) => setApplicantNote(e.target.value)}
                      placeholder="Share a sentence about your engineering background or what excites you about AuthenticAI..."
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-amber-500 bg-slate-50"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
