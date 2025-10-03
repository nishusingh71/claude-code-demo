import { Routes, Route, Navigate } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './auth/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import MainLayout from './layouts/MainLayout'
import PageLoadingSkeleton from './components/PageLoadingSkeleton'
import { Suspense, lazy, useEffect } from 'react'
import { useGoogleAnalytics } from './utils/analytics'
import { useMicrosoftClarity } from './utils/microsoftClarity'
import { useSEOMonitoring } from './utils/seoMonitor'

const HomePage = lazy(() => import('./pages/HomePage'))
const ServicesPage = lazy(() => import('./pages/ServicesPage'))
const SolutionsPage = lazy(() => import('./pages/SolutionsPage'))
const CompliancePage = lazy(() => import('./pages/CompliancePage'))
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const PricingPage = lazy(() => import('./pages/PricingPage'))
const About = lazy(() => import('./pages/About'))
const PaymentPage = lazy(() => import('./pages/PaymentPage'))
const DiagnosticsPage = lazy(() => import('./pages/DiagnosticsPage'))
import LoginPage from './pages/auth/LoginPage'
// import RegisterPage from './pages/auth/RegisterPage'
import PaymentSetupPage from './pages/PaymentSetupPage'
import UserDashboard from './pages/dashboards/UserDashboard'
import AdminDashboard from './pages/dashboards/AdminDashboard'
import AdminShell from './pages/dashboards/AdminShell'
import AdminPerformance from './pages/dashboards/AdminPerformance'
import AdminReports from './pages/dashboards/AdminReports'
import AdminMachines from './pages/dashboards/AdminMachines'
import AdminLogs from './pages/dashboards/AdminLogs'
import AdminSubusers from './pages/dashboards/AdminSubusers'

// Analytics Integration Component
function AnalyticsWrapper({ children }: { children: React.ReactNode }) {
  // Initialize all analytics tracking
  useGoogleAnalytics();
  useMicrosoftClarity();
  useSEOMonitoring();

  useEffect(() => {
    // Track initial page load
    console.log('🎯 DSecure Analytics & SEO Monitoring Initialized');
  }, []);

  return <>{children}</>;
}

export default function App() {
  return (
    <AuthProvider>
      <AnalyticsWrapper>
        <Suspense fallback={<PageLoadingSkeleton />}>
          <Routes>
            <Route element={<MainLayout />}>
              <Route index element={<HomePage />} />
              <Route path="services" element={<ServicesPage />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="compliance" element={<CompliancePage />} />
            <Route path="resources" element={<ResourcesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="about" element={<About />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="payment" element={<PaymentPage />} />
            <Route path="diagnostics" element={<DiagnosticsPage />} />
            <Route path="login" element={<LoginPage />} />
            {/* <Route path="register" element={<RegisterPage />} /> */}
            
            {/* Payment/License Setup Page */}
            <Route
              path="payment"
              element={
                <ProtectedRoute>
                  <PaymentSetupPage />
                </ProtectedRoute>
              }
            />
            
            {/* Protected Routes */}
            <Route
              path="dashboard"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            
            {/* Admin Routes - Only accessible by admin role */}
            <Route
              path="admin"
              element={
                <ProtectedRoute roles={["admin"]}>
                  <AdminShell />
                </ProtectedRoute>
              }
            >
              <Route index element={<AdminDashboard />} />
              <Route path="performance" element={<AdminPerformance />} />
              <Route path="reports" element={<AdminReports />} />
              <Route path="machines" element={<AdminMachines />} />
              <Route path="logs" element={<AdminLogs />} />
              <Route path="subusers" element={<AdminSubusers />} />
            </Route>
            
            {/* Catch-all route for unmatched paths */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </Suspense>
      </AnalyticsWrapper>
    </AuthProvider>
  )
}
