import React, { useState } from 'react';
import { Navigation } from 'lucide-react';
import { useLenis } from 'lenis/react';
import RhinoWatermark from './RhinoWatermark';
import InteractiveMap from './InteractiveMap';
import BranchCard from './sedes/BranchCard';
import FacilitiesBento from './sedes/FacilitiesBento';

export default function SedesInstalaciones() {
  const [selectedBranch, setSelectedBranch] = useState('uleam');
  const lenis = useLenis();

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

  return (
    <section id="sedes" className="section sedes-instalaciones-section">
      <RhinoWatermark variant="monolith" position="top-right" opacity={0.24} />
      <RhinoWatermark variant="contour" position="left" opacity={0.16} style={{ top: '55%' }} />
      <div className="container">
        
        {/* ================= Master Section Header ================= */}
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
              <span className="kpi-num text-yellow">0</span>
              <span className="kpi-label">Contratos Forzosos</span>
            </div>
          </div>
        </div>

        {/* ================= 2 Flagship Sedes Cards Grid ================= */}
        <div id="sedes-cards" className="sedes-grid">
          <BranchCard
            branchId="uleam"
            selectedBranch={selectedBranch}
            onFocusBranch={handleFocusBranch}
            onFilterEquipment={handleFilterEquipmentByBranch}
          />
          <BranchCard
            branchId="proano"
            selectedBranch={selectedBranch}
            onFocusBranch={handleFocusBranch}
            onFilterEquipment={handleFilterEquipmentByBranch}
          />
        </div>

        {/* ================= 3. Bento Grid of Equipment & Facilities ================= */}
        <FacilitiesBento selectedBranch={selectedBranch} />

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
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
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
