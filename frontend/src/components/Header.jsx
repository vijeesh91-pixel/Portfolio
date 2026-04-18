import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { personalInfo } from '../data/mock';

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0e27]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('hero')}
            className="hover:opacity-80 transition-opacity duration-300"
          >
            <img 
              src={personalInfo.logo} 
              alt="Vijeesh"
              className="h-6"
            />
          </button>
          
          <div className="flex items-center gap-2 text-white hover:text-[#ff6b35] transition-colors duration-300">
            <Phone size={18} />
            <span className="text-sm">{personalInfo.phone}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
