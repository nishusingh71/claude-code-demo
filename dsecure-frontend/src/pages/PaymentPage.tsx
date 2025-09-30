import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/auth/AuthContext';

interface PlanDetails {
  title: string;
  price: string;
}

export default function PaymentPage() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [selectedPlan, setSelectedPlan] = useState<PlanDetails | null>(null);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
    billingAddress: '',
    city: '',
    zipCode: '',
    country: 'US'
  });

  useEffect(() => {
    // Redirect to login if not authenticated
    if (!user) {
      navigate('/login');
      return;
    }

    // Get selected plan from localStorage
    const planData = localStorage.getItem('selectedPlan');
    if (planData) {
      setSelectedPlan(JSON.parse(planData));
    } else {
      // If no plan selected, redirect to pricing
      navigate('/pricing');
    }
  }, [user, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Simulate payment processing
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Clear the selected plan from localStorage
      localStorage.removeItem('selectedPlan');
      localStorage.removeItem('returnPath');
      
      // Redirect to admin dashboard after successful payment
      navigate('/admin', { replace: true });
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  if (!selectedPlan) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-brand mx-auto"></div>
          <p className="mt-4 text-slate-600">Loading payment details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container-app py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-slate-900 mb-8">Complete Your Purchase</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="order-2 lg:order-1">
            <div className="card">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="border rounded-lg p-4 bg-slate-50">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-slate-900">{selectedPlan.title} Plan</h3>
                    <p className="text-sm text-slate-600 mt-1">Monthly subscription</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-900">
                      {selectedPlan.price === 'Contact' ? 'Custom' : `$${selectedPlan.price}`}
                    </div>
                    {selectedPlan.price !== 'Contact' && (
                      <div className="text-sm text-slate-500">per month</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="text-slate-900">
                    {selectedPlan.price === 'Contact' ? 'Custom' : `$${selectedPlan.price}.00`}
                  </span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Tax</span>
                  <span className="text-slate-900">
                    {selectedPlan.price === 'Contact' ? '$0.00' : `$${(parseFloat(selectedPlan.price) * 0.08).toFixed(2)}`}
                  </span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span className="text-slate-900">Total</span>
                  <span className="text-slate-900">
                    {selectedPlan.price === 'Contact' 
                      ? 'Custom' 
                      : `$${(parseFloat(selectedPlan.price) * 1.08).toFixed(2)}`
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="order-1 lg:order-2">
            <form onSubmit={handlePayment} className="space-y-6">
              <div className="card">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">Payment Information</h2>
                
                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-slate-700 mb-3">Payment Method</label>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('card')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        paymentMethod === 'card' 
                          ? 'border-brand bg-brand/5' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                        </svg>
                        <span className="font-medium">Credit Card</span>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paypal')}
                      className={`p-4 border rounded-lg text-left transition-colors ${
                        paymentMethod === 'paypal' 
                          ? 'border-brand bg-brand/5' 
                          : 'border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-medium">PayPal</span>
                      </div>
                    </button>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <>
                    <div className="grid grid-cols-1 gap-4">
                      <div>
                        <label htmlFor="cardholderName" className="block text-sm font-medium text-slate-700 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          id="cardholderName"
                          name="cardholderName"
                          value={formData.cardholderName}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-slate-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="1234 5678 9012 3456"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="expiryDate" className="block text-sm font-medium text-slate-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            id="expiryDate"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="MM/YY"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-slate-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="123"
                            required
                          />
                        </div>
                      </div>
                    </div>

                    <hr className="my-6" />

                    <div className="space-y-4">
                      <h3 className="font-medium text-slate-900">Billing Address</h3>
                      
                      <div>
                        <label htmlFor="billingAddress" className="block text-sm font-medium text-slate-700 mb-2">
                          Address
                        </label>
                        <input
                          type="text"
                          id="billingAddress"
                          name="billingAddress"
                          value={formData.billingAddress}
                          onChange={handleInputChange}
                          className="input-field"
                          placeholder="123 Main Street"
                          required
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-slate-700 mb-2">
                            City
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="New York"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-slate-700 mb-2">
                            ZIP Code
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleInputChange}
                            className="input-field"
                            placeholder="10001"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {paymentMethod === 'paypal' && (
                  <div className="text-center py-8">
                    <p className="text-slate-600 mb-4">You will be redirected to PayPal to complete your payment.</p>
                    <div className="text-6xl">💳</div>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={isProcessing}
                className="btn-primary w-full py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? (
                  <div className="flex items-center justify-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Processing Payment...
                  </div>
                ) : (
                  selectedPlan.price === 'Contact' ? 'Contact Sales Team' : 'Complete Purchase'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}