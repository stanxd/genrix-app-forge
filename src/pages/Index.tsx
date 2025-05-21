
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import TechStack from '@/components/TechStack';
import Demo from '@/components/Demo';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen w-full bg-genrix-dark-purple">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <TechStack />
        <Demo />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
