import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

export const Experience = () => {
  const experienceData = [
    {
      company: "Oddup",
      roles: [
        {
          title: "Sr UI/UX Designer",
          company: "Oddup",
          duration: "Dec 2024 - Present (1 yr 5 mos+)",
          description: "Collaborating with the tech team to develop the Oddup trading platform Designing high fidelity, data-dense dashboards and complex application interfaces.",
          skills: ["Product Design", "Figma", "Interaction Design", "Data Visualization"]
        },
        {
          title: "UI/UX Designer",
          company: "Oddup",
          duration: "Jan 2022 - Dec 2024 (3 yrs)",
          description: "Worked with marketing and tech teams to develop and update core products. Handled data-driven design dashboards, ran metrics, and campaigns.",
          skills: ["User Interface Design", "Interaction Design", "Marketing", "Email Campaigns"]
        },
        {
          title: "Interface Designer",
          company: "Oddup",
          duration: "Sep 2019 - Jan 2022 (2 yrs 5 mos)",
          description: "Promoted to UI Designer for various sub-projects across the Oddup product suite. Collaborated with the marketing team on Recerve, Alluva, Stimulus Cheque, and Oddup product videos, generation, email design and digital assets.",
          skills: ["Animation", "Branding", "Wireframing", "User Interface Design"]
        },
        {
          title: "Graphics Designer",
          company: "Oddup",
          duration: "Sep 2018 - Oct 2019 (1 yr 2 mos)",
          description: "Refreshed Oddup's visual identity through rebranding, website redesign, and multimedia design. Crafted digital and print advertising materials.",
          skills: ["Wireframing", "Branding", "Visual Design"]
        }
      ]
    },
    {
      company: "Alluva",
      roles: [
        {
          title: "Team Member",
          company: "Alluva",
          duration: "Jan 2019 - Jul 2022 (3 yrs 7 mos)",
          description: "Contributed to the design of Alluva, a platform incentivizing cryptocurrency asset prediction. Focused on analyst-driven data visualization and market insight features.",
          skills: ["User Research", "Wireframing", "UI Design"]
        }
      ]
    },
    {
      company: "Redrawlife",
      roles: [
        {
          title: "Designer",
          company: "Redrawlife",
          duration: "Jan 2017 - Sep 2018 (1 yr 9 mos)",
          description: "Designed marketing materials and interaction flows to support business growth.",
          skills: ["Wireframing", "Figma", "Interaction Design"]
        }
      ]
    },
    {
      company: "Caspo LLC",
      roles: [
        {
          title: "Co-Founder",
          company: "Caspo LLC",
          duration: "Jan 2016 - Dec 2017 (2 yrs)",
          description: "Developed and iterated on a smart cooking system that produces and uses hydrogen fuel Led product development from concept to commercial market launch.",
          skills: ["Product Development", "Startups", "Entrepreneurship"]
        }
      ]
    },
    {
      company: "Reinwo Labs",
      roles: [
        {
          title: "Co-Founder",
          company: "Reinwo Labs",
          duration: "Aug 2014 - Dec 2016 (2 yrs 5 mos)",
          description: "Co-founded Reinwo Labs, which designed a system converting tap water to usable hydrogen gas for cooking.",
          skills: ["Product Design", "Engineering", "Startups"]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold mb-16">
          Experience<span className="text-[#ff6b35]">.</span>
        </h2>
        
        <div className="max-w-5xl">
          <Accordion type="multiple" className="space-y-4">
            {experienceData.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                  <div className="flex justify-between items-center w-full">
                    <h3 className="text-2xl font-bold text-black">
                      {item.company}
                    </h3>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 bg-white">
                  {item.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="mb-8 last:mb-0 border-l-4 border-[#ff6b35] pl-6 ml-2">
                      <h4 className="text-xl font-semibold text-[#4a9eff] mb-2">
                        {role.title}
                      </h4>
                      <p className="text-base text-gray-600 mb-1">{role.company}</p>
                      <p className="text-sm text-gray-500 mb-4">{role.duration}</p>
                      <p className="text-gray-700 mb-4 leading-relaxed text-base">
                        {role.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="text-base text-gray-600">Skills:</span>
                        {role.skills.map((skill, skillIndex) => (
                          <span key={skillIndex} className="text-base text-gray-700">
                            {skill}
                            {skillIndex < role.skills.length - 1 ? ', ' : ''}
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