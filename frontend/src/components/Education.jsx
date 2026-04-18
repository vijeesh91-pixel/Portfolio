import React from 'react';
import { ChevronDown } from 'lucide-react';
import { education } from '../data/mock';

export const Education = () => {
  return (
    <section id="education" className="py-24 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e]">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold mb-16 text-white">
          Education<span className="text-[#ff6b35]">.</span>
        </h2>
        
        <div className="max-w-4xl">
          <div className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-1 bg-[#ff6b35] h-full"></div>
              <ChevronDown className="text-[#ff6b35] mt-4" size={24} />
            </div>
            
            <div className="flex-1 pb-8">
              <h3 className="text-3xl font-bold text-[#ff6b35] mb-3">
                {education.degree}
              </h3>
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                <p className="text-xl text-white">
                  {education.university}
                </p>
                <span className="text-gray-400 text-sm mt-1 md:mt-0">
                  {education.duration}
                </span>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                {education.activities.map((activity, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-[#ff6b35] mt-1">•</span>
                    <span className="leading-relaxed">{activity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
