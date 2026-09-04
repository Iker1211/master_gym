import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, MapPin, Volume2, VolumeX, Sparkles, CheckCircle2 } from 'lucide-react';
import { getMantaScheduleStatus } from '../utils/mantaSchedule';

export default function Hero({ onOpenPassModal }) {
  const videoRef = useRef(null);
  const [scheduleStatus, setScheduleStatus] = useState(() => getMantaScheduleStatus('uleam'));
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    // Actualizar estado de horario cada 60 segundos
    const timer = setInterval(() => {
      setScheduleStatus(getMantaScheduleStatus('uleam'));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(() => {
        if (videoRef.current) {
          videoRef.current.muted = true;
          videoRef.current.play().catch(() => {});
        }
      });
    }
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      const nextState = !isMuted;
      videoRef.current.muted = nextState;
      if (!nextState) {
        videoRef.current.volume = 0.25;
        videoRef.current.play().catch(() => {});
      }
      setIsMuted(nextState);
    }
  };

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

      {/* Discrete Audio Toggle Control (Bottom Right) */}
      <button 
        onClick={toggleAudio}
        className="hero-audio-toggle"
        type="button"
        aria-label={isMuted ? 'Activar sonido del video' : 'Silenciar sonido del video'}
        title={isMuted ? 'Activar audio ambiental' : 'Silenciar audio'}
      >
        {isMuted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        <span>{isMuted ? 'Sonido: Desactivado' : 'Sonido: Activo'}</span>
      </button>

      <div className="container hero-container">
        <div className="hero-content">
          
          {/* Real-time Status & Social Proof Strip */}
          <div className="hero-meta-strip">
            <div className="hero-badge">
              <span className={`pulse-dot ${scheduleStatus.isOpen ? 'pulse-green' : 'pulse-amber'}`}></span>
              <span className="font-mono">MANTA • {scheduleStatus.badgeText.toUpperCase()} ({scheduleStatus.statusDetail})</span>
            </div>

            <div className="hero-social-proof">
              <span className="proof-stars">★★★★★</span>
              <span className="proof-text"><strong>4.9 / 5</strong> en Google • Comunidad Atleta</span>
            </div>
          </div>

          {/* Impactful Authority Display Headline */}
          <h1 className="hero-title">
            EL HIERRO REAL <br />
            <span className="text-gradient">DE MANTA.</span>
          </h1>

          {/* High-Value Subtitle: Clear positioning without gimmicks */}
          <p className="hero-subtitle">
            La casa del entrenamiento pesado y multifuncional en Manta. Dos sedes estratégicas: frente a la <strong>segunda entrada de la ULEAM</strong> y el <strong>mega complejo en La Proaño</strong>. Maquinaria clásica completa, peso libre pesado y cero contratos forzosos. Entrena desde <strong>$1.50 al día</strong>.
          </p>

          {/* Dual Action Group (CRO Optimized: 1 Primary + 1 Exploration) */}
          <div className="hero-cta-group">
            <button
              onClick={onOpenPassModal}
              className="btn btn-primary btn-large hero-btn-primary"
              type="button"
            >
              <span>Obtener Pase Gratis 1 Día</span>
              <ArrowRight size={18} />
            </button>
            <a href="#sedes" className="btn btn-outline btn-large hero-btn-secondary">
              <MapPin size={18} />
              <span>Conoce las Sedes & Maquinaria</span>
            </a>
          </div>

          {/* Floating Glassmorphic Stats Deck: Coherent with Real Facility Metrics */}
          <div className="hero-stats glass-panel">
            <div className="stat-card">
              <span className="stat-number text-gradient">+1,650m²</span>
              <span className="stat-desc">Espacio Total</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number text-yellow">2 Sedes</span>
              <span className="stat-desc">ULEAM & La Proaño</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number text-white">$1.50</span>
              <span className="stat-desc">Pase Diario</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-card">
              <span className="stat-number text-yellow">0</span>
              <span className="stat-desc">Contratos Forzosos</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
