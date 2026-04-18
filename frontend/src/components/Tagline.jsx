import React from 'react';
import { personalInfo } from '../data/mock';
import { Badge } from './ui/badge';

export const Tagline = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
      {/* Background decoration with orange circle */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#ff6b35] rounded-full translate-x-1/3 translate-y-1/3"></div>
        <div className="absolute top-10 left-20 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
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
                  className="px-4 py-2 text-sm bg-[#1a1f3a] hover:bg-[#252b47] text-white border-0 transition-all duration-300 hover:scale-105 rounded-md"
                >
                  {keyword}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <img 
                src={personalInfo.profileImage}
                alt="Profile"
                className="relative w-full max-w-md object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
