
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Company</h3>
            <p className="text-white/80 mb-2">TernTura Industrie GmbH</p>
            <p className="text-white/80 mb-2">Munich, Germany</p>
            <p className="text-white/80">Trusted by European OEMs for over 16 years.</p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-white/80">
              <li>Machined Components</li>
              <li>Iron Castings</li>
              <li>Aluminium Castings</li>
              <li>Sheet Metal Parts</li>
              <li>Welded Assemblies</li>
              <li>Sub-Assemblies</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Global Reach</h4>
            <p className="text-white/80">Germany | Italy | Netherlands | Japan</p>
            <div className="flex flex-col space-y-4 ml-4">
            <Button 
              onClick={() => navigate('/impressum')}
              size="icon"
              className="bg-primary hover:bg-primary/90 text-white px-8 pt-9 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Impressum
            </Button>
            <Button
              onClick={() => navigate('/datenschutz')}
              size="icon"
              className="ml-2 bg-primary hover:bg-primary/90 text-white px-8 pt-0 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
            >
              Datenschutz
            </Button>
  </div>
        </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2025 TernTura Industrie GmbH. All rights reserved.</p>
        </div>
        <div >
          
      </div>
    </footer>
  );
};

export default Footer;
