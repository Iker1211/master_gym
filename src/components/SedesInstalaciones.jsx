import React, { useState, useEffect } from 'react';
import { 
  MapPin, 
  Dumbbell, 
  Navigation, 
  CheckCircle2, 
  ExternalLink, 
  Sparkles, 
  SlidersHorizontal,
  Send,
  Clock,
  ShieldCheck
} from 'lucide-react';
import InteractiveMap from './InteractiveMap';
import { getMantaScheduleStatus } from '../utils/mantaSchedule';
import { useLenis } from 'lenis/react';

export default function SedesInstalaciones() {
  const [selectedBranch, setSelectedBranch] = useState('all');
  const [equipmentCategory, setEquipmentCategory] = useState('all');
  const [uleamStatus, setUleamStatus] = useState(() => getMantaScheduleStatus('uleam'));
  const [proanoStatus, setProanoStatus] = useState(() => getMantaScheduleStatus('proano'));
  const lenis = useLenis();

  useEffect(() => {
    const timer = setInterval(() => {
      setUleamStatus(getMantaScheduleStatus('uleam'));
      setProanoStatus(getMantaScheduleStatus('proano'));
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleFocusBranch = (branchId) => {
    setSelectedBranch(branchId);
    const mapElement = document.getElementById('mapa-interactivo');
    if (mapElement) {
      if (lenis) {
        lenis.scrollTo(mapElement, { offset: -75, duration: 1.2 });
      } else {
        mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  const handleFilterEquipmentByBranch = (branchId) => {
    setSelectedBranch(branchId);
    const equipElement = document.getElementById('instalaciones');
    if (equipElement) {
      if (lenis) {
        lenis.scrollTo(equipElement, { offset: -75, duration: 1.2 });
      } else {
        equipElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  // 5 Specialized Gym Floor Zones
  const equipmentZones = [
    {
      id: 'peso_libre',
      category: 'fuerza',
      title: 'Área de Peso Libre & Racks',
      subtitle: 'Fuerza Pesada & Hipertrofia',
      badge: 'Fuerza & Hipertrofia',
      badgeColor: 'pink',
      availability: 'Ambas Sedes',
      image: '/assets/peso_libre.jpg',
      colSpan: 'col-7',
      desc: 'Mancuernas de uretano calibradas de 2.5 kg hasta 60 kg, jaulas de potencia reforzadas, bancos olímpicos planos e inclinados con plataforma de spotter.',
      specs: [
        'Mancuernas Uretano hasta 60 kg',
        'Jaulas de Potencia & Racks Power',
        'Bancas Profesionales Multi-ángulo',
        'Zona Grip & Magnesio Permitido'
      ]
    },
    {
      id: 'maquinaria_leverage',
      category: 'biomecanica',
      title: 'Línea Leverage & Biomecánica',
      subtitle: 'Iso-Lateral & Trayectoria Guiada',
      badge: 'Biomecánica & Carga',
      badgeColor: 'yellow',
      availability: 'Ambas Sedes',
      image: '/assets/maquinaria_leverage.jpg',
      colSpan: 'col-5',
      desc: 'Maquinaria de palanca Iso-Lateral con movimiento divergente y convergente. Elimina puntos muertos en la curva de fuerza y previene asimetrías articulares.',
      specs: [
        'Brazos Independientes Iso-Lateral',
        'Carga en Discos Olímpicos',
        'Curva de Resistencia Continua',
        'Ajustes Ergonómicos Rápidos'
      ]
    },
    {
      id: 'zona_olimpica',
      category: 'fuerza',
      title: 'Barras Olímpicas & Discos Bumper',
      subtitle: 'Halterofilia & Levantamiento',
      badge: 'Levantamiento Olímpico',
      badgeColor: 'pink',
      availability: 'Ambas Sedes • Plataformas en La Proaño',
      image: '/assets/zona_olimpica.jpg',
      colSpan: 'col-4',
      desc: 'Barras de acero templado calibradas a 20 kg (28 mm), rodamientos de aguja para rotación suave en snatch y clean & jerk, más discos bumper drop-ready.',
      specs: [
        'Barras Olímpicas 20 kg de Acero Calibrado',
        'Discos Bumper de Caucho Virgen',
        'Collares Lock-Jaw de Bloqueo Rápido'
      ]
    },
    {
      id: 'zona_selectorizada',
      category: 'biomecanica',
      title: 'Torres Pin-Select & Poleas',
      subtitle: 'Aislamiento & Resistencia Fluida',
      badge: 'Aislamiento & Poleas',
      badgeColor: 'yellow',
      availability: 'Ambas Sedes',
      image: '/assets/zona_selectorizada.jpg',
      colSpan: 'col-4',
      desc: 'Torres multipropósito y cruces de poleas regulables en milímetros de altura. Torres selectorizadas de placas selladas con selector de pin instantáneo.',
      specs: [
        'Columnas de Placas Guiadas de Alta Resistencia',
        'Poleas de Giro 180° de Aluminio Aeronáutico',
        'Variedad de Agarres Ergonómicos de Agarre Rápido'
      ]
    },
    {
      id: 'asesoria_fitness',
      category: 'funcional',
      title: 'Zona Funcional & Asesoría',
      subtitle: 'Rendimiento Atlético & Acondicionamiento',
      badge: 'Rendimiento & Asesoría',
      badgeColor: 'pink',
      availability: 'Zona Funcional en La Proaño • Asesoría en Ambas',
      image: '/assets/asesoria_fitness.jpg',
      colSpan: 'col-4',
      desc: 'Área dedicada a ejercicios funcionales, calistenia y acondicionamiento físico en Sede La Proaño, complementada con asesoría e inducción de inicio por entrenadores en ambas sedes.',
      specs: [
        'Área de Entrenamiento Funcional',
        'Barras de Dominadas y Fondos',
        'Balones Medicinales y Cuerdas',
        'Inducción Inicial por Entrenadores'
      ]
    }
  ];

  const filteredEquipment = equipmentZones.filter(zone => {
    if (equipmentCategory === 'all') return true;
    return zone.category === equipmentCategory;
  });

  return (
    <section id="sedes" className="section sedes-instalaciones-section">
      <div className="container">
        
        {/* ================= Master Section Header Tier-1 ================= */}
        <div className="section-header unified-header">
          <div className="section-tag">
            <span className="ping-indicator ping-indicator-yellow"></span>
            <span>INFRAESTRUCTURA DE ÉLITE • 2 PUNTOS EN MANTA</span>
          </div>

          <h2 className="section-title unified-title">
            DOS SEDES ESTRATÉGICAS. <br className="hidden-mobile" />
            <span className="text-gradient">UN SOLO ESTÁNDAR DE PODER.</span>
          </h2>

          <p className="section-desc unified-desc">
            Más de 1,650 m² de maquinaria clásica multifuncional y peso libre distribuidos en dos puntos estratégicos de Manta.
            Equipamiento robusto sin esperas, ambiente ventilado, casilleros y duchas para salir listo después de entrenar.
          </p>

          {/* Unified KPI Ticker / Live Stats Strip */}
          <div className="unified-kpi-bar">
            <div className="kpi-item">
              <span className="kpi-num text-gradient">+1,650 m²</span>
              <span className="kpi-label">Superficie Total</span>
            </div>
            <div className="kpi-separator"></div>
            <div className="kpi-item">
              <span className="kpi-num text-yellow">2 Sedes</span>
              <span className="kpi-label">ULEAM & La Proaño</span>
            </div>
            <div className="kpi-separator"></div>
            <div className="kpi-item">
              <span className="kpi-num text-pink">60 kg</span>
              <span className="kpi-label">Mancuernas Macizas</span>
            </div>
            <div className="kpi-separator"></div>
            <div className="kpi-item">
              <span className="kpi-num">Duchas</span>
              <span className="kpi-label">Y Vestidores</span>
            </div>
            <div className="kpi-separator"></div>
            <div className="kpi-item">
              <span className="kpi-num text-yellow">0</span>
              <span className="kpi-label">Contratos Forzosos</span>
            </div>
          </div>
        </div>

        {/* ================= 2 Flagship Sedes Cards Grid ================= */}
        <div id="sedes-cards" className="sedes-grid">
          
          {/* ================= Sede 1: ULEAM ================= */}
          <div 
            id="card-sede-uleam" 
            className={`branch-card ${selectedBranch === 'uleam' ? 'active-branch-uleam' : ''}`}
          >
            {/* Image Container */}
            <div className="branch-img-wrap">
              <img 
                src="/assets/sede_uleam.jpg" 
                alt="Sede ULEAM Master Gym Manta" 
                className="branch-img" 
                loading="lazy"
              />
              <div className="branch-img-overlay"></div>
              
              <div className="branch-badge-top">
                <span style={{ padding: '0.35rem 0.85rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--accent)', color: '#050505', borderRadius: '9999px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  Sede ULEAM
                </span>
                <span style={{ padding: '0.35rem 0.85rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(22, 24, 30, 0.85)', color: '#FFF', border: '1px solid var(--border-light)', backdropFilter: 'blur(8px)', borderRadius: '9999px' }}>
                  Zona Universitaria
                </span>
                <span style={{ padding: '0.35rem 0.85rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(0, 0, 0, 0.65)', color: 'var(--accent)', border: '1px solid rgba(255, 234, 0, 0.3)', backdropFilter: 'blur(8px)', borderRadius: '9999px' }}>
                  Duchas & Vestidores
                </span>
              </div>

              <div className="branch-title-wrap">
                <div>
                  <span className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: 'var(--accent)' }}>
                    Av. Circunvalación • Manta
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.35rem', textTransform: 'uppercase', lineHeight: '1' }}>
                    Sede ULEAM
                  </h3>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '11px', background: 'rgba(5,5,5,0.7)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                  2da Entrada ULEAM
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="branch-body">
              <div>
                {/* Live Status Pill */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.85rem', background: 'rgba(255, 234, 0, 0.08)', border: '1px solid rgba(255, 234, 0, 0.25)', borderRadius: '9999px', marginBottom: '0.85rem' }}>
                  <span className={`status-dot ${uleamStatus.isOpen ? 'status-dot-open' : 'status-dot-closed'}`}></span>
                  <span className="font-mono text-white" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                    {uleamStatus.isOpen ? `ABIERTO AHORA • Cierra a las ${uleamStatus.closeStr}` : `CERRADO AHORA • Abre ${uleamStatus.openStr}`}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: 'rgba(244, 244, 246, 0.82)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  Ubicada estratégicamente frente a la <strong>segunda entrada de la ULEAM</strong>. La sede perfecta para universitarios y profesionales: maquinaria clásica multifuncional completa, poleas dobles regulables, peso libre macizo, casilleros para mochilas y duchas para salir listo a clases o trabajo.
                </p>

                {/* Specs Grid */}
                <div className="specs-grid">
                  <div>
                    <span className="specs-label">Ubicación:</span>
                    <span className="specs-val">Frente a la 2da Entrada ULEAM</span>
                  </div>
                  <div>
                    <span className="specs-label">Tarifas Transparentes:</span>
                    <span className="font-mono" style={{ fontWeight: 'bold', color: 'var(--accent)' }}>Día $1.50 • Mes $20 ($15 c/u dúo)</span>
                  </div>
                  <div>
                    <span className="specs-label">Lun–Vie:</span>
                    <span className="font-mono specs-val" style={{ fontWeight: 'bold' }}>05:30 — 22:30</span>
                  </div>
                  <div>
                    <span className="specs-label">Sáb / Dom:</span>
                    <span className="font-mono specs-val">Sáb 07-19h • Dom 08-14h</span>
                  </div>
                </div>

                {/* Featured Zones Micro Strip */}
                <div className="branch-zones-preview">
                  <span className="branch-zones-title font-mono">
                    <Sparkles size={12} style={{ color: 'var(--accent)' }} />
                    Equipamiento destacado en Sede ULEAM:
                  </span>
                  <div className="tags-list">
                    <span className="tag-pill tag-pill-accent">Mancuernas hasta 60kg</span>
                    <span className="tag-pill tag-pill-accent">Línea Leverage Iso-Lateral</span>
                    <span className="tag-pill tag-pill-accent">Torres Pin-Select</span>
                    <span className="tag-pill">Casilleros para Mochilas</span>
                    <span className="tag-pill">Duchas & Vestidores</span>
                  </div>
                </div>

                {/* Quick Map Locator Bar */}
                <div className="branch-location-box">
                  <div className="branch-location-info">
                    <div className="location-pin-title font-mono">
                      <span className="ping-indicator ping-indicator-yellow"></span>
                      <span style={{ color: 'var(--accent)' }}>FRENTE A ULEAM</span>
                      <span className="text-muted" style={{ fontWeight: 'normal', fontSize: '10px' }}>(-0.9538, -80.7475)</span>
                    </div>
                    <span className="location-landmark">Av. Circunvalación • Puerta Principal ULEAM</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn-locate-map btn-locate-uleam"
                      onClick={() => handleFocusBranch('uleam')}
                      title="Centrar Sede ULEAM en el mapa interactivo"
                    >
                      <MapPin size={12} />
                      <span>Ver en Mapa</span>
                      <span>↓</span>
                    </button>
                    <button
                      type="button"
                      className="btn-locate-map"
                      onClick={() => handleFilterEquipmentByBranch('uleam')}
                      title="Ver maquinaria disponible en ULEAM"
                      style={{ background: 'rgba(255, 234, 0, 0.1)', color: 'var(--accent)', borderColor: 'rgba(255, 234, 0, 0.3)' }}
                    >
                      <Dumbbell size={12} />
                      <span>Ver Equipos</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="branch-actions">
                <a 
                  href="https://maps.google.com/?q=-0.953768,-80.747514" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary" 
                  style={{ fontSize: '0.85rem' }}
                >
                  <span>Google Maps</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Quiero%20visitar%20la%20Sede%20ULEAM" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-yellow" 
                  style={{ fontSize: '0.85rem' }}
                >
                  <Send size={14} />
                  <span>WhatsApp Sede ULEAM</span>
                </a>
              </div>

            </div>
          </div>

          {/* ================= Sede 2: Barrio La Proaño ================= */}
          <div 
            id="card-sede-proano" 
            className={`branch-card ${selectedBranch === 'proano' ? 'active-branch-proano' : ''}`}
          >
            {/* Image Container */}
            <div className="branch-img-wrap">
              <img 
                src="/assets/sede_la_proano.jpg" 
                alt="Sede Barrio La Proaño Master Gym Manta" 
                className="branch-img" 
                loading="lazy"
              />
              <div className="branch-img-overlay"></div>
              
              <div className="branch-badge-top">
                <span style={{ padding: '0.35rem 0.85rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--primary)', color: '#ffffff', borderRadius: '9999px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}>
                  Sede La Proaño
                </span>
                <span style={{ padding: '0.35rem 0.85rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(22, 24, 30, 0.85)', color: '#FFF', border: '1px solid var(--border-light)', backdropFilter: 'blur(8px)', borderRadius: '9999px' }}>
                  Mega Complejo 1,200m²
                </span>
                <span style={{ padding: '0.35rem 0.85rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(0, 0, 0, 0.65)', color: 'var(--primary)', border: '1px solid rgba(255, 0, 127, 0.3)', backdropFilter: 'blur(8px)', borderRadius: '9999px' }}>
                  Zona Funcional
                </span>
              </div>

              <div className="branch-title-wrap">
                <div>
                  <span className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: 'var(--primary)' }}>
                    Sector La Proaño
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.35rem', textTransform: 'uppercase', lineHeight: '1' }}>
                    Sede La Proaño
                  </h3>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '11px', background: 'rgba(5,5,5,0.7)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
                  Sector La Pradera
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="branch-body">
              <div>
                {/* Live Status Pill */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem', padding: '0.35rem 0.85rem', background: 'rgba(255, 0, 127, 0.08)', border: '1px solid rgba(255, 0, 127, 0.25)', borderRadius: '9999px', marginBottom: '0.85rem' }}>
                  <span className={`status-dot ${proanoStatus.isOpen ? 'status-dot-open' : 'status-dot-closed'}`}></span>
                  <span className="font-mono text-white" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                    {proanoStatus.isOpen ? `ABIERTO AHORA • Cierra a las ${proanoStatus.closeStr}` : `CERRADO AHORA • Abre ${proanoStatus.openStr}`}
                  </span>
                </div>

                <p style={{ fontSize: '14px', color: 'rgba(244, 244, 246, 0.82)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                  El complejo de entrenamiento más amplio de Manta con más de 1,200 m² de espacio abierto y ventilado. Maquinaria clásica pesada sin aglomeraciones, zona de peso libre con mancuernas hasta 60 kg, área de entrenamiento funcional y Fit Bar para tus batidos de proteína al terminar.
                </p>

                {/* Specs Grid */}
                <div className="specs-grid">
                  <div>
                    <span className="specs-label">Ubicación & Sector:</span>
                    <span className="specs-val">Barrio La Proaño • Sector La Pradera</span>
                  </div>
                  <div>
                    <span className="specs-label">Área & Especialidad:</span>
                    <span className="font-mono" style={{ fontWeight: 'bold', color: 'var(--primary)' }}>1,200 m² • Zona Funcional • Fit Bar</span>
                  </div>
                  <div>
                    <span className="specs-label">Lun–Vie:</span>
                    <span className="font-mono specs-val" style={{ fontWeight: 'bold' }}>05:30 — 22:30</span>
                  </div>
                  <div>
                    <span className="specs-label">Sáb / Dom:</span>
                    <span className="font-mono specs-val">Sáb 06:30-19h • Dom 08-14h</span>
                  </div>
                </div>

                {/* Featured Zones Micro Strip */}
                <div className="branch-zones-preview">
                  <span className="branch-zones-title font-mono">
                    <Sparkles size={12} style={{ color: 'var(--primary)' }} />
                    Equipamiento destacado en Sede La Proaño:
                  </span>
                  <div className="tags-list">
                    <span className="tag-pill tag-pill-primary">Zona Funcional</span>
                    <span className="tag-pill tag-pill-primary">Plataformas Olímpicas</span>
                    <span className="tag-pill tag-pill-primary">Fit Bar & Nutrición</span>
                    <span className="tag-pill">Cross Training Zone</span>
                    <span className="tag-pill">Espacio Amplio y Ventilado</span>
                  </div>
                </div>

                {/* Quick Map Locator Bar */}
                <div className="branch-location-box">
                  <div className="branch-location-info">
                    <div className="location-pin-title font-mono">
                      <span className="ping-indicator"></span>
                      <span style={{ color: 'var(--primary)' }}>BARRIO LA PROAÑO</span>
                      <span className="text-muted" style={{ fontWeight: 'normal', fontSize: '10px' }}>(-0.9969, -80.6995)</span>
                    </div>
                    <span className="location-landmark">Barrio La Proaño • Sector La Pradera</span>
                  </div>
                  <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
                    <button
                      type="button"
                      className="btn-locate-map btn-locate-proano"
                      onClick={() => handleFocusBranch('proano')}
                      title="Centrar Sede La Proaño en el mapa interactivo"
                    >
                      <MapPin size={12} />
                      <span>Ver en Mapa</span>
                      <span>↓</span>
                    </button>
                    <button
                      type="button"
                      className="btn-locate-map"
                      onClick={() => handleFilterEquipmentByBranch('proano')}
                      title="Ver maquinaria disponible en La Proaño"
                      style={{ background: 'rgba(255, 0, 127, 0.1)', color: 'var(--primary)', borderColor: 'rgba(255, 0, 127, 0.3)' }}
                    >
                      <Dumbbell size={12} />
                      <span>Ver Equipos</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="branch-actions">
                <a 
                  href="https://maps.google.com/?q=-0.996944,-80.699528" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-secondary" 
                  style={{ fontSize: '0.85rem' }}
                >
                  <span>Google Maps</span>
                  <ExternalLink size={14} />
                </a>
                <a 
                  href="https://wa.me/593987654322?text=Hola%20Master%20Gym%20Manta!%20Quiero%20visitar%20la%20Sede%20La%20Proa%C3%B1o" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn btn-primary" 
                  style={{ fontSize: '0.85rem' }}
                >
                  <Send size={14} />
                  <span>WhatsApp Sede Proaño</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ================= 3. Interconnected Equipment Bento Grid ================= */}
        <div id="instalaciones" className="unified-facilities-wrapper" style={{ scrollMarginTop: '90px' }}>
          
          <div className="facilities-header-row">
            <div>
              <div className="section-tag" style={{ marginBottom: '0.4rem' }}>
                <SlidersHorizontal size={13} style={{ color: 'var(--primary)' }} />
                <span>EL HIERRO REAL DE MANTA • MAQUINARIA CLÁSICA MULTIFUNCIONAL</span>
              </div>
              <h3 className="font-display text-white facilities-main-title">
                EQUIPAMIENTO COMPLETO. <span className="text-gradient">SIN EXCUSAS NI RODEOS.</span>
              </h3>
              <p className="facilities-main-desc">
                El progreso real se forja con maquinaria clásica multifuncional de máxima resistencia: poleas dobles regulables, prensas a discos de 45°, jaulas de potencia macizas, barras olímpicas y mancuernas hasta 60 kg. Prácticamente todo el equipamiento que necesitas para entrenar en serio.
              </p>
            </div>

            {/* Equipment Filter Pills */}
            <div className="equipment-filter-bar" role="tablist" aria-label="Filtrar equipamiento por zona">
              <button
                type="button"
                className={`equip-filter-pill ${equipmentCategory === 'all' ? 'active' : ''}`}
                onClick={() => setEquipmentCategory('all')}
              >
                Todas las Zonas (5)
              </button>
              <button
                type="button"
                className={`equip-filter-pill ${equipmentCategory === 'fuerza' ? 'active' : ''}`}
                onClick={() => setEquipmentCategory('fuerza')}
              >
                Fuerza & Racks
              </button>
              <button
                type="button"
                className={`equip-filter-pill ${equipmentCategory === 'biomecanica' ? 'active' : ''}`}
                onClick={() => setEquipmentCategory('biomecanica')}
              >
                Biomecánica & Poleas
              </button>
              <button
                type="button"
                className={`equip-filter-pill ${equipmentCategory === 'funcional' ? 'active' : ''}`}
                onClick={() => setEquipmentCategory('funcional')}
              >
                Funcional & Evaluación
              </button>
            </div>
          </div>

          {/* Asymmetric Bento Grid of 5 zones */}
          <div className={`bento-grid ${equipmentCategory !== 'all' ? 'filtered-grid' : ''}`}>
            {filteredEquipment.map((zone) => {
              const isPink = zone.badgeColor === 'pink';
              const isHighlightedForBranch = 
                (selectedBranch === 'uleam' && zone.availability.includes('ULEAM')) ||
                (selectedBranch === 'proano' && (zone.availability.includes('Proaño') || zone.availability.includes('Ambas')));

              return (
                <div 
                  key={zone.id} 
                  className={`bento-card ${equipmentCategory === 'all' ? zone.colSpan : 'filtered-col'} ${isHighlightedForBranch ? 'bento-highlighted' : ''}`}
                >
                  <img 
                    src={zone.image} 
                    alt={zone.title} 
                    className="bento-bg-img" 
                    loading="lazy"
                  />
                  <div className="bento-overlay"></div>
                  
                  <div className="bento-content">
                    {/* Top Tag Badges Row */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '0.5rem', marginBottom: '0.85rem', flexWrap: 'wrap' }}>
                      <div 
                        className="live-badge" 
                        style={{ 
                          background: isPink ? 'rgba(255, 0, 127, 0.15)' : 'rgba(255, 234, 0, 0.15)', 
                          borderColor: isPink ? 'rgba(255, 0, 127, 0.4)' : 'rgba(255, 234, 0, 0.4)', 
                          color: isPink ? 'var(--primary)' : 'var(--accent)', 
                          borderRadius: '9999px',
                          fontSize: '11px',
                          fontWeight: 'bold'
                        }}
                      >
                        {zone.badge}
                      </div>

                      <div 
                        className="bento-location-badge"
                        style={{
                          fontSize: '10px',
                          fontWeight: '600',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '9999px',
                          background: 'rgba(22, 24, 30, 0.85)',
                          border: '1px solid var(--border-light)',
                          color: 'var(--text-main)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.35rem'
                        }}
                      >
                        <MapPin size={10} style={{ color: isPink ? 'var(--primary)' : 'var(--accent)' }} />
                        <span>{zone.availability}</span>
                      </div>
                    </div>

                    <h3 className="font-display text-white bento-card-title">
                      {zone.title}
                    </h3>
                    
                    <p className="bento-card-desc">
                      {zone.desc}
                    </p>

                    <div className="tags-list">
                      {zone.specs.map((spec, idx) => (
                        <span key={idx} className="tag-pill">
                          <CheckCircle2 size={11} style={{ marginRight: '4px', color: isPink ? 'var(--primary)' : 'var(--accent)' }} />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* ================= 4. Master Grand Interactive Map ================= */}
        <div id="mapa-interactivo" className="master-map-container" style={{ scrollMarginTop: '90px' }}>
          <div className="master-map-header">
            <div>
              <div className="section-tag" style={{ marginBottom: '0.4rem' }}>
                <Navigation size={13} style={{ color: 'var(--accent)' }} />
                <span>// Georreferenciación & Rutas Viales en Manta</span>
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '2rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
                MAPA INTERACTIVO & ACCESOS EN MANTA
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
                Explora la ubicación satelital, distancias y vías rápidas de acceso entre ambas sedes de Master Gym.
              </p>
            </div>

            <div className="master-map-badge">
              <span className="font-mono text-yellow" style={{ fontWeight: 'bold' }}>~10 MINUTOS</span>
              <span className="text-muted">entre sedes vía Av. Circunvalación</span>
            </div>
          </div>

          <InteractiveMap
            mode="full"
            initialLocationId="all"
            selectedLocationId={selectedBranch}
            height="480px"
            showControls={true}
            showDetailsCard={true}
            interactive={true}
            onSelectLocation={(branchId) => {
              setSelectedBranch(branchId);
            }}
          />
        </div>

      </div>
    </section>
  );
}
