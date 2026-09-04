import React, { useState } from 'react';
import { Check, Sparkles, Users, User, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function Tarifas({ onOpenPassModal }) {
  const [isDuo, setIsDuo] = useState(false);

  const duoWhatsappUrl = "https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Quiero%20inscribirme%20con%20la%20Promo%20Acompa%C3%B1ante%20de%20$15%20al%20mes%20cada%20uno%20($30%20total%20los%20dos)";
  const soloWhatsappUrl = "https://wa.me/593987654321?text=Hola%20Master%20Gym%20Manta!%20Deseo%20inscribirme%20en%20el%20Plan%20Mes%20Completo%20Individual%20($20)";

  return (
    <section id="planes" className="section">
      <div className="container">
        
        <div className="section-header text-center">
          <div className="section-tag">
            <span className="ping-indicator ping-indicator-yellow"></span>
            <span>TRANSPARENCIA TOTAL • PRECIOS DE MANTA</span>
          </div>
          <h2 className="section-title">
            PLANES SIN LETRA CHICA <span className="text-gradient">NI AMARRAS.</span>
          </h2>
          <p className="section-desc">
            Cero contratos forzosos. Cero penalizaciones ni débitos automáticos en tu tarjeta.
            Pagas en efectivo, transferencia bancaria o Deuna. Entrena por día ($1.50), por semana ($5) o el mes completo ($20 — o $15 con tu amigo o pareja).
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
                    Sin Matrícula • Paga Cuando Vengas
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
                Perfecto si estás de paso en Manta, tienes horarios irregulares o quieres probar la maquinaria antes de inscribirte al mes.
              </p>

              {/* Price Display */}
              <div className="price-display">
                <span className="price-amount">$1<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>.50</span></span>
                <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ Día Completo</span>
              </div>

              {/* Benefits List */}
              <ul className="benefits-list">
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Acceso total ilimitado por 1 día (Sede ULEAM o La Proaño)</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Uso libre de todas las poleas, jaulas y peso libre</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Duchas y casilleros seguros</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Cero matrícula ni registro bancario</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Menos de lo que cuesta un refrigerio en la calle</span>
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
                    Flexibilidad Absoluta
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
                Ideal para períodos de vacaciones, semanas de entrenamiento intensivo o probar el ritmo del gym sin ataduras de 30 días.
              </p>

              {/* Price Display */}
              <div className="price-display">
                <span className="price-amount">$5<span style={{ fontSize: '1.5rem', color: 'var(--text-muted)' }}>.00</span></span>
                <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ 7 Días Seguidos</span>
              </div>

              {/* Benefits List */}
              <ul className="benefits-list">
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span><strong>7 días continuos</strong> de acceso total sin restricción de horario</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Equivalente a menos de <strong>$0.71 por día</strong></span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Acceso a áreas de fuerza, zona funcional y poleas</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Vestidores, duchas y casilleros</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
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

          {/* ================= Plan 3: Mes Completo (CON SIMULADOR PROMO PANA $15) ================= */}
          <div className="pricing-card featured">
            
            <div className="featured-badge">
              🔥 MÁS POPULAR EN MANTA
            </div>

            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.75rem', paddingTop: '0.5rem' }}>
                <div>
                  <span className="text-primary font-mono" style={{ fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', color: 'var(--primary)' }}>
                    Membresía Mensual 30 Días
                  </span>
                  <h3 className="font-display text-white" style={{ fontSize: '2.4rem', textTransform: 'uppercase', marginTop: '0.2rem', lineHeight: '1' }}>
                    Mes Completo
                  </h3>
                </div>
              </div>

              {/* Interactive Duo/Solo Toggle */}
              <div className="plan-mode-switcher" style={{ display: 'flex', background: 'rgba(10, 12, 16, 0.8)', padding: '0.3rem', borderRadius: '9999px', border: '1px solid var(--border-light)', marginBottom: '1.25rem' }}>
                <button
                  type="button"
                  onClick={() => setIsDuo(false)}
                  style={{
                    flex: 1,
                    padding: '0.45rem 0.5rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: !isDuo ? 'rgba(255, 255, 255, 0.12)' : 'transparent',
                    color: !isDuo ? '#fff' : 'var(--text-muted)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <User size={12} />
                  <span>Individual $20</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsDuo(true)}
                  style={{
                    flex: 1.2,
                    padding: '0.45rem 0.6rem',
                    borderRadius: '9999px',
                    border: 'none',
                    fontSize: '11px',
                    fontWeight: '700',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: isDuo ? 'var(--accent)' : 'transparent',
                    color: isDuo ? '#050505' : 'var(--accent)',
                    boxShadow: isDuo ? '0 0 14px var(--accent-glow)' : 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.35rem'
                  }}
                >
                  <Users size={12} />
                  <span>Promo Dúo $15 c/u</span>
                </button>
              </div>

              {/* Dynamic Price Display */}
              <div className="price-display" style={{ marginBottom: '1rem', paddingBottom: '0.75rem' }}>
                {!isDuo ? (
                  <>
                    <span className="price-amount">$20<span style={{ fontSize: '1.5rem', color: 'var(--accent)' }}>.00</span></span>
                    <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ Mes Individual</span>
                  </>
                ) : (
                  <>
                    <span className="price-amount text-yellow">$15<span style={{ fontSize: '1.5rem', color: '#fff' }}>.00</span></span>
                    <span className="text-muted" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: '600' }}>/ Mes Por Persona</span>
                  </>
                )}
              </div>

              {/* Dynamic Promo Callout */}
              <div className="promo-callout" style={{ borderColor: isDuo ? 'var(--accent)' : 'rgba(255, 234, 0, 0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.25rem' }}>
                  <span style={{ fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent)' }}>
                    {isDuo ? '⚡ PROMO DÚO APLICADA' : '★ TIP DE AHORRO UNIVERSITARIO'}
                  </span>
                  <span className="font-mono" style={{ fontSize: '11px', fontWeight: 'bold', background: 'rgba(255, 234, 0, 0.15)', padding: '0.2rem 0.6rem', borderRadius: '9999px', border: '1px solid rgba(255, 234, 0, 0.4)', color: 'var(--accent)' }}>
                    {isDuo ? 'Ahorras $10 al mes' : '$15 c/u con amigo'}
                  </span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--color-light)', lineHeight: '1.45' }}>
                  {isDuo ? (
                    <>¡Inscríbete con tu pareja, amigo de la ULEAM o familiar! <strong>Pagan solo $30 en total por los dos ($15 cada uno)</strong> por 30 días ilimitados.</>
                  ) : (
                    <>¿Vienes con un amigo o pareja? Cambia al botón <strong>"Promo Dúo"</strong> y paguen solo <strong>$15 al mes cada uno</strong> ($30 total).</>
                  )}
                </p>
              </div>

              {/* Benefits List */}
              <ul className="benefits-list">
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span><strong>Acceso ilimitado durante 30 días</strong> (ULEAM y La Proaño)</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Horario 100% libre de lunes a domingo</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Rutina guiada de inducción por entrenadores de piso</span>
                </li>
                <li>
                  <Check size={14} style={{ color: 'var(--primary)', flexShrink: 0 }} />
                  <span>Casilleros para tus pertenencias, duchas y vestidores</span>
                </li>
                <li>
                  <Zap size={14} style={{ color: 'var(--accent)', flexShrink: 0 }} />
                  <span><strong style={{ color: 'var(--accent)' }}>{isDuo ? 'Paga $30 en total por los 2' : 'Solo $0.66 al día'}</strong> • Cero permanencia forzada</span>
                </li>
              </ul>
            </div>

            <div style={{ paddingTop: '1.5rem' }}>
              <a 
                href={isDuo ? duoWhatsappUrl : soloWhatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={`btn ${isDuo ? 'btn-yellow' : 'btn-primary'}`} 
                style={{ width: '100%', fontSize: '0.95rem', fontWeight: 'bold' }}
              >
                <span>{isDuo ? 'Inscribirme con Promo Dúo ($15 c/u) →' : 'Inscribirme al Mes Completo ($20) →'}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Local Habit vs Gym Comparison Bar */}
        <div className="habit-comparison-deck" style={{ margin: '2.5rem 0 1.5rem', padding: '1.25rem 1.75rem', background: 'rgba(22, 24, 30, 0.65)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(255, 234, 0, 0.1)', border: '1px solid rgba(255, 234, 0, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
              <Zap size={20} />
            </div>
            <div>
              <span className="font-mono text-yellow" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 'bold' }}>
                La Mejor Inversión en Manta
              </span>
              <p style={{ fontSize: '13px', color: 'var(--text-main)', marginTop: '0.15rem' }}>
                $1.50 al día cuesta menos que un snack o bebida en la calle, y te da acceso a poleas, jaulas, peso libre y duchas.
              </p>
            </div>
          </div>
          <button 
            onClick={onOpenPassModal}
            className="btn btn-outline"
            style={{ fontSize: '12px', padding: '0.55rem 1.15rem' }}
            type="button"
          >
            Probar 1 Día Gratis Primero →
          </button>
        </div>

        {/* Guarantees Bar */}
        <div className="payment-methods-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
            <ShieldCheck size={18} style={{ color: 'var(--primary)' }} />
            <strong style={{ color: '#FFF' }}>MÉTODOS DE PAGO LOCALES:</strong>
            <span className="text-muted">Transferencia Bancaria (Pichincha, Guayaquil), Deuna, Tarjetas de Débito/Crédito y Efectivo en caja.</span>
          </div>
          <button onClick={onOpenPassModal} style={{ background: 'none', border: 'none', color: 'var(--primary)', cursor: 'pointer', fontWeight: 'bold', textTransform: 'uppercase', textDecoration: 'underline', font: 'inherit', whiteSpace: 'nowrap' }}>
            ¿Aún indeciso? Reclama tu pase de prueba →
          </button>
        </div>

      </div>
    </section>
  );
}
