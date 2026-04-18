import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../data/mock';

export const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate('/')}>
            <ArrowLeft className="mr-2" size={20} />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header with Back Button */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-6 py-4">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="hover:bg-gray-100 transition-colors duration-300"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Portfolio
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6">
              <span className="px-4 py-2 bg-[#ff6b35]/20 text-[#ff6b35] rounded-full text-sm font-semibold">
                {project.category}
              </span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              {project.title.split('|')[0].trim()}
              <span className="text-[#ff6b35]">.</span>
            </h1>
            
            {project.title.includes('|') && (
              <p className="text-2xl text-gray-300 mb-8 animate-fade-in-delay-1">
                {project.title.split('|')[1].trim()}
              </p>
            )}
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto animate-fade-in-delay-2">
              {project.description}
            </p>
            
            <div className="flex justify-center gap-8 text-gray-300 animate-fade-in-delay-3">
              <div>
                <p className="text-sm text-gray-500 mb-1">Year</p>
                <p className="font-semibold">{project.year}</p>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Client</p>
                <p className="font-semibold">{project.client}</p>
              </div>
              <div className="w-px bg-gray-700"></div>
              <div>
                <p className="text-sm text-gray-500 mb-1">Type</p>
                <p className="font-semibold">{project.category}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Image Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={project.detailImage} 
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">
              Project Overview<span className="text-[#ff6b35]">.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Challenge</h3>
                <p className="text-gray-600 leading-relaxed">
                  Creating an intuitive and visually appealing design that addresses user needs while maintaining brand consistency and achieving business objectives.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Solution</h3>
                <p className="text-gray-600 leading-relaxed">
                  Through extensive research and iterative design processes, we developed a comprehensive solution that enhances user experience and drives engagement.
                </p>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-gray-200">
              <h3 className="text-2xl font-semibold mb-6">Key Features</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span className="text-gray-600">User-centric design approach with focus on accessibility and usability</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span className="text-gray-600">Modern interface with intuitive navigation and clear visual hierarchy</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span className="text-gray-600">Responsive design optimized for all devices and screen sizes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#ff6b35] mt-1">•</span>
                  <span className="text-gray-600">Comprehensive design system ensuring consistency across all touchpoints</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#0a0e27] via-[#1a1042] to-[#0f0b2e]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Interested in working together<span className="text-[#ff6b35]">?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Get in touch to discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                onClick={() => navigate('/#contact')}
                className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-8 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105"
              >
                Get in Touch
              </Button>
              <Button
                onClick={() => navigate('/#projects')}
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#0a0e27] px-8 py-6 text-lg rounded-full transition-all duration-300"
              >
                View More Projects
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
