
import React from 'react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-bold text-xl text-gray-900">
            TernTura
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Capabilities
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Process
            </button>
            <button 
              onClick={() => scrollToSection('infrastructure')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Infrastructure
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              Contact
            </button>
          </div>
          
          <div className="hidden md:block">
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
