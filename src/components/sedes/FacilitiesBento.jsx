import React, { useState } from 'react';
import { EQUIPMENT_ZONES } from '../../data/equipmentData';

export default function FacilitiesBento({ selectedBranch }) {
  const [equipmentCategory, setEquipmentCategory] = useState('all');

  const filteredEquipment = EQUIPMENT_ZONES.filter(zone => {
    if (equipmentCategory === 'all') return true;
    return zone.category === equipmentCategory;
  });

  return (
    <div id="instalaciones" className="facilities-sub-section">
      <div className="section-header facilities-header">
        <div className="section-tag">
          <span className="ping-indicator ping-indicator-yellow"></span>
          <span>ZONAS & MAQUINARIA</span>
        </div>
        <h3 className="section-title facilities-title">
          MAQUINARIA Y ZONAS DE ENTRENAMIENTO
        </h3>
        <p className="section-desc facilities-desc">
          Línea completa de palanca, poleas regulables, jaulas olímpicas y mancuernas macizas hasta 60 kg.
        </p>

        {/* Category Filter Pills */}
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
                    <span>{zone.availability}</span>
                  </div>
                </div>

                <div className="bento-text-block">
                  <h4 className="bento-title font-display text-white">{zone.title}</h4>
                  <p className="bento-desc">{zone.desc}</p>
                </div>

                <ul className="bento-specs-list">
                  {zone.specs.map((spec, i) => (
                    <li key={i} className="bento-spec-item">
                      <span className="bento-spec-bullet">▪</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
