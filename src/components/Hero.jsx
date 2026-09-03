import React, { useRef, useEffect } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero({ onOpenPassModal }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.volume = 0.15;
    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Fallback for strict browser autoplay policies
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }

    const enableAudioOnInteraction = () => {
      if (videoRef.current) {
        videoRef.current.muted = false;
        videoRef.current.volume = 0.15;
        videoRef.current.play().catch(() => {});
      }
    };

    window.addEventListener('click', enableAudioOnInteraction, { once: true });
    window.addEventListener('touchstart', enableAudioOnInteraction, { once: true, passive: true });
    window.addEventListener('keydown', enableAudioOnInteraction, { once: true });

    return () => {
      window.removeEventListener('click', enableAudioOnInteraction);
      window.removeEventListener('touchstart', enableAudioOnInteraction);
      window.removeEventListener('keydown', enableAudioOnInteraction);
    };
  }, []);

  return (
    <section className="hero-section" id="hero">
      {/* Cinematic Full-Bleed Atmospheric Video Background */}
      <div className="hero-video-wrap">
        <video
          ref={videoRef}
          className="hero-video-element"
          autoPlay
          muted
          loop
          playsInline
          poster="/assets/fondo_preview.jpg"
          preload="auto"
        >
          <source src="/assets/fondo.mp4" type="video/mp4" />
        </video>
        <div className="hero-gradient-overlay" aria-hidden="true"></div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Pill Badge */}
          <div className="hero-badge">
            <span className="pulse-dot"></span>
            <span>MANTA, ECUADOR • 2 SEDES ACTIVAS</span>
          </div>

          {/* Impactful Display Headline */}
          <h1 className="hero-title">
            ENTRENA <br />
            <span className="text-gradient">SIN LÍMITES</span> <br />
            EN MANTA
          </h1>

          {/* Refined Subtitle */}
          <p className="hero-subtitle">
            Equipamiento biomecánico de élite, amplia zona de peso libre y espacios diseñados para resultados reales. Libertad total con <strong>cero contratos forzosos ni matrículas sorpresa.</strong>
          </p>

          {/* Rounded Pill CTA Action Group */}
          <div className="hero-cta-group">
            <button
              onClick={onOpenPassModal}
              className="btn btn-primary btn-large"
              type="button"
            >
              <span>Obtener Pase Gratis 1 Día</span>
              <ArrowRight size={18} />
            </button>
            <a href="#sedes" className="btn btn-outline btn-large">
              <MapPin size={18} />
              <span>Conocer Sedes</span>
            </a>
            <a href="#planes" className="btn btn-outline btn-large">
              <span>Ver Tarifas</span>
            </a>
          </div>

          {/* Floating Glassmorphic Stats Deck */}
          <div className="hero-stats glass-panel">
            <div className="stat-card">
              <span className="stat-number">2</span>
              <span className="stat-desc">Sedes en Manta</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">1,200m²</span>
              <span className="stat-desc">Espacio Total</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">$1.50</span>
              <span className="stat-desc">Pase Diario</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number">0</span>
              <span className="stat-desc">Contratos</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
