import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar({ onOpenPassModal }) {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo with Neutral Anchor Rhino */}
        <Link to="/" className="brand-logo" aria-label="Master Gym Manta">
          <img
            src="/assets/logo/logo.png"
            alt="Master Gym Manta"
            className="brand-logo-img"
          />
          <div className="brand-text-group">
            <span className="brand-text-title">MASTER GYM</span>
            <span className="brand-text-sub font-mono">Manta • Ecuador</span>
          </div>
        </Link>

        {/* Navigation & Action */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <nav className="header-nav" aria-label="Navegación principal">
            {isHomePage ? (
              <>
                <a href="#sedes" className="nav-link">Sedes</a>
                <a href="#instalaciones" className="nav-link">Instalaciones</a>
                <a href="#planes" className="nav-link">Tarifas</a>
                <a href="#faq" className="nav-link">Preguntas</a>
              </>
            ) : (
              <>
                <Link to="/#sedes" className="nav-link">Sedes</Link>
                <Link to="/#instalaciones" className="nav-link">Instalaciones</Link>
                <Link to="/#planes" className="nav-link">Tarifas</Link>
                <Link to="/#faq" className="nav-link">Preguntas</Link>
              </>
            )}
            
            {/* Blog Link */}
            <Link
              to="/blog"
              className={`nav-link ${isBlogPage ? 'active-nav-link text-neon' : ''}`}
              style={isBlogPage ? { color: 'var(--color-neon)', fontWeight: 'bold' } : {}}
            >
              Blog
            </Link>
          </nav>

          <button onClick={onOpenPassModal} className="btn-neon" type="button">
            Pase Gratis 1 Día →
          </button>
        </div>
      </div>
    </header>
  );
}
