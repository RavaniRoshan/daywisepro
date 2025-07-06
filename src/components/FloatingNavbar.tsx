import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, ArrowRight } from 'lucide-react';

const FloatingNavbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;
        
        // Show/hide navbar based on scroll direction
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
        
        // Add background blur when scrolled
        setScrolled(currentScrollY > 50);
        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => window.removeEventListener('scroll', controlNavbar);
    }
  }, [lastScrollY]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 120; // Increased offset for better positioning
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'John_Doe_Resume.pdf';
    link.click();
  };

  const navItems = [
    { label: 'About', action: () => scrollToSection('about') },
    { label: 'Projects', action: () => scrollToSection('projects') },
    { label: 'Contact', action: () => scrollToSection('contact') }
  ];

  const navbarVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    },
    hidden: {
      y: -120,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        when: "afterChildren"
      }
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.nav
      variants={navbarVariants}
      animate={isVisible ? "visible" : "hidden"}
      initial="visible"
      className="fixed top-4 left-0 right-0 z-[9999] flex justify-center px-4 sm:px-6"
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`relative w-full max-w-5xl rounded-2xl border transition-all duration-500 ${
          scrolled 
            ? 'bg-black/90 backdrop-blur-2xl shadow-2xl border-white/20' 
            : 'bg-black/60 backdrop-blur-xl shadow-xl border-white/10'
        }`}
        style={{ 
          backdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)',
          WebkitBackdropFilter: scrolled ? 'blur(24px) saturate(180%)' : 'blur(16px) saturate(150%)'
        }}
      >
        {/* Enhanced gradient border effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/30 via-accent-secondary/30 to-accent-tertiary/30 opacity-60 blur-sm -z-10"></div>
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-accent-tertiary/10"></div>
        
        <div className="relative px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between w-full">
            {/* Enhanced Logo - Left Side */}
            <motion.button
              variants={itemVariants}
              onClick={() => scrollToSection('hero')}
              className="flex items-center space-x-2 sm:space-x-3 group flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-accent-primary via-accent-secondary to-accent-tertiary rounded-xl flex items-center justify-center shadow-lg"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <span className="text-white font-bold text-sm sm:text-base">JD</span>
              </motion.div>
              <span className="text-white font-bold text-lg sm:text-xl group-hover:text-accent-primary transition-colors duration-300">
                John Doe
              </span>
            </motion.button>

            {/* Enhanced Desktop Navigation - Center */}
            <div className="hidden lg:flex items-center justify-center space-x-6 xl:space-x-8 flex-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  variants={itemVariants}
                  onClick={item.action}
                  className="relative text-gray-300 hover:text-white font-medium transition-all duration-300 group px-3 py-2"
                  whileHover={{ y: -3 }}
                  whileTap={{ y: 0 }}
                >
                  <span className="relative z-10">{item.label}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-primary/20 to-accent-secondary/20 rounded-lg opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-primary to-accent-secondary rounded-full"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                </motion.button>
              ))}
            </div>
            
            {/* Resume Button - Right Side */}
            <div className="hidden lg:flex items-center flex-shrink-0">
              <motion.button
                variants={itemVariants}
                onClick={downloadResume}
                className="flex items-center space-x-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -3,
                  boxShadow: "0 20px 25px -5px rgba(99, 102, 241, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-4 h-4" />
                <span className="text-sm sm:text-base">Resume</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <motion.button
              variants={itemVariants}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 sm:p-3 text-gray-300 hover:text-white transition-colors duration-300 rounded-lg hover:bg-white/10 flex-shrink-0"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>

          {/* Enhanced Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="lg:hidden mt-4 pt-4 border-t border-white/20"
                style={{ overflow: 'hidden' }}
              >
                <div className="flex flex-col space-y-3">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.label}
                      variants={itemVariants}
                      onClick={item.action}
                      className="text-left text-gray-300 hover:text-white font-medium transition-all duration-300 py-2 px-3 rounded-lg hover:bg-white/10"
                      whileHover={{ x: 10, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {item.label}
                    </motion.button>
                  ))}
                  <motion.button
                    variants={itemVariants}
                    onClick={downloadResume}
                    className="flex items-center space-x-2 px-4 py-2.5 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-lg font-medium w-fit shadow-lg mt-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Download className="w-4 h-4" />
                    <span>Resume</span>
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default FloatingNavbar;