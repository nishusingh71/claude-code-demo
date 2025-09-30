import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

export type Role = 'user' | 'admin'

export interface AuthUser {
  id: string
  email: string
  name: string
  role: Role
  token: string
}

interface AuthContextValue {
  user: AuthUser | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined)

function fakeJwt(payload: Record<string, unknown>): string {
  return btoa(JSON.stringify({ header: { alg: 'none', typ: 'JWT' }, payload }))
}

function loadUser(): AuthUser | null {
  const raw = localStorage.getItem('dsecure:user')
  if (!raw) return null
  try {
    return JSON.parse(raw)
  } catch {
    return null
  }
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(() => loadUser())

  useEffect(() => {
    if (user) localStorage.setItem('dsecure:user', JSON.stringify(user))
    else localStorage.removeItem('dsecure:user')
  }, [user])

  const login = async (email: string, password: string) => {
    await new Promise((r) => setTimeout(r, 400))
    const role: Role = email.endsWith('@admin.com') ? 'admin' : 'user'
    const newUser: AuthUser = {
      id: crypto.randomUUID(),
      email,
      name: email.split('@')[0],
      role,
      token: fakeJwt({ sub: email, role }),
    }
    setUser(newUser)
  }

  const register = async (name: string, email: string, _password: string) => {
    await new Promise((r) => setTimeout(r, 500))
    const role: Role = email.endsWith('@admin.com') ? 'admin' : 'user'
    const newUser: AuthUser = {
      id: crypto.randomUUID(),
      email,
      name,
      role,
      token: fakeJwt({ sub: email, role }),
    }
    setUser(newUser)
  }

  const logout = () => setUser(null)

  const value = useMemo(() => ({ user, login, register, logout }), [user])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error('useAuth must be used within AuthProvider')
  return ctx
}


