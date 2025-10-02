import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/auth/AuthContext';

export default function PricingPage() {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleChoosePlan = (planTitle: string, planPrice: string) => {
    // Store selected plan in localStorage for later use
    localStorage.setItem('selectedPlan', JSON.stringify({ 
      title: planTitle, 
      price: planPrice 
    }));

    if (user) {
      // User is already authenticated, go directly to payment
      navigate('/payment');
    } else {
      // User needs to authenticate first, redirect to login with return path
      localStorage.setItem('returnPath', '/payment');
      navigate('/login');
    }
  };

  // const plans = [
  //   {
  //     title: 'Lifetime Demo',
  //     subtitle: 'Local Erasure max 1 file at 1MB',
  //     price: '0',
  //     isPriceNumber: true,
  //     features: [
  //       'Local file erasure up to 1MB',
  //       'No access to cloud services',
  //       'No reports generation',
  //       'Max 1 file per session'
  //     ],
  //     buttonText: 'Download Free',
  //     buttonStyle: 'bg-green-600 hover:bg-green-700 text-white'
  //   },
  //   {
  //     title: 'Basic',
  //     subtitle: 'Local Erasure, No Reports, Limited Cloud',
  //     price: '39',
  //     isPriceNumber: true,
  //     features: [
  //       'Local file erasure up to 1MB',
  //       'Cloud storage: 3 files per session (max 1MB each)',
  //       'No reports generation',
  //       'Extend validity or license count available'
  //     ],
  //     buttonText: 'Customize Plan',
  //     buttonStyle: 'btn-primary'
  //   },
  //   {
  //     title: 'Standard',
  //     subtitle: 'Local Erasure + Reports, Limited Cloud',
  //     price: '89',
  //     isPriceNumber: true,
  //     isPopular: true,
  //     features: [
  //       'Local file erasure',
  //       'Detailed reports generation',
  //       'Cloud storage: 3 files per session (max 1MB each)',
  //       'Extend validity or license count available'
  //     ],
  //     buttonText: 'Customize Plan',
  //     buttonStyle: 'btn-primary'
  //   },
  //   {
  //     title: 'Cloud',
  //     subtitle: 'Unlimited Local Erasure, Cloud Storage',
  //     price: '119',
  //     isPriceNumber: true,
  //     features: [
  //       'Unlimited local file erasure',
  //       '1000 files per session after purchase',
  //       'No file size limit',
  //       '10 cloud storage services (1 free)',
  //       'No reports generation',
  //       'Extend validity or license count available'
  //     ],
  //     buttonText: 'Customize Plan',
  //     buttonStyle: 'btn-primary'
  //   },
  //   {
  //     title: 'Pro',
  //     subtitle: 'Local Erasure + Reports + Unlimited Cloud',
  //     price: '299',
  //     isPriceNumber: true,
  //     features: [
  //       'Unlimited local file erasure',
  //       'Detailed reports generation',
  //       '1000 files per session after purchase',
  //       'No file size limit',
  //       'Unlimited cloud services (5 free)',
  //       'Priority support',
  //       'Extend validity or license count available'
  //     ],
  //     buttonText: 'Customize Plan',
  //     buttonStyle: 'btn-primary'
  //   },
  //   {
  //     title: 'Google Drive',
  //     subtitle: 'Google Drive Integration with Product Activation',
  //     price: '12',
  //     isPriceNumber: true,
  //     features: [
  //       'Product activation required',
  //       '10,000 erases per account',
  //       'Google Drive integration',
  //       'Customizable number of Google accounts',
  //       'Annual subscription',
  //       'Priority support'
  //     ],
  //     buttonText: 'Customize Plan',
  //     buttonStyle: 'btn-primary'
  //   }
  // ];

  return (
    <div className="bg-gradient-to-br from-emerald-50 via-white to-teal-50 w-full">
      {/* <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Subscription Plans</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Choose the perfect plan for your data erasure needs, from individual users to enterprise solutions.
        </p>
      </div> */}
      
      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plans.map((plan) => (
          <div 
            key={plan.title} 
            className={`relative card hover:border-brand/30 transition-all duration-300 hover:shadow-2xl ${
              plan.isPopular ? 'ring-2 ring-brand shadow-lg' : ''
            }`}
          >
            {plan.isPopular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}
            
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-slate-900 mb-2">{plan.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{plan.subtitle}</p>
              
              <div className="mb-6">
                {plan.isPriceNumber ? (
                  <div>
                    <span className="text-4xl font-bold text-slate-900">${plan.price}</span>
                    <span className="text-slate-500 ml-1">/year/per machine</span>
                  </div>
                ) : (
                  <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                )}
              </div>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-sm">
                  <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-600">{feature}</span>
                </li>
              ))}
            </ul>

            <button 
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                plan.buttonStyle === 'btn-primary' 
                  ? 'btn-primary' 
                  : plan.buttonStyle
              }`}
              onClick={() => handleChoosePlan(plan.title, plan.isPriceNumber ? plan.price : 'Free')}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div> */}
      
      {/* Free Enterprise Trial Banner */}
      <div className="mt-5 container-app bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 md:p-12 mb-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">🎉 Get 14-Day Enterprise Trial FREE</h2>
          <p className="text-xl mb-6 opacity-90">
            Test all Enterprise features on 1 device - No credit card required, No purchase needed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Try Enterprise Free
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Contact Sales
            </Link>
          </div>
        </div>
      </div>

      {/* D-SecureErase: Full Feature & Services Sheet */}
      <div className="rounded-2xl p-8 md:p-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">🟢 D-SecureErase: Full Feature & Services Sheet</h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Compare all features across our complete product lineup. Contact sales for custom pricing and enterprise quotes.
          </p>
        </div>

        {/* 1. Platform & OS Support */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">1. Platform & OS Support</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Base</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Standard</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Cloud</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Network</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Pro</th>
                  <th className="text-center p-4 font-semibold text-slate-900 bg-purple-50">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Windows Support</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Linux Support</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">macOS Support</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Multi-language UI & Reports (17+)</td>
                  <td className="text-center p-4">✅ <span className="text-xs text-orange-600">(coming soon)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-orange-600">(coming soon)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-orange-600">(coming soon)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-orange-600">(coming soon)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-orange-600">(coming soon)</span></td>
                  <td className="text-center p-4 bg-purple-50">✅ <span className="text-xs text-orange-600">(coming soon)</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 2. Core Erasure Capabilities */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">2. Core Erasure Capabilities</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Base</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Standard</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Cloud</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Network</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Pro</th>
                  <th className="text-center p-4 font-semibold text-slate-900 bg-purple-50">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">30+ International Algorithms (SSD Trim, Crypto Erase)</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">File & Folder Erase</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Erase Traces (Browser, System, App data)</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Erase Deleted Data / Free Space</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Erase Volume</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50"><strong>✅ 5 included</strong></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Erase Disk (Full Device)</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50"><strong>✅ 1 included</strong></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Scheduled Erase</td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">(only file/folder)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">(expanded)</span></td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Cloud Storage Erase (Google Drive, others coming soon)</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 3. Reporting & Compliance */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">3. Reporting & Compliance</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Base</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Standard</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Cloud</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Network</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Pro</th>
                  <th className="text-center p-4 font-semibold text-slate-900 bg-purple-50">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Local PDF Reports</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">White-Label Reports</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Cloud Report Upload/Sync</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">(slow)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">(improved)</span></td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">(fast)</span></td>
                  <td className="text-center p-4 bg-purple-50">✅ <span className="text-xs text-slate-600">(fastest)</span></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">XML Report Format</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">⏳</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Audit-Grade Compliance Certificates</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">User/Action Logs</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 4. Services & Management */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">4. Services & Management</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature / Service</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Base</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Standard</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Cloud</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Network</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Pro</th>
                  <th className="text-center p-4 font-semibold text-slate-900 bg-purple-50">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Web Dashboard</td>
                  <td className="text-center p-4">Limited</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Cloud Commands (Remote Jobs)</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Custom Installer (auto-register machine)</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">1 free + add-on</span></td>
                  <td className="text-center p-4 bg-purple-50"><strong>✅ 5 free + add-on</strong></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Sub-User Management</td>
                  <td className="text-center p-4">🔒 <span className="text-xs text-slate-600">(profiles only)</span></td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Private Cloud Support</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅ <span className="text-xs text-slate-600">1 free + add-on</span></td>
                  <td className="text-center p-4 bg-purple-50"><strong>✅ 1 free + add-on</strong></td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Multi-Level User Logs</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">White-Label Dashboard</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4">✅</td>
                  <td className="text-center p-4 bg-purple-50">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Add-On / Optional Customization */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">5. Add-On / Optional Customization</h3>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-slate-200">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-200">
                  <th className="text-left p-4 font-semibold text-slate-900">Feature</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Base</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Standard</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Cloud</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Network</th>
                  <th className="text-center p-4 font-semibold text-slate-900">Pro</th>
                  <th className="text-center p-4 font-semibold text-slate-900 bg-purple-50">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Additional Disk Erasure Licenses</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Additional Volume Erasure Licenses</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Extra Custom Installer Packages</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Extra Sub-Users</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Extra Private Clouds</td>
                  <td className="text-center p-4">🚫</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Bespoke Integrations (SIEM, IT tools, etc.)</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50">
                  <td className="p-4 font-medium text-slate-900">Dedicated SLA/Support Manager</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4">🔒</td>
                  <td className="text-center p-4 bg-purple-50">🔒</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        {/* <div className="bg-slate-100 rounded-lg p-6 mb-8">
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
            <strong>Bold</strong> = Enterprise free allowances to highlight promotional value
          </p>
        </div> */}

        {/* CTA Buttons */}
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 mb-8">
            <Link to="/contact" className="btn-secondary text-center">Base Plan - Contact Sales</Link>
            <Link to="/contact" className="btn-secondary text-center">Standard Plan - Contact Sales</Link>
            <Link to="/contact" className="btn-secondary text-center">Cloud Plan - Contact Sales</Link>
            <Link to="/contact" className="btn-secondary text-center">Network Plan - Contact Sales</Link>
            <Link to="/contact" className="btn-secondary text-center">Pro Plan - Contact Sales</Link>
            <Link to="/contact" className="btn-primary bg-purple-600 hover:bg-purple-700 text-center">Enterprise - Contact Sales</Link>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Custom Quote
            </Link>
            <Link to="/contact" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Try Enterprise Free for 1 Device (14 Days)
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container-app text-center mt-12 mb-10">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-2xl p-8 mb-8">
          <h2 className="text-3xl font-bold mb-4">🎉 Limited Time: 14-Day Enterprise Trial</h2>
          <p className="text-xl mb-6 opacity-90">
            Test all Enterprise features FREE on 1 device - No credit card, No purchase required
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-green-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-50 transition-colors">
              🚀 Try Enterprise Free (14 Days)
            </Link>
            <Link to="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              📞 Contact Sales Team
            </Link>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4">Need a custom solution for your enterprise?</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="btn-primary">
            <Link to="/contact">Request Custom Quote</Link>
          </button>
          <button className="btn-secondary">
            <Link to="/contact">Schedule Consultation</Link>
          </button>
        </div>
      </div>
    </div>
  )
}


