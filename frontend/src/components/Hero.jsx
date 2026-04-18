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
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          {/* Text Content - Left Aligned */}
          <div>
            <h1 className="text-7xl md:text-8xl font-light text-white mb-2 animate-fade-in">
              I'm
            </h1>
            <h1 className="text-8xl md:text-9xl font-bold text-white mb-8 animate-fade-in">
              {personalInfo.name}
              <span className="text-[#ff6b35]">,</span>
            </h1>
            
            <div className="space-y-6 text-gray-300 text-xl leading-relaxed mb-8 animate-fade-in-delay-1 max-w-4xl">
              <p>{personalInfo.introduction.part1}</p>
              <p>{personalInfo.introduction.part2}</p>
              <p>{personalInfo.introduction.part3}</p>
            </div>

            {/* Skills Image - Reduced Size */}
            <div className="mb-10 animate-fade-in-delay-3">
              <img 
                src={personalInfo.logoColorful}
                alt="Skills"
                className="h-10 object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-4 animate-fade-in-delay-4">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-white text-[#0a0e27] hover:bg-gray-100 px-8 py-6 text-base rounded-full transition-all duration-300 font-semibold"
              >
                View Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                className="text-white hover:bg-white/10 px-8 py-6 text-base rounded-full transition-all duration-300 font-semibold"
              >
                Get in Touch →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
