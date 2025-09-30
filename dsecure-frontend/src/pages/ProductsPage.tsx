import Reveal from '@/components/Reveal'
import { useState } from 'react'

export default function ProductsPage() {
  type TabType = 'device' | 'server' | 'cloud';
  const [activeTab, setActiveTab] = useState<TabType>('device')

  const products = {
    device: {
      title: 'Device Erasure',
      subtitle: 'Comprehensive data sanitization for all device types',
      description: 'Military-grade data erasure for laptops, desktops, mobile devices, and storage media with certified compliance reporting.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
      features: [
        'DOD 5220.22-M compliant erasure',
        'NIST 800-88 certified methods',
        'Support for 1000+ device types',
        'Automated inventory management',
        'Tamper-proof certificates',
        'Real-time progress tracking'
      ],
      specs: [
        { label: 'Supported Devices', value: '1000+ Models' },
        { label: 'Erasure Standards', value: 'DOD, NIST, BSI, CSEC' },
        { label: 'Processing Speed', value: 'Up to 100 devices/hour' },
        { label: 'Certificate Format', value: 'PDF, XML, JSON' }
      ]
    },
    server: {
      title: 'Server Erasure',
      subtitle: 'Enterprise-grade server and data center sanitization',
      description: 'Secure erasure for enterprise servers, storage arrays, and data center infrastructure with comprehensive audit trails.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: [
        'Remote server sanitization',
        'RAID array support',
        'Enterprise SAN/NAS erasure',
        'Scheduled batch processing',
        'Active Directory integration',
        'Compliance reporting suite'
      ],
      specs: [
        { label: 'Server Types', value: 'Physical & Virtual' },
        { label: 'Storage Systems', value: 'SAN, NAS, RAID' },
        { label: 'Concurrent Jobs', value: 'Up to 500 servers' },
        { label: 'Remote Access', value: 'HTTPS, SSH, IPMI' }
      ]
    },
    cloud: {
      title: 'Cloud Erasure',
      subtitle: 'Secure cloud storage and SaaS data removal',
      description: 'Complete data sanitization for cloud storage platforms, SaaS applications, and hybrid cloud environments.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      ),
      features: [
        'Multi-cloud platform support',
        'API-based data discovery',
        'Automated retention policies',
        'Cross-region data mapping',
        'SaaS application integration',
        'Blockchain verification'
      ],
      specs: [
        { label: 'Cloud Platforms', value: 'AWS, Azure, GCP, O365' },
        { label: 'SaaS Apps', value: '200+ Integrations' },
        { label: 'Data Discovery', value: 'AI-powered scanning' },
        { label: 'Verification', value: 'Blockchain attestation' }
      ]
    }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container-app py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Comprehensive Data Erasure Solutions
              </h1>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Military-grade data sanitization for devices, servers, and cloud platforms. 
                Trusted by enterprises worldwide for secure, compliant data destruction.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/pricing" className="btn-primary">
                  View Pricing Plans
                </a>
                <a href="/contact" className="btn-secondary">
                  Request Demo
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Solution</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select the right data erasure solution for your specific needs and infrastructure.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex flex-col sm:flex-row rounded-xl bg-slate-100 p-1 w-full sm:w-auto max-w-2xl">
              {Object.entries(products).map(([key, product]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabType)}
                  className={`flex items-center justify-center gap-2 px-4 lg:px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1 sm:flex-none ${
                    activeTab === key
                      ? 'bg-white text-brand shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-5 h-5 flex-shrink-0">{product.icon}</span>
                  <span className="hidden sm:inline">{product.title}</span>
                  <span className="sm:hidden text-xs">{product.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Active Product Content */}
          <Reveal key={activeTab}>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 p-6 md:p-8 lg:p-12">
                <div>
                  <div className="inline-flex items-center justify-center w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-brand to-brand/80 rounded-2xl text-white mb-4 lg:mb-6">
                    {products[activeTab].icon}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {products[activeTab].title}
                  </h3>
                  <p className="text-lg text-brand font-medium mb-4">
                    {products[activeTab].subtitle}
                  </p>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    {products[activeTab].description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-slate-900">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-3">
                      {products[activeTab].features.map((feature, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-4 lg:p-6">
                  <h4 className="font-semibold text-slate-900 mb-4 lg:mb-6">Technical Specifications</h4>
                  <div className="space-y-3 lg:space-y-4">
                    {products[activeTab].specs.map((spec, index) => (
                      <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-2 border-b border-slate-200 last:border-b-0 gap-1 sm:gap-0">
                        <span className="text-slate-600 text-sm lg:text-base">{spec.label}</span>
                        <span className="font-medium text-slate-900 text-sm lg:text-base">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 lg:mt-8 pt-4 lg:pt-6 border-t border-slate-200">
                    <div className="flex flex-col gap-3">
                      <a href="/contact" className="btn-primary text-center">
                        Request Quote
                      </a>
                      <a href="/resources" className="btn-secondary text-center">
                        Documentation
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Product Comparison</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare features across our product line to find the perfect fit for your organization.
            </p>
          </div>

          <Reveal>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-6 font-semibold text-slate-900">Feature</th>
                      <th className="text-center p-6 font-semibold text-slate-900">Device Erasure</th>
                      <th className="text-center p-6 font-semibold text-slate-900">Server Erasure</th>
                      <th className="text-center p-6 font-semibold text-slate-900">Cloud Erasure</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      ['DOD 5220.22-M Compliance', true, true, true],
                      ['NIST 800-88 Standards', true, true, true],
                      ['Real-time Monitoring', true, true, true],
                      ['Batch Processing', true, true, true],
                      ['Remote Management', false, true, true],
                      ['API Integration', false, true, true],
                      ['Multi-tenant Support', false, true, true],
                      ['Blockchain Verification', false, false, true]
                    ].map(([feature, device, server, cloud], index) => (
                      <tr key={index} className="hover:bg-slate-50/50">
                        <td className="p-6 font-medium text-slate-900">{feature}</td>
                        <td className="p-6 text-center">
                          {device ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {server ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                        <td className="p-6 text-center">
                          {cloud ? (
                            <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <Reveal>
            <div className="bg-gradient-to-r from-brand to-brand/80 rounded-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Data?</h2>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Join thousands of organizations who trust DSecure for their data erasure needs. 
                Start with a free demo today.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="/pricing" className="bg-white text-brand px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                  View Pricing
                </a>
                <a href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  Schedule Demo
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}


