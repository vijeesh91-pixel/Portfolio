import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';
import { projects } from '../data/mock';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);

  const handleBackClick = () => {
    navigate('/', { replace: true });
    setTimeout(() => {
      const element = document.getElementById('projects');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={handleBackClick}>
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Back Button */}
      <div className="fixed top-6 left-6 z-50">
        <Button
          onClick={handleBackClick}
          className="bg-white hover:bg-gray-100 text-gray-900 shadow-lg transition-all duration-300 hover:scale-105 rounded-full px-6"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back
        </Button>
      </div>

      {/* Full Image Display - No Header, No Text, Just the Image */}
      <div className="w-full">
        <img 
          src={project.detailImage} 
          alt={project.title}
          className="w-full h-auto object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};
