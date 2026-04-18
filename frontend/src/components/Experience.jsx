import React from 'react';
import { ChevronDown } from 'lucide-react';
import { experience, teamMembers } from '../data/mock';

export const Experience = () => {
  const allExperience = [...experience, ...teamMembers];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-bold mb-16">
          Experience<span className="text-[#ff6b35]">.</span>
        </h2>
        
        <div className="max-w-4xl space-y-12">
          {allExperience.map((item, companyIndex) => (
            <div key={companyIndex} className="experience-item">
              <div className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-1 bg-[#ff6b35] flex-grow"></div>
                  <ChevronDown className="text-[#ff6b35] mt-4" size={24} />
                </div>
                
                <div className="flex-1 pb-8">
                  <h3 className="text-3xl font-bold text-[#ff6b35] mb-6">
                    {item.company}
                  </h3>
                  
                  {item.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="mb-8">
                      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                        <h4 className="text-xl font-semibold text-gray-900">
                          {role.title}
                        </h4>
                        <span className="text-gray-500 text-sm mt-1 md:mt-0">
                          {role.duration}
                        </span>
                      </div>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {role.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2">
                        {role.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-[#ff6b35]/10 hover:text-[#ff6b35] transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
