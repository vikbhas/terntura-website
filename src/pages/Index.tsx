
import React from 'react';
import Navigation from '@/components/Navigation';
import Header from '@/components/Header';
import WhyTernTura from '@/components/WhyTernTura';
import WhatWeDeliver from '@/components/WhatWeDeliver';
import HowWeWork from '@/components/HowWeWork';
import OurSetup from '@/components/OurSetup';
import SystemFocusedOEMs from '@/components/SystemFocusedOEMs';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Header />
      <WhyTernTura />
      <WhatWeDeliver />
      <HowWeWork />
      <OurSetup />
      <SystemFocusedOEMs />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
