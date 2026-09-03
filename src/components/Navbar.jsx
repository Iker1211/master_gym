import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenPassModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isBlogPage = location.pathname.startsWith('/blog');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`main-header navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container header-container nav-container">
        
        {/* Brand Logo with Rhino */}
        <Link to="/" className="brand-logo logo" onClick={closeMenu} aria-label="Master Gym Manta">
          <img
            src="/assets/logo/logo.png"
            alt="Master Gym Manta"
            className="brand-logo-img"
          />
          <div className="brand-text-group">
            <span className="brand-text-title logo-text">
              MASTER<span className="highlight">GYM</span>
            </span>
            <span className="brand-text-sub font-mono">Manta • Ecuador</span>
          </div>
        </Link>

        {/* Desktop & Mobile Navigation Menu */}
        <nav className={`header-nav nav-menu ${mobileMenuOpen ? 'active' : ''}`} aria-label="Navegación principal">
          <ul className="nav-links">
            <li>
              {isHomePage ? (
                <a href="#sedes" className="nav-link" onClick={closeMenu}>Sedes</a>
              ) : (
                <Link to="/#sedes" className="nav-link" onClick={closeMenu}>Sedes</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#instalaciones" className="nav-link" onClick={closeMenu}>Instalaciones</a>
              ) : (
                <Link to="/#instalaciones" className="nav-link" onClick={closeMenu}>Instalaciones</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#planes" className="nav-link" onClick={closeMenu}>Tarifas</a>
              ) : (
                <Link to="/#planes" className="nav-link" onClick={closeMenu}>Tarifas</Link>
              )}
            </li>
            <li>
              {isHomePage ? (
                <a href="#faq" className="nav-link" onClick={closeMenu}>Preguntas</a>
              ) : (
                <Link to="/#faq" className="nav-link" onClick={closeMenu}>Preguntas</Link>
              )}
            </li>
            <li>
              <Link
                to="/blog"
                className={`nav-link ${isBlogPage ? 'active-nav-link text-gradient font-bold' : ''}`}
                onClick={closeMenu}
              >
                Blog
              </Link>
            </li>
          </ul>

          <div className="nav-actions-mobile">
            <button
              onClick={() => {
                closeMenu();
                onOpenPassModal();
              }}
              className="btn btn-primary full-width"
              type="button"
            >
              <span>Pase Gratis 1 Día</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </nav>

        {/* Desktop Actions */}
        <div className="nav-actions">
          <button
            onClick={onOpenPassModal}
            className="btn btn-primary"
            type="button"
          >
            <span>Pase Gratis 1 Día</span>
            <ArrowRight size={16} />
          </button>

          <button
            className={`menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú de navegación"
            type="button"
          >
            {mobileMenuOpen ? <X size={24} color="#fff" /> : <Menu size={24} color="#fff" />}
          </button>
        </div>

      </div>
    </header>
  );
}
