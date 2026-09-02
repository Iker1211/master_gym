import React from 'react';
import Hero from '../components/Hero';
import Sedes from '../components/Sedes';
import Instalaciones from '../components/Instalaciones';
import Tarifas from '../components/Tarifas';
import Faq from '../components/Faq';

export default function LandingPage({ onOpenPassModal }) {
  return (
    <main>
      <Hero onOpenPassModal={onOpenPassModal} />
      <Sedes />
      <Instalaciones />
      <Tarifas onOpenPassModal={onOpenPassModal} />
      <Faq />
    </main>
  );
}
