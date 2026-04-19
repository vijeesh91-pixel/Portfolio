import React from 'react';
import { personalInfo } from '../data/mock';
import { Badge } from './ui/badge';

export const Tagline = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
      {/* Profile Image - Right Side Outside Container */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full flex items-end justify-end pointer-events-none">
        <img 
          src={personalInfo.profileImage}
          alt="Profile"
          className="w-full h-auto object-contain max-h-full"
        />
      </div>

      <div className="container mx-auto px-12 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-4xl">
          <h2 className="text-7xl md:text-8xl lg:text-9xl font-bold text-white mb-12 leading-tight">
            Believe in innovation, passion, and{' '}
            <span className="text-[#F9A61A]">empathy</span>
            <span className="text-[#F9A61A]">.</span>
          </h2>
          
          <div className="flex flex-wrap gap-4">
            {personalInfo.keywords.map((keyword, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-8 py-4 text-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 rounded-lg shadow-lg"
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                {keyword}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
