import React, { useEffect, useRef, useState, useCallback } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Types & Interfaces
export interface GymLocation {
  id: 'uleam' | 'proano';
  name: string;
  shortName: string;
  canton: string;
  sector: string;
  address: string;
  lat: number;
  lng: number;
  zoom: number;
  tag: string;
  badge: string;
  area: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  highlights: string[];
  googleMapsUrl: string;
  whatsappUrl: string;
  phone: string;
  image: string;
}

export interface CantonZone {
  id: string;
  name: string;
  description: string;
  center: [number, number];
  zoom: number;
  bounds?: [[number, number], [number, number]];
}

export interface InteractiveMapProps {
  mode?: 'full' | 'single';
  initialLocationId?: 'all' | 'uleam' | 'proano';
  selectedLocationId?: 'all' | 'uleam' | 'proano';
  height?: string;
  showControls?: boolean;
  showDetailsCard?: boolean;
  interactive?: boolean;
  className?: string;
  onSelectLocation?: (locationId: 'uleam' | 'proano') => void;
}

// Data definitions for Master Gym locations in Manta, Ecuador
export const GYM_LOCATIONS: Record<'uleam' | 'proano', GymLocation> = {
  uleam: {
    id: 'uleam',
    name: 'Master Gym — Sede ULEAM',
    shortName: 'Sede ULEAM',
    canton: 'Cantón Manta',
    sector: 'Zona Universitaria / Av. Circunvalación',
    address: 'Av. Circunvalación frente a Puerta 1 ULEAM, Manta',
    lat: -0.953768,
    lng: -80.747514,
    zoom: 16,
    tag: 'Zona Universitaria',
    badge: 'Frente a ULEAM',
    area: '450 m²',
    hours: {
      weekdays: '05:30 — 22:30',
      saturday: '07:00 — 19:00',
      sunday: '08:00 — 14:00'
    },
    highlights: ['Lockers Digitales', 'Duchas Agua Caliente', 'Climatizado 100%', 'Pase Diario $1.50'],
    googleMapsUrl: 'https://maps.google.com/?q=-0.953768,-80.747514',
    whatsappUrl: 'https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Quiero%20visitar%20la%20Sede%20ULEAM',
    phone: '+593 98 765 4321',
    image: '/assets/sede_uleam.jpg'
  },
  proano: {
    id: 'proano',
    name: 'Master Gym — Sede La Proaño',
    shortName: 'Sede La Proaño',
    canton: 'Cantón Manta',
    sector: 'Barrio La Proaño / Sector La Pradera',
    address: 'Barrio La Proaño, Manta, Ecuador',
    lat: -0.961215,
    lng: -80.708492,
    zoom: 16,
    tag: 'Mega Complejo',
    badge: '1,200 m² + Parqueo',
    area: '1,200 m²',
    hours: {
      weekdays: '05:30 — 22:30',
      saturday: '06:30 — 19:00',
      sunday: '08:00 — 14:00'
    },
    highlights: ['Parqueo Privado 40+ Autos', 'Turf Funcional 30m', 'Fit Bar & Shakes', 'Cross Training'],
    googleMapsUrl: 'https://maps.google.com/?q=-0.961215,-80.708492',
    whatsappUrl: 'https://wa.me/593987654322?text=Hola%20Master%20Gym%20Manta!%20Quiero%20visitar%20la%20Sede%20La%20Proa%C3%B1o',
    phone: '+593 98 765 4322',
    image: '/assets/sede_la_proano.jpg'
  }
};

// Cantón Zones and views
export const CANTON_ZONES: CantonZone[] = [
  {
    id: 'manta-all',
    name: 'Cantón Manta (Red Completa)',
    description: 'Visualización integral de ambas sedes interconectadas en el cantón Manta',
    center: [-0.9575, -80.7280],
    zoom: 13,
    bounds: [
      [-0.9680, -80.7580],
      [-0.9470, -80.7000]
    ]
  },
  {
    id: 'uleam',
    name: 'Sector ULEAM / Universidad',
    description: 'Av. Circunvalación, frente a la Puerta 1 de la ULEAM',
    center: [-0.953768, -80.747514],
    zoom: 16
  },
  {
    id: 'proano',
    name: 'Sector Barrio La Proaño',
    description: 'Mega Complejo de 1,200m² con parqueo privado de alta capacidad',
    center: [-0.961215, -80.708492],
    zoom: 16
  }
];

