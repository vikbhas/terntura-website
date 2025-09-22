
import React from 'react';
import { MapPin, Layers, Users, Award } from 'lucide-react';
import { useTranslation } from "react-i18next";
const WhyTernTura = () => {
  const { t, i18n } = useTranslation();
  const highlights = [
    {
      icon: MapPin,
      title: t("badge_munich_title"),
      description: t("badge_munich_sub"),
    },
    {
      icon: Layers,
      title: t("badge_single_source_title"),
      description: t("badge_single_source_sub"),
    },
    {
      icon: Users,
      title: t("badge_no_middlemen_title"),
      description: t("badge_no_middlemen_sub"),
    },
    {
      icon: Award,
      title: t("badge_iso_title"),
      description: t("badge_iso_sub"),
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t("intro_title")}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            {t("intro_p1")}
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            {t("intro_p2")}
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-4 h-24">
                  <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                    <highlight.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{highlight.title}</h3>
                    <p className="text-gray-600 text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <img 
              src="/assets/pexels.jpg" 
              alt="QA + machining floor"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTernTura;
