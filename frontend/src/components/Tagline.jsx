import React from 'react';
import { personalInfo } from '../data/mock';
import { Badge } from './ui/badge';

export const Tagline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
      {/* Profile Image - Fixed Bottom Right */}
      <div className="fixed bottom-0 right-0 z-10 pointer-events-none">
        <img 
          src={personalInfo.profileImage}
          alt="Profile"
          className="w-80 h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Make experience as{' '}
            <span className="text-[#ff6b35]">simple</span>
            <br />
            as possible
            <span className="text-[#ff6b35]">.</span>
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {personalInfo.keywords.map((keyword, index) => (
              <Badge 
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-[#1a1f3a] hover:bg-[#252b47] text-white border-0 transition-all duration-300 hover:scale-105 rounded-md"
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
