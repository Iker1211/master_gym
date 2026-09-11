import React from 'react';
import { Link } from 'react-router-dom';
import RhinoWatermark from './RhinoWatermark';

export default function Footer() {
  return (
    <footer className="footer" style={{ position: 'relative', overflow: 'hidden' }}>
      <RhinoWatermark variant="footer" position="center" opacity={0.14} />
      <div className="container footer-grid" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Brand column */}
        <div>
          <Link to="/" className="footer-brand-link">
            <img
              src="/assets/logo/logo.png"
              alt="Master Gym Manta Rhino Logo"
              className="footer-logo-img"
            />
            <span className="font-display text-white footer-brand-title">
              MASTER GYM
            </span>
          </Link>
          <p className="text-muted" style={{ fontSize: '12px', lineHeight: '1.6', maxWidth: '460px', marginBottom: '1rem' }}>
            Cadena de gimnasios y entrenamiento en Manta, Manabí. Equipamiento biomecánico de alto nivel, zonas de peso libre completas y tarifas accesibles para toda la comunidad.
          </p>
          <div className="text-muted" style={{ fontSize: '11px' }}>
            <span>© {new Date().getFullYear()} Master Gym Manta • Todos los derechos reservados.</span>
          </div>
        </div>

        {/* Navigation links */}
        <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="text-white" style={{ fontSize: '13px', textDecoration: 'underline' }}>
            Inicio
          </Link>
          <Link to="/blog" style={{ color: 'var(--primary)', fontSize: '13px', textDecoration: 'underline', fontWeight: 'bold' }}>
            Blog & Artículos
          </Link>
        </div>

      </div>
    </footer>
  );
}
