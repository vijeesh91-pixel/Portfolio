import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Linkedin, Instagram, Dribbble } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/mock';
import { toast } from 'sonner';

const iconMap = {
  Mail: Mail,
  Linkedin: Linkedin,
  Instagram: Instagram,
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
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-black">
            Let's Design <span className="text-black">Together</span>
            <span className="text-black">.</span>
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
            {socialLinks.map((link, index) => {
              const Icon = iconMap[link.icon];
              return (
                <a 
                  key={index}
                  href={link.url}
                  className="w-10 h-10 flex items-center justify-center rounded-full border-2 border-gray-300 hover:border-[#F9A61A] hover:bg-[#F9A61A] text-gray-600 hover:text-white transition-all duration-300"
                  aria-label={link.platform}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 text-gray-600 text-sm">
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