import React from 'react';
import { Brain, Calendar, BarChart3, FolderSync as Sync, Smartphone, Shield, Zap, Target, ArrowRight } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Assistant",
      description: "Gemini-powered intelligent suggestions for optimal task scheduling and productivity insights.",
      color: "from-purple-400 to-indigo-500"
    },
    {
      icon: Calendar,
      title: "Timeline View",
      description: "Interactive daily timeline with drag-and-drop scheduling for perfect day organization.",
      color: "from-blue-400 to-cyan-500"
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Visual insights with charts tracking task completion, time spent, and productivity patterns.",
      color: "from-green-400 to-emerald-500"
    },
    {
      icon: Sync,
      title: "Cross-Platform Sync",
      description: "Seamless synchronization across Windows, macOS, and mobile devices via Firebase.",
      color: "from-orange-400 to-red-500"
    },
    {
      icon: Smartphone,
      title: "Native Apps",
      description: "Superior performance with native Windows and macOS applications for offline productivity.",
      color: "from-pink-400 to-rose-500"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Set and monitor daily, weekly, and monthly goals with intelligent progress tracking.",
      color: "from-teal-400 to-green-500"
    },
    {
      icon: Shield,
      title: "Secure & Private",
      description: "Your data stays private with end-to-end encryption and secure cloud synchronization.",
      color: "from-gray-400 to-slate-500"
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with instant search, quick capture, and responsive interface.",
      color: "from-yellow-400 to-orange-500"
    }
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Powerful Features
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Everything you need for
            <span className="gradient-text block">perfect daily planning</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combine the flexibility of Notion with AI intelligence to create your ideal daily workflow and achieve your goals.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 rounded-3xl bg-white border border-gray-200 card-hover"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {feature.description}
              </p>
              <button className="flex items-center text-[#2D5BFF] font-medium group-hover:text-indigo-700 transition-colors">
                Learn more
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <button className="btn-primary">
            Explore All Features
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;