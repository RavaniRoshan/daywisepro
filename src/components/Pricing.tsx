import React, { useState } from 'react';
import { Check, X, Star, Zap, Crown } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Free",
      description: "Perfect for personal use and getting started",
      monthlyPrice: 0,
      annualPrice: 0,
      icon: Star,
      features: [
        "Up to 100 tasks per month",
        "Basic timeline view",
        "Mobile app access",
        "Cloud sync",
        "Basic themes",
        "Email support"
      ],
      notIncluded: [
        "AI assistant",
        "Advanced analytics",
        "Unlimited tasks",
        "Priority support"
      ],
      popular: false,
      cta: "Get Started Free"
    },
    {
      name: "Pro",
      description: "Best for professionals and power users",
      monthlyPrice: 9.99,
      annualPrice: 99.99,
      icon: Zap,
      features: [
        "Unlimited tasks and projects",
        "AI assistant with Gemini",
        "Advanced analytics dashboard",
        "Timeline view with drag & drop",
        "All themes and customization",
        "Priority email support",
        "Calendar integrations",
        "File attachments",
        "Advanced reminders"
      ],
      notIncluded: [
        "Team collaboration",
        "Admin controls"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Team",
      description: "For teams and organizations",
      monthlyPrice: 19.99,
      annualPrice: 199.99,
      icon: Crown,
      features: [
        "Everything in Pro",
        "Team collaboration tools",
        "Shared workspaces",
        "Admin controls",
        "Team analytics",
        "Priority support",
        "Custom integrations",
        "Advanced security",
        "Team training sessions",
        "Dedicated account manager"
      ],
      notIncluded: [],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Simple Pricing
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose the perfect
            <span className="gradient-text block">plan for your needs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Start with our free plan. Upgrade anytime to unlock AI features and advanced analytics.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-lg font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-8 w-14 items-center rounded-full transition-colors ${
                isAnnual ? 'bg-[#2D5BFF]' : 'bg-gray-300'
              }`}
            >
              <span
                className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-lg font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Annual
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium">
              Save 17%
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-3xl border-2 transition-all duration-300 ${
                plan.popular
                  ? 'border-[#2D5BFF] shadow-2xl scale-105 bg-white'
                  : 'border-gray-200 bg-white card-hover'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-[#2D5BFF] to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Plan Header */}
              <div className="text-center mb-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                  plan.name === 'Free' ? 'from-gray-400 to-gray-500' :
                  plan.name === 'Pro' ? 'from-[#2D5BFF] to-indigo-600' :
                  'from-purple-600 to-pink-600'
                } flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                
                <div className="flex items-baseline justify-center">
                  <span className="text-5xl font-bold text-gray-900">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {plan.monthlyPrice === 0 ? '' : `/${isAnnual ? 'year' : 'month'}`}
                  </span>
                </div>
                {isAnnual && plan.monthlyPrice > 0 && (
                  <p className="text-sm text-green-600 mt-2">
                    Save ${((plan.monthlyPrice * 12) - plan.annualPrice).toFixed(2)} annually
                  </p>
                )}
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start opacity-50">
                    <X className="w-5 h-5 text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-500">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                  plan.popular
                    ? 'btn-primary'
                    : 'btn-secondary'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-4">
            All paid plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <button className="text-[#2D5BFF] font-medium hover:text-indigo-700 transition-colors">
            Compare all features →
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;