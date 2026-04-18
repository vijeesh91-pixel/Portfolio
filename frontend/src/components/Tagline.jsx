import React from 'react';
import { personalInfo } from '../data/mock';
import { Badge } from './ui/badge';

export const Tagline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-10 right-20 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Make experience as{' '}
              <span className="text-[#ff6b35]">simple</span> as possible
              <span className="text-[#ff6b35]">.</span>
            </h2>
            
            <div className="flex flex-wrap gap-3">
              {personalInfo.keywords.map((keyword, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="px-6 py-2 text-base bg-white/10 hover:bg-white/20 text-white border-white/20 transition-all duration-300 hover:scale-105"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-[#ff6b35]/20 rounded-full blur-2xl"></div>
              <img 
                src={personalInfo.profileImage}
                alt="Profile"
                className="relative w-80 h-80 rounded-full object-cover border-8 border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
