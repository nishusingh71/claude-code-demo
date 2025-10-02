import Reveal from "@/components/Reveal";
import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';

export default function ContactPage() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
    inquiryType: "general",
  });

  type FormDataType = {
    name: string;
    email: string;
    company: string;
    phone: string;
    subject: string;
    message: string;
    inquiryType: string;
  };

  const [toast, setToast] = useState<{message: string, type: 'success' | 'error'} | null>(null);

  // Toast functionality
  const showToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 6000); // Auto hide after 6 seconds
  };

  // EmailJS configuration - Replace with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_hv99el7';      // Gmail service ID
  const EMAILJS_TEMPLATE_ID = 'template_xs9a9a9';     // Email template ID
  const EMAILJS_PUBLIC_KEY = 'BA4VMWul5mNlyTfMI';       // EmailJS public key

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      showToast('Please fill in all required fields.', 'error');
      return;
    }
    
    emailjs
      .sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          showToast('Your query has been sent successfully! Our sales and tech team will resolve your query within 12 hours.', 'success');
          
          // Reset form after successful submission
          setFormData({
            name: "",
            email: "",
            company: "",
            phone: "",
            subject: "",
            message: "",
            inquiryType: "general",
          });
        },
        (error) => {
          // console.log('FAILED...', error.text);
          showToast('Failed to send email. Please try again later.', 'error');
        },
      );
  };

  const handleSubmit = (e: React.FormEvent) => {
    // console.log("Form submitted:", formData);
    sendEmail(e);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    
    // Map EmailJS field names to our formData fields
    const fieldMap: { [key: string]: string } = {
      'user_name': 'name',
      'user_email': 'email',
      'company': 'company',
      'phone': 'phone',
      'subject': 'subject',
      'message': 'message',
      'inquiryType': 'inquiryType'
    };
    
    const formField = fieldMap[name] || name;
    
    setFormData((prev) => ({
      ...prev,
      [formField]: value,
    }));
  };

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Market Street, Suite 500\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@dsecure.com",
      timezone: "PST (UTC-8)",
      image: "🌉",
    },
    {
      city: "London",
      country: "UK",
      address: "45 King William Street\nLondon EC4R 9AN",
      phone: "+44 20 7123 4567",
      email: "london@dsecure.com",
      timezone: "GMT (UTC+0)",
      image: "🇬🇧",
    },
    {
      city: "Singapore",
      country: "Singapore",
      address: "1 Marina Bay Financial Centre\nSingapore 018989",
      phone: "+65 6123 4567",
      email: "singapore@dsecure.com",
      timezone: "SGT (UTC+8)",
      image: "🇸🇬",
    },
  ];

  const supportOptions = [
    {
      title: "Sales Inquiries",
      description: "Get pricing information and discuss your requirements",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      contact: "sales@dsecuretech.com",
      hours: "9 AM - 6 PM PST",
    },
    {
      title: "Technical Support",
      description: "24/7 support for existing customers",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
      contact: "support@dsecuretech.com",
      hours: "24/7",
    },
    // {
    //   title: 'Partnership',
    //   description: 'Explore partnership and integration opportunities',
    //   icon: (
    //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 119.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    //     </svg>
    //   ),
    //   contact: 'partners@dsecuretech.com',
    //   hours: '9 AM - 6 PM PST'
    // },
    // {
    //   title: 'Media & Press',
    //   description: 'Press inquiries and media resources',
    //   icon: (
    //     <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
    //     </svg>
    //   ),
    //   contact: 'press@dsecure.com',
    //   hours: '9 AM - 5 PM PST'
    // }
  ];

  return (
    <>
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg border transition-all duration-300 max-w-md ${
          toast.type === 'error' 
            ? 'bg-red-50 border-red-200 text-red-800' 
            : 'bg-green-50 border-green-200 text-green-800'
        }`}>
          <div className="flex items-start gap-3">
            {toast.type === 'error' ? (
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            )}
            <div className="flex-1">
              <span className="font-medium text-sm">{toast.message}</span>
            </div>
            <button 
              onClick={() => setToast(null)}
              className="text-gray-400 hover:text-gray-600 flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container-app py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <Reveal>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Get in Touch
              </h1>
            </Reveal>
            <Reveal delayMs={100}>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Ready to secure your data with industry-leading erasure
                solutions? Our experts are here to help you find the perfect fit
                for your organization.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Reveal>
                <div className="bg-white rounded-2xl shadow-xl border border-slate-200/60 p-8 md:p-12">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6">
                    Send us a message
                  </h2>
                  <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="user_name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="user_email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div>
                        <label
                          htmlFor="company"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          placeholder="Acme Corporation"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-slate-700 mb-2"
                        >
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="inquiryType"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Inquiry Type
                      </label>
                      <select
                        id="inquiryType"
                        name="inquiryType"
                        value={formData.inquiryType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="demo">Product Demo</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="compliance">Compliance Questions</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-slate-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:border-brand focus:ring-1 focus:ring-brand outline-none transition-colors resize-none"
                        placeholder="Tell us about your data erasure requirements..."
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        id="consent"
                        className="mt-1"
                        required
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-slate-600"
                      >
                        I agree to the processing of my personal data according
                        to DSecure's{" "}
                        <a href="#" className="text-brand hover:underline">
                          Privacy Policy
                        </a>
                      </label>
                    </div>

                    {/* Hidden field for recipient email */}
                    <input type="hidden" name="to_email" value="nishus877@gmail.com" />

                    <button
                      type="submit"
                      className="w-full btn-primary py-4 text-lg font-medium"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </Reveal>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Reveal delayMs={100}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-6">
                  <h3 className="font-bold text-slate-900 mb-4">
                    Quick Response
                  </h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-green-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700">
                        Response within 12 hours
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700">
                        Live chat available
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-purple-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span className="text-slate-700">
                        Expert technical support
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* <Reveal delayMs={200}>
                <div className="bg-white rounded-2xl shadow-lg border border-slate-200/60 p-6">
                  <h3 className="font-bold text-slate-900 mb-4">Emergency Support</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                        <svg className="w-4 h-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium text-slate-900">24/7 Hotline</div>
                        <div className="text-slate-600 text-sm">+1 (555) 911-HELP</div>
                      </div>
                    </div>
                    <p className="text-xs text-slate-500 ml-11">
                      For critical security incidents and urgent support needs
                    </p>
                  </div>
                </div>
              </Reveal> */}
            </div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-50 via-white to-teal-50">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              How Can We Help?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Choose the right contact method for your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {supportOptions.map((option, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/60 text-center hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-600">
                    {option.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">
                    {option.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {option.description}
                  </p>
                  <div className="space-y-1 text-xs text-slate-500 mb-4">
                    <div>{option.contact}</div>
                    <div>{option.hours}</div>
                  </div>
                  <button className="w-full btn-secondary text-sm">
                    <Link to="/contact" className="w-full">
                      Contact Now
                    </Link>
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-16 md:py-24">
        <div className="container-app">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Global Offices
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              With offices around the world, we're here to support you in your
              timezone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, i) => (
              <Reveal key={i} delayMs={i * 100}>
                <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200/60">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-3xl">{office.image}</div>
                    <div>
                      <h3 className="font-bold text-slate-900">
                        {office.city}
                      </h3>
                      <p className="text-slate-600 text-sm">{office.country}</p>
                    </div>
                  </div>

                  <div className="space-y-3 text-sm text-slate-600">
                    <div className="flex items-start gap-3">
                      <svg
                        className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span className="whitespace-pre-line">
                        {office.address}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>{office.phone}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>{office.email}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <svg
                        className="w-4 h-4 text-slate-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{office.timezone}</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200">
                    <button className="w-full btn-secondary text-sm">
                      Schedule Visit
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
