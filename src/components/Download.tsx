import React from 'react';
import { Download, Smartphone, Monitor, Apple } from 'lucide-react';

const DownloadSection = () => {
  return (
    <section id="download" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#2D5BFF]/10 text-[#2D5BFF] text-sm font-medium mb-6">
            <Download className="w-4 h-4 mr-2" />
            Download Apps
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Get DayWise on
            <span className="gradient-text block">all your devices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Native applications for superior performance and seamless synchronization across all platforms.
          </p>
        </div>

        {/* Download Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Windows */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Monitor className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Windows</h3>
            <p className="text-gray-600 mb-6">Native Windows application with full offline support</p>
            <button className="btn-primary w-full">
              Download for Windows
            </button>
            <p className="text-sm text-gray-500 mt-3">Windows 10/11 • 64-bit</p>
          </div>

          {/* macOS */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-gray-50 to-slate-50 border border-gray-200 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-gray-600 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Apple className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">macOS</h3>
            <p className="text-gray-600 mb-6">Optimized for macOS with native performance</p>
            <button className="btn-primary w-full">
              Download for Mac
            </button>
            <p className="text-sm text-gray-500 mt-3">macOS 11+ • Intel & Apple Silicon</p>
          </div>

          {/* iOS */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 border border-purple-200 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">iOS</h3>
            <p className="text-gray-600 mb-6">iPhone and iPad app with seamless sync</p>
            <button className="btn-primary w-full">
              App Store
            </button>
            <p className="text-sm text-gray-500 mt-3">iOS 14+ • iPhone & iPad</p>
          </div>

          {/* Android */}
          <div className="p-8 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 card-hover text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Android</h3>
            <p className="text-gray-600 mb-6">Android app with full feature support</p>
            <button className="btn-primary w-full">
              Google Play
            </button>
            <p className="text-sm text-gray-500 mt-3">Android 8+ • All devices</p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why choose native apps?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2D5BFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Monitor className="w-6 h-6 text-[#2D5BFF]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Superior Performance</h4>
              <p className="text-gray-600">Native apps run faster and smoother than web applications</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2D5BFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6 text-[#2D5BFF]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Offline Access</h4>
              <p className="text-gray-600">Work without internet and sync when you're back online</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[#2D5BFF]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Smartphone className="w-6 h-6 text-[#2D5BFF]" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Platform Integration</h4>
              <p className="text-gray-600">Deep integration with your operating system features</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;