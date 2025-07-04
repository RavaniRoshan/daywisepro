import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-[#2D5BFF] rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <span className="ml-3 text-2xl font-bold text-gray-900">DayWise</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">How it Works</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Reviews</a>
            <a href="#download" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Download</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#2D5BFF] transition-colors font-medium">
              Sign In
            </button>
            <button className="btn-primary">
              Get Started Free
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">How it Works</a>
              <a href="#pricing" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Reviews</a>
              <a href="#download" className="text-gray-700 hover:text-[#2D5BFF] transition-colors">Download</a>
              <div className="pt-4 border-t border-gray-200">
                <button className="w-full text-left text-gray-700 hover:text-[#2D5BFF] transition-colors mb-4">
                  Sign In
                </button>
                <button className="w-full btn-primary">
                  Get Started Free
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;