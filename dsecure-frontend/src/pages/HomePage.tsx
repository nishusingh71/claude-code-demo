import Reveal from "@/components/Reveal";
import { Link } from 'react-router-dom';
export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container-app py-16 md:py-28 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">
              Secure Data Erasure for Modern Enterprises
            </h1>
            <p className="mt-5 text-slate-600 max-w-prose">
              DSecure helps organizations permanently erase data across devices
              and clouds with certified workflows that meet global compliance
              standards.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <a
                href="/products"
                className="btn-primary w-full sm:w-auto text-center"
              >
                Explore Products
              </a>
              <a
                href="/solutions"
                className="btn-secondary w-full sm:w-auto text-center"
              >
                See Solutions
              </a>
            </div>
            <div className="mt-6 text-xs text-slate-500">
              ISO 27001 • NIST 800-88 • GDPR • SOC 2
            </div>
          </div>
          <div className="relative order-first md:order-none">
            {/* Hero Image or Video Placeholder */}
            <div className="aspect-[16/10] md:aspect-[4/3] bg-white rounded-xl shadow-xl border border-slate-200 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2034&q=80"
                alt="Data Erasure Visualization"
                className="w-full h-full object-cover"
              />

              {/* Overlay with animated elements */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-transparent">
                <div className="absolute bottom-4 left-4 flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm text-white font-medium">
                    Secure Data Erasure in Progress
                  </span>
                </div>
              </div>
            </div>

            {/* <div className="aspect-[16/10] md:aspect-[4/3] bg-white rounded-xl shadow-xl border border-slate-200">
              <video
                className="w-full h-full object-cover"
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
                controls
              ></video>
            </div> */}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container-app">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Upcoming Features
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Exciting new capabilities coming soon to enhance your data
                security
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Reveal delayMs={100}>
              <div className="card hover:shadow-lg transition-all">
                <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  AI-Powered Scanning
                </h3>
                <p className="text-slate-600">
                  Advanced machine learning algorithms to detect and classify
                  sensitive data patterns automatically.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="card hover:shadow-lg transition-all">
                <div className="h-12 w-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Blockchain Verification
                </h3>
                <p className="text-slate-600">
                  Immutable proof of data destruction using distributed ledger
                  technology.
                </p>
              </div>
            </Reveal>

            <Reveal delayMs={300}>
              <div className="card hover:shadow-lg transition-all">
                <div className="h-12 w-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mb-6 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  Zero-Trust Architecture
                </h3>
                <p className="text-slate-600">
                  Enhanced security framework with continuous verification and
                  least privilege access.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Choose DSecure?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Leading organizations trust DSecure for comprehensive data erasure
              solutions that ensure security, compliance, and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Military-Grade Security",
                description:
                  "DOD 5220.22-M and NIST 800-88 compliant erasure methods ensure your data is permanently destroyed.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                ),
                bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
              },
              {
                title: "Enterprise Scale",
                description:
                  "Handle thousands of devices simultaneously with our powerful orchestration and automation tools.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                ),
                bgColor: "bg-gradient-to-br from-emerald-500 to-emerald-600",
              },
              {
                title: "Complete Audit Trail",
                description:
                  "Tamper-proof certificates and comprehensive reporting for regulatory compliance and audits.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                ),
                bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
              },
              {
                title: "Global Compliance",
                description:
                  "Meet GDPR, HIPAA, SOX, and other international data protection standards with certified workflows.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                bgColor: "bg-gradient-to-br from-orange-500 to-orange-600",
              },
              {
                title: "Zero Downtime",
                description:
                  "Perform secure erasure operations without disrupting your business operations or workflows.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                ),
                bgColor: "bg-gradient-to-br from-teal-500 to-teal-600",
              },
              {
                title: "24/7 Expert Support",
                description:
                  "Get immediate assistance from our certified data security experts whenever you need it.",
                icon: (
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                bgColor: "bg-gradient-to-br from-rose-500 to-rose-600",
              },
            ].map((feature, i) => (
              <Reveal key={feature.title} delayMs={i * 100}>
                <div className="group card hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                  <div
                    className={`w-16 h-16 rounded-2xl ${feature.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Stats Section */}
          <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-center">
              <Reveal delayMs={200}>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-2">
                    500K+
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base">
                    Devices Secured
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={300}>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-2">
                    100%
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base">
                    Success Rate
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={400}>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-2">
                    256-bit
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base">
                    SSL Encryption
                  </div>
                </div>
              </Reveal>
              <Reveal delayMs={500}>
                <div>
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-brand mb-2">
                    24/7
                  </div>
                  <div className="text-slate-600 text-sm sm:text-base">
                    Expert Support
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Trial Promotion Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="container-app">
          <Reveal>
            <div className="text-center text-white">
              <div className="text-4xl md:text-6xl mb-6">🎉</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Try Enterprise FREE for 14 Days
              </h2>
              <p className="text-xl md:text-2xl mb-2 opacity-90">
                Test all Enterprise features on 1 device
              </p>
              <p className="text-lg mb-8 opacity-80">
                No credit card required • No purchase needed • Full feature access
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/contact"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  🚀 Start Free Enterprise Trial
                </Link>
                <Link
                  to="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
                >
                  📞 Contact Sales Team
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <Reveal delayMs={100}>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                    <div className="text-2xl mb-3">🛡️</div>
                    <h3 className="font-semibold mb-2">Full Enterprise Features</h3>
                    <p className="text-sm opacity-80">
                      Access all advanced capabilities including volume erasure, custom installers, and private cloud support
                    </p>
                  </div>
                </Reveal>
                <Reveal delayMs={200}>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                    <div className="text-2xl mb-3">⚡</div>
                    <h3 className="font-semibold mb-2">Instant Activation</h3>
                    <p className="text-sm opacity-80">
                      Get started immediately with enterprise-grade data erasure on your test device
                    </p>
                  </div>
                </Reveal>
                <Reveal delayMs={300}>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur">
                    <div className="text-2xl mb-3">🎯</div>
                    <h3 className="font-semibold mb-2">Risk-Free Testing</h3>
                    <p className="text-sm opacity-80">
                      Evaluate enterprise capabilities with no commitment or payment information required
                    </p>
                  </div>
                </Reveal>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Subscription Plans
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the perfect plan for your data erasure needs, from
              individual users to enterprise solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
            <div className="relative card hover:border-brand/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Lifetime Demo
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Local Erasure max 1 file at 1MB
                </p>
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900">
                    Free
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Local file erasure up to 1MB
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    No access to cloud services
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">No reports generation</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">Max 1 file per session</span>
                </li>
              </ul>

              <a
                href="/pricing"
                className="w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 bg-green-600 hover:bg-green-700 text-white text-center block"
              >
                Download Free
              </a>
            </div>

            <div className="relative card hover:border-brand/30 transition-all duration-300 hover:shadow-xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Basic</h3>
                <p className="text-sm text-slate-500 mb-4">
                  Local Erasure, No Reports, Limited Cloud
                </p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-slate-900">$39</span>
                  <span className="text-slate-500 ml-1">/year/per machine</span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Local file erasure up to 1MB
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Cloud storage: 3 files per session (max 1MB each)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">No reports generation</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Extend validity or license count available
                  </span>
                </li>
              </ul>

              <a
                href="/pricing"
                className="w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 btn-primary text-center block"
              >
                Customize Plan
              </a>
            </div>

            <div className="relative card hover:border-brand/30 transition-all duration-300 hover:shadow-xl ring-2 ring-brand shadow-lg">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  Standard
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  Local Erasure + Reports, Limited Cloud
                </p>
                <div className="mb-6">
                  <span className="text-3xl lg:text-4xl font-bold text-slate-900">
                    $89
                  </span>
                  <span className="text-slate-500 ml-1 text-sm lg:text-base">
                    /year/per machine
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">Local file erasure</span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Detailed reports generation
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Cloud storage: 3 files per session (max 1MB each)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-slate-600">
                    Extend validity or license count available
                  </span>
                </li>
              </ul>

              <a
                href="/pricing"
                className="w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 btn-primary text-center block"
              >
                Customize Plan
              </a>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">See all plans and features</p>
            <a href="/pricing" className="btn-secondary">
              View All Plans
            </a>
          </div>
        </div>
      </section> */}

      {/* <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <Reveal>
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Enterprise Pricing
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Transparent enterprise pricing with volume discounts. Scale from
                50 to 5,000+ devices with significant per-device savings.
              </p>
            </Reveal>
          </div>

          <Reveal delayMs={200}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white rounded-xl p-6 border border-slate-200">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Base Plan
                  </h3>
                  <p className="text-sm text-slate-600">Essential features</p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-brand">$360</div>
                  <div className="text-sm text-slate-600">per device/year</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Min 50 devices
                  </div>
                </div>
                <div className="bg-slate-50 rounded-lg p-3 text-center mb-4">
                  <div className="text-sm font-medium text-slate-900">
                    Total Investment
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    $18,000
                  </div>
                </div>
                <a
                  href="/contact"
                  className="btn-primary w-full text-center block"
                >
                  Contact Sales Team
                </a>
              </div>
              <div className="bg-white rounded-xl p-6 border-2 border-brand relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-brand text-white text-xs px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Cloud Plan
                  </h3>
                  <p className="text-sm text-slate-600">Cloud integration</p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-brand">$288</div>
                  <div className="text-sm text-slate-600">per device/year</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Min 250 devices
                  </div>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 text-center mb-4">
                  <div className="text-sm font-medium text-slate-900">
                    Total Investment
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    $72,000
                  </div>
                </div>
                <a
                  href="/contact"
                  className="btn-primary w-full text-center block"
                >
                  Contact Sales Team
                </a>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-500 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white text-xs px-3 py-1 rounded-full">
                    Best Value
                  </span>
                </div>
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Enterprise Plan
                  </h3>
                  <p className="text-sm text-slate-600">
                    Full enterprise suite
                  </p>
                </div>
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-brand">$96</div>
                  <div className="text-sm text-slate-600">per device/year</div>
                  <div className="text-xs text-slate-500 mt-1">
                    Min 5,000 devices
                  </div>
                </div>
                <div className="bg-purple-100 rounded-lg p-3 text-center mb-4">
                  <div className="text-sm font-medium text-slate-900">
                    Total Investment
                  </div>
                  <div className="text-lg font-bold text-green-600">
                    $480,000
                  </div>
                </div>
                <a
                  href="/contact"
                  className="bg-purple-500 hover:bg-purple-600 text-white w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 text-center block"
                >
                  Contact Sales Team
                </a>
              </div>
            </div>
            <div className="text-center mt-12">
              <p className="text-slate-600 mb-4">See all plans and features</p>
              <a href="/pricing" className="btn-secondary">
                View All Plans
              </a>
            </div>
          </Reveal>

          <Reveal delayMs={400}>
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4 text-center">
                <div>
                  <div className="font-semibold text-slate-900">Base</div>
                  <div className="text-sm text-slate-600">$360</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Standard</div>
                  <div className="text-sm text-slate-600">$168</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Cloud</div>
                  <div className="text-sm text-slate-600">$288</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Network</div>
                  <div className="text-sm text-slate-600">$216</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Pro</div>
                  <div className="text-sm text-slate-600">$180</div>
                </div>
                <div>
                  <div className="font-semibold text-slate-900">Enterprise</div>
                  <div className="text-sm text-slate-600">$96</div>
                </div>
              </div>
              <div className="text-center mt-4">
                <p className="text-sm text-slate-600 mb-4">All plans include volume discounts and annual billing</p>
                <a href="/products" className="btn-primary mr-3">View Detailed Pricing</a>
                <a href="/contact" className="btn-secondary">Schedule Consultation</a>
              </div>
            </div>
          </Reveal>
        </div>
      </section> */}

      {/* <section className="py-16 md:py-24">
        <div className="container-app">
          <h2 className="text-2xl font-semibold text-slate-900">What customers say</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <Reveal key={i} delayMs={i*80}>
                <div className="card">
                  <p className="text-slate-700">“DSecure streamlined our end‑of‑life processes and gave us the audit trail we needed.”</p>
                  <div className="mt-4 text-sm text-slate-500">IT Director, Global Enterprise</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section> */}
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container-app">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See what our customers say about our data erasure solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 - Ajay Bhatia */}
            <Reveal delayMs={100}>
              <div className="bg-slate-50 rounded-2xl p-6 lg:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                <div className="flex items-start gap-3 lg:gap-4 mb-4 lg:mb-6">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                      alt="Ajay Bhatia"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-base lg:text-lg">
                      Ajay Bhatia
                    </h4>
                    <p className="text-blue-600 text-xs lg:text-sm font-medium">
                      CIO, TechCorp India
                    </p>
                  </div>
                </div>

                <blockquote className="text-slate-600 italic leading-relaxed">
                  "D-Secure has transformed how we handle end-of-life data
                  management. The detailed compliance reports save us countless
                  hours during audits."
                </blockquote>
              </div>
            </Reveal>

            {/* Testimonial 2 - Sunita Patel */}

            {/* Testimonial 2 - Sunita Patel */}
            <Reveal delayMs={200}>
              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1961&q=80"
                      alt="Sunita Patel"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">
                      Sunita Patel
                    </h4>
                    <p className="text-blue-600 text-sm font-medium">
                      Security Director, FinSecure Ltd
                    </p>
                  </div>
                </div>

                <blockquote className="text-slate-600 italic leading-relaxed">
                  "The enterprise management features allow us to maintain
                  consistent security protocols across all our offices
                  worldwide. Excellent solution!"
                </blockquote>
              </div>
            </Reveal>

            {/* Testimonial 3 - Rajesh Kumar */}
            <Reveal delayMs={300}>
              <div className="bg-slate-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80"
                      alt="Rajesh Kumar"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 text-lg">
                      Rajesh Kumar
                    </h4>
                    <p className="text-blue-600 text-sm font-medium">
                      IT Manager, Healthcare Systems
                    </p>
                  </div>
                </div>

                <blockquote className="text-slate-600 italic leading-relaxed">
                  "In healthcare, data security isn't optional. D-Secure's
                  HIPAA-compliant erasure protocols give us confidence when
                  recycling or repurposing equipment."
                </blockquote>
              </div>
            </Reveal>
          </div>

          {/* Trust indicators */}
          {/* <div className="mt-16 text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-sm font-medium text-slate-500">
                Trusted by 500+ Companies
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="text-sm font-medium text-slate-500">
                99.9% Customer Satisfaction
              </div>
              <div className="w-px h-6 bg-slate-300"></div>
              <div className="text-sm font-medium text-slate-500">
                ISO 27001 Certified
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}
