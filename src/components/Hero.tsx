import React from 'react';
import { ArrowRight, Play, Star, Users, Calendar, Brain, BarChart3, FolderSync as Sync } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-r from-green-400 to-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-center">
          {/* Content */}
          <div className="lg:col-span-6">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-[#2D5BFF]/20 text-[#2D5BFF] text-sm font-medium mb-8">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Daily Planning
            </div>

            {/* Headline */}
            <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Your Intelligent
              <span className="gradient-text block">Daily Companion</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Combine the flexibility of Notion with AI-powered planning to organize your perfect day. Native apps for Windows and macOS with Gemini intelligence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="btn-primary group">
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary group">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <img src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                  <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&dpr=1" alt="User" className="w-10 h-10 rounded-full border-2 border-white" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-gray-600">Loved by 25,000+ users</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero App Screenshot */}
          <div className="lg:col-span-6 mt-16 lg:mt-0">
            <div className="relative">
              {/* Main App Interface */}
              <div className="relative bg-white rounded-3xl shadow-2xl p-6 animate-float">
                {/* App Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="text-sm text-gray-500">DayWise</div>
                </div>

                {/* Navigation Tabs */}
                <div className="flex space-x-6 mb-6 border-b border-gray-200">
                  <div className="pb-2 border-b-2 border-[#2D5BFF] text-[#2D5BFF] font-medium text-sm">Dashboard</div>
                  <div className="pb-2 text-gray-500 text-sm">Calendar</div>
                  <div className="pb-2 text-gray-500 text-sm">Tasks</div>
                  <div className="pb-2 text-gray-500 text-sm">Notes</div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  {/* Today's Overview */}
                  <div className="bg-gradient-to-r from-[#2D5BFF] to-indigo-600 rounded-2xl p-4 text-white">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">Today's Overview</h3>
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div className="text-2xl font-bold">8 tasks completed</div>
                    <div className="text-sm opacity-80">3 hours focused time</div>
                  </div>

                  {/* AI Suggestions */}
                  <div className="bg-purple-50 rounded-2xl p-4">
                    <div className="flex items-center mb-2">
                      <Brain className="w-5 h-5 text-purple-600 mr-2" />
                      <h3 className="font-semibold text-gray-900">AI Suggestions</h3>
                    </div>
                    <p className="text-sm text-gray-700">Schedule your deep work session for 2-4 PM when you're most productive</p>
                  </div>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-green-50 rounded-xl p-3">
                      <BarChart3 className="w-5 h-5 text-green-600 mb-1" />
                      <div className="text-lg font-bold text-gray-900">92%</div>
                      <div className="text-xs text-gray-600">Weekly Goal</div>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-3">
                      <Sync className="w-5 h-5 text-blue-600 mb-1" />
                      <div className="text-lg font-bold text-gray-900">Synced</div>
                      <div className="text-xs text-gray-600">All Devices</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-lg p-4 animate-pulse-glow">
                <Brain className="w-8 h-8 text-[#2D5BFF]" />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-lg p-4" style={{animationDelay: '1s'}}>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Live Sync</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;