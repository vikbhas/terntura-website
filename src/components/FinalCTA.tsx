
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            Start with a pilot.
            <br />
            Let's connect.
          </h2>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            Send RFQ / Contact
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
