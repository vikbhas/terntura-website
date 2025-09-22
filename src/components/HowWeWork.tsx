
import React from 'react';
import { FileText, Cog, RotateCcw, Factory, Truck } from 'lucide-react';
import { useTranslation } from "react-i18next";
const HowWeWork = () => {
  const { t, i18n } = useTranslation();
  const steps = [
    {
      icon: FileText,
      title: t("work_step1_title"),
      description: t("work_step1_sub"),
    },
    {
      icon: Cog,
      title: t("work_step2_title"),
      description: t("work_step2_sub"),
    },
    {
      icon: RotateCcw,
      title: t("work_step3_title"),
      description: t("work_step3_sub"),
    },
    {
      icon: Factory,
      title: t("work_step4_title"),
      description: t("work_step4_sub"),
    },
    {
      icon: Truck,
      title: t("work_step5_title"),
      description: t("work_step5_sub"),
    },
  ];

  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          {t("work_header")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 hover:bg-primary/20 transition-colors duration-300">
                <step.icon className="w-10 h-10 text-primary" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gray-200 -translate-x-1/2"></div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mb-16">
          <p className="text-lg font-medium text-gray-700">
            {t("work_note")}
          </p>
        </div>
        
        <div className="text-center">
          <img 
            src="/assets/thisiseng.jpg" 
            alt="Machining operator at work"
            className="w-full h-96 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
