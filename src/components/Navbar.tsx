
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/90 backdrop-blur-sm py-3 shadow-lg' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl font-extrabold orange-gradient-text">
            Growliora
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-growliora-white hover:text-growliora-coral transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-growliora-white hover:text-growliora-coral transition-colors">
              Services
            </Link>
            <Link to="/projects" className="text-growliora-white hover:text-growliora-coral transition-colors">
              Projects
            </Link>
            <Link to="/contact" className="text-growliora-white hover:text-growliora-coral transition-colors">
              Contact
            </Link>
            <Link to="/contact">
              <Button className="bg-growliora-coral hover:bg-growliora-coral/90 text-white btn-glow">
                Hire Us
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-growliora-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-black/95 absolute top-full left-0 right-0 p-4 border-t border-growliora-gray/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-growliora-white hover:text-growliora-coral py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className="text-growliora-white hover:text-growliora-coral py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/projects" 
                className="text-growliora-white hover:text-growliora-coral py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Projects
              </Link>
              <Link 
                to="/contact" 
                className="text-growliora-white hover:text-growliora-coral py-2 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="bg-growliora-coral hover:bg-growliora-coral/90 text-white w-full btn-glow">
                  Hire Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
