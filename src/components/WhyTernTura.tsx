
import React from 'react';
import { MapPin, Layers, Users, Award } from 'lucide-react';

const WhyTernTura = () => {
  const highlights = [
    {
      icon: MapPin,
      title: "Based in Munich",
      description: "German coordination and control"
    },
    {
      icon: Layers,
      title: "Single-source production",
      description: "Complete capabilities under one roof"
    },
    {
      icon: Users,
      title: "No middlemen",
      description: "Direct execution and communication"
    },
    {
      icon: Award,
      title: "ISO-certified and traceable",
      description: "Quality you can verify"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Built to integrate. Engineered to deliver.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              TernTura Industrie GmbH is a German-led sourcing company based in Munich. We supply precision components to European OEMs through our own ISO 9001-certified 60,000 sq.ft. production facility in India.
            </p>
            <p className="text-lg text-gray-700 mb-12 leading-relaxed">
              Our project execution, QA, and export logistics are coordinated locally from Germany.
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
              src="../../public/assets/pexels-cmrcn-29224552.jpg" 
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
