import Reveal from '@/components/Reveal'
import { useState } from 'react'

export default function SolutionsPage() {
  type IndustryKey = keyof typeof solutions;
  const [activeIndustry, setActiveIndustry] = useState<IndustryKey>('enterprise')

  const solutions = {
    enterprise: {
      title: 'Enterprise Solutions',
      subtitle: 'Complete IT asset lifecycle management',
      description: 'Streamline your enterprise IT refresh cycles with automated data sanitization, compliance reporting, and asset tracking.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      benefits: [
        'Reduce IT refresh cycle time by 60%',
        'Ensure 100% compliance with data protection regulations',
        'Automated certificate generation and archival',
        'Integration with existing ITSM platforms'
      ],
      useCases: [
        { title: 'Hardware Refresh', description: 'Secure sanitization during equipment upgrades' },
        { title: 'Employee Offboarding', description: 'Complete data removal from departing employee devices' },
        { title: 'Merger & Acquisition', description: 'Data sanitization during corporate restructuring' },
        { title: 'Compliance Audits', description: 'Generate audit-ready reports for regulatory compliance' }
      ]
    },
    itad: {
      title: 'ITAD Solutions',
      subtitle: 'IT Asset Disposition made simple',
      description: 'Purpose-built workflows for ITAD providers to process thousands of devices efficiently while maintaining compliance.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      benefits: [
        'Process up to 1000 devices per day',
        'Multi-client management with data segregation',
        'Automated invoicing and reporting',
        'Chain of custody documentation'
      ],
      useCases: [
        { title: 'Bulk Processing', description: 'Handle large volumes of client devices efficiently' },
        { title: 'Multi-Client Operations', description: 'Manage multiple client jobs simultaneously' },
        { title: 'Compliance Reporting', description: 'Generate client-specific compliance certificates' },
        { title: 'Asset Valuation', description: 'Automated asset assessment and pricing' }
      ]
    },
    healthcare: {
      title: 'Healthcare Solutions',
      subtitle: 'HIPAA-compliant data sanitization',
      description: 'Specialized solutions for healthcare organizations requiring HIPAA compliance and patient data protection.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      benefits: [
        'HIPAA-compliant data destruction',
        'PHI-specific sanitization protocols',
        'Medical device data erasure',
        'Regulatory audit support'
      ],
      useCases: [
        { title: 'Medical Device Lifecycle', description: 'Secure erasure of diagnostic and monitoring equipment' },
        { title: 'EMR System Migrations', description: 'Safe data handling during system upgrades' },
        { title: 'Research Data Management', description: 'Compliant destruction of clinical trial data' },
        { title: 'HIPAA Audit Preparation', description: 'Documentation for compliance audits' }
      ]
    },
    financial: {
      title: 'Financial Services',
      subtitle: 'Banking-grade security standards',
      description: 'Ultra-secure data sanitization for financial institutions with stringent regulatory requirements.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        'SOX and PCI DSS compliance',
        'Customer data protection',
        'Trading system sanitization',
        'Regulatory reporting automation'
      ],
      useCases: [
        { title: 'Trading Floor Equipment', description: 'Secure erasure of high-frequency trading systems' },
        { title: 'Customer Data Protection', description: 'PII and financial data sanitization' },
        { title: 'Regulatory Compliance', description: 'SOX, PCI DSS, and GDPR compliance support' },
        { title: 'Branch Closures', description: 'Complete sanitization during office relocations' }
      ]
    },
    government: {
      title: 'Government Solutions',
      subtitle: 'Military-grade security for public sector',
      description: 'Classified data sanitization solutions meeting the highest government security standards.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      benefits: [
        'FISMA and FedRAMP compliance',
        'Classified data handling',
        'NSA-approved sanitization',
        'Security clearance support'
      ],
      useCases: [
        { title: 'Classified Systems', description: 'Top secret and classified data sanitization' },
        { title: 'Defense Contracts', description: 'DOD-compliant data destruction protocols' },
        { title: 'Agency Migrations', description: 'Secure data handling during system modernization' },
        { title: 'FISMA Compliance', description: 'Federal information security management' }
      ]
    },
    serviceProviders: {
      title: 'Service Providers',
      subtitle: 'White-label solutions for MSPs',
      description: 'Comprehensive data sanitization services that MSPs can offer to their clients with full branding.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      benefits: [
        'White-label branding options',
        'Multi-tenant client management',
        'Revenue sharing programs',
        'Technical support included'
      ],
      useCases: [
        { title: 'Client Services', description: 'Offer data sanitization as a managed service' },
        { title: 'Partner Programs', description: 'Revenue-generating partnerships' },
        { title: 'Technical Integration', description: 'API integration with existing platforms' },
        { title: 'Support Services', description: '24/7 technical support for your clients' }
      ]
    }
  }

  const caseStudies = [
    {
      company: 'Global Bank',
      industry: 'Financial Services',
      challenge: 'Needed to sanitize 10,000+ workstations across 50 countries while maintaining SOX compliance.',
      solution: 'Deployed DSecure Enterprise with automated reporting and multi-region coordination.',
      results: '99.99% compliance rate, 75% reduction in processing time, $2M cost savings',
      logo: '🏦'
    },
    {
      company: 'TechCorp ITAD',
      industry: 'IT Asset Disposition',
      challenge: 'Processing 500+ devices daily for multiple clients with different compliance requirements.',
      solution: 'Implemented DSecure ITAD solution with multi-client workflow management.',
      results: '200% increase in processing capacity, 100% client compliance, automated invoicing',
      logo: '♻️'
    },
    {
      company: 'Metro Hospital Network',
      industry: 'Healthcare',
      challenge: 'HIPAA-compliant disposal of medical devices containing patient data.',
      solution: 'Custom DSecure Healthcare solution with PHI-specific sanitization protocols.',
      results: 'Zero compliance violations, 90% faster processing, automated audit trails',
      logo: '🏥'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.1)_50%,transparent_70%)]"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-emerald-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-teal-200/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-emerald-300/25 rounded-full blur-lg animate-pulse delay-500"></div>
        
        <div className="container-app relative py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <Reveal>
                <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Industry-Specific Solutions
                </div>
              </Reveal>
              
              <Reveal delayMs={100}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                  Tailored Data Erasure for{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                    Every Industry
                  </span>
                </h1>
              </Reveal>
              
              <Reveal delayMs={200}>
                <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed">
                  Specialized workflows, compliance frameworks, and reporting tools designed for your industry's unique requirements. 
                  From healthcare HIPAA compliance to financial PCI DSS standards.
                </p>
              </Reveal>
              
              <Reveal delayMs={300}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
                  <a href="/contact" className="btn-primary group">
                    <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    Discuss Your Needs
                  </a>
                  <a href="#solutions" className="btn-secondary group">
                    <svg className="w-5 h-5 mr-2 group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                    Explore Solutions
                  </a>
                </div>
              </Reveal>
              
              <Reveal delayMs={400}>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-slate-500">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>50+ Industries Served</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>100% Compliance Rate</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>24/7 Expert Support</span>
                  </div>
                </div>
              </Reveal>
            </div>
            
            {/* Right Content - Visual Elements */}
            <div className="relative">
              <Reveal delayMs={500}>
                <div className="relative mx-auto max-w-lg">
                  {/* Main Image Container */}
                  <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl border border-white/50 overflow-hidden">
                    {/* Data Security Illustration */}
                    <div className="aspect-[4/3] bg-gradient-to-br from-slate-50 to-slate-100 p-8 flex items-center justify-center">
                      <div className="relative w-full h-full">
                        {/* Central Server/Database Icon */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Surrounding Device Icons - Positioned in a circle */}
                        {/* Top Left - Mobile Device */}
                        <div className="absolute top-6 left-12 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Top Right - Desktop Computer */}
                        <div className="absolute top-6 right-12 transform translate-x-1/2 -translate-y-1/2">
                          <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                            <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Bottom Left - Cloud Storage */}
                        <div className="absolute bottom-6 left-12 transform -translate-x-1/2 translate-y-1/2">
                          <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                            <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Bottom Right - Database */}
                        <div className="absolute bottom-6 right-12 transform translate-x-1/2 translate-y-1/2">
                          <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                            <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Security Shield Overlay */}
                        <div className="absolute top-2 right-2">
                          <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Connection Lines */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 300 240">
                          <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.4" />
                            </linearGradient>
                          </defs>
                          {/* Top Left to Center */}
                          <path d="M 48 48 L 140 110" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="4,4">
                            <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                          </path>
                          {/* Top Right to Center */}
                          <path d="M 252 48 L 160 110" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="4,4">
                            <animate attributeName="stroke-dashoffset" values="0;8" dur="2.5s" repeatCount="indefinite" />
                          </path>
                          {/* Bottom Left to Center */}
                          <path d="M 48 192 L 140 130" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="4,4">
                            <animate attributeName="stroke-dashoffset" values="0;8" dur="2.2s" repeatCount="indefinite" />
                          </path>
                          {/* Bottom Right to Center */}
                          <path d="M 252 192 L 160 130" stroke="url(#lineGradient)" strokeWidth="2" fill="none" strokeDasharray="4,4">
                            <animate attributeName="stroke-dashoffset" values="0;8" dur="1.8s" repeatCount="indefinite" />
                          </path>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Bottom Info Bar */}
                    <div className="p-6 bg-white/90 backdrop-blur-sm">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Secure Data Ecosystem</h3>
                        <p className="text-slate-600 text-sm">Complete erasure across all device types and platforms</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Floating Stats Cards */}
                  <Reveal delayMs={700}>
                    <div className="absolute -top-4 -right-4 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold">500K+</div>
                      <div className="text-xs opacity-90">Devices Secured</div>
                    </div>
                  </Reveal>
                  
                  <Reveal delayMs={800}>
                    <div className="absolute -bottom-4 -left-4 bg-gradient-to-br from-teal-500 to-teal-600 text-white p-4 rounded-xl shadow-lg">
                      <div className="text-2xl font-bold">99.9%</div>
                      <div className="text-xs opacity-90">Success Rate</div>
                    </div>
                  </Reveal>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section id="solutions" className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Solutions by Industry</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose your industry to see specialized workflows and compliance features.
            </p>
          </div>

          {/* Industry Selector */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 md:gap-4 mb-12 max-w-5xl mx-auto">
            {Object.entries(solutions).map(([key, solution]) => (
              <button
                key={key}
                onClick={() => setActiveIndustry(key as IndustryKey)}
                className={`flex items-center justify-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-xl text-sm md:text-base font-medium transition-all duration-300 whitespace-nowrap min-h-[3rem] ${
                  activeIndustry === key
                    ? 'bg-gradient-to-r from-brand to-brand-600 text-white shadow-lg shadow-brand/25 scale-105'
                    : 'bg-white text-slate-700 hover:bg-slate-50 border-2 border-slate-200 hover:border-slate-300 hover:shadow-md'
                }`}
              >
                <span className="text-xl md:text-2xl flex-shrink-0 leading-none flex items-center justify-center w-6 h-6 md:w-8 md:h-8">
                  {solution.icon}
                </span>
                <span className="hidden sm:inline leading-tight">{solution.title}</span>
                <span className="sm:hidden text-xs leading-tight">{solution.title.split(' ')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Solution Details */}
          <Reveal key={activeIndustry}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                {/* Solution Overview */}
                <div className="xl:col-span-2 p-6 md:p-8 lg:p-12">
                  <div className="inline-flex items-center justify-center w-14 h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl text-white mb-4 lg:mb-6 shadow-lg">
                    <span className="text-2xl lg:text-3xl leading-none flex items-center justify-center">
                      {solutions[activeIndustry].icon}
                    </span>
                  </div>
                  <h3 className="text-xl lg:text-2xl font-bold text-slate-900 mb-3">
                    {solutions[activeIndustry].title}
                  </h3>
                  <p className="text-base lg:text-lg text-emerald-600 font-medium mb-4">
                    {solutions[activeIndustry].subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-6 lg:mb-8">
                    {solutions[activeIndustry].description}
                  </p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 lg:mb-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Key Benefits</h4>
                      <div className="space-y-3">
                        {solutions[activeIndustry].benefits.map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                              <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-slate-700 text-sm leading-relaxed">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Common Use Cases</h4>
                      <div className="space-y-3">
                        {solutions[activeIndustry].useCases.map((useCase, index) => (
                          <div key={index} className="border border-slate-200 rounded-lg p-3">
                            <div className="font-medium text-slate-900 text-sm">{useCase.title}</div>
                            <div className="text-slate-600 text-xs mt-1">{useCase.description}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="/contact" className="btn-primary">
                      Request Demo
                    </a>
                    <a href="/pricing" className="btn-secondary">
                      View Pricing
                    </a>
                  </div>
                </div>

                {/* Sidebar */}
                <div className="bg-slate-50 p-8">
                  <h4 className="font-semibold text-slate-900 mb-6">Why Choose DSecure?</h4>
                  <div className="space-y-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Proven Track Record</div>
                        <div className="text-slate-600 text-xs mt-1">15+ years serving enterprises worldwide</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Lightning Fast</div>
                        <div className="text-slate-600 text-xs mt-1">Process thousands of devices daily</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">24/7 Support</div>
                        <div className="text-slate-600 text-xs mt-1">Expert technical support around the clock</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>  
                      <div>
                        <div className="font-medium text-slate-900 text-sm">100% Compliant</div>
                        <div className="text-slate-600 text-xs mt-1">Meet all regulatory requirements</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-900">500K+</div>
                      <div className="text-sm text-slate-600">Devices Processed</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how organizations across industries have transformed their data erasure processes with DSecure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, i) => (
              <Reveal key={i} delayMs={i*100}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/60 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{study.logo}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{study.company}</h3>
                  <div className="text-sm text-brand font-medium mb-4">{study.industry}</div>
                  
                  <div className="space-y-4 text-sm">
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Challenge:</div>
                      <div className="text-slate-600">{study.challenge}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Solution:</div>
                      <div className="text-slate-600">{study.solution}</div>
                    </div>
                    <div>
                      <div className="font-medium text-slate-900 mb-1">Results:</div>
                      <div className="text-emerald-600 font-medium">{study.results}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <Reveal>
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Data Erasure Process?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let's discuss your specific requirements and design a solution that fits your industry and compliance needs.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="bg-white text-emerald-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  Schedule Consultation
                </a>
                <a href="/resources" className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Download Resources
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


