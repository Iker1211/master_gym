import React, { useRef, useEffect } from 'react';

export default function Hero({ onOpenPassModal }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      const playPromise = videoRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          const retry = () => {
            if (videoRef.current) videoRef.current.play();
            window.removeEventListener('touchstart', retry);
            window.removeEventListener('click', retry);
          };
          window.addEventListener('touchstart', retry, { passive: true });
          window.addEventListener('click', retry, { passive: true });
        });
      }
    }
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Background Organic Video & Staged Lighting */}
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video-element"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/fondo_preview.jpg"
          preload="metadata"
        >
          <source src="/assets/fondo.mp4" type="video/mp4" />
        </video>
        {/* Dynamic bilateral & depth gradient overlay */}
        <div className="hero-gradient-overlay"></div>
        {/* Floor stage spotlight anchoring the centered mascot */}
        <div className="hero-stage-lighting" aria-hidden="true"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-cockpit-grid">
          
          {/* LEFT WING: Brand Manifesto, Value & Primary Conversion */}
          <div className="hero-brand-wing">
            
            {/* Live Status Badge */}
            <div className="live-badge">
              <span className="live-dot"></span>
              <span className="text-white">Manta, Ecuador</span>
              <span className="badge-divider">//</span>
              <span className="text-yellow font-mono">Alto Rendimiento</span>
            </div>

            {/* Display Title - Framed within the left flank */}
            <h1 className="hero-title">
              ENTRENA <br />
              <span className="highlight">SIN LÍMITES</span> <br />
              EN MANTA.
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              Equipamiento biomecánico de élite, amplia zona de peso libre y espacios diseñados para resultados reales.
              <strong className="hero-subtitle-strong">
                Sin contratos forzosos. Sin matrículas sorpresa.
              </strong>
            </p>

            {/* CTAs */}
            <div className="hero-ctas">
              <button 
                onClick={onOpenPassModal} 
                className="btn-neon hero-cta-primary"
                type="button"
              >
                <span>Obtener Pase Gratis</span>
                <span className="cta-arrow-icon" aria-hidden="true">→</span>
              </button>

              <a href="#planes" className="btn-outline hero-cta-secondary">
                Ver Tarifas y Planes
              </a>
            </div>

            {/* Trust Proof Bar */}
            <div className="hero-trust-bar">
              <span className="trust-indicator font-mono text-yellow">2 SEDES ACTIVAS</span>
              <span className="trust-dot-sep">•</span>
              <span className="trust-text">ULEAM & Barrio La Proaño</span>
            </div>

          </div>

          {/* CENTER ARENA: Reserved exclusively for the Rhino mascot */}
          <div className="hero-center-arena" aria-hidden="true">
            {/* Visual floor marker anchoring the mascot */}
            <div className="arena-pedestal-marker"></div>
          </div>

          {/* RIGHT WING: Telemetry / Features / Specifications HUD */}
          <div className="hero-hud-wing">
            
            <div className="hud-panel-header">
              <div className="hud-title-wrap">
                <span className="live-dot live-dot-yellow"></span>
                <span className="hud-header-title font-mono">SISTEMA // ESPECIFICACIONES</span>
              </div>
              <span className="hud-status-badge font-mono">EN VIVO</span>
            </div>

            <div className="hero-hud-cards">
              
              <div className="hero-hud-card">
                <span className="hud-card-num font-mono text-yellow">01 //</span>
                <div className="hud-card-body">
                  <strong className="hud-card-title">Cero Contratos</strong>
                  <span className="hud-card-desc">Libertad total: paga mes a mes o por día sin cláusulas de permanencia.</span>
                </div>
              </div>

              <div className="hero-hud-card">
                <span className="hud-card-num font-mono text-pink">02 //</span>
                <div className="hud-card-body">
                  <strong className="hud-card-title">Tarifas Claras</strong>
                  <span className="hud-card-desc">Pase Diario $1.50 • Mes $20. Sin matrículas sorpresa ni costos ocultos.</span>
                </div>
              </div>

              <div className="hero-hud-card">
                <span className="hud-card-num font-mono text-yellow">03 //</span>
                <div className="hud-card-body">
                  <strong className="hud-card-title">Horario Continuo</strong>
                  <span className="hud-card-desc">05:30 a 22:30 Lun-Vie • Sábados de 07:00 a 16:00 sin interrupciones.</span>
                </div>
              </div>

              <div className="hero-hud-card">
                <span className="hud-card-num font-mono text-pink">04 //</span>
                <div className="hud-card-body">
                  <strong className="hud-card-title">Biomecánica Pro</strong>
                  <span className="hud-card-desc">Líneas Leverage, Zona Olímpica completa, lockers y duchas 100% funcionales.</span>
                </div>
              </div>

            </div>

            {/* Quick Action Footer in HUD */}
            <div className="hud-panel-footer">
              <a href="#sedes" className="hud-footer-action font-mono">
                <span>CONOCE NUESTRAS 2 SEDES</span>
                <span className="hud-footer-arrow">↓</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
