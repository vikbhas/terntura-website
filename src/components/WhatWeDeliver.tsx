
import React from 'react';
import { Settings, Cpu, Wrench, Box, Layers, Factory } from 'lucide-react';
import { useTranslation } from "react-i18next";
const WhatWeDeliver = () => {
  const { t, i18n } = useTranslation();
  const services = [
    {
      icon: Settings,
      title: t("deliver_machined_title"),
      description: t("deliver_machined_sub"),
    },
    {
      icon: Factory,
      title: t("deliver_iron_title"),
      description: t("deliver_iron_sub"),
    },
    {
      icon: Cpu,
      title: t("deliver_aluminium_title"),
      description: t("deliver_aluminium_sub"),
    },
    {
      icon: Wrench,
      title: t("deliver_sheet_title"),
      description: t("deliver_sheet_sub"),
    },
    {
      icon: Box,
      title: t("deliver_forging_title"),
      description: t("deliver_forging_sub"),
    },
    {
      icon: Layers,
      title: t("deliver_subassy_title"),
      description: t("deliver_subassy_sub"),
    },
  ];

  return (
    <section id="capabilities" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t("deliver_title")}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="text-center group hover:scale-105 transition-transform duration-300 h-full">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                <div className="bg-primary/10 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <img 
            src="/assets/pexels-k.jpg" 
            alt="Industrial casting and assembly operations"
            className="w-full h-64 object-cover rounded-2xl shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDeliver;
