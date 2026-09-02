import React, { useState } from 'react';
import InteractiveMap from './InteractiveMap';

export default function Sedes() {
  const [selectedBranch, setSelectedBranch] = useState('all');

  const handleFocusBranch = (branchId) => {
    setSelectedBranch(branchId);
    const mapElement = document.getElementById('mapa-interactivo');
    if (mapElement) {
      mapElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="sedes" className="section">
      <div className="container">
        
        <div className="section-header">
          <div className="section-tag">
            <span>// 01 — Red de Sedes & Cobertura Geográfica</span>
          </div>
          <h2 className="section-title">
            DOS PUNTOS ESTRATÉGICOS <span className="text-neon">EN MANTA.</span>
          </h2>
          <p className="section-desc">
            Instalaciones climatizadas, equipamiento biomecánico, peso libre y amplios espacios interconectados en las arterias viales principales de Manta.
          </p>
        </div>

        {/* Bento Grid Sedes Detail Cards */}
        <div className="sedes-grid">
          
          {/* ================= Sede 1: ULEAM ================= */}
          <div id="card-sede-uleam" className="branch-card">
            
            {/* Image Container */}
            <div className="branch-img-wrap">
              <img src="/assets/sede_uleam.jpg" alt="Sede ULEAM Master Gym" className="branch-img" />
              <div className="branch-img-overlay"></div>
              
              <div className="branch-badge-top">
                <span style={{ padding: '0.25rem 0.6rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--color-cyber-yellow)', color: '#050505' }}>
                  Sede ULEAM
                </span>
                <span style={{ padding: '0.25rem 0.6rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(22, 24, 30, 0.85)', color: '#FFF', border: '1px solid var(--color-slate)', backdropFilter: 'blur(8px)' }}>
                  Zona Universitaria
                </span>
              </div>

              <div className="branch-title-wrap">
                <div>
                  <span className="text-yellow font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>
                    Av. Circunvalación
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.25rem', textTransform: 'uppercase' }}>
                    Sede ULEAM
                  </h3>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '11px' }}>Frente a Puerta 1</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="branch-body">
              <div>
                <p style={{ fontSize: '14px', color: 'rgba(244, 244, 246, 0.8)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Ubicada estratégicamente frente a la Universidad Laica Eloy Alfaro de Manabí. Diseñada para entrenamientos dinámicos, con zonas de fuerza pesada, biomecánica avanzada y casilleros inteligentes.
                </p>

                {/* Specs Grid */}
                <div className="specs-grid">
                  <div>
                    <span className="specs-label">Dirección:</span>
                    <span className="specs-val">Av. Circunvalación frente a ULEAM, Manta</span>
                  </div>
                  <div>
                    <span className="specs-label">Horario Lun–Vie:</span>
                    <span className="font-mono text-yellow" style={{ fontWeight: 'bold' }}>05:30 — 22:30</span>
                  </div>
                  <div>
                    <span className="specs-label">Sábados:</span>
                    <span className="font-mono specs-val">07:00 — 19:00</span>
                  </div>
                  <div>
                    <span className="specs-label">Domingos:</span>
                    <span className="font-mono specs-val">08:00 — 14:00</span>
                  </div>
                </div>

                {/* Highlights tags */}
                <div className="tags-list" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  <span className="tag-pill">Día $1.50 • Mes $20</span>
                  <span className="tag-pill">Lockers Digitales</span>
                  <span className="tag-pill">Duchas Agua Caliente</span>
                  <span className="tag-pill">Climatizado 100%</span>
                </div>

                {/* Quick Map Locator Bar */}
                <div className="branch-location-box">
                  <div className="branch-location-info">
                    <div className="location-pin-title font-mono">
                      <span className="ping-indicator ping-indicator-yellow"></span>
                      <span style={{ color: 'var(--color-cyber-yellow)' }}>FRENTE A ULEAM</span>
                      <span className="text-muted" style={{ fontWeight: 'normal', fontSize: '10px' }}>(-0.9538, -80.7475)</span>
                    </div>
                    <span className="location-landmark">Av. Circunvalación • Puerta Principal</span>
                  </div>
                  <button
                    type="button"
                    className="btn-locate-map btn-locate-uleam"
                    onClick={() => handleFocusBranch('uleam')}
                    title="Centrar Sede ULEAM en el mapa interactivo"
                  >
                    <span>Ver en Mapa</span>
                    <span>↓</span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="branch-actions">
                <a href="https://maps.google.com/?q=-0.953768,-80.747514" target="_blank" rel="noopener noreferrer" className="btn-outline btn-outline-yellow" style={{ fontSize: '0.75rem', padding: '0.75rem' }}>
                  Abrir en Google Maps ↗
                </a>
                <a href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Quiero%20visitar%20la%20Sede%20ULEAM" target="_blank" rel="noopener noreferrer" className="btn-yellow" style={{ fontSize: '0.75rem', padding: '0.75rem' }}>
                  Escribir a Sede ULEAM
                </a>
              </div>

            </div>
          </div>

          {/* ================= Sede 2: Barrio La Proaño ================= */}
          <div id="card-sede-proano" className="branch-card">
            
            {/* Image Container */}
            <div className="branch-img-wrap">
              <img src="/assets/sede_la_proano.jpg" alt="Sede Barrio La Proaño Master Gym" className="branch-img" />
              <div className="branch-img-overlay"></div>
              
              <div className="branch-badge-top">
                <span style={{ padding: '0.25rem 0.6rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'var(--color-neon-pink)', color: '#050505' }}>
                  Sede La Proaño
                </span>
                <span style={{ padding: '0.25rem 0.6rem', fontSize: '10px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', background: 'rgba(22, 24, 30, 0.85)', color: '#FFF', border: '1px solid var(--color-slate)', backdropFilter: 'blur(8px)' }}>
                  Parqueo Privado
                </span>
              </div>

              <div className="branch-title-wrap">
                <div>
                  <span className="text-pink font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold' }}>
                    Sector La Proaño
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.25rem', textTransform: 'uppercase' }}>
                    Sede La Proaño
                  </h3>
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '11px' }}>Mega Complejo 1,200m²</span>
              </div>
            </div>

            {/* Content Body */}
            <div className="branch-body">
              <div>
                <p style={{ fontSize: '14px', color: 'rgba(244, 244, 246, 0.8)', lineHeight: '1.6', marginBottom: '1rem' }}>
                  Nuestra sede insigne en Barrio La Proaño cuenta con más de 1,200 m² de instalaciones, pista funcional de césped de 30 metros, amplio parqueadero privado vigilado y Fit Bar de recuperación.
                </p>

                {/* Specs Grid */}
                <div className="specs-grid">
                  <div>
                    <span className="specs-label">Dirección:</span>
                    <span className="specs-val">Barrio La Proaño, Manta, Ecuador</span>
                  </div>
                  <div>
                    <span className="specs-label">Horario Lun–Vie:</span>
                    <span className="font-mono text-neon" style={{ fontWeight: 'bold' }}>05:30 — 22:30</span>
                  </div>
                  <div>
                    <span className="specs-label">Sábados:</span>
                    <span className="font-mono specs-val">06:30 — 19:00</span>
                  </div>
                  <div>
                    <span className="specs-label">Domingos:</span>
                    <span className="font-mono specs-val">08:00 — 14:00</span>
                  </div>
                </div>

                {/* Highlights tags */}
                <div className="tags-list" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
                  <span className="tag-pill">Parqueo Privado 40+ Autos</span>
                  <span className="tag-pill">Turf Funcional 30m</span>
                  <span className="tag-pill">Fit Bar & Shakes</span>
                  <span className="tag-pill">Cross Training Zone</span>
                </div>

                {/* Quick Map Locator Bar */}
                <div className="branch-location-box">
                  <div className="branch-location-info">
                    <div className="location-pin-title font-mono">
                      <span className="ping-indicator"></span>
                      <span style={{ color: 'var(--color-neon-pink)' }}>BARRIO LA PROAÑO</span>
                      <span className="text-muted" style={{ fontWeight: 'normal', fontSize: '10px' }}>(-0.9612, -80.7085)</span>
                    </div>
                    <span className="location-landmark">Sector La Pradera • Parqueo 40+ autos</span>
                  </div>
                  <button
                    type="button"
                    className="btn-locate-map btn-locate-proano"
                    onClick={() => handleFocusBranch('proano')}
                    title="Centrar Sede La Proaño en el mapa interactivo"
                  >
                    <span>Ver en Mapa</span>
                    <span>↓</span>
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="branch-actions">
                <a href="https://maps.google.com/?q=-0.961215,-80.708492" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.75rem', padding: '0.75rem' }}>
                  Abrir en Google Maps ↗
                </a>
                <a href="https://wa.me/593987654322?text=Hola%20Master%20Gym%20Manta!%20Quiero%20visitar%20la%20Sede%20La%20Proa%C3%B1o" target="_blank" rel="noopener noreferrer" className="btn-neon" style={{ fontSize: '0.75rem', padding: '0.75rem' }}>
                  Escribir a Sede La Proaño
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* ================= Master Grand Interactive Map (Normal Position Below Cards) ================= */}
        <div id="mapa-interactivo" className="master-map-container">
          <div className="master-map-header">
            <div>
              <div className="section-tag" style={{ marginBottom: '0.4rem' }}>
                <span>// Georreferenciación & Conectividad Vial</span>
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '1.85rem', textTransform: 'uppercase', lineHeight: '1.1' }}>
                MAPA INTERACTIVO & RUTAS EN MANTA
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--color-muted)', marginTop: '0.25rem' }}>
                Explora la ubicación de ambas sedes, corredor vial de 4.8 km y accesos estratégicos en el cantón.
              </p>
            </div>
            <div className="font-mono text-muted master-map-badge">
              <span className="ping-indicator"></span>
              <span style={{ color: 'var(--color-light)' }}>OpenStreetMap + Leaflet</span>
            </div>
          </div>

          <InteractiveMap
            mode="full"
            initialLocationId="all"
            selectedLocationId={selectedBranch}
            height="460px"
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
