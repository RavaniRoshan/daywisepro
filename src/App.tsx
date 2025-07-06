import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NotificationProvider } from './contexts/NotificationContext';
import FloatingNavbar from './components/FloatingNavbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Newsletter from './components/Newsletter';
import ScrollToTop from './components/ScrollToTop';
import NotificationToast from './components/NotificationToast';
import './styles/globals.css';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-primary text-white">
      <FloatingNavbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Newsletter />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
        </Routes>
      </Router>
      <NotificationToast />
    </NotificationProvider>
  );
}

export default App;