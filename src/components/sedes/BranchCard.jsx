import React from 'react';
import { Sparkles, MapPin, Dumbbell, ExternalLink, ArrowRight } from 'lucide-react';
import { BRANCHES_DATA } from '../../data/branchesData';
import { useGymSchedule } from '../../hooks/useGymSchedule';

export default function BranchCard({ branchId, selectedBranch, onFocusBranch, onFilterEquipment }) {
  const branch = BRANCHES_DATA[branchId];
  const scheduleStatus = useGymSchedule(branchId);
  if (!branch) return null;

  const isUleam = branchId === 'uleam';
  const isSelected = selectedBranch === branchId;
  const activeClass = isSelected ? (isUleam ? 'active-branch-uleam' : 'active-branch-proano') : '';
  const accentColor = isUleam ? 'var(--accent)' : 'var(--primary)';

  return (
    <div id={`card-sede-${branchId}`} className={`branch-card ${activeClass}`}>
      {/* Image Container */}
      <div className="branch-img-wrap">
        <img 
          src={branch.image} 
          alt={`${branch.name} Master Gym Manta`} 
          className="branch-img" 
          loading="lazy"
        />
        <div className="branch-img-overlay"></div>
        
        <div className="branch-badge-top">
          <span 
            style={{ 
              padding: '0.35rem 0.85rem', 
              fontSize: '10px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              background: isUleam ? 'var(--accent)' : 'var(--primary)', 
              color: isUleam ? '#050505' : '#FFFFFF', 
              borderRadius: '9999px', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.5)' 
            }}
          >
            {branch.name}
          </span>
          <span 
            style={{ 
              padding: '0.35rem 0.85rem', 
              fontSize: '10px', 
              fontWeight: 'bold', 
              textTransform: 'uppercase', 
              letterSpacing: '0.1em', 
              background: 'rgba(22, 24, 30, 0.85)', 
              color: '#FFF', 
              border: '1px solid var(--border-light)', 
              backdropFilter: 'blur(8px)', 
              borderRadius: '9999px' 
            }}
          >
            {branch.area}
          </span>
        </div>

        <div className="branch-title-wrap">
          <div>
            <span className="font-mono" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 'bold', color: accentColor }}>
              {branch.address}
            </span>
            <h3 className="font-display text-white" style={{ fontSize: '2.35rem', textTransform: 'uppercase', lineHeight: '1' }}>
              {branch.name}
            </h3>
          </div>
          <span className="font-mono text-muted" style={{ fontSize: '11px', background: 'rgba(5,5,5,0.7)', padding: '0.2rem 0.6rem', borderRadius: '9999px' }}>
            {branch.shortName}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="branch-body">
        <div>
          {/* Live Status Pill */}
          <div 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.45rem', 
              padding: '0.35rem 0.85rem', 
              background: isUleam ? 'rgba(255, 234, 0, 0.08)' : 'rgba(255, 0, 127, 0.08)', 
              border: `1px solid ${isUleam ? 'rgba(255, 234, 0, 0.25)' : 'rgba(255, 0, 127, 0.25)'}`, 
              borderRadius: '9999px', 
              marginBottom: '0.85rem' 
            }}
          >
            <span className={`status-dot ${scheduleStatus.isOpen ? 'status-dot-open' : 'status-dot-closed'}`}></span>
            <span className="font-mono text-white" style={{ fontSize: '11px', fontWeight: 'bold' }}>
              {scheduleStatus.isOpen ? `ABIERTO AHORA • Cierra a las ${scheduleStatus.closeStr}` : `CERRADO AHORA • Abre ${scheduleStatus.openStr}`}
            </span>
          </div>

          <p style={{ fontSize: '14px', color: 'rgba(244, 244, 246, 0.82)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
            {isUleam 
              ? 'Ubicada estratégicamente frente a la segunda entrada de la ULEAM. La sede perfecta para universitarios y profesionales: maquinaria clásica multifuncional completa, poleas dobles regulables, peso libre macizo, casilleros para mochilas y duchas para salir listo a clases o trabajo.'
              : 'El templo del entrenamiento pesado en Manta: 1,200 m² de nave industrial con zona olímpica de halterofilia, racks masivos, área funcional y amplio parqueadero privado sin costo para socios.'
            }
          </p>

          {/* Specs Grid */}
          <div className="specs-grid">
            <div>
              <span className="specs-label">Ubicación:</span>
              <span className="specs-val">{branch.address}</span>
            </div>
            <div>
              <span className="specs-label">Tarifas Transparentes:</span>
              <span className="font-mono" style={{ fontWeight: 'bold', color: accentColor }}>Día $1.50 • Mes $20 ($15 c/u dúo)</span>
            </div>
            <div>
              <span className="specs-label">Lun–Vie:</span>
              <span className="font-mono specs-val" style={{ fontWeight: 'bold' }}>{branch.hours.weekday}</span>
            </div>
            <div>
              <span className="specs-label">Sáb / Dom:</span>
              <span className="font-mono specs-val">Sáb {branch.hours.saturday}</span>
            </div>
          </div>

          {/* Featured Zones Micro Strip */}
          <div className="branch-zones-preview">
            <span className="branch-zones-title font-mono">
              <Sparkles size={12} style={{ color: accentColor }} />
              Equipamiento destacado en {branch.name}:
            </span>
            <div className="tags-list">
              {branch.highlights.map((h, i) => (
                <span key={i} className={`tag-pill ${isUleam ? 'tag-pill-accent' : 'tag-pill-pink'}`}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          {/* Quick Map Locator Bar */}
          <div className="branch-location-box">
            <div className="branch-location-info">
              <div className="location-pin-title font-mono">
                <span className={`ping-indicator ${isUleam ? 'ping-indicator-yellow' : 'ping-indicator-pink'}`}></span>
                <span style={{ color: accentColor }}>{branch.shortName.toUpperCase()}</span>
                <span className="text-muted" style={{ fontWeight: 'normal', fontSize: '10px' }}>
                  ({branch.coordinates.lat}, {branch.coordinates.lng})
                </span>
              </div>
              <span className="location-landmark">{branch.tagline}</span>
            </div>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <button
                type="button"
                className={`btn-locate-map ${isUleam ? 'btn-locate-uleam' : 'btn-locate-proano'}`}
                onClick={() => onFocusBranch(branchId)}
                title={`Centrar ${branch.name} en el mapa interactivo`}
              >
                <MapPin size={12} />
                <span>Ver en Mapa</span>
                <span>↓</span>
              </button>
              <button
                type="button"
                className="btn-locate-map"
                onClick={() => onFilterEquipment(branchId)}
                title={`Ver maquinaria disponible en ${branch.name}`}
                style={{ 
                  background: isUleam ? 'rgba(255, 234, 0, 0.1)' : 'rgba(255, 0, 127, 0.1)', 
                  color: accentColor, 
                  borderColor: isUleam ? 'rgba(255, 234, 0, 0.3)' : 'rgba(255, 0, 127, 0.3)' 
                }}
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
            href={branch.googleMapsUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-secondary" 
            style={{ fontSize: '0.85rem' }}
          >
            <span>Google Maps</span>
            <ExternalLink size={14} />
          </a>
          <a 
            href={branch.whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`btn ${isUleam ? 'btn-yellow' : 'btn-primary'}`} 
            style={{ fontSize: '0.85rem' }}
          >
            <span>WhatsApp Directo</span>
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