// Road coordinates connecting Sede ULEAM and Sede La Proaño across Manta arteries
const ROAD_ROUTE_COORDINATES: [number, number][] = [
  [-0.953768, -80.747514], // ULEAM
  [-0.953100, -80.744500], // Av. Circunvalación
  [-0.952200, -80.739800], // Redondel Costa Azul / ULEAM Link
  [-0.951400, -80.734500], // Vía Puerto-Aeropuerto / Interbarrial
  [-0.950800, -80.728200], // Enlace Tarqui / Manta Centro
  [-0.952500, -80.721500], // Av. 4 de Noviembre
  [-0.955500, -80.715200], // Acceso La Proaño
  [-0.961215, -80.708492]  // Sede La Proaño
];

export default function InteractiveMap({
  mode = 'full',
  initialLocationId = 'all',
  selectedLocationId,
  height = '480px',
  showControls = true,
  showDetailsCard = true,
  interactive = true,
  className = '',
  onSelectLocation
}: InteractiveMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markersRef = useRef<{ [key: string]: L.Marker }>({});
  const polylineRef = useRef<L.Polyline | null>(null);
  const glowPolylineRef = useRef<L.Polyline | null>(null);

  const [activeView, setActiveView] = useState<'all' | 'uleam' | 'proano'>(
    initialLocationId === 'all' ? 'all' : initialLocationId
  );
  const [selectedLocation, setSelectedLocation] = useState<GymLocation | null>(
    initialLocationId === 'uleam'
      ? GYM_LOCATIONS.uleam
      : initialLocationId === 'proano'
      ? GYM_LOCATIONS.proano
      : null
  );
  const [routeInfoVisible, setRouteInfoVisible] = useState<boolean>(true);
  const [isCopied, setIsCopied] = useState<string | null>(null);

  // Helper to create custom cyber HTML pin marker
  const createCustomMarkerIcon = (branch: GymLocation, isActive: boolean) => {
    const isUleam = branch.id === 'uleam';
    return L.divIcon({
      className: 'mastergym-custom-pin',
      html: `
        <div class="cyber-pin-container ${isActive ? 'active' : ''} ${isUleam ? 'pin-uleam' : 'pin-proano'}">
          <div class="pin-radar-ring"></div>
          <div class="pin-radar-ring delay"></div>
          <div class="pin-core-circle">
            <span class="pin-icon font-display" style="font-weight: 900; font-size: 13px;">${isUleam ? 'U' : 'P'}</span>
          </div>
          <div class="pin-label-pill">
            <span class="pin-dot"></span>
            <strong>${branch.shortName}</strong>
          </div>
        </div>
      `,
      iconSize: [44, 44],
      iconAnchor: [22, 22],
      popupAnchor: [0, -20]
    });
  };

  // Build custom popup HTML
  const buildPopupHtml = (branch: GymLocation) => {
    return `
      <div class="cyber-popup-card">
        <div class="popup-header">
          <span class="popup-badge">${branch.tag}</span>
          <span class="popup-area font-mono text-neon">${branch.area}</span>
        </div>
        <h4 class="popup-title">${branch.name}</h4>
        <p class="popup-address font-mono">${branch.address}</p>
        
        <div class="popup-hours-grid">
          <div class="popup-hour-row">
            <span class="hour-label">Lun - Vie:</span>
            <span class="hour-val text-neon font-mono">${branch.hours.weekdays}</span>
          </div>
          <div class="popup-hour-row">
            <span class="hour-label">Sábado:</span>
            <span class="hour-val font-mono">${branch.hours.saturday}</span>
          </div>
        </div>

        <div class="popup-tags">
          ${branch.highlights.slice(0, 2).map(h => `<span class="popup-tag-item">${h}</span>`).join('')}
        </div>

        <div class="popup-actions">
          <a href="${branch.googleMapsUrl}" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-outline">
            Google Maps ↗
          </a>
          <a href="${branch.whatsappUrl}" target="_blank" rel="noopener noreferrer" class="popup-btn popup-btn-neon">
            WhatsApp →
          </a>
        </div>
      </div>
    `;
  };

  // Fly smoothly to target with real-time animation
  const flyToTarget = useCallback((target: 'all' | 'uleam' | 'proano') => {
    const map = mapInstanceRef.current;
    if (!map) return;

    setActiveView(target);

    if (target === 'all') {
      setSelectedLocation(null);
      const allZone = CANTON_ZONES[0];
      if (allZone.bounds) {
        map.flyToBounds(allZone.bounds, {
          padding: [40, 40],
          duration: 1.6,
          easeLinearity: 0.25
        });
      } else {
        map.flyTo(allZone.center, allZone.zoom, {
          duration: 1.6,
          easeLinearity: 0.25
        });
      }
    } else {
      const branch = GYM_LOCATIONS[target];
      setSelectedLocation(branch);
      if (onSelectLocation) {
        onSelectLocation(branch.id);
      }
      map.flyTo([branch.lat, branch.lng], branch.zoom, {
        duration: 1.5,
        easeLinearity: 0.25
      });

      // Open corresponding popup after fly animation
      setTimeout(() => {
        const marker = markersRef.current[branch.id];
        if (marker && map) {
          marker.openPopup();
        }
      }, 700);
    }
  }, [onSelectLocation]);

  // Copy coordinates to clipboard
  const handleCopyGPS = (branch: GymLocation) => {
    const text = `${branch.lat}, ${branch.lng}`;
    navigator.clipboard.writeText(text);
    setIsCopied(branch.id);
    setTimeout(() => setIsCopied(null), 2500);
  };

  // Initialize Map
  useEffect(() => {
    if (!mapContainerRef.current) return;
    if (mapInstanceRef.current) return; // Prevent double initialization

    // Initial center & zoom
    let initialCenter: [number, number] = [-0.9575, -80.7280];
    let initialZoom = 13;

    if (mode === 'single' && initialLocationId !== 'all') {
      const loc = GYM_LOCATIONS[initialLocationId];
      initialCenter = [loc.lat, loc.lng];
      initialZoom = loc.zoom;
    }

    // Create Leaflet map instance
    const map = L.map(mapContainerRef.current, {
      center: initialCenter,
      zoom: initialZoom,
      zoomControl: false,
      scrollWheelZoom: false,
      dragging: interactive,
      touchZoom: interactive,
      doubleClickZoom: interactive,
      attributionControl: true
    });

    mapInstanceRef.current = map;

    // Add Zoom control at top-right for desktop/mobile ease
    if (interactive) {
      L.control.zoom({ position: 'topright' }).addTo(map);
    }

    // OpenStreetMap Tile Layer as requested:
    // https://tile.openstreetmap.org/{z}/{x}/{y}.png
    const osmTileLayer = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      minZoom: 11,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer">OpenStreetMap</a> contributors | Master Gym Manta',
      className: 'mastergym-osm-tiles'
    });

    osmTileLayer.addTo(map);

    // If mode is 'full' or 'all', add animated connecting road polyline between ULEAM & La Proaño
    if (mode === 'full') {
      // Background glow line (Neon Pink)
      const glowLine = L.polyline(ROAD_ROUTE_COORDINATES, {
        color: '#FF007F',
        weight: 8,
        opacity: 0.4,
        lineCap: 'round',
        lineJoin: 'round',
        className: 'cyber-route-glow'
      }).addTo(map);
      glowPolylineRef.current = glowLine;

      // Foreground dashed animated line (Cyber Yellow)
      const routeLine = L.polyline(ROAD_ROUTE_COORDINATES, {
        color: '#FFEA00',
        weight: 3.5,
        opacity: 0.95,
        dashArray: '8, 12',
        lineCap: 'round',
        lineJoin: 'round',
        className: 'cyber-route-line animated-dash'
      }).addTo(map);
      polylineRef.current = routeLine;

      routeLine.bindTooltip(
        '<div class="route-tooltip"><strong>Corredor Inter-Sedes Manta</strong><br/><span>4.8 km • ~8-10 min</span></div>',
        { sticky: true, className: 'cyber-tooltip' }
      );
    }

    // Add Markers for both sedes or single sede
    const locationsToAdd = mode === 'single' && initialLocationId !== 'all'
      ? [GYM_LOCATIONS[initialLocationId]]
      : Object.values(GYM_LOCATIONS);

    locationsToAdd.forEach((branch) => {
      const markerIcon = createCustomMarkerIcon(branch, activeView === branch.id);
      const marker = L.marker([branch.lat, branch.lng], {
        icon: markerIcon,
        title: branch.name,
        alt: branch.name
      }).addTo(map);

      marker.bindPopup(buildPopupHtml(branch), {
        maxWidth: 320,
        className: 'mastergym-custom-popup',
        closeButton: true
      });

      marker.on('click', () => {
        setSelectedLocation(branch);
        setActiveView(branch.id);
        if (onSelectLocation) {
          onSelectLocation(branch.id);
        }
      });

      markersRef.current[branch.id] = marker;
    });

    // In single mode, auto open the popup
    if (mode === 'single' && initialLocationId !== 'all') {
      setTimeout(() => {
        const singleMarker = markersRef.current[initialLocationId];
        if (singleMarker && map) {
          singleMarker.openPopup();
        }
      }, 400);
    }

    // ResizeObserver to handle container size changes cleanly
    const resizeObserver = new ResizeObserver(() => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.invalidateSize();
      }
    });

    if (mapContainerRef.current) {
      resizeObserver.observe(mapContainerRef.current);
    }

    // Cleanup on unmount
    return () => {
      resizeObserver.disconnect();
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [mode, initialLocationId, interactive]);

  // Update marker icons when active view changes
  useEffect(() => {
    Object.values(GYM_LOCATIONS).forEach((branch) => {
      const marker = markersRef.current[branch.id];
      if (marker) {
        marker.setIcon(createCustomMarkerIcon(branch, activeView === branch.id));
      }
    });
  }, [activeView]);

  // Sync external location selection from parent
  useEffect(() => {
    if (selectedLocationId && selectedLocationId !== activeView) {
      flyToTarget(selectedLocationId);
    }
  }, [selectedLocationId, flyToTarget, activeView]);

  return (
    <div className={`cyber-map-wrapper ${className}`}>
      {/* Map Control Toolbar & Canton Selector (Full mode) */}
      {showControls && mode === 'full' && (
        <div className="map-toolbar">
          <div className="toolbar-header">
            <div className="toolbar-badge">
              <span className="live-indicator-dot"></span>
              <span className="font-mono text-neon" style={{ fontSize: '11px', fontWeight: 'bold' }}>
                GPS LIVE // CANTON MANTA
              </span>
            </div>
            <div className="toolbar-stats font-mono text-muted">
              <span>2 Sedes Operativas</span>
              <span className="separator">•</span>
              <span>1,650 m² Totales</span>
            </div>
          </div>

          <div className="canton-selector-pills">
            <button
              type="button"
              className={`pill-btn ${activeView === 'all' ? 'active' : ''}`}
              onClick={() => flyToTarget('all')}
              title="Vista general del Cantón Manta con ambas sedes conectadas"
            >
              <span className="pill-icon font-mono" style={{ fontSize: '11px', fontWeight: 'bold' }}>//</span>
              <span className="pill-label">Red Completa Manta</span>
              <span className="pill-chip">Dual</span>
            </button>

            <button
              type="button"
              className={`pill-btn ${activeView === 'uleam' ? 'active' : ''}`}
              onClick={() => flyToTarget('uleam')}
              title="Centrar en Sede ULEAM (Zona Universitaria)"
            >
              <span className="pill-icon font-mono" style={{ fontSize: '11px', fontWeight: 'bold' }}>01</span>
              <span className="pill-label">Sede ULEAM</span>
              <span className="pill-chip">Univ.</span>
            </button>

            <button
              type="button"
              className={`pill-btn ${activeView === 'proano' ? 'active' : ''}`}
              onClick={() => flyToTarget('proano')}
              title="Centrar en Sede La Proaño (Mega Complejo)"
            >
              <span className="pill-icon font-mono" style={{ fontSize: '11px', fontWeight: 'bold' }}>02</span>
              <span className="pill-label">Sede La Proaño</span>
              <span className="pill-chip">1,200m²</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Map Container Canvas */}
      <div className="map-viewport-container" style={{ height }}>
        <div
          ref={mapContainerRef}
          className="leaflet-map-canvas"
          style={{ width: '100%', height: '100%' }}
        />

        {/* Cyber Map Compass / Grid Overlay */}
        <div className="map-cyber-hud-overlay">
          <div className="hud-corner top-left font-mono">
            <span>SYS: OSM_LEAFLET_v1.9.4</span>
          </div>
          <div className="hud-corner bottom-left font-mono">
            <span>LAT: -0.9575° | LNG: -80.7280°</span>
          </div>
        </div>

        {/* Route Info Badge Overlay (Full Mode) */}
        {mode === 'full' && routeInfoVisible && (
          <div className="route-live-badge">
            <div className="route-badge-icon">
              <span className="route-pulse"></span>
              <span className="font-mono text-neon" style={{ fontSize: '11px', fontWeight: 'bold' }}>AUTO</span>
            </div>
            <div className="route-badge-text">
              <div className="route-badge-title font-display">Conexión Directa Av. Circunvalación</div>
              <div className="route-badge-metrics font-mono">
                <span className="text-neon">4.8 km</span> entre Sedes • <span className="text-white">~8 min</span>
              </div>
            </div>
            <button
              type="button"
              className="route-badge-close"
              onClick={() => setRouteInfoVisible(false)}
              aria-label="Cerrar indicador de ruta"
            >
              &times;
            </button>
          </div>
        )}
      </div>

      {/* Location Details Footer Card (Full mode when a location is active or selected) */}
      {showDetailsCard && mode === 'full' && (
        <div className="map-location-drawer">
          {selectedLocation ? (
            <div className="drawer-card active-card">
              <div className="drawer-grid">
                <div className="drawer-main">
                  <div className="drawer-tag-row">
                    <span className="tag-neon">{selectedLocation.tag}</span>
                    <span className="tag-mono font-mono">{selectedLocation.canton}</span>
                    <span className="tag-mono font-mono text-neon">{selectedLocation.area}</span>
                  </div>
                  <h3 className="drawer-title font-display">{selectedLocation.name}</h3>
                  <p className="drawer-address font-mono">{selectedLocation.address}</p>

                  <div className="drawer-pills">
                    {selectedLocation.highlights.map((h, i) => (
                      <span key={i} className="drawer-pill-item">• {h}</span>
                    ))}
                  </div>
                </div>

                <div className="drawer-meta">
                  <div className="drawer-schedule">
                    <div className="sched-item">
                      <span className="sched-lbl">Lun — Vie:</span>
                      <span className="sched-val text-neon font-mono">{selectedLocation.hours.weekdays}</span>
                    </div>
                    <div className="sched-item">
                      <span className="sched-lbl">Sábados:</span>
                      <span className="sched-val font-mono">{selectedLocation.hours.saturday}</span>
                    </div>
                    <div className="sched-item">
                      <span className="sched-lbl">Domingos:</span>
                      <span className="sched-val font-mono">{selectedLocation.hours.sunday}</span>
                    </div>
                  </div>

                  <div className="drawer-actions">
                    <button
                      type="button"
                      className="btn-drawer-outline"
                      onClick={() => handleCopyGPS(selectedLocation)}
                    >
                      {isCopied === selectedLocation.id ? 'GPS Copiado' : 'Copiar GPS'}
                    </button>
                    <a
                      href={selectedLocation.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-drawer-outline"
                    >
                      Abrir Maps ↗
                    </a>
                    <a
                      href={selectedLocation.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-drawer-neon"
                    >
                      WhatsApp Directo →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="drawer-card dual-summary-card">
              <div className="dual-summary-grid">
                <div
                  className="dual-branch-box"
                  onClick={() => flyToTarget('uleam')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="box-header">
                    <span className="box-icon font-mono text-yellow" style={{ fontSize: '13px', fontWeight: 'bold' }}>01</span>
                    <strong className="box-title font-display">1. Sede ULEAM</strong>
                  </div>
                  <p className="box-desc">Av. Circunvalación frente a Puerta 1 • Zona Universitaria</p>
                  <div className="box-footer font-mono">
                    <span className="text-yellow">Lun–Vie: 05:30 — 22:30</span>
                    <span className="box-arrow">Ver en Mapa →</span>
                  </div>
                </div>

                <div
                  className="dual-branch-box"
                  onClick={() => flyToTarget('proano')}
                  role="button"
                  tabIndex={0}
                >
                  <div className="box-header">
                    <span className="box-icon font-mono text-pink" style={{ fontSize: '13px', fontWeight: 'bold' }}>02</span>
                    <strong className="box-title font-display">2. Sede La Proaño</strong>
                  </div>
                  <p className="box-desc">Barrio La Proaño • Mega Complejo 1,200m² + Parqueo 40+ autos</p>
                  <div className="box-footer font-mono">
                    <span className="text-pink">Lun–Vie: 05:30 — 22:30</span>
                    <span className="box-arrow">Ver en Mapa →</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
