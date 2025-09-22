
import React from 'react';
import { FileCheck, TrendingUp, Recycle, Users } from 'lucide-react';
import { useTranslation } from "react-i18next";

const SystemFocusedOEMs = () => {
  const { t } = useTranslation();
  const requirements =  [
    {
      icon: FileCheck,
      title: t("teams_point1_bold"),
      description: t("teams_point1_light"),
    },
    {
      icon: TrendingUp,
      title: t("teams_point2_bold"),
      description: t("teams_point2_light"),
    },
    {
      icon: Recycle,
      title: t("teams_point3_bold"),
      description: t("teams_point3_light"),
    },
    {
      icon: Users,
      title: t("teams_point4_bold"),
      description: t("teams_point4_light"),
    },
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t("teams_title")}
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
            {t("teams_intro")}
            </h3>
            
            <div className="space-y-6 mb-12">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <req.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">{req.title}</span>
                    <span className="text-gray-600 ml-2">{req.description}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-primary">
              <p className="text-xl font-semibold text-gray-900">
              {t("teams_cta_banner")}
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="/assets/anton.jpg" 
              alt="Batch-ready parts and clean assembly operations"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemFocusedOEMs;
