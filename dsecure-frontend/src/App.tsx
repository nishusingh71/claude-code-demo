import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthProvider, useAuth } from './auth/AuthContext'
import MainLayout from './layouts/MainLayout'
import { Suspense, lazy } from 'react'
const HomePage = lazy(() => import('./pages/HomePage'))
const ProductsPage = lazy(() => import('./pages/ProductsPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const CompliancePage = lazy(() => import('./pages/CompliancePage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const About=lazy(() => import('./pages/About'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import UserDashboard from './pages/dashboards/UserDashboard'
import AdminDashboard from './pages/dashboards/AdminDashboard'
import AdminShell from './pages/dashboards/AdminShell'
import AdminPerformance from './pages/dashboards/AdminPerformance'
import AdminReports from './pages/dashboards/AdminReports'
import AdminMachines from './pages/dashboards/AdminMachines'
import AdminLogs from './pages/dashboards/AdminLogs'
import AdminSubusers from './pages/dashboards/AdminSubusers'

function PrivateRoute({ children, roles }: { children: JSX.Element; roles?: string[] }) {
  const { user } = useAuth()
  if (!user) return <Navigate to="/login" replace />
  if (roles && !roles.includes(user.role)) return <Navigate to="/" replace />
  return children
}

export default function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<div className="container-app py-10">Loading…</div>}>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="solutions" element={<SolutionsPage />} />
          <Route path="compliance" element={<CompliancePage />} />
          <Route path="resources" element={<ResourcesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="about" element={<About />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="payment" element={<PaymentPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <UserDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="admin"
            element={
              <PrivateRoute roles={["admin"]}>
                <AdminShell />
              </PrivateRoute>
            }
          >
            <Route index element={<AdminDashboard />} />
            <Route path="performance" element={<AdminPerformance />} />
            <Route path="reports" element={<AdminReports />} />
            <Route path="machines" element={<AdminMachines />} />
            <Route path="logs" element={<AdminLogs />} />
            <Route path="subusers" element={<AdminSubusers />} />
          </Route>
        </Route>
      </Routes>
      </Suspense>
    </AuthProvider>
  )
}
