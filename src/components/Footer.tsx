
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";

const Footer = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">{t("footer_company_col")}</h3>
            <p className="text-white/80 mb-2">TernTura Industrie GmbH</p>
            <p className="text-white/80 mb-2">Munich, Germany</p>
            <p className="text-white/80">{t("footer_company_note")}</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer_services_col")}</h4>
            <ul className="space-y-2 text-white/80">
              <li>{t("footer_service_machined")}</li>
              <li>{t("footer_service_iron")}</li>
              <li>{t("footer_service_aluminium")}</li>
              <li>{t("footer_service_sheet")}</li>
              <li>{t("footer_service_welded")}</li>
              <li>{t("footer_service_subassy")}</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">{t("footer_global_col")}</h4>
            <p className="text-white/80">{t("footer_global_list")}</p>
            <div className="flex flex-col space-y-4 ml-4">
            <Button 
              onClick={() => navigate('/impressum')}
              size="icon"
              className="bg-primary hover:bg-primary/90 text-white px-8 pt-9 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t("footer_impressum")}
            </Button>
            <Button
              onClick={() => navigate('/datenschutz')}
              size="icon"
              className="ml-2 bg-primary hover:bg-primary/90 text-white px-8 pt-0 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              {t("footer_privacy")}
            </Button>
  </div>
        </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2025 TernTura Industrie GmbH. {t("footer_rights")}</p>
        </div>
        <div >
          
      </div>
    </footer>
  );
};

export default Footer;
