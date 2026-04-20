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

        {/* More Projects Coming Soon - Simple & Subtle */}
        <div className="mt-16 text-center">
          <p className="text-sm font-light text-gray-400">
            More Projects coming soon.
          </p>
        </div>
      </div>
    </section>
  );
};
