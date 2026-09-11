import React, { useRef, useEffect, useState } from 'react';
import { 
  ArrowRight, 
  MapPin, 
  Volume2, 
  VolumeX, 
  Maximize2, 
  Zap, 
  ShieldCheck, 
  Dumbbell, 
  Award, 
  Clock, 
  ChevronRight 
} from 'lucide-react';
import { useLenis } from 'lenis/react';
import { useGymSchedule } from '../hooks/useGymSchedule';

const STANDOUT_ATTRIBUTES = [
  {
    id: 'espacio',
    value: '+1,650m²',
    label: 'Espacio Total',
    detail: 'ULEAM & La Proaño • 2 Macro Sedes',
    icon: Maximize2,
    accentClass: 'text-gradient',
    iconStyle: 'icon-pink',
    targetId: 'sedes'
  },
  {
    id: 'sedes',
    value: '2 Sedes',
    label: 'Puntos Clave',
    detail: 'ULEAM 2da Entrada & Mega Proaño',
    icon: MapPin,
    accentClass: 'text-yellow',
    iconStyle: 'icon-yellow',
    targetId: 'sedes'
  },
  {
    id: 'precio',
    value: '$1.50',
    label: 'Pase Diario',
    detail: 'Entrena hoy sin matrículas ni ataduras',
    icon: Zap,
    accentClass: 'text-white',
    iconStyle: 'icon-pink',
    actionType: 'modal'
  },
  {
    id: 'contratos',
    value: '0',
    label: 'Contratos Forzosos',
    detail: 'Paga diario, quincenal o mes libre',
    icon: ShieldCheck,
    accentClass: 'text-yellow',
    iconStyle: 'icon-yellow',
    targetId: 'planes'
  },
  {
    id: 'maquinaria',
    value: 'Hierro Real & Leverage',
    icon: Dumbbell,
    accentClass: 'text-gradient',
    iconStyle: 'icon-pink',
    targetId: 'instalaciones'
  },
  {
    id: 'rating',
    value: '4.9 ★',
    label: 'Calificación Google',
    detail: 'Comunidad atleta más valorada en Manta',
    icon: Award,
    accentClass: 'text-yellow',
    iconStyle: 'icon-yellow',
    targetId: 'faq'
  },
  {
    id: 'horario',
    value: '5:30 AM',
    label: 'Apertura Temprana',
    detail: 'Lunes a Sábado continuo sin cortes',
    icon: Clock,
    accentClass: 'text-gradient',
    iconStyle: 'icon-pink',
    targetId: 'sedes'
  }
];

export default function Hero({ onOpenPassModal }) {
  const videoRef = useRef(null);
  const scheduleStatus = useGymSchedule('uleam');
  const [isMuted, setIsMuted] = useState(true);

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

  const lenis = useLenis();

  const handleAttributeClick = (item) => {
    if (item.actionType === 'modal') {
      if (onOpenPassModal) {
        onOpenPassModal();
      }
    } else if (item.targetId) {
      const el = document.getElementById(item.targetId);
      if (el) {
        if (lenis) {
          lenis.scrollTo(el, { offset: -75, duration: 1.2 });
        } else {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
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
            La casa del entrenamiento pesado y multifuncional en Manta. Dos sedes estratégicas: frente a la <strong>segunda entrada de la ULEAM</strong> y el <strong>mega complejo en La Proaño</strong>. Maquinaria clásica completa, peso libre y cero contratos. Entrena desde <strong>$1.50 al día</strong>.
          </p>

          {/* Dual Action Group (CRO Optimized: 1 Primary + 1 Exploration) */}
          <div className="hero-cta-group">
            <button
              onClick={onOpenPassModal}
              className="btn btn-primary btn-large hero-btn-primary"
              type="button"
            >
              <span>Obtener Pase Gratis 1 Semana</span>
              <ArrowRight size={18} />
            </button>
            <a href="#sedes" className="btn btn-outline btn-large hero-btn-secondary">
              <MapPin size={18} />
              <span>Conoce las Sedes & Maquinaria</span>
            </a>
          </div>

        </div>
      </div>

      {/* Infinite Standout Attributes Marquee */}
      <div 
        className="hero-marquee-wrapper" 
        role="region" 
        aria-label="Atributos destacados de Master Gym Manta"
      >
        <div className="hero-marquee-track">
          {/* First loop group */}
          <div className="hero-marquee-group">
            {STANDOUT_ATTRIBUTES.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={`hero-attr-1-${item.id}`}
                  type="button"
                  onClick={() => handleAttributeClick(item)}
                  className={`hero-marquee-card ${item.accentClass === 'text-yellow' ? 'card-accent-yellow' : 'card-accent-pink'}`}
                  title={item.detail ? `${item.value} ${item.label || ''}: ${item.detail}` : item.value}
                >
                  <div className={`hero-marquee-icon-box ${item.iconStyle}`}>
                    <IconComp size={18} />
                  </div>
                  <div className="hero-marquee-body">
                    <div className="hero-marquee-header">
                      <span className={`hero-marquee-value ${item.accentClass}`}>
                        {item.value}
                      </span>
                      {item.label && (
                        <span className="hero-marquee-label">
                          {item.label}
                        </span>
                      )}
                    </div>
                    {item.detail && (
                      <div className="hero-marquee-meta">
                        <span className="hero-marquee-detail">{item.detail}</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight size={14} className="hero-marquee-arrow" aria-hidden="true" />
                </button>
              );
            })}
          </div>

          {/* Duplicated loop group for seamless infinite animation */}
          <div className="hero-marquee-group" aria-hidden="true">
            {STANDOUT_ATTRIBUTES.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={`hero-attr-2-${item.id}`}
                  type="button"
                  tabIndex={-1}
                  onClick={() => handleAttributeClick(item)}
                  className={`hero-marquee-card ${item.accentClass === 'text-yellow' ? 'card-accent-yellow' : 'card-accent-pink'}`}
                >
                  <div className={`hero-marquee-icon-box ${item.iconStyle}`}>
                    <IconComp size={18} />
                  </div>
                  <div className="hero-marquee-body">
                    <div className="hero-marquee-header">
                      <span className={`hero-marquee-value ${item.accentClass}`}>
                        {item.value}
                      </span>
                      {item.label && (
                        <span className="hero-marquee-label">
                          {item.label}
                        </span>
                      )}
                    </div>
                    {item.detail && (
                      <div className="hero-marquee-meta">
                        <span className="hero-marquee-detail">{item.detail}</span>
                      </div>
                    )}
                  </div>
                  <ChevronRight size={14} className="hero-marquee-arrow" aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
