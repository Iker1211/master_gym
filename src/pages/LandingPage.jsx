import React from 'react';
import Hero from '../components/Hero';
import SedesInstalaciones from '../components/SedesInstalaciones';
import Tarifas from '../components/Tarifas';
import Faq from '../components/Faq';

export default function LandingPage({ onOpenPassModal }) {
  return (
    <main>
      <Hero onOpenPassModal={onOpenPassModal} />
      <SedesInstalaciones />
      <Tarifas onOpenPassModal={onOpenPassModal} />
      <Faq />
    </main>
  );
}

