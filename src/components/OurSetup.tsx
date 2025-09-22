
import React from 'react';
import { Building, Factory, Award, FlaskConical, Globe } from 'lucide-react';
import { useTranslation } from "react-i18next";
const OurSetup = () => {
  const { t, i18n } = useTranslation();
  const features = [
    {
      icon: Building,
      title: t("infra_size_title"),
      subtitle: t("infra_size_sub"),
    },
    {
      icon: Factory,
      title: t("infra_foundry_title"),
      subtitle: t("infra_foundry_sub"),
    },
    {
      icon: Award,
      title: t("infra_iso_title"),
      subtitle: t("infra_iso_sub"),
    },
    {
      icon: FlaskConical,
      title: t("infra_qa_title"),
      subtitle: t("infra_qa_sub"),
    },
    {
      icon: Globe,
      title: t("infra_export_title"),
      subtitle: t("infra_export_sub"),
    },
  ];

  return (
    <section id="infrastructure" className="py-24 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            {t("infra_title")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="bg-white/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 hover:bg-white/20 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.subtitle}</p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <img 
            src="/assets/morteza.jpg" 
            alt="Facility wide shot or casting in process"
            className="w-full h-80 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSetup;
