import React from 'react';
import { Download, Settings, Zap } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Download,
      title: "Download & Setup",
      description: "Get DayWise on your preferred device and complete the quick onboarding process in under 2 minutes.",
      color: "bg-[#2D5BFF]"
    },
    {
      icon: Settings,
      title: "Customize Your Preferences",
      description: "Set your goals, working hours, and preferences. Our AI learns your patterns to provide personalized suggestions.",
      color: "bg-green-500"
    },
    {
      icon: Zap,
      title: "Start Planning Smarter",
      description: "Let DayWise optimize your schedule, suggest improvements, and help you achieve your daily goals effortlessly.",
      color: "bg-purple-500"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Simple Process
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get started in
            <span className="gradient-text block">three simple steps</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your daily planning with DayWise in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="relative mb-8">
                <div className={`w-20 h-20 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute top-10 left-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center text-lg font-bold text-gray-900 transform -translate-x-1/2 shadow-md border-4 border-gray-50">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-full w-full h-1 bg-gradient-to-r from-gray-200 to-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <button className="btn-primary">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;