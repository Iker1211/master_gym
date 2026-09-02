import React from 'react';

export default function Instalaciones() {
  return (
    <section id="instalaciones" className="section">
      <div className="container">
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', gap: '1.5rem', marginBottom: '3rem' }}>
          <div>
            <div className="section-tag">
              <span>// 02 — Infraestructura de Élite</span>
            </div>
            <h2 className="section-title">
              EQUIPAMIENTO <span className="text-neon">SIN EXCUSAS.</span>
            </h2>
          </div>
          <p className="section-desc" style={{ maxWidth: '460px' }}>
            Diseñado bajo estándares de biomecánica profesional para atletas exigentes y personas que inician su transformación física.
          </p>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="bento-grid">
          
          {/* Bento 1: Peso Libre y Musculación (7 cols) */}
          <div className="bento-card col-7">
            <img src="/assets/peso_libre.jpg" alt="Zona de Peso Libre y Musculación Master Gym Manta" className="bento-bg-img" />
            <div className="bento-overlay"></div>
            
            <div className="bento-content">
              <div className="live-badge" style={{ marginBottom: '0.75rem', background: 'rgba(255,0,127,0.15)', borderColor: 'rgba(255,0,127,0.4)', color: 'var(--color-neon-pink)' }}>
                Fuerza & Hipertrofia
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '2.25rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Área de Peso Libre & Racks
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(244, 244, 246, 0.8)', maxWidth: '520px', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                Mancuernas de uretano calibradas hasta 60 kg, plataformas olímpicas de levantamiento, jaulas de potencia y discos Eleiko para máxima seguridad y rendimiento.
              </p>
              <div className="tags-list">
                <span className="tag-pill">Eleiko & Hammer Strength</span>
                <span className="tag-pill">Bancas Ajustables Pro</span>
                <span className="tag-pill">Zona Grip & Magnesio</span>
              </div>
            </div>
          </div>

          {/* Bento 2: Maquinaria de Palanca & Biomecánica (5 cols) */}
          <div className="bento-card col-5">
            <img src="/assets/maquinaria_leverage.jpg" alt="Maquinaria Biomecánica Iso-Lateral Master Gym Manta" className="bento-bg-img" />
            <div className="bento-overlay"></div>
            
            <div className="bento-content">
              <div className="live-badge" style={{ marginBottom: '0.75rem', background: 'rgba(255,234,0,0.15)', borderColor: 'rgba(255,234,0,0.4)', color: 'var(--color-cyber-yellow)' }}>
                Biomecánica & Carga
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '2.25rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Línea Leverage & Empuje
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(244, 244, 246, 0.8)', lineHeight: '1.6', marginBottom: '0.75rem' }}>
                Maquinaria de palanca Iso-Lateral y estaciones de empuje convergente para máxima tensión muscular con seguridad articular.
              </p>
              <div className="tags-list">
                <span className="tag-pill">Iso-Lateral Convergente</span>
                <span className="tag-pill">Carga en Discos</span>
              </div>
            </div>
          </div>

          {/* Bento 3: Barras Olímpicas & Discos Bumper (4 cols) */}
          <div className="bento-card col-4">
            <img src="/assets/zona_olimpica.jpg" alt="Barras Olímpicas y Discos de Competición Master Gym Manta" className="bento-bg-img" />
            <div className="bento-overlay"></div>
            
            <div className="bento-content">
              <div className="live-badge" style={{ marginBottom: '0.75rem', background: 'rgba(255,0,127,0.15)', borderColor: 'rgba(255,0,127,0.4)', color: 'var(--color-neon-pink)' }}>
                Levantamiento Olímpico
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '1.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Discos Bumper & Barras 20kg
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(244, 244, 246, 0.8)', lineHeight: '1.6' }}>
                Barras de acero de alta resistencia calibradas a 20 kg, collares Lock-Jaw de desmontaje rápido y discos bumper drop-ready.
              </p>
            </div>
          </div>

          {/* Bento 4: Torres Selectorizadas Pin-Select (4 cols) */}
          <div className="bento-card col-4">
            <img src="/assets/zona_selectorizada.jpg" alt="Torres Selectorizadas y Poleas Master Gym Manta" className="bento-bg-img" />
            <div className="bento-overlay"></div>
            
            <div className="bento-content">
              <div className="live-badge" style={{ marginBottom: '0.75rem', background: 'rgba(255,234,0,0.15)', borderColor: 'rgba(255,234,0,0.4)', color: 'var(--color-cyber-yellow)' }}>
                Aislamiento & Poleas
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '1.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Torres Pin-Select & Poleas
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(244, 244, 246, 0.8)', lineHeight: '1.6' }}>
                Estaciones guiadas para cuádriceps, femorales, dorsales y cables cruzados con selección rápida de peso en placas.
              </p>
            </div>
          </div>

          {/* Bento 5: Asesoría y Evaluación (4 cols) */}
          <div className="bento-card col-4">
            <img src="/assets/asesoria_fitness.jpg" alt="Asesoría y Evaluación Física Master Gym Manta" className="bento-bg-img" />
            <div className="bento-overlay"></div>
            
            <div className="bento-content">
              <div className="live-badge" style={{ marginBottom: '0.75rem', background: 'rgba(255,0,127,0.15)', borderColor: 'rgba(255,0,127,0.4)', color: 'var(--color-neon-pink)' }}>
                Resultados Guiados
              </div>
              <h3 className="font-display text-white" style={{ fontSize: '1.75rem', textTransform: 'uppercase', marginBottom: '0.5rem' }}>
                Inducción & Evaluación
              </h3>
              <p style={{ fontSize: '13px', color: 'rgba(244, 244, 246, 0.8)', lineHeight: '1.6' }}>
                Medición de composición corporal, diseño de rutina personalizada y seguimiento con entrenadores de piso.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
