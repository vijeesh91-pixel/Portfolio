import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Linkedin, Instagram, Facebook, Dribbble } from 'lucide-react';
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
      {/* Speech bubble */}
      <div className="absolute top-32 right-32 bg-blue-100 px-4 py-2 rounded-full text-sm text-gray-700 opacity-70 z-10">
        Now it's your turn to say 'HI'.
      </div>

      {/* Decorative illustrations */}
      <div className="absolute top-20 right-20 opacity-10">
        <div className="relative">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="currentColor" strokeWidth="2" className="text-purple-400"/>
          </svg>
        </div>
      </div>
      
      <div className="absolute bottom-32 right-48 opacity-10">
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
          <path d="M40 10 L50 30 L70 35 L55 50 L58 70 L40 60 L22 70 L25 50 L10 35 L30 30 Z" fill="currentColor" className="text-purple-400"/>
        </svg>
      </div>
      
      <div className="absolute top-40 right-64 opacity-10">
        <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
          <path d="M20 40 Q30 20, 40 40 Q50 20, 60 40 Q70 20, 80 40" stroke="currentColor" strokeWidth="2" className="text-pink-400" fill="none"/>
          <circle cx="20" cy="45" r="3" fill="currentColor" className="text-pink-400"/>
          <circle cx="40" cy="45" r="3" fill="currentColor" className="text-pink-400"/>
          <circle cx="60" cy="45" r="3" fill="currentColor" className="text-pink-400"/>
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8">
            Let's Design <span className="text-black">Together</span>
            <span className="text-black">.</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Whether you have a project in mind, a role to fill, or just want to connect — my inbox is always open.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-12 max-w-2xl mx-auto">
            <Input 
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-base rounded-lg border-2 border-gray-200 focus:border-[#ff6b35] transition-colors duration-300"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#ff6b35] hover:bg-[#ff5722] text-white px-10 py-6 text-base rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 font-semibold"
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
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-[#ff6b35] hover:bg-[#ff6b35] text-gray-600 hover:text-white transition-all duration-300"
                  aria-label={link.platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-gray-600 text-sm">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#ff6b35] transition-colors duration-300"
            >
              {personalInfo.email}
            </a>
            <span className="hidden sm:inline">|</span>
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
