import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'

export default function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setLoading(true)
    try {
      await register(name, email, password)
      
      // Check if there's a return path from pricing flow
      const returnPath = localStorage.getItem('returnPath')
      if (returnPath) {
        localStorage.removeItem('returnPath')
        navigate(returnPath, { replace: true })
      } else {
        navigate('/dashboard', { replace: true })
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md px-8 py-12 rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl shadow-slate-900/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-brand to-brand-600 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Join DSecure to secure your data management
          </p>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name
            </label>
            <input 
              id="name"
              className="input-field" 
              placeholder="Enter your full name" 
              value={name} 
              onChange={(e)=>setName(e.target.value)} 
              required 
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address
            </label>
            <input 
              id="email"
              className="input-field" 
              placeholder="Enter your email" 
              type="email" 
              value={email} 
              onChange={(e)=>setEmail(e.target.value)} 
              required 
            />
            <p className="mt-2 text-xs text-slate-500">
              Use @admin.com email for admin access
            </p>
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input 
              id="password"
              className="input-field" 
              placeholder="Create a strong password" 
              type="password" 
              value={password} 
              onChange={(e)=>setPassword(e.target.value)} 
              required 
            />
          </div>

          <button 
            disabled={loading} 
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading && (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            )}
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-8">
          <p className="text-center text-sm text-slate-500">
            Already have an account?{' '}
            <a href="/login" className="text-brand font-medium hover:text-brand-600">
              Sign in
            </a>
          </p>
          
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-white text-slate-500">Protected by</span>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-center space-x-6">
                <div className="text-slate-400 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                  </svg>
                  SSL Encryption
                </div>
                <div className="text-slate-400 text-sm flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Secure Data
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


