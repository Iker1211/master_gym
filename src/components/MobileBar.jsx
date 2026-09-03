import React from 'react';

export default function MobileBar({ onOpenPassModal }) {
  return (
    <aside aria-label="Acciones rápidas de contacto" className="mobile-sticky-bar">
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--color-muted)', fontWeight: 'bold' }}>
          MASTER GYM MANTA
        </span>
        <span className="font-display text-yellow" style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.05em', fontWeight: 'bold' }}>
          2 Sedes Activas
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
        <a 
          href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20informaci%C3%B3n%20sobre%20las%20sedes" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
          style={{ padding: '0.5rem 1rem', fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase' }}
        >
          WhatsApp
        </a>
        <button 
          onClick={onOpenPassModal} 
          className="btn btn-primary"
          style={{ padding: '0.55rem 1.15rem', fontSize: '12px' }}
          type="button"
        >
          Pase Gratis
        </button>
      </div>
    </aside>
  );
}
