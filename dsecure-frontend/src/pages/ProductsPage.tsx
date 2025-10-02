import Reveal from '@/components/Reveal'
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ProductsPage() {
  type TabType = 'device' | 'network' | 'cloud';
  const [activeTab, setActiveTab] = useState<TabType>('device')

  // Helper function to render feature icons based on value
  const renderFeatureIcon = (value: any, isEnterprise: boolean = false) => {
    if (value === true) {
      return (
        <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      );
    } else if (value === false) {
      return (
        <svg className="w-5 h-5 text-slate-300 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      );
    } else if (value === 'paid') {
      return <span className="text-slate-500">🔒</span>;
    } else if (value === 'coming') {
      return <span className="text-orange-600">⏳</span>;
    } else if (value === 'limited') {
      return <span className="text-xs text-slate-600">Limited</span>;
    } else if (value === 'expanded') {
      return <span className="text-xs text-slate-600">Expanded</span>;
    } else if (typeof value === 'string' && value.includes('included')) {
      return isEnterprise ? <strong className="text-green-600">{value}</strong> : <span className="text-green-600">{value}</span>;
    } else if (typeof value === 'string' && value.includes('free')) {
      return isEnterprise ? <strong className="text-green-600">{value}</strong> : <span className="text-green-600">{value}</span>;
    } else if (typeof value === 'string') {
      return <span className="text-xs text-slate-600">{value}</span>;
    }
    
    return (
      <svg className="w-5 h-5 text-green-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    );
  };

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
    network: {
      title: 'Network Erasure',
      subtitle: 'Enterprise-grade network and data center sanitization',
      description: 'Secure erasure for enterprise networks, storage arrays, and data center infrastructure with comprehensive audit trails.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      features: [
        'Remote network sanitization',
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
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
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
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Select the right data erasure Plan for your specific needs and infrastructure.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex flex-col sm:flex-row rounded-xl bg-slate-100 p-1 w-full sm:w-auto max-w-2xl">
              {Object.entries(products).map(([key, product]) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key as TabType)}
                  className={`flex items-center justify-center gap-3 px-4 lg:px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap flex-1 sm:flex-none ${
                    activeTab === key
                      ? 'bg-white text-brand shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <span className="w-5 h-5 flex-shrink-0 mb-2">{product.icon}</span>
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

      {/* Comprehensive Plan Comparison */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">🟢 D-SecureErase: Complete Plan Comparison</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Compare all features across our comprehensive product lineup to find the perfect fit for your organization.
            </p>
          </div>

          <Reveal>
            <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 overflow-hidden">
              
              {/* Free Enterprise Trial Banner */}
              <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">🎉 Try Enterprise FREE for 14 Days</h3>
                <p className="mb-4">Test all Enterprise features on 1 device - No credit card required</p>
                <Link to="/contact" className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Start Free Trial
                </Link>
              </div>

              {/* Core Erasure Capabilities Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50">
                    <tr>
                      <th className="text-left p-4 font-semibold text-slate-900">Core Erasure Capabilities</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Base</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Standard</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Cloud</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Network</th>
                      <th className="text-center p-4 font-semibold text-slate-900">Pro</th>
                      <th className="text-center p-4 font-semibold text-slate-900 bg-purple-50">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    {[
                      ['30+ International Algorithms (SSD Trim, Crypto Erase)', true, true, true, true, true, true],
                      ['File & Folder Erase', true, true, true, true, true, true],
                      ['Erase Traces (Browser, System, App data)', true, true, true, true, true, true],
                      ['Erase Deleted Data / Free Space', false, true, true, true, true, true],
                      ['Erase Volume', false, false, false, 'paid', 'paid', '5 included'],
                      ['Erase Disk (Full Device)', false, false, false, 'paid', 'paid', '1 included'],
                      ['Scheduled Erase', 'limited', 'expanded', true, true, true, true],
                      ['Cloud Storage Erase (Google Drive)', true, true, true, true, true, true]
                    ].map(([feature, base, standard, cloud, network, pro, enterprise], index) => (
                      <tr key={index} className="hover:bg-slate-50/50">
                        <td className="p-4 font-medium text-slate-900">{feature}</td>
                        <td className="p-4 text-center">{renderFeatureIcon(base)}</td>
                        <td className="p-4 text-center">{renderFeatureIcon(standard)}</td>
                        <td className="p-4 text-center">{renderFeatureIcon(cloud)}</td>
                        <td className="p-4 text-center">{renderFeatureIcon(network)}</td>
                        <td className="p-4 text-center">{renderFeatureIcon(pro)}</td>
                        <td className="p-4 text-center bg-purple-50">{renderFeatureIcon(enterprise, true)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Platform Support Table */}
              <div className="border-t border-slate-200">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Platform & OS Support</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Windows Support', true, true, true, true, true, true],
                        ['Linux Support', false, true, true, true, true, true],
                        ['macOS Support', false, true, true, true, true, true],
                        ['Multi-language UI & Reports (17+)', 'coming', 'coming', 'coming', 'coming', 'coming', 'coming']
                      ].map(([feature, base, standard, cloud, network, pro, enterprise], index) => (
                        <tr key={index} className="hover:bg-slate-50/50">
                          <td className="p-4 font-medium text-slate-900">{feature}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(base)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(standard)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(cloud)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(network)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(pro)}</td>
                          <td className="p-4 text-center bg-purple-50">{renderFeatureIcon(enterprise, true)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Reporting & Compliance Table */}
              <div className="border-t border-slate-200">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Reporting & Compliance</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Local PDF Reports', false, true, true, true, true, true],
                        ['White-Label Reports', false, false, true, true, true, true],
                        ['Cloud Report Upload/Sync', false, false, 'slow', 'improved', 'fast', 'fastest'],
                        ['XML Report Format', false, false, false, false, 'coming', true],
                        ['Audit-Grade Compliance Certificates', false, true, true, true, true, true],
                        ['User/Action Logs', false, false, false, true, true, true]
                      ].map(([feature, base, standard, cloud, network, pro, enterprise], index) => (
                        <tr key={index} className="hover:bg-slate-50/50">
                          <td className="p-4 font-medium text-slate-900">{feature}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(base)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(standard)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(cloud)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(network)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(pro)}</td>
                          <td className="p-4 text-center bg-purple-50">{renderFeatureIcon(enterprise, true)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Services & Management Table */}
              <div className="border-t border-slate-200">
                <div className="bg-slate-100 p-4">
                  <h3 className="font-semibold text-slate-900">Services & Management</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <tbody className="divide-y divide-slate-200">
                      {[
                        ['Web Dashboard', 'limited', true, true, true, true, true],
                        ['Cloud Commands (Remote Jobs)', false, false, false, true, true, true],
                        ['Custom Installer (auto-register machine)', 'paid', 'paid', 'paid', 'paid', '1 free', '5 free'],
                        ['Private Cloud Support', false, false, false, false, '1 free', '1 free'],
                        ['White-Label Dashboard', false, false, true, true, true, true]
                      ].map(([feature, base, standard, cloud, network, pro, enterprise], index) => (
                        <tr key={index} className="hover:bg-slate-50/50">
                          <td className="p-4 font-medium text-slate-900">{feature}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(base)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(standard)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(cloud)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(network)}</td>
                          <td className="p-4 text-center">{renderFeatureIcon(pro)}</td>
                          <td className="p-4 text-center bg-purple-50">{renderFeatureIcon(enterprise, true)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Legend */}
              <div className="bg-slate-50 p-6 border-t border-slate-200">
                <h3 className="font-semibold text-slate-900 mb-4">Legend</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600">✅</span>
                    <span>Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🚫</span>
                    <span>Not Included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>🔒</span>
                    <span>Add-on / Paid</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-orange-600">⏳</span>
                    <span>Coming Soon</span>
                  </div>
                </div>
                <p className="text-xs text-slate-600 mt-4">
                  <strong>Bold</strong> = Enterprise free allowances (disk/volume/installers/private cloud)
                </p>
              </div>

              {/* Contact Sales CTA */}
              <div className="bg-gradient-to-r from-brand to-brand/80 p-8 text-center text-white">
                <h3 className="text-xl font-bold mb-4">Ready to Choose Your Plan?</h3>
                <p className="mb-6 opacity-90">Contact our sales team for custom pricing and enterprise quotes</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/contact" className="bg-white text-brand px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                    Contact Sales for Quote
                  </Link>
                  <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Schedule Demo
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Sales CTA Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Get Started?</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Contact our sales team for custom pricing, enterprise quotes, and personalized deployment strategies.
              </p>
            </Reveal>
          </div>

          {/* Enterprise Trial Banner */}
          <Reveal delayMs={200}>
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 mb-8 text-center">
              <h3 className="text-2xl font-bold mb-4">🎉 Try Enterprise FREE for 14 Days</h3>
              <p className="text-lg mb-6 opacity-90">
                Test all Enterprise features on 1 device - No credit card required, No purchase needed
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
                  🚀 Start Free Enterprise Trial
                </Link>
                <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                  📞 Contact Sales Team
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Contact Options */}
          <Reveal delayMs={400}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-3xl mb-4">💬</div>
                <h3 className="font-semibold text-slate-900 mb-3">Request Custom Quote</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Get personalized pricing based on your organization's specific needs and deployment size.
                </p>
                <Link to="/contact" className="btn-primary text-sm">
                  Get Quote
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-3xl mb-4">📅</div>
                <h3 className="font-semibold text-slate-900 mb-3">Schedule Demo</h3>
                <p className="text-sm text-slate-600 mb-4">
                  See D-SecureErase in action with a personalized demo tailored to your use case.
                </p>
                <Link to="/contact" className="btn-secondary text-sm">
                  Book Demo
                </Link>
              </div>
              <div className="bg-white rounded-xl p-6 border border-slate-200 text-center">
                <div className="text-3xl mb-4">🏢</div>
                <h3 className="font-semibold text-slate-900 mb-3">Enterprise Consultation</h3>
                <p className="text-sm text-slate-600 mb-4">
                  Discuss enterprise deployment strategies and custom integration requirements.
                </p>
                <Link to="/contact" className="btn-secondary text-sm">
                  Consult Now
                </Link>
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


