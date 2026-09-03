import React, { useState } from 'react';

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
    const msg = `¡Hola Master Gym Manta! Mi nombre es ${formData.name}. Acabo de generar mi Pase de Prueba Gratis (${randomCode}) para la Sede ${formData.location}. ¿A qué hora puedo pasar hoy?`;
    
    setTicket({
      id: randomCode,
      name: formData.name,
      location: `Sede ${formData.location}`,
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
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        
        {/* Close Button */}
        <button onClick={handleClose} className="modal-close-btn" type="button" aria-label="Cerrar modal">
          &times;
        </button>

        {!ticket ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.25rem' }}>
              <img
                src="/assets/logo/logo.png"
                alt="Master Gym Rhino Anchor"
                style={{ width: '44px', height: '44px', objectFit: 'contain', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))' }}
              />
              <div>
                <span className="live-badge" style={{ background: 'rgba(255, 0, 127, 0.15)', borderColor: 'rgba(255, 0, 127, 0.4)', color: 'var(--primary)', marginBottom: '0.2rem', padding: '0.25rem 0.75rem', fontSize: '10px', borderRadius: '9999px' }}>
                  Pase de Cortesía 1 Día
                </span>
                <h3 className="font-display text-white" style={{ fontSize: '1.85rem', textTransform: 'uppercase', lineHeight: '1' }}>
                  RECLAMA TU ENTRADA GRATIS
                </h3>
              </div>
            </div>
            <p className="text-muted" style={{ fontSize: '13px', marginBottom: '1.25rem' }}>
              Entrena un día completo sin costo en la sede de tu elección en Manta. Sin compromiso.
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Nombre Completo</label>
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
                <label className="form-label">Número de WhatsApp</label>
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
                <label className="form-label">Selecciona Sede a Visitar</label>
                <div className="radio-group">
                  <label className="radio-card">
                    <input 
                      type="radio" 
                      name="location" 
                      value="ULEAM" 
                      checked={formData.location === 'ULEAM'}
                      onChange={() => setFormData({ ...formData, location: 'ULEAM' })}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#FFF' }}>Sede ULEAM</span>
                  </label>
                  <label className="radio-card">
                    <input 
                      type="radio" 
                      name="location" 
                      value="La Proaño" 
                      checked={formData.location === 'La Proaño'}
                      onChange={() => setFormData({ ...formData, location: 'La Proaño' })}
                    />
                    <span style={{ fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', color: '#FFF' }}>La Proaño</span>
                  </label>
                </div>
              </div>

              <div style={{ paddingTop: '0.75rem' }}>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '0.9rem', fontSize: '1.05rem' }}>
                  Generar Pase Digital Instantáneo →
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <div style={{ width: '56px', height: '56px', backgroundColor: 'rgba(255, 0, 127, 0.15)', border: '2px solid var(--primary)', borderRadius: '50%', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 className="font-display text-white" style={{ fontSize: '2rem', textTransform: 'uppercase' }}>
                ¡PASE GENERADO CON ÉXITO!
              </h3>
              <p className="text-muted" style={{ fontSize: '13px', marginTop: '0.25rem' }}>
                Presenta este código digital en la recepción de tu sede elegida.
              </p>
            </div>

            {/* Voucher Card */}
            <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1.35rem', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span className="text-muted" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Ticket ID:</span>
                <span className="font-mono" style={{ fontWeight: 'bold', letterSpacing: '0.05em', color: 'var(--primary)' }}>{ticket.id}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span className="text-muted" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Beneficiario:</span>
                <strong style={{ color: '#FFF' }}>{ticket.name}</strong>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span className="text-muted" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Sede Asignada:</span>
                <span style={{ fontWeight: 'bold', color: 'var(--accent)' }}>{ticket.location}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px' }}>
                <span className="text-muted" style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>Vigencia:</span>
                <span className="font-mono" style={{ color: '#FFF' }}>48 Horas desde emisión</span>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <a 
                href={ticket.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%', padding: '0.9rem', fontSize: '1rem' }}
              >
                Confirmar Reserva por WhatsApp Ahora →
              </a>
              <button 
                onClick={handleClose} 
                type="button"
                className="text-muted"
                style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '12px', textTransform: 'uppercase', textDecoration: 'underline' }}
              >
                Cerrar Ventana
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
