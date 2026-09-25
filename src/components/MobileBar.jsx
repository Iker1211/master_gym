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
      <div className="mobile-bar-info">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
          <span className={`status-dot ${scheduleStatus.isOpen ? 'status-dot-open' : 'status-dot-closed'}`} style={{ width: '6px', height: '6px' }}></span>
          <span style={{ fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', color: scheduleStatus.isOpen ? 'var(--accent)' : 'var(--text-muted)', fontWeight: 'bold' }}>
            {scheduleStatus.isOpen ? 'ABIERTO EN MANTA' : 'ABRE 05:30 AM'}
          </span>
        </div>
        <span className="mobile-bar-brand font-display text-white">
          ULEAM • LA PROAÑO
        </span>
      </div>

      <div className="mobile-bar-actions">
        <a 
          href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20informaci%C3%B3n%20sobre%20horarios%20y%20precios%20de%20las%20sedes" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-secondary mobile-bar-btn-wa"
          aria-label="Contactar por WhatsApp"
        >
          <Send size={14} />
          <span className="mobile-bar-btn-text">WhatsApp</span>
        </a>
        <button 
          onClick={onOpenPassModal} 
          className="btn btn-primary mobile-bar-btn-cta"
          type="button"
        >
          <Sparkles size={14} />
          <span>Pase Gratis</span>
        </button>
      </div>
    </aside>
  );
}
