import Reveal from '@/components/Reveal'
import { useState } from 'react'

type Standard = {
  title: string;
  fullName: string;
  description: string;
  icon: string;
  details: string;
  requirements: string[];
  implementation: string;
}

type Standards = {
  [key: string]: Standard;
}

export default function CompliancePage() {
  const [activeStandard, setActiveStandard] = useState<keyof Standards>('nist')

  const standards: Standards = {
    nist: {
      title: 'NIST 800-88',
      fullName: 'National Institute of Standards and Technology',
      description: 'Guidelines for Media Sanitization',
      icon: '🇺🇸',
      details: 'NIST Special Publication 800-88 provides guidance for sanitizing information system media to prevent the unauthorized disclosure of information.',
      requirements: [
        'Clear: Apply logical techniques to sanitize data',
        'Purge: Apply physical or logical techniques to render data recovery infeasible',
        'Destroy: Render media unusable and data unrecoverable',
        'Documentation: Maintain records of sanitization activities'
      ],
      implementation: 'DSecure implements all NIST 800-88 Rev. 1 sanitization categories with automated verification and certificate generation.'
    },
    iso27001: {
      title: 'ISO 27001',
      fullName: 'International Organization for Standardization',
      description: 'Information Security Management Systems',
      icon: '🌐',
      details: 'ISO/IEC 27001 specifies requirements for establishing, implementing, maintaining and continually improving an information security management system.',
      requirements: [
        'Asset management and classification',
        'Secure disposal of media and equipment',
        'Access control and authentication',
        'Incident management and reporting'
      ],
      implementation: 'DSecure supports ISO 27001 compliance through comprehensive asset tracking, access controls, and audit trail generation.'
    },
    gdpr: {
      title: 'GDPR',
      fullName: 'General Data Protection Regulation',
      description: 'European Union Data Protection Law',
      icon: '🇪🇺',
      details: 'The General Data Protection Regulation requires organizations to implement appropriate technical and organizational measures to ensure data protection.',
      requirements: [
        'Right to erasure ("right to be forgotten")',
        'Data protection by design and by default',
        'Demonstration of compliance',
        'Breach notification requirements'
      ],
      implementation: 'DSecure ensures GDPR compliance with verifiable data erasure, detailed logging, and automated reporting capabilities.'
    },
    hipaa: {
      title: 'HIPAA',
      fullName: 'Health Insurance Portability and Accountability Act',
      description: 'Healthcare Information Privacy and Security',
      icon: '🏥',
      details: 'HIPAA requires covered entities to implement safeguards to protect the privacy and security of protected health information (PHI).',
      requirements: [
        'Administrative safeguards for PHI access',
        'Physical safeguards for equipment and media',
        'Technical safeguards for data transmission',
        'Secure disposal of PHI-containing media'
      ],
      implementation: 'DSecure provides HIPAA-compliant sanitization with PHI-specific protocols and comprehensive audit documentation.'
    },
    sox: {
      title: 'SOX',
      fullName: 'Sarbanes-Oxley Act',
      description: 'Financial Reporting and Corporate Governance',
      icon: '📊',
      details: 'The Sarbanes-Oxley Act requires public companies to maintain accurate financial records and implement internal controls.',
      requirements: [
        'Data integrity and accuracy controls',
        'Secure retention and disposal of records',
        'Audit trail requirements',
        'Management certification of controls'
      ],
      implementation: 'DSecure supports SOX compliance through tamper-proof audit trails, secure data handling, and management reporting.'
    },
    pci: {
      title: 'PCI DSS',
      fullName: 'Payment Card Industry Data Security Standard',
      description: 'Credit Card Data Protection Requirements',
      icon: '💳',
      details: 'PCI DSS is a set of security standards designed to ensure that companies that process credit card information maintain a secure environment.',
      requirements: [
        'Secure storage and transmission of cardholder data',
        'Implement strong access control measures',
        'Regularly monitor and test networks',
        'Secure disposal of cardholder data'
      ],
      implementation: 'DSecure ensures PCI DSS compliance with certified sanitization methods and detailed compliance reporting.'
    }
  }

  const certifications = [
    {
      name: 'Common Criteria',
      level: 'EAL 4+',
      description: 'International standard for computer security certification',
      icon: '🛡️'
    },
    {
      name: 'FIPS 140-2',
      level: 'Level 3',
      description: 'Cryptographic module validation standard',
      icon: '🔐'
    },
    {
      name: 'NSA/CSS',
      level: 'Approved',
      description: 'Listed on NSA/CSS Evaluated Products List',
      icon: '🏛️'
    },
    {
      name: 'CSA STAR',
      level: 'Gold',
      description: 'Cloud Security Alliance certification',
      icon: '⭐'
    }
  ]

  const auditFeatures = [
    {
      title: 'Tamper-Proof Certificates',
      description: 'Cryptographically signed certificates that cannot be altered or forged',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: 'Chain of Custody',
      description: 'Complete tracking from device intake to final disposition',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      )
    },
    {
      title: 'Real-Time Monitoring',
      description: 'Live status updates and progress tracking for all operations',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      )
    },
    {
      title: 'Automated Reporting',
      description: 'Generate compliance reports for auditors and regulators',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-purple-50 to-white">
        <div className="container-app py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Comprehensive Compliance & Standards
              </h1>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Meet and exceed global data sanitization frameworks with verifiable, 
                repeatable erasure protocols. Built for the most stringent regulatory requirements.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#standards" className="btn-primary">
                  Explore Standards
                </a>
                <a href="/contact" className="btn-secondary">
                  Compliance Consultation
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Standards Overview */}
      <section id="standards" className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Supported Standards & Regulations</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              DSecure is certified and compliant with major international standards and regulations.
            </p>
          </div>

          {/* Standards Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 lg:gap-4 mb-12">
            {Object.entries(standards).map(([key, standard]) => (
              <button
                key={key}
                onClick={() => setActiveStandard(key)}
                className={`text-center p-3 lg:p-4 rounded-xl transition-all duration-200 ${
                  activeStandard === key
                    ? 'bg-purple-100 border-2 border-purple-300 shadow-lg'
                    : 'bg-white border-2 border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="text-2xl lg:text-3xl mb-1 lg:mb-2">{standard.icon}</div>
                <div className="font-semibold text-slate-900 text-xs lg:text-sm">{standard.title}</div>
              </button>
            ))}
          </div>

          {/* Active Standard Details */}
          <Reveal key={activeStandard}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-8">
                <div className="xl:col-span-2 p-6 md:p-8 lg:p-12">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                    <div className="text-4xl lg:text-5xl flex-shrink-0">{standards[activeStandard].icon}</div>
                    <div className="min-w-0">
                      <h3 className="text-xl lg:text-2xl font-bold text-slate-900">{standards[activeStandard].title}</h3>
                      <p className="text-purple-600 font-medium text-sm lg:text-base">{standards[activeStandard].fullName}</p>
                      <p className="text-slate-600 text-sm lg:text-base">{standards[activeStandard].description}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-6 lg:mb-8">{standards[activeStandard].details}</p>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">Key Requirements</h4>
                      <div className="space-y-3">
                        {standards[activeStandard].requirements.map((req, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-slate-700 text-sm">{req}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900 mb-4">DSecure Implementation</h4>
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                        <p className="text-slate-700 text-sm leading-relaxed">{standards[activeStandard].implementation}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-8">
                  <h4 className="font-semibold text-slate-900 mb-6">Compliance Benefits</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Audit Ready</div>
                        <div className="text-slate-600 text-xs mt-1">Complete documentation for compliance audits</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Risk Mitigation</div>
                        <div className="text-slate-600 text-xs mt-1">Reduce regulatory and reputational risks</div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900 text-sm">Automated Compliance</div>
                        <div className="text-slate-600 text-xs mt-1">Streamlined compliance processes</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <a href="/contact" className="w-full btn-secondary text-center block">
                      Get Compliance Report
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Third-Party Certifications</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              DSecure holds the highest level certifications from leading security organizations worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, i) => (
              <Reveal key={i} delayMs={i*100}>
                <div className="bg-white rounded-xl p-6 text-center shadow-lg border border-slate-200/60">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h3 className="font-bold text-slate-900 mb-2">{cert.name}</h3>
                  <div className="text-purple-600 font-semibold mb-3">{cert.level}</div>
                  <p className="text-slate-600 text-sm">{cert.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audit & Reporting Features */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Audit & Reporting Features</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Comprehensive audit trails and reporting capabilities to support your compliance requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {auditFeatures.map((feature, i) => (
              <Reveal key={i} delayMs={i*100}>
                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-lg border border-slate-200/60">
                  <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-slate-600">{feature.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <Reveal>
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ensure Your Compliance Today</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Don't let compliance concerns hold back your data erasure operations. 
                Get expert guidance on meeting your regulatory requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/contact" className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  Schedule Compliance Review
                </a>
                <a href="/resources" className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Download Compliance Guide
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


