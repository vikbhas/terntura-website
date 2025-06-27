
import React from 'react';

const Footer = () => {
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
          </div>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center text-white/60">
          <p>© 2025 TernTura Industrie GmbH. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
