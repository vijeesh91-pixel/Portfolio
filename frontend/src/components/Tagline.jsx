import React from 'react';
import { personalInfo } from '../data/mock';
import { Badge } from './ui/badge';

export const Tagline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
      {/* Profile Image - Right Side Outside Container */}
      <div className="absolute right-0 bottom-0 w-1/3 h-full flex items-end justify-end pointer-events-none">
        <img 
          src={personalInfo.profileImage}
          alt="Profile"
          className="w-full h-auto object-contain max-h-full"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            Believe in{' '}
            <span className="text-[#ff6b35]">innovation</span>,{' '}
            <span className="text-[#ff6b35]">passion</span>, and{' '}
            <span className="text-[#ff6b35]">empathy</span>
            <span className="text-[#ff6b35]">.</span>
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {personalInfo.keywords.map((keyword, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-6 py-3 text-lg bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 rounded-lg shadow-lg"
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
