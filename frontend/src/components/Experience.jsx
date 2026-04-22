import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { experience as experienceData } from '../data/mock';

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-black mb-16">
          Experience<span className="text-[#F9A61A]">.</span>
        </h2>
        
        <div className="max-w-5xl">
          <Accordion type="multiple" className="space-y-4">
            {experienceData.map((item) => (
              <AccordionItem 
                key={item.company} 
                value={`item-${item.company}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-2xl font-bold text-[#05063F]">
                      {item.company}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-white">
                  {item.roles.map((role) => (
                    <div key={`${item.company}-${role.title}-${role.duration}`} className="mb-8 last:mb-0 border-l-4 border-[#F9A61A] pl-6 ml-2">
                      <h4 className="text-xl font-bold text-[#4a9eff] mb-2">
                        {role.title}
                      </h4>
                      <p className="text-base text-[#05063F] font-semibold mb-1">{role.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{role.duration}</p>
                      <p className="text-[#05063F] mb-4 leading-relaxed text-base font-medium">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-base text-[#05063F] font-semibold">Skills:</span>
                        {role.skills.map((skill) => (
                          <span key={skill} className="text-base text-[#05063F] font-medium">
                            {skill}
                            {skill !== role.skills[role.skills.length - 1] ? ', ' : ''}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};