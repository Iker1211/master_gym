import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, QrCode, Sparkles, Send, X, Dumbbell, MapPin } from 'lucide-react';

export default function PassModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'ULEAM'
  });
  const [ticket, setTicket] = useState(null);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomCode = 'MG-' + Math.floor(1000 + Math.random() * 9000) + '-MTA';
    const targetPhone = formData.location === 'ULEAM' ? '593987654321' : '593987654322';
    const locationName = formData.location === 'ULEAM' ? 'Sede ULEAM (2da Entrada)' : 'Sede La Proaño (Mega Complejo)';
    const msg = `¡Hola Master Gym Manta! Mi nombre es ${formData.name}. Acabo de generar mi Pase VIP de Prueba Gratuita (Ticket: ${randomCode}) para la ${locationName}. Deseo pasar a entrenar hoy, ¿a qué hora puedo acercarme a recepción?`;
    
    setTicket({
      id: randomCode,
      name: formData.name,
      phone: formData.phone,
      location: locationName,
      locationRaw: formData.location,
      issuedAt: new Date().toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' }),
      whatsappUrl: `https://wa.me/${targetPhone}?text=${encodeURIComponent(msg)}`
    });
  };

  const handleClose = () => {
    setTicket(null);
    setFormData({ name: '', phone: '', location: 'ULEAM' });
    onClose();
  };

  return (
    <div className={`modal-overlay ${isOpen ? 'open' : ''}`} onClick={handleClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px', borderRadius: 'var(--radius-xl)' }}>
        
        {/* Close Button */}
        <button onClick={handleClose} className="modal-close-btn" type="button" aria-label="Cerrar modal">
          <X size={20} />
        </button>

        {!ticket ? (
          <div>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
              <img
                src="/assets/logo/logo.png"
                alt="Master Gym Manta Logo"
                style={{ width: '46px', height: '46px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}
              />
              <div>
                <span className="live-badge" style={{ background: 'rgba(255, 0, 127, 0.15)', borderColor: 'rgba(255, 0, 127, 0.4)', color: 'var(--primary)', marginBottom: '0.2rem', padding: '0.2rem 0.65rem', fontSize: '10px', borderRadius: '9999px' }}>
                  ★ ACCESO DE CORTESÍA • 1 DÍA COMPLETO
                </span>
                <h3 className="font-display text-white" style={{ fontSize: '1.95rem', textTransform: 'uppercase', lineHeight: '1' }}>
                  RECLAMA TU PASE VIP
                </h3>
              </div>
            </div>

            <p className="text-muted" style={{ fontSize: '13px', marginBottom: '1rem', lineHeight: '1.5' }}>
              Entrena gratis por 1 día completo en cualquiera de nuestras 2 sedes en Manta. Acceso total a maquinaria clásica multifuncional, peso libre y duchas.
            </p>

            {/* Quick Guarantees Strip */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', background: 'rgba(255, 255, 255, 0.03)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.25rem', fontSize: '11px', color: 'var(--text-main)' }}>
              <span>✓ 100% Gratuito</span>
              <span>•</span>
              <span>✓ Cero tarjeta de crédito</span>
              <span>•</span>
              <span>✓ Sin contrato</span>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px' }}>Nombre y Apellido</label>
                <input 
                  type="text" 
                  required 
                  placeholder="Ej. Carlos Mendoza" 
                  className="form-input"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px' }}>Número de WhatsApp</label>
                <input 
                  type="tel" 
                  required 
                  placeholder="Ej. 099 123 4567" 
                  className="form-input"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label" style={{ fontSize: '12px' }}>Selecciona la Sede que deseas visitar</label>
                <div className="radio-group" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
                  <label className="radio-card" style={{ padding: '0.85rem', cursor: 'pointer', border: formData.location === 'ULEAM' ? '1px solid var(--accent)' : '1px solid var(--border-light)', background: formData.location === 'ULEAM' ? 'rgba(255, 234, 0, 0.08)' : 'transparent' }}>
                    <input 
                      type="radio" 
                      name="location" 
                      value="ULEAM" 
                      checked={formData.location === 'ULEAM'}
                      onChange={() => setFormData({ ...formData, location: 'ULEAM' })}
                      style={{ marginRight: '0.4rem' }}
                    />
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: formData.location === 'ULEAM' ? 'var(--accent)' : '#FFF' }}>
                        Sede ULEAM
                      </span>
                      <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)' }}>Frente 2da Entrada</span>
                    </div>
                  </label>

                  <label className="radio-card" style={{ padding: '0.85rem', cursor: 'pointer', border: formData.location === 'La Proaño' ? '1px solid var(--primary)' : '1px solid var(--border-light)', background: formData.location === 'La Proaño' ? 'rgba(255, 0, 127, 0.08)' : 'transparent' }}>
                    <input 
                      type="radio" 
                      name="location" 
                      value="La Proaño" 
                      checked={formData.location === 'La Proaño'}
                      onChange={() => setFormData({ ...formData, location: 'La Proaño' })}
                      style={{ marginRight: '0.4rem' }}
                    />
                    <div>
                      <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: formData.location === 'La Proaño' ? 'var(--primary)' : '#FFF' }}>
                        Sede La Proaño
                      </span>
                      <span style={{ display: 'block', fontSize: '10px', color: 'var(--text-muted)' }}>1,200m² • Zona Funcional</span>
                    </div>
                  </label>
                </div>
              </div>

              <div style={{ paddingTop: '0.5rem' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', fontWeight: 'bold' }}>
                  Generar Mi Pase Digital VIP →
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* ================= VIP ATHLETE BOARDING PASS ================= */
          <div style={{ textAlign: 'center' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
              <Sparkles size={16} style={{ color: 'var(--accent)' }} />
              <span className="font-mono text-yellow" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 'bold' }}>
                PASE DIGITAL EMITIDO EXITOSAMENTE
              </span>
            </div>

            {/* Boarding Pass / Ticket Card */}
            <div className="vip-pass-card" style={{ background: 'linear-gradient(145deg, #16181E 0%, #101216 100%)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.5rem', textAlign: 'left', position: 'relative', overflow: 'hidden', boxShadow: '0 18px 40px -10px rgba(0,0,0,0.8), 0 0 24px rgba(255, 0, 127, 0.15)', marginBottom: '1.25rem' }}>
              
              {/* Neon decorative stripe */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: formData.location === 'ULEAM' ? 'var(--accent)' : 'var(--primary)' }}></div>

              {/* Ticket Top Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.15)', paddingBottom: '0.85rem', marginBottom: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <img src="/assets/logo/logo.png" alt="Logo" style={{ width: '28px', height: '28px', objectFit: 'contain' }} />
                  <div>
                    <span className="font-display text-white" style={{ fontSize: '1.2rem', letterSpacing: '0.05em' }}>MASTER GYM</span>
                    <span className="font-mono" style={{ fontSize: '9px', display: 'block', color: 'var(--text-muted)' }}>MANTA • ECUADOR</span>
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <span className="font-mono" style={{ fontSize: '10px', color: 'var(--text-muted)', display: 'block' }}>FOLIO ID</span>
                  <span className="font-mono" style={{ fontSize: '13px', fontWeight: 'bold', color: formData.location === 'ULEAM' ? 'var(--accent)' : 'var(--primary)', letterSpacing: '0.05em' }}>
                    {ticket.id}
                  </span>
                </div>
              </div>

              {/* Pass Details Matrix */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem', marginBottom: '1rem', fontSize: '12px' }}>
                <div>
                  <span className="text-muted" style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Atleta Invitado:</span>
                  <strong style={{ color: '#fff', fontSize: '13px' }}>{ticket.name}</strong>
                </div>
                <div>
                  <span className="text-muted" style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Hora Emisión:</span>
                  <span className="font-mono" style={{ color: '#fff' }}>{ticket.issuedAt} (Hoy)</span>
                </div>
                <div style={{ gridColumn: 'span 2' }}>
                  <span className="text-muted" style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase' }}>Sede Asignada:</span>
                  <strong style={{ color: formData.location === 'ULEAM' ? 'var(--accent)' : 'var(--primary)', fontSize: '13px' }}>
                    {ticket.location}
                  </strong>
                </div>
                <div style={{ gridColumn: 'span 2', background: 'rgba(255, 255, 255, 0.04)', padding: '0.5rem 0.75rem', borderRadius: 'var(--radius-xs)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <span style={{ fontSize: '11px', color: 'rgba(244, 244, 246, 0.9)' }}>
                    ✓ Válido por <strong>48 horas</strong> • Presenta este código en recepción con tu cédula.
                  </span>
                </div>
              </div>

              {/* Barcode / Ticket Footer aesthetic */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed rgba(255,255,255,0.12)', paddingTop: '0.75rem' }}>
                <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }}>
                  {[12, 24, 18, 28, 14, 26, 16, 22, 10, 28, 20, 14, 24, 18, 12, 26, 20].map((h, i) => (
                    <div key={i} style={{ width: '2px', height: `${h}px`, background: 'rgba(255,255,255,0.35)', borderRadius: '1px' }}></div>
                  ))}
                </div>
                <span className="font-mono text-muted" style={{ fontSize: '9px', letterSpacing: '0.1em' }}>
                  AUTHENTICATED ACCESS
                </span>
              </div>

            </div>

            {/* Direct 1-Tap WhatsApp Conversion Action */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              <a 
                href={ticket.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.95rem', fontSize: '1rem', fontWeight: 'bold' }}
              >
                <Send size={16} />
                <span>Confirmar y Notificar por WhatsApp →</span>
              </a>
              <button 
                onClick={handleClose} 
                type="button"
                className="text-muted"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '11px', textTransform: 'uppercase', textDecoration: 'underline', padding: '0.4rem' }}
              >
                Cerrar Ventana (Pase Guardado)
              </button>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
