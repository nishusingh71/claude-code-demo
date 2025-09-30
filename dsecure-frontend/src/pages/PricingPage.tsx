import { useNavigate } from 'react-router-dom';
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

  const plans = [
    {
      title: 'Lifetime Demo',
      subtitle: 'Local Erasure max 1 file at 1MB',
      price: '0',
      isPriceNumber: true,
      features: [
        'Local file erasure up to 1MB',
        'No access to cloud services',
        'No reports generation',
        'Max 1 file per session'
      ],
      buttonText: 'Download Free',
      buttonStyle: 'bg-green-600 hover:bg-green-700 text-white'
    },
    {
      title: 'Basic',
      subtitle: 'Local Erasure, No Reports, Limited Cloud',
      price: '39',
      isPriceNumber: true,
      features: [
        'Local file erasure up to 1MB',
        'Cloud storage: 3 files per session (max 1MB each)',
        'No reports generation',
        'Extend validity or license count available'
      ],
      buttonText: 'Customize Plan',
      buttonStyle: 'btn-primary'
    },
    {
      title: 'Standard',
      subtitle: 'Local Erasure + Reports, Limited Cloud',
      price: '89',
      isPriceNumber: true,
      isPopular: true,
      features: [
        'Local file erasure',
        'Detailed reports generation',
        'Cloud storage: 3 files per session (max 1MB each)',
        'Extend validity or license count available'
      ],
      buttonText: 'Customize Plan',
      buttonStyle: 'btn-primary'
    },
    {
      title: 'Cloud',
      subtitle: 'Unlimited Local Erasure, Cloud Storage',
      price: '119',
      isPriceNumber: true,
      features: [
        'Unlimited local file erasure',
        '1000 files per session after purchase',
        'No file size limit',
        '10 cloud storage services (1 free)',
        'No reports generation',
        'Extend validity or license count available'
      ],
      buttonText: 'Customize Plan',
      buttonStyle: 'btn-primary'
    },
    {
      title: 'Pro',
      subtitle: 'Local Erasure + Reports + Unlimited Cloud',
      price: '299',
      isPriceNumber: true,
      features: [
        'Unlimited local file erasure',
        'Detailed reports generation',
        '1000 files per session after purchase',
        'No file size limit',
        'Unlimited cloud services (5 free)',
        'Priority support',
        'Extend validity or license count available'
      ],
      buttonText: 'Customize Plan',
      buttonStyle: 'btn-primary'
    },
    {
      title: 'Google Drive',
      subtitle: 'Google Drive Integration with Product Activation',
      price: '12',
      isPriceNumber: true,
      features: [
        'Product activation required',
        '10,000 erases per account',
        'Google Drive integration',
        'Customizable number of Google accounts',
        'Annual subscription',
        'Priority support'
      ],
      buttonText: 'Customize Plan',
      buttonStyle: 'btn-primary'
    }
  ];

  return (
    <div className="container-app py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Subscription Plans</h1>
        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
          Choose the perfect plan for your data erasure needs, from individual users to enterprise solutions.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
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
      </div>
      
      <div className="text-center mt-12">
        <p className="text-slate-600 mb-4">Need a custom solution for your enterprise?</p>
        <button className="btn-secondary">
          Contact Sales Team
        </button>
      </div>
    </div>
  )
}


