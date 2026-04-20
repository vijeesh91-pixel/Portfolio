import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Linkedin, Instagram } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { toast } from 'sonner';

const iconMap = {
  Mail: Mail,
  Linkedin: Linkedin,
  Instagram: Instagram,
  Behance: null // Custom Behance icon will be used
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
      {/* Footer decorative image - Within Section */}
      <div className="absolute bottom-0 right-0 opacity-20 pointer-events-none">
        <img 
          src="https://customer-assets.emergentagent.com/job_landing-builder-175/artifacts/wgscwtf9_Footer.png"
          alt="Decorative"
          className="w-96 h-auto object-contain"
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-black mb-8 text-[#05063F]">
            Let's Design <span className="text-[#05063F]">Together</span>
            <span className="text-[#F9A61A]">.</span>
          </h2>
          
          <p className="text-gray-600 text-lg mb-12 max-w-2xl">
            Whether you have a project in mind, a role to fill, or just want to connect — my inbox is always open.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-4 max-w-2xl">
            <Input 
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-6 text-base rounded-lg border-2 border-gray-200 focus:border-[#F9A61A] transition-colors duration-300"
            />
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#F9A61A] hover:bg-[#ff5722] text-white px-10 py-6 text-base rounded-lg transition-all duration-300 hover:scale-105 disabled:opacity-50 font-semibold"
            >
              {isSubmitting ? 'Sending...' : 'hello!'}
            </Button>
          </form>
          
          {/* "Now it's your turn" snippet */}
          <div className="mb-12 max-w-2xl">
            <p className="text-sm text-gray-500 italic">
              Now it's your turn to say "HI"
            </p>
          </div>
          
          <div className="flex gap-6 mb-8">
            {socialLinks.map((link) => {
              const Icon = iconMap[link.icon];
              
              // Brand colors for each platform (shown on hover only)
              const brandColors = {
                Mail: { bg: 'hover:bg-red-500', border: 'hover:border-red-500' },
                Linkedin: { bg: 'hover:bg-[#0077B5]', border: 'hover:border-[#0077B5]' },
                Instagram: { bg: 'hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600', border: 'hover:border-pink-500' },
                Behance: { bg: 'hover:bg-[#1769FF]', border: 'hover:border-[#1769FF]' }
              };
              
              const colors = brandColors[link.icon] || { bg: 'hover:bg-gray-600', border: 'hover:border-gray-600' };
              
              return (
                <a 
                  key={link.platform}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 ${colors.border} ${colors.bg} text-gray-600 hover:text-white transition-all duration-300`}
                  aria-label={link.platform}
                >
                  {link.icon === 'Behance' ? (
                    <svg 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M6.5 4.5h3.5c1.38 0 2.5 1.12 2.5 2.5 0 .83-.37 1.57-.96 2.06.86.45 1.46 1.35 1.46 2.39 0 1.49-1.21 2.7-2.7 2.7H6.5V4.5zm2 4h1.5c.55 0 1-.45 1-1s-.45-1-1-1H8.5v2zm0 5.5h2c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5h-2v3zM15 9h6V7h-6v2zm.5 2.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.54 0 2.85-.99 3.31-2.37h-2.05c-.25.36-.66.6-1.14.6-.83 0-1.5-.67-1.5-1.5h4.87c.01-.13.01-.27.01-.4 0-1.93-1.57-3.5-3.5-3.5zm-1.5 2.73c.08-.76.72-1.35 1.5-1.35s1.42.59 1.5 1.35h-3z"/>
                    </svg>
                  ) : (
                    <Icon size={18} />
                  )}
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-gray-800 text-lg font-bold">
            <a 
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#F9A61A] transition-colors duration-300"
            >
              {personalInfo.email}
            </a>
            <span className="hidden sm:inline">|</span>
            <a 
              href={`tel:${personalInfo.phone}`}
              className="hover:text-[#F9A61A] transition-colors duration-300"
            >
              {personalInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};