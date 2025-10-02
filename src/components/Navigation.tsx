
import React from 'react';
import { useTranslation } from "react-i18next";
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const { t, i18n } = useTranslation();

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
              {t("nav_home")}
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {t("nav_capabilities")}
            </button>
            <button 
              onClick={() => scrollToSection('process')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {t("nav_process")}
            </button>
            <button 
              onClick={() => scrollToSection('infrastructure')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {t("nav_infrastructure")}
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-primary font-medium transition-colors"
            >
              {t("nav_contact")}
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="flex items-center space-x-2">
  <button
    onClick={() => i18n.changeLanguage("de")}
    className={`text-gray-700 hover:text-primary font-medium underline ${i18n.language === 'en' ? 'underline' : 'no-underline'}`}
  >
    DE
  </button>
  <span className="text-gray-400">|</span>
  <button
    onClick={() => i18n.changeLanguage("en")}
    className={`text-gray-700 hover:text-primary font-medium underline ${i18n.language === 'de' ? 'underline' : 'no-underline'}`}
  >
    EN
  </button>
</div>
          <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScRpe2w2t5XA8oqKpQde6HqdzdxIPwHSExN6F8nd0Qei_L9HQ/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
            >
            <Button 
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white"
            >
              {t("btn_send_enquiry")}
            </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
