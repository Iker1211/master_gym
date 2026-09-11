import React from 'react';
import { Send, Sparkles } from 'lucide-react';
import { useGymSchedule } from '../hooks/useGymSchedule';

export default function MobileBar({ onOpenPassModal }) {
  const scheduleStatus = useGymSchedule('uleam');

  return (
    <aside 
      aria-label="Acciones rápidas de contacto" 
      className="mobile-sticky-bar"
      style={{
        paddingBottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))',
        minHeight: '64px'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span className={`status-dot ${scheduleStatus.isOpen ? 'status-dot-open' : 'status-dot-closed'}`} style={{ width: '6px', height: '6px' }}></span>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: scheduleStatus.isOpen ? 'var(--accent)' : 'var(--text-muted)', fontWeight: 'bold' }}>
            {scheduleStatus.isOpen ? 'ABIERTO EN MANTA' : 'ABRE 05:30 AM'}
          </span>
        </div>
        <span className="font-display text-white" style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '0.03em', lineHeight: '1.1' }}>
          ULEAM • LA PROAÑO
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <a 
          href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20informaci%C3%B3n%20sobre%20horarios%20y%20precios%20de%20las%20sedes" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary"
          style={{ 
            minHeight: '44px', 
            padding: '0.6rem 0.95rem', 
            fontSize: '12px', 
            fontWeight: 'bold', 
            textTransform: 'uppercase', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem',
            borderRadius: 'var(--radius-full)'
          }}
        >
          <Send size={14} />
          <span>WhatsApp</span>
        </a>
        <button 
          onClick={onOpenPassModal} 
          className="btn btn-primary"
          style={{ 
            minHeight: '44px', 
            padding: '0.6rem 1.1rem', 
            fontSize: '12px', 
            fontWeight: 'bold', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '0.4rem', 
            boxShadow: '0 0 16px var(--primary-glow)',
            borderRadius: 'var(--radius-full)'
          }}
          type="button"
        >
          <Sparkles size={14} />
          <span>Pase Gratis</span>
        </button>
      </div>
    </aside>
  );
}
