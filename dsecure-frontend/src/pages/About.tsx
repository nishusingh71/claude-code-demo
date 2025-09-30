import Reveal from '@/components/Reveal'
import { useState } from 'react'

export default function AboutPage() {
  const [activeYear, setActiveYear] = useState('2025')

  const timeline = [
    {
      year: '2010',
      title: 'Company Founded',
      description: 'DSecure was established with a mission to provide enterprise-grade data sanitization solutions.',
      icon: '🚀'
    },
    {
      year: '2012',
      title: 'First Major Client',
      description: 'Secured partnership with Fortune 500 financial institution, processing 50,000+ devices.',
      icon: '🏦'
    },
    {
      year: '2015',
      title: 'Global Expansion',
      description: 'Opened offices in London and Singapore, expanding our reach to international markets.',
      icon: '🌍'
    },
    {
      year: '2018',
      title: 'Cloud Solutions Launch',
      description: 'Introduced industry-first cloud data erasure capabilities with multi-platform support.',
      icon: '☁️'
    },
    {
      year: '2020',
      title: 'AI Integration',
      description: 'Integrated AI-powered data discovery and automated compliance reporting features.',
      icon: '🤖'
    },
    {
      year: '2022',
      title: 'Series B Funding',
      description: 'Raised $50M in Series B funding to accelerate product development and market expansion.',
      icon: '💰'
    },
    {
      year: '2025',
      title: 'Industry Leader',
      description: 'Recognized as the leading provider of data erasure solutions with 500K+ devices processed.',
      icon: '🏆'
    }
  ]

  const leadership = [
    {
      name: 'Sarah Chen',
      position: 'Chief Executive Officer',
      bio: 'Former VP of Security at TechCorp, 20+ years in cybersecurity and data protection.',
      image: '👩‍💼',
      education: 'MIT, Computer Science',
      specialties: ['Strategic Leadership', 'Cybersecurity', 'Enterprise Sales']
    },
    {
      name: 'Michael Rodriguez',
      position: 'Chief Technology Officer',
      bio: 'Ex-Microsoft Principal Engineer, pioneer in secure data sanitization algorithms.',
      image: '👨‍💻',
      education: 'Stanford, Computer Engineering',
      specialties: ['Software Architecture', 'Cryptography', 'AI/ML']
    },
    {
      name: 'Dr. Emma Thompson',
      position: 'Chief Security Officer',
      bio: 'Former NSA security analyst, expert in compliance and regulatory frameworks.',
      image: '👩‍🔬',
      education: 'Carnegie Mellon, PhD Cybersecurity',
      specialties: ['Compliance', 'Risk Management', 'Government Relations']
    },
    {
      name: 'James Wilson',
      position: 'VP of Engineering',
      bio: 'Formerly at Google, leads our product development and technical innovation.',
      image: '👨‍🔧',
      education: 'UC Berkeley, Software Engineering',
      specialties: ['Product Development', 'Team Leadership', 'Cloud Architecture']
    }
  ]

  const values = [
    {
      title: 'Security First',
      description: 'We prioritize data security in everything we do, ensuring your sensitive information is protected with military-grade protocols.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Innovation',
      description: 'We continuously evolve our solutions to stay ahead of emerging security challenges and technological advances.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Integrity',
      description: 'We maintain the highest standards of professional ethics, transparency, and accountability in all operations.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Excellence',
      description: 'We deliver exceptional quality in our products and services, exceeding customer expectations consistently.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
        </svg>
      ),
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and partnerships to achieve extraordinary results together.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 119.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Sustainability',
      description: 'We promote responsible data disposal practices that protect the environment and support circular economy.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      color: 'from-emerald-500 to-emerald-600'
    }
  ]

  const awards = [
    {
      year: '2025',
      title: 'Cybersecurity Excellence Award',
      organization: 'RSA Conference',
      description: 'Outstanding innovation in data sanitization technology'
    },
    {
      year: '2024',
      title: 'Best Enterprise Security Solution',
      organization: 'SC Awards',
      description: 'Leading data erasure platform for enterprise environments'
    },
    {
      year: '2023',
      title: 'Technology Pioneer',
      organization: 'World Economic Forum',
      description: 'Recognized for advancing cybersecurity and data protection'
    },
    {
      year: '2022',
      title: 'Innovation Award',
      organization: 'Black Hat',
      description: 'Breakthrough AI-powered data discovery capabilities'
    }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-app py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <Reveal>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-900 mb-6">
                Pioneering the Future of{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-brand/80">
                  Data Security
                </span>
              </h1>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                For over 15 years, DSecure has been at the forefront of data erasure innovation, 
                protecting organizations worldwide with military-grade security solutions and uncompromising compliance standards.
              </p>
            </Reveal>
            <Reveal delayMs={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href="#story" className="btn-primary">
                  Our Story
                </a>
                <a href="#team" className="btn-secondary">
                  Meet the Team
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { number: '15+', label: 'Years Experience', icon: '📅' },
              { number: '500K+', label: 'Devices Secured', icon: '🔒' },
              { number: '99.9%', label: 'Success Rate', icon: '✅' },
              { number: '50+', label: 'Countries Served', icon: '🌍' }
            ].map((stat, i) => (
              <Reveal key={i} delayMs={i*100}>
                <div className="text-center p-6 rounded-2xl bg-white shadow-xl border border-slate-200/60">
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-brand mb-2">{stat.number}</div>
                  <div className="text-slate-600 text-sm">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section id="story" className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Journey</h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                From a small startup to a global leader in data security, discover the milestones that shaped our company.
              </p>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-4 sm:flex sm:flex-wrap justify-center gap-2 sm:gap-3 mb-12 max-w-3xl mx-auto">
              {timeline.map((item) => (
                <button
                  key={item.year}
                  onClick={() => setActiveYear(item.year)}
                  className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    activeYear === item.year
                      ? 'bg-brand text-white shadow-lg'
                      : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {item.year}
                </button>
              ))}
            </div>

            <Reveal key={activeYear}>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-6 md:p-8 lg:p-12">
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6">
                  <div className="text-4xl sm:text-5xl flex-shrink-0">{timeline.find(t => t.year === activeYear)?.icon}</div>
                  <div className="min-w-0">
                    <div className="text-brand font-semibold">{activeYear}</div>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {timeline.find(t => t.year === activeYear)?.title}
                    </h3>
                  </div>
                </div>
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                  {timeline.find(t => t.year === activeYear)?.description}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Reveal>
              <div className="bg-gradient-to-br from-brand to-brand/80 rounded-2xl p-8 md:p-12 text-white">
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-xl leading-relaxed opacity-90 mb-6">
                  To empower organizations worldwide with the most secure, compliant, and efficient data erasure solutions, 
                  ensuring complete data protection throughout the entire technology lifecycle.
                </p>
                <div className="space-y-3">
                  {[
                    'Protect sensitive data with military-grade security',
                    'Ensure compliance with global regulations',
                    'Reduce environmental impact through responsible disposal',
                    'Enable secure digital transformation'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg className="w-5 h-5 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="opacity-90">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delayMs={200}>
              <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8 md:p-12">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Vision</h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-6">
                  To create a world where data security is seamless, sustainable, and accessible to every organization, 
                  regardless of size or industry, fostering trust in the digital ecosystem.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold text-slate-900 mb-2">2030 Goals</h4>
                    <ul className="text-slate-600 text-sm space-y-1">
                      <li>• Carbon-neutral data disposal operations</li>
                      <li>• 1M+ devices processed annually</li>
                      <li>• 100% automated compliance reporting</li>
                      <li>• Global presence in 100+ countries</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Core Values</h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                The principles that guide our decisions, shape our culture, and drive our commitment to excellence.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, i) => (
              <Reveal key={i} delayMs={i*100}>
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/60 hover:shadow-2xl transition-shadow duration-300">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="team" className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Leadership Team</h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Meet the experienced leaders driving DSecure's innovation and growth across the globe.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, i) => (
              <Reveal key={i} delayMs={i*150}>
                <div className="bg-white rounded-2xl p-6 shadow-xl border border-slate-200/60 text-center hover:shadow-2xl transition-shadow duration-300">
                  <div className="text-6xl mb-4">{leader.image}</div>
                  <h3 className="font-bold text-slate-900 text-lg mb-1">{leader.name}</h3>
                  <p className="text-brand font-medium text-sm mb-3">{leader.position}</p>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">{leader.bio}</p>
                  
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-medium text-slate-900 mb-1">Education</div>
                      <div className="text-slate-600">{leader.education}</div>
                    </div>
                    
                    <div className="p-3 bg-slate-50 rounded-lg">
                      <div className="font-medium text-slate-900 mb-2">Specialties</div>
                      <div className="flex flex-wrap gap-1">
                        {leader.specialties.map((specialty, j) => (
                          <span key={j} className="px-2 py-1 bg-brand/10 text-brand rounded-full text-xs">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container-app">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Awards & Recognition</h2>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Our commitment to excellence has been recognized by leading industry organizations worldwide.
              </p>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {awards.map((award, i) => (
              <Reveal key={i} delayMs={i*100}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/60 flex items-start gap-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 flex-shrink-0">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-full text-xs font-medium">
                        {award.year}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 mb-1">{award.title}</h3>
                    <p className="text-brand font-medium text-sm mb-2">{award.organization}</p>
                    <p className="text-slate-600 text-sm">{award.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <Reveal>
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 rounded-2xl p-8 md:p-12 text-center text-white">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Mission</h2>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                  We're always looking for passionate individuals who want to make a difference in data security. 
                  Join our team and help shape the future of digital protection.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a href="/careers" className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors">
                    View Open Positions
                  </a>
                  <a href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                    Contact HR
                  </a>
                </div>
                
                <div className="mt-8 pt-8 border-t border-white/20">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold mb-1">100+</div>
                      <div className="text-sm opacity-90">Team Members</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">15+</div>
                      <div className="text-sm opacity-90">Countries</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold mb-1">95%</div>
                      <div className="text-sm opacity-90">Employee Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

