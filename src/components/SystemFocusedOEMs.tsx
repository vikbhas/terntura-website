
import React from 'react';
import { FileCheck, TrendingUp, Recycle, Users } from 'lucide-react';

const SystemFocusedOEMs = () => {
  const requirements = [
    {
      icon: FileCheck,
      title: "Structured delivery",
      description: "with documentation"
    },
    {
      icon: TrendingUp,
      title: "Flexible production volumes",
      description: "adaptable to your needs"
    },
    {
      icon: Recycle,
      title: "Support for engineering changes",
      description: "across iterations"
    },
    {
      icon: Users,
      title: "Transparent and direct collaboration",
      description: "Munich-led communication"
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Built for system-focused teams.
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-8">
              We work best with engineering teams who need:
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
                We support your build from day one.
              </p>
            </div>
          </div>
          
          <div>
            <img 
              src="public/assets/anton-savinov-KeLUeVSplNY-unsplash.jpg" 
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
