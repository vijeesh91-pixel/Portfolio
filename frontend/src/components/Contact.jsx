import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Linkedin, Instagram, Facebook, Dribbble, Heart, Cloud, Star } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { toast } from 'sonner';

const iconMap = {
  Mail: Mail,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Facebook: Facebook,
  Dribbble: Dribbble
};

export const Contact = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success('Thank you! I\'ll get back to you soon.');
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative illustrations */}
      <div className="absolute top-10 right-10 opacity-20">
        <div className="relative">
          <Cloud className="text-gray-400 w-32 h-32 animate-float" />
          <Star className="text-[#ff6b35] w-8 h-8 absolute -top-4 -right-4 animate-pulse" />
        </div>
      </div>
      
      <div className="absolute bottom-20 right-40 opacity-20">
        <Heart className="text-[#ff6b35] w-16 h-16 animate-bounce-slow" />
      </div>
      
      <div className="absolute top-40 right-60 opacity-10">
        <div className="w-24 h-24 border-4 border-gray-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-6xl font-bold mb-8">
            Let's Design <span className="text-[#ff6b35]">Together</span>
            <span className="text-black">.</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-12">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
            <Input 
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-lg rounded-full border-2 border-gray-200 focus:border-[#ff6b35] transition-colors duration-300"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-10 py-6 text-lg rounded-full transition-all duration-300 hover:scale-105 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'hello!'}
            </Button>
          </form>
          
          <div className="flex justify-center gap-6 mb-8">
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <a 
                  key={index}
                  href={link.url}
                  className="w-12 h-12 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-[#ff6b35] hover:bg-[#ff6b35] text-gray-600 hover:text-white transition-all duration-300 hover:scale-110"
                  aria-label={link.platform}
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-600">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#ff6b35] transition-colors duration-300"
            >
              {personalInfo.email}
            </a>
            <span className="hidden sm:inline">•</span>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="hover:text-[#ff6b35] transition-colors duration-300"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
