
import React from 'react';
import { Button } from '@/components/ui/button';
import { useTranslation } from "react-i18next";
const Header = () => {
  const { t, i18n } = useTranslation();
  return (
    <header id="home" className="min-h-screen bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center px-4 pt-16">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            {t("hero_title_line1")}
            <br />
            <span className="text-primary">{t("hero_title_line2")}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-medium mb-8">
          {t("hero_tagline")}
          </p>
        </div>
        
        <div className="flex justify-center">
        <a href="https://calendly.com/grk-ternturaindustrie/30min?hide_gdpr_banner=1" 
        target="_blank" 
        rel="noopener noreferrer" >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            {t("btn_talk_engineer")}
          </Button>
          </a>
        </div>
        
        <div className="mt-16">
          <img 
            src="/assets/1stpage.avif" 
            alt="Industrial casting and machining operations"
            className="w-full h-64 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
