import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const FloatingNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 100; // Account for floating nav height
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-in-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 px-8 py-4">
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 mr-4">
            <div className="w-8 h-8 bg-[#2D5BFF] rounded-lg flex items-center justify-center">
              <Calendar className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900">DayWise</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-6">
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-[#2D5BFF] transition-colors duration-200 font-medium text-sm"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('how-it-works')}
              className="text-gray-700 hover:text-[#2D5BFF] transition-colors duration-200 font-medium text-sm"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection('pricing')}
              className="text-gray-700 hover:text-[#2D5BFF] transition-colors duration-200 font-medium text-sm"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-[#2D5BFF] transition-colors duration-200 font-medium text-sm"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection('download')}
              className="text-gray-700 hover:text-[#2D5BFF] transition-colors duration-200 font-medium text-sm"
            >
              Download
            </button>
          </div>

          {/* Sign In Button */}
          <div className="flex items-center space-x-4 ml-4 pl-4 border-l border-gray-200">
            <Link
              to="/login"
              className="text-gray-700 hover:text-[#2D5BFF] transition-colors duration-200 font-medium text-sm"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-[#2D5BFF] text-white px-6 py-2 rounded-xl font-medium text-sm hover:bg-[#1E40AF] transition-all duration-200 hover:shadow-lg hover:scale-105"
            >
              Try Free
            </Link>
          </div>
        </div>
      </div>

      {/* Floating effect shadow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#2D5BFF]/10 to-purple-600/10 rounded-2xl blur-xl -z-10 opacity-50"></div>
    </nav>
  );
};

export default FloatingNav;