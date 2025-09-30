import { Link, NavLink, Outlet } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'
import { useState, useEffect } from 'react'
import logoSvg from '@/assets/logo.svg'
import blogSvg from '@/assets/blogo.svg'
import { CloudinaryLogo } from '@/components/CloudinaryImage'
import { assets } from '@/utils/cloudinary'

export default function MainLayout() {
  const { user, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-dvh flex flex-col">
      <header className={`border-b sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl shadow-lg border-slate-200/50' 
          : 'bg-white/80 backdrop-blur-md shadow-sm border-slate-200/30'
      } supports-[backdrop-filter]:bg-white/80`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 font-bold text-slate-800 hover:opacity-80 transition-opacity">
            {/* Cloudinary logo with fallback to local asset */}
            <CloudinaryLogo 
              publicId={assets.logos.main} 
              alt="D-Secure" 
              className="h-10 w-28"
              size="small"
              fallback={logoSvg}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <div className="relative group">
              <NavLink to="/products" className={({isActive}) => (isActive ? 'text-brand font-medium' : 'text-slate-600 hover:text-slate-900') + ' inline-flex items-center gap-2 py-2'}>
                Products
                <span className="text-slate-400 group-hover:rotate-180 transition-transform duration-300">▾</span>
              </NavLink>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 absolute left-0 top-full mt-1 w-72 lg:w-80 card bg-white/95 backdrop-blur-lg border shadow-xl z-50">
                <NavLink to="/products?type=device" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                    <div className="min-w-0">
                      <div className="font-medium">Device Erasure</div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">Secure data wiping for all devices</div>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/products?type=server" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                    <div className="min-w-0">
                      <div className="font-medium">Server Erasure</div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">Enterprise-grade server sanitization</div>
                    </div>
                  </div>
                </NavLink>
                <NavLink to="/products?type=cloud" className="block px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-slate-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                    </svg>
                    <div className="min-w-0">
                      <div className="font-medium">Cloud Erasure</div>
                      <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">Cloud storage data removal</div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
            <div className="relative group">
              <NavLink to="/solutions" className={({isActive}) => (isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900') + ' inline-flex items-center gap-2'}>
                Solutions
                <span className="text-slate-400 group-hover:rotate-180 transition-transform">▾</span>
              </NavLink>
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all animate-slide-down absolute left-0 top-full mt-2 w-56 card">
                <NavLink to="/solutions?type=enterprise" className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  Enterprise
                </NavLink>
                <NavLink to="/solutions?type=itad" className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  ITAD
                </NavLink>
                <NavLink to="/solutions?type=service-providers" className="flex items-center gap-2 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Service Providers
                </NavLink>
              </div>
            </div>
            <NavLink to="/compliance" className={({isActive}) => isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900' + ' inline-flex items-center gap-2'}>
              Compliance
            </NavLink>
            <NavLink to="/pricing" className={({isActive}) => isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900' + ' inline-flex items-center gap-2'}>
              Pricing
            </NavLink>
            <NavLink to="/resources" className={({isActive}) => isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}>
              Resources
            </NavLink>
            <NavLink to="/about" className={({isActive}) => isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}>
              About
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? 'text-blue-600' : 'text-slate-600 hover:text-slate-900'}>
              Contact
            </NavLink>
          </nav>
          <div className="flex items-center gap-4">
            {user ? (
              <div className="flex items-center gap-4">
                <NavLink 
                  to={user.role === 'admin' ? '/admin' : '/dashboard'} 
                  className="text-sm font-medium text-slate-700 hover:text-brand transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Dashboard
                </NavLink>
                <button 
                  onClick={logout} 
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                  </svg>
                  Logout
                </button>
              </div>
            ) : (
              <div className="hidden md:flex items-center gap-4">
                <NavLink 
                  to="/login" 
                  className="text-sm font-medium text-slate-700 hover:text-brand transition-colors inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                  </svg>
                  Login
                </NavLink>
                <NavLink 
                  to="/register" 
                  className="btn-primary inline-flex items-center gap-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                  </svg>
                  Get Started
                </NavLink>
              </div>
            )}
            <button 
              className={`md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg transition-all duration-200 ${
                open 
                  ? 'bg-brand text-white hover:bg-brand/90' 
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
              }`}
              onClick={()=>setOpen(v=>!v)} 
              aria-label="Toggle menu"
            >
              <svg className="w-5 h-5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        {open && (
          <div className={`md:hidden border-t animate-slide-down ${
            isScrolled 
              ? 'bg-white/98 backdrop-blur-xl shadow-lg' 
              : 'bg-white/95 backdrop-blur-md'
          }`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 space-y-2">
              <NavLink 
                onClick={()=>setOpen(false)} 
                to="/products" 
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4-8-4m16 0v10l-8 4-8-4V7" />
                </svg>
                Products
              </NavLink>
              <NavLink 
                onClick={()=>setOpen(false)} 
                to="/solutions" 
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Solutions
              </NavLink>
              <NavLink 
                onClick={()=>setOpen(false)} 
                to="/compliance" 
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                Compliance
              </NavLink>
              <NavLink 
                onClick={()=>setOpen(false)} 
                to="/pricing" 
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pricing
              </NavLink>
              <NavLink 
                onClick={()=>setOpen(false)} 
                to="/resources" 
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Resources
              </NavLink>
              <NavLink 
                onClick={()=>setOpen(false)} 
                to="/contact" 
                className="flex items-center gap-3 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact
              </NavLink>
              {!user && (
                <div className="flex flex-col gap-3 px-4 pt-6 mt-4 border-t border-slate-200/60">
                  <NavLink 
                    to="/login" 
                    onClick={()=>setOpen(false)} 
                    className="flex items-center justify-center gap-2 px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50/80 rounded-lg transition-colors border border-slate-200"
                  >
                    Login
                  </NavLink>
                  <NavLink 
                    to="/register" 
                    onClick={()=>setOpen(false)} 
                    className="btn-primary w-full justify-center"
                  >
                    Get Started
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
      <main className="flex-1"> 
        <Outlet />
      </main>
      <footer className="mt-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.1),transparent_50%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.05),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_30%,rgba(255,255,255,0.02)_50%,transparent_70%)]"></div>
        
        <div className="container-app relative">
          {/* Newsletter CTA Section */}
          <div className="py-12 border-b border-slate-700/50">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-brand/10 text-brand-300 px-4 py-2 rounded-full text-sm font-medium mb-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                Newsletter
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Stay ahead of data security trends
              </h3>
              <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                Get the latest insights on data erasure, compliance updates, and security best practices delivered to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-white/10 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent backdrop-blur-sm"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-brand to-brand-600 text-white font-semibold rounded-lg hover:from-brand-600 hover:to-brand-700 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-slate-400 text-sm mt-4">
                Join 10,000+ security professionals. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-4">
                <Link to="/" className="flex items-center gap-3 font-bold text-white hover:opacity-80 transition-opacity mb-6">
                  {/* Cloudinary white logo with fallback */}
                  <CloudinaryLogo 
                    publicId={assets.logos.white} 
                    alt="D-Secure" 
                    className="h-10 w-28 text-white"
                    size="small"
                    fallback={blogSvg}
                  />
                </Link>
                <p className="text-slate-300 leading-relaxed mb-6 text-base">
                  Leading provider of certified data erasure solutions for enterprises worldwide. 
                  Secure your data lifecycle with our enterprise-grade security solutions.
                </p>
                
                {/* Trust Indicators */}
                <div className="mb-8">
                  <p className="text-slate-400 text-sm mb-3">Trusted by 1000+ companies worldwide</p>
                  <div className="flex items-center gap-6 opacity-60">
                    <div className="text-slate-400 text-xs font-mono">ISO 27001</div>
                    <div className="text-slate-400 text-xs font-mono">SOC 2</div>
                    <div className="text-slate-400 text-xs font-mono">GDPR</div>
                    <div className="text-slate-400 text-xs font-mono">HIPAA</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-4">
                  <a href="https://twitter.com/dsecure" className="text-slate-400 hover:text-brand transition-colors group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                    </svg>
                  </a>
                  <a href="https://linkedin.com/company/dsecure" className="text-slate-400 hover:text-brand transition-colors group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/dsecure" className="text-slate-400 hover:text-brand transition-colors group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a href="https://youtube.com/dsecure" className="text-slate-400 hover:text-brand transition-colors group">
                    <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Navigation Links */}
              <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                {/* Products */}
                <div>
                  <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Products</h4>
                  <ul className="space-y-4 text-slate-300">
                    <li><Link to="/products" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">All Products</Link></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">DSecure Pro</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">DSecure Enterprise</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">DSecure Cloud</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Mobile Erasure</a></li>
                  </ul>
                </div>

                {/* Solutions */}
                <div>
                  <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Solutions</h4>
                  <ul className="space-y-4 text-slate-300">
                    <li><Link to="/solutions" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">All Solutions</Link></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Healthcare</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Financial Services</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Government</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Education</a></li>
                  </ul>
                </div>

                {/* Resources */}
                <div>
                  <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Resources</h4>
                  <ul className="space-y-4 text-slate-300">
                    <li><Link to="/resources" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Documentation</Link></li>
                    <li><Link to="/compliance" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Compliance</Link></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Blog</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Case Studies</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Webinars</a></li>
                  </ul>
                </div>

                {/* Company */}
                <div>
                  <h4 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h4>
                  <ul className="space-y-4 text-slate-300">
                    <li><Link to="/about" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">About Us</Link></li>
                    <li><Link to="/contact" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Contact</Link></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Careers</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Partners</a></li>
                    <li><a href="#" className="hover:text-brand transition-colors hover:translate-x-1 transform duration-200 inline-block">Press</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-700/50 py-8">
            <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-6 items-center text-slate-400 text-sm">
                <p>© {new Date().getFullYear()} DSecure Inc. All rights reserved.</p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 text-green-400">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs">All systems operational</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-6 text-slate-400 text-sm">
                <a href="#" className="hover:text-brand transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-brand transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-brand transition-colors">Cookie Policy</a>
                <a href="#" className="hover:text-brand transition-colors">Security</a>
                <a href="#" className="hover:text-brand transition-colors">Status</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


