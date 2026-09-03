import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        
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
          <p className="text-muted" style={{ fontSize: '12px', lineHeight: '1.6', maxWidth: '420px', marginBottom: '1rem' }}>
            Cadena de gimnasios y entrenamiento en Manta, Manabí. Equipamiento biomecánico de alto nivel, zonas de peso libre completas y tarifas accesibles para toda la comunidad.
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
            <Link to="/" className="text-white" style={{ fontSize: '12px', textDecoration: 'underline' }}>
              Inicio
            </Link>
            <Link to="/blog" style={{ color: 'var(--primary)', fontSize: '12px', textDecoration: 'underline', fontWeight: 'bold' }}>
              Blog & Artículos
            </Link>
          </div>
          <div className="text-muted" style={{ fontSize: '11px' }}>
            <span>© {new Date().getFullYear()} Master Gym Manta • Todos los derechos reservados.</span>
          </div>
        </div>

        {/* Sede ULEAM Links */}
        <div>
          <h4 className="font-display text-white" style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
            Sede ULEAM
          </h4>
          <p className="text-muted" style={{ fontSize: '12px', marginBottom: '0.35rem' }}>
            Av. Circunvalación frente a la ULEAM, Manta, Ecuador.
          </p>
          <p className="font-mono" style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--accent)' }}>
            Lun-Vie: 05:30 — 22:30
          </p>
          <a 
            href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Sede%20ULEAM" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white"
            style={{ fontSize: '12px', textDecoration: 'underline', transition: 'color 0.2s ease' }}
          >
            WhatsApp Sede ULEAM →
          </a>
        </div>

        {/* Sede La Proaño Links */}
        <div>
          <h4 className="font-display text-white" style={{ fontSize: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
            Sede La Proaño
          </h4>
          <p className="text-muted" style={{ fontSize: '12px', marginBottom: '0.35rem' }}>
            Barrio La Proaño, Manta, Ecuador.
          </p>
          <p className="font-mono" style={{ fontSize: '11px', fontWeight: 'bold', marginBottom: '0.75rem', color: 'var(--primary)' }}>
            Lun-Vie: 05:30 — 22:30
          </p>
          <a 
            href="https://wa.me/593987654322?text=Hola%20Master%20Gym%20Sede%20La%20Proa%C3%B1o" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-white"
            style={{ fontSize: '12px', textDecoration: 'underline', transition: 'color 0.2s ease' }}
          >
            WhatsApp Sede La Proaño →
          </a>
        </div>

      </div>
    </footer>
  );
}
