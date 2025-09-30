import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/auth/AuthContext'

export default function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      await login(email, password)
      
      // Check if there's a return path from pricing flow
      const returnPath = localStorage.getItem('returnPath')
      if (returnPath) {
        localStorage.removeItem('returnPath')
        navigate(returnPath, { replace: true })
      } else {
        navigate('/dashboard', { replace: true })
      }
    } catch (e) {
      setError('Invalid credentials')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="w-full max-w-md px-8 py-12 rounded-2xl bg-white/60 backdrop-blur-xl shadow-2xl shadow-slate-900/10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-brand to-brand-600 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="mt-3 text-sm text-slate-600">
            Sign in to access your secure dashboard
          </p>
        </div>
        
        <form onSubmit={onSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="flex text-sm font-medium text-slate-700 mb-2 items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
              </svg>
              Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <input 
                id="email"
                className="input-field pl-10" 
                placeholder="Enter your email" 
                type="email" 
                value={email} 
                onChange={(e)=>setEmail(e.target.value)} 
                required 
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="password" className="flex text-sm font-medium text-slate-700 mb-2 items-center gap-2">
              <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                </svg>
              </div>
              <input 
                id="password"
                className="input-field pl-10" 
                placeholder="Enter your password" 
                type="password" 
                value={password} 
                onChange={(e)=>setPassword(e.target.value)} 
                required 
              />
            </div>
          </div>

          {error && (
            <div className="rounded-lg bg-red-50 p-4 text-sm text-red-600">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          )}

          <button 
            disabled={loading} 
            className="btn-primary w-full flex items-center justify-center gap-2"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
            )}
            {loading ? 'Signing in...' : 'Sign in'}
          </button>

          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-slate-500">or</span>
            </div>
          </div>

          <button
            type="button"
            className="btn-secondary w-full flex items-center justify-center gap-2"
            onClick={async ()=>{
              setError(null)
              setLoading(true)
              try {
                await login('demo@admin.com','password')
                
                // Check if there's a return path from pricing flow
                const returnPath = localStorage.getItem('returnPath')
                if (returnPath) {
                  localStorage.removeItem('returnPath')
                  navigate(returnPath, { replace: true })
                } else {
                  navigate('/admin', { replace: true })
                }
              } finally {
                setLoading(false)
              }
            }}
          >
            <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm0-8a1 1 0 011 1v2h2a1 1 0 110 2h-2v2a1 1 0 11-2 0v-2H7a1 1 0 110-2h2V9a1 1 0 011-1z" />
            </svg>
            Try Demo Account
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Not registered yet?{' '}
          <a href="/register" className="text-brand font-medium hover:text-brand-600">
            Create an account
          </a>
        </p>
      </div>
    </div>
  )
}


