import React from 'react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

export const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-7xl md:text-8xl font-bold text-white mb-8 animate-fade-in">
            I'm <span className="text-white">{personalInfo.name}</span>
            <span className="text-[#ff6b35]">.</span>
          </h1>
          
          <div className="space-y-4 text-gray-300 text-lg leading-relaxed mb-8 animate-fade-in-delay-1">
            {personalInfo.introduction.split('. ').map((sentence, index) => (
              <p key={index} className="animate-fade-in-delay-2">
                {sentence}{index < personalInfo.introduction.split('. ').length - 1 ? '.' : ''}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-delay-3">
            {personalInfo.skills.map((skill, index) => (
              <div 
                key={index}
                className="skill-badge group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-xl font-bold text-white group-hover:scale-110 transition-transform duration-300 inline-block">
                  {skill}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in-delay-4">
            <Button 
              onClick={() => scrollToSection('projects')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a0e27] px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              View Work
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#0a0e27] px-8 py-6 text-lg rounded-full transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
