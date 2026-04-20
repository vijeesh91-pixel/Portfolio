import React from 'react';
import { projects } from '../data/mock';
import { useNavigate } from 'react-router-dom';

export const Projects = () => {
  const navigate = useNavigate();

  const handleProjectClick = (slug) => {
    navigate(`/project/${slug}`);
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-6xl font-black mb-16">
          Projects<span className="text-[#F9A61A]">.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => handleProjectClick(project.slug)}
              className="project-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-lg mb-4 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-[#F9A61A] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-gray-600 text-sm">{project.category}</p>
            </div>
          ))}
        </div>

        {/* More Projects Coming Soon Section */}
        <div className="mt-20 text-center relative">
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-[#F9A61A]/20 via-[#F9A61A]/10 to-[#F9A61A]/20 blur-2xl"></div>
            <div className="relative bg-gradient-to-br from-gray-50 to-white border-2 border-dashed border-[#F9A61A]/30 rounded-2xl px-12 py-8 hover:border-[#F9A61A]/60 transition-all duration-500 hover:scale-105">
              <p className="text-gray-400 text-sm uppercase tracking-widest mb-2 font-semibold">Stay Tuned</p>
              <h3 className="text-4xl font-black text-[#05063F] mb-3">
                More Amazing Projects
              </h3>
              <p className="text-2xl font-bold text-[#F9A61A] mb-2">Coming Soon...</p>
              <div className="flex justify-center gap-2 mt-4">
                <span className="w-2 h-2 bg-[#F9A61A] rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-[#F9A61A] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-2 h-2 bg-[#F9A61A] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
