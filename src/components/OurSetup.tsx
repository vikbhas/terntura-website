
import React from 'react';
import { Building, Factory, Award, FlaskConical, Globe } from 'lucide-react';

const OurSetup = () => {
  const features = [
    {
      icon: Building,
      title: "60,000 sq.ft. owned facility",
      subtitle: "Integrated manufacturing space"
    },
    {
      icon: Factory,
      title: "Foundry and CNC machining under one roof",
      subtitle: "End-to-end production"
    },
    {
      icon: Award,
      title: "ISO 9001 Certified",
      subtitle: "Quality management system"
    },
    {
      icon: FlaskConical,
      title: "In-house QA inspection",
      subtitle: "Testing capabilities"
    },
    {
      icon: Globe,
      title: "Exporting to Germany, Italy, Netherlands, Japan",
      subtitle: "Global experience"
    }
  ];

  return (
    <section id="infrastructure" className="py-24 bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Our infrastructure.
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
            src="../../public/assets/morteza-mohammadi-P8jEvckndSE-unsplash.jpg" 
            alt="Facility wide shot or casting in process"
            className="w-full h-80 object-cover rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default OurSetup;
