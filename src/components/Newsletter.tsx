import React, { useState } from 'react';
import { Mail, Check, AlertCircle } from 'lucide-react';
import { useNotification } from '../contexts/NotificationContext';

const Newsletter = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    frequency: 'weekly',
    gdprConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { addNotification } = useNotification();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.gdprConsent) {
      newErrors.gdprConsent = 'You must consent to data processing';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // In a real implementation, this would call your newsletter API
      console.log('Newsletter subscription:', formData);
      
      addNotification({
        type: 'success',
        title: 'Successfully subscribed!',
        message: 'Thank you for subscribing to our newsletter. You\'ll receive updates based on your preferences.'
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        frequency: 'weekly',
        gdprConsent: false
      });
    } catch (error) {
      addNotification({
        type: 'error',
        title: 'Subscription failed',
        message: 'There was an error subscribing to the newsletter. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stay <span className="text-accent-primary">Updated</span>
          </h2>
          <div className="w-24 h-1 bg-accent-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Subscribe to my newsletter for the latest insights on web development, 
            design trends, and technology updates. No spam, just valuable content.
          </p>
        </div>

        <div className="bg-secondary rounded-2xl p-8 lg:p-12 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-primary border rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 bg-primary border rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  }`}
                  placeholder="Enter your email address"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Frequency Selection */}
            <div>
              <label htmlFor="frequency" className="block text-sm font-medium text-gray-300 mb-2">
                Email Frequency
              </label>
              <select
                id="frequency"
                name="frequency"
                value={formData.frequency}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg focus:ring-2 focus:ring-accent-primary focus:border-transparent transition-colors"
              >
                <option value="daily">Daily Updates</option>
                <option value="weekly">Weekly Digest</option>
                <option value="monthly">Monthly Newsletter</option>
              </select>
            </div>

            {/* GDPR Consent */}
            <div>
              <label className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="gdprConsent"
                  checked={formData.gdprConsent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-accent-primary bg-primary border-gray-600 rounded focus:ring-accent-primary focus:ring-2"
                />
                <span className="text-sm text-gray-300 leading-relaxed">
                  I consent to the processing of my personal data for newsletter purposes. 
                  You can unsubscribe at any time. Read our{' '}
                  <a href="/privacy" className="text-accent-primary hover:text-accent-secondary">
                    Privacy Policy
                  </a>{' '}
                  for more information. *
                </span>
              </label>
              {errors.gdprConsent && (
                <p className="mt-1 text-sm text-red-400 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.gdprConsent}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <Mail className="w-5 h-5" />
                  <span>Subscribe to Newsletter</span>
                </>
              )}
            </button>
          </form>

          {/* Features */}
          <div className="mt-8 pt-8 border-t border-gray-600">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Check className="w-8 h-8 text-accent-primary mb-2" />
                <h4 className="font-semibold text-white mb-1">No Spam</h4>
                <p className="text-sm text-gray-400">Only valuable content, no promotional emails</p>
              </div>
              <div className="flex flex-col items-center">
                <Check className="w-8 h-8 text-accent-primary mb-2" />
                <h4 className="font-semibold text-white mb-1">Easy Unsubscribe</h4>
                <p className="text-sm text-gray-400">One-click unsubscribe anytime</p>
              </div>
              <div className="flex flex-col items-center">
                <Check className="w-8 h-8 text-accent-primary mb-2" />
                <h4 className="font-semibold text-white mb-1">Privacy First</h4>
                <p className="text-sm text-gray-400">Your data is secure and never shared</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;