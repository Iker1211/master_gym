import React from 'react';

export default function Tarifas({ onOpenPassModal }) {
  return (
    <section id="planes" className="section">
      <div className="container">
        
        <div className="section-header text-center">
          <div className="section-tag">
            <span>// 03 — Tarifas Transparentes</span>
          </div>
          <h2 className="section-title">
            PLANES SIN LETRA CHICA.
          </h2>
          <p className="section-desc">
            Cero contratos de permanencia obligatoria. Cero matrículas sorpresa. Entrena por día ($1.50), por semana ($5) o el mes completo ($20 — o $15 c/u si vienes con un acompañante).
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="pricing-grid">
          
          {/* ================= Plan 1: Pase Diario ================= */}
          <div className="pricing-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <span className="text-muted font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>
                    Entrada Libre
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.1rem', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    Pase Diario
                  </h3>
                </div>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.08)', color: '#FFF', borderRadius: '9999px' }}>
                  Por Día
                </span>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                Ideal para entrenamientos sueltos, probar el gym o si estás de paso en Manta. Paga solo cuando vienes.
              </p>

              {/* Price Display */}
              <div className="price-display">
                <span className="price-amount">$1<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>.50</span></span>
                <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ Día</span>
              </div>

              {/* Benefits List */}
              <ul className="benefits-list">
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Acceso total por 1 día (ULEAM o La Proaño)</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Uso libre de maquinaria y peso libre</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Uso de casilleros, vestidores y duchas</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Sin matrículas ni contratos</span>
                </li>
                <li style={{ color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  <span>—</span>
                  <span>Rutina personalizada de inducción</span>
                </li>
              </ul>
            </div>

            <div style={{ paddingTop: '2rem' }}>
              <a 
                href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20entrenar%20hoy%20con%20el%20Pase%20Diario%20($1.50)" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ width: '100%', fontSize: '0.88rem' }}
              >
                Entrenar Hoy por $1.50
              </a>
            </div>
          </div>

          {/* ================= Plan 2: Pase Semanal ================= */}
          <div className="pricing-card">
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div>
                  <span className="text-muted font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold' }}>
                    Corto Plazo
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.1rem', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    Pase Semanal
                  </h3>
                </div>
                <span style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', padding: '0.3rem 0.75rem', background: 'rgba(255,255,255,0.08)', color: '#FFF', borderRadius: '9999px' }}>
                  7 Días
                </span>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.5' }}>
                Perfecto para vacaciones, pruebas intensivas o flexibilidad semanal sin ataduras mensuales.
              </p>

              {/* Price Display */}
              <div className="price-display">
                <span className="price-amount">$5<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>.00</span></span>
                <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ Semana</span>
              </div>

              {/* Benefits List */}
              <ul className="benefits-list">
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span><strong>7 días consecutivos</strong> de acceso total</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Horario libre sin restricciones (Lun a Dom)</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Acceso a todas las zonas de fuerza y cardio</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Vestidores, duchas y casilleros</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Renovación libre semana a semana</span>
                </li>
              </ul>
            </div>

            <div style={{ paddingTop: '2rem' }}>
              <a 
                href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20inscribirme%20en%20el%20Pase%20Semanal%20($5.00)" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-secondary" 
                style={{ width: '100%', fontSize: '0.88rem' }}
              >
                Inscribirme por $5 / Semana
              </a>
            </div>
          </div>

          {/* ================= Plan 3: Mes Completo (FEATURED ATLETA) ================= */}
          <div className="pricing-card featured">
            
            <div className="featured-badge">
              MÁS ELEGIDO • MEJOR VALOR
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', paddingTop: '0.5rem' }}>
                <div>
                  <span className="text-primary font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', color: 'var(--primary)' }}>
                    Membresía Mensual
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.4rem', textTransform: 'uppercase', marginTop: '0.25rem' }}>
                    Mes Completo
                  </h3>
                </div>
              </div>

              <p style={{ fontSize: '13px', color: 'rgba(244, 244, 246, 0.9)', marginBottom: '1rem', lineHeight: '1.5' }}>
                Entrenamiento ilimitado durante 30 días continuos con el mejor costo-beneficio de Manta.
              </p>

              {/* Price Display */}
              <div className="price-display" style={{ marginBottom: '1rem', paddingBottom: '0.75rem' }}>
                <span className="price-amount">$20<span style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>.00</span></span>
                <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ Mes Individual</span>
              </div>

              {/* Promo Acompañante Callout */}
              <div className="promo-callout">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>
                    PROMO ACOMPAÑANTE
                  </span>
                  <span className="font-mono" style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(255, 234, 0, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '9999px', border: '1px solid rgba(255, 234, 0, 0.4)', color: 'var(--accent)' }}>
                    $15 c/u
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--color-light)', lineHeight: '1.45' }}>
                  ¡Si vienes con un acompañante (amigo o pareja), <strong style={{ color: 'var(--accent)' }}>pagan solo $15 al mes cada uno</strong> ($30 en total por los dos)!
                </p>
              </div>

              {/* Benefits List */}
              <ul className="benefits-list">
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span><strong>Acceso ilimitado por 30 días</strong></span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Horario 100% libre sin restricciones</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Rutina personalizada de inducción</span>
                </li>
                <li>
                  <span style={{ color: 'var(--primary)', fontWeight: 'bold' }}>✓</span>
                  <span>Uso libre de lockers, vestidores y duchas</span>
                </li>
                <li>
                  <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>★</span>
                  <span><strong style={{ color: 'var(--accent)' }}>Aplica promo $15 c/u</strong> con acompañante</span>
                </li>
              </ul>
            </div>

            <div style={{ paddingTop: '1.75rem' }}>
              <a 
                href="https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20inscribirme%20en%20el%20Plan%20Mes%20Completo%20($20%20individual%20o%20$15%20con%20acompa%C3%B1ante)" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ width: '100%', fontSize: '0.95rem' }}
              >
                Inscribirme al Mes Completo →
              </a>
            </div>
          </div>

        </div>

        {/* Guarantees Bar */}
        <div className="payment-methods-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <span style={{ width: '10px', height: '10px', backgroundColor: 'var(--primary)', borderRadius: '50%', display: 'inline-block' }}></span>
            <strong style={{ color: '#FFF' }}>MÉTODOS DE PAGO:</strong>
            <span className="text-muted">Transferencia Bancaria (Pichincha, Guayaquil), Deuna, Tarjetas de Débito/Crédito y Efectivo en caja.</span>
          </div>
          <button onClick={onOpenPassModal} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline', font: 'inherit', whiteSpace: 'nowrap' }}>
            ¿Aún indeciso? Prueba 1 día gratis →
          </button>
        </div>

      </div>
    </section>
  );
}
