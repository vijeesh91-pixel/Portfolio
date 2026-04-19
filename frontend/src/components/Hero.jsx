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

      <div className="container mx-auto px-12 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl">
          {/* Text Content - Left Aligned */}
          <div>
            <h1 className="text-8xl md:text-9xl lg:text-[10rem] font-light text-white mb-4 animate-fade-in">
              I'm
            </h1>
            <h1 className="text-9xl md:text-[10rem] lg:text-[12rem] font-bold text-white mb-12 animate-fade-in leading-none">
              {personalInfo.name}
              <span className="text-[#F9A61A]">,</span>
            </h1>
            
            <div className="space-y-8 text-gray-300 text-2xl md:text-3xl leading-relaxed mb-12 animate-fade-in-delay-1 max-w-6xl">
              <p>{personalInfo.introduction.part1}</p>
              <p>{personalInfo.introduction.part2}</p>
              <p>{personalInfo.introduction.part3}</p>
            </div>

            {/* Skills Image - Reduced Size */}
            <div className="mb-12 animate-fade-in-delay-3">
              <img 
                src={personalInfo.logoColorful}
                alt="Skills"
                className="h-14 object-contain"
              />
            </div>

            <div className="flex flex-wrap gap-6 animate-fade-in-delay-4 pb-16">
              <Button 
                onClick={() => scrollToSection('projects')}
                className="bg-white text-[#0a0e27] hover:bg-gray-100 px-12 py-8 text-xl rounded-full transition-all duration-300 font-semibold"
              >
                View Work
              </Button>
              <Button 
                onClick={() => scrollToSection('contact')}
                variant="ghost"
                className="text-white hover:bg-white/10 px-12 py-8 text-xl rounded-full transition-all duration-300 font-semibold"
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
