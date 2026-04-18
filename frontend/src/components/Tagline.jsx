import React from 'react';
import { personalInfo } from '../data/mock';
import { Badge } from './ui/badge';

export const Tagline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-end max-w-6xl mx-auto">
          <div>
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
                  className="px-5 py-3 text-base bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-xl transition-all duration-300 hover:scale-105 rounded-lg shadow-lg"
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
          
          {/* Profile Image - Properly Contained */}
          <div className="flex justify-end items-end">
            <div className="relative w-full max-w-md overflow-hidden">
              <img 
                src={personalInfo.profileImage}
                alt="Profile"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
