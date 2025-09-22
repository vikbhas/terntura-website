
import React from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import { useTranslation } from "react-i18next";
const FinalCTA = () => {
  const { t, i18n } = useTranslation();
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            {t("cta_title_line1")}
            <br />
            {t("cta_title_line2")}
          </h2>
        </div>
        
        <div className="flex justify-center">
        <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScRpe2w2t5XA8oqKpQde6HqdzdxIPwHSExN6F8nd0Qei_L9HQ/viewform?usp=header" 
              target="_blank" 
              rel="noopener noreferrer"
            >
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105 group"
          >
            <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
            {/* Send RFQ /  */}
            {t("btn_send_enquiry")}
          </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
