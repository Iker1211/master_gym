import React from 'react';
import Button from '../ui/Button';
import Badge from '../ui/Badge';

export default function PassForm({ formData, setFormData, onSubmit }) {
  return (
    <div>
      {/* Form Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
        <img
          src="/assets/logo/logo.png"
          alt="Master Gym Manta Logo"
          style={{ width: '46px', height: '46px', objectFit: 'contain', filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.8))' }}
        />
        <div>
          <Badge variant="live" dot={true} dotColor="pink" style={{ marginBottom: '0.2rem', fontSize: '10px' }}>
            ★ ACCESO DE CORTESÍA • 1 SEMANA COMPLETA (7 DÍAS)
          </Badge>
          <h3 className="font-display text-white" style={{ fontSize: '1.85rem', textTransform: 'uppercase', lineHeight: '1' }}>
            RECLAMA TU PASE VIP
          </h3>
        </div>
      </div>

      <p className="text-muted" style={{ fontSize: '13px', marginBottom: '1rem', lineHeight: '1.5' }}>
        Entrena gratis por <strong>1 semana completa (7 días continuos)</strong> en cualquiera de nuestras 2 sedes en Manta. Acceso total a maquinaria biomecánica, peso libre y duchas.
      </p>

      {/* Guarantees Strip */}
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', background: 'rgba(255, 255, 255, 0.03)', padding: '0.65rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', marginBottom: '1.25rem', fontSize: '11px', color: 'var(--text-main)' }}>
        <span>✓ 7 Días 100% Gratuitos</span>
        <span>•</span>
        <span>✓ Cero tarjeta de crédito</span>
        <span>•</span>
        <span>✓ Sin contrato</span>
      </div>

      <form onSubmit={onSubmit}>
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
            placeholder="Ej. 0991234567" 
            className="form-input"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label className="form-label" style={{ fontSize: '12px' }}>Selecciona la Sede que deseas visitar</label>
          <div className="radio-group" style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem' }}>
            <label 
              className="radio-card" 
              style={{ 
                padding: '0.85rem', 
                cursor: 'pointer', 
                border: formData.location === 'ULEAM' ? '1px solid var(--accent)' : '1px solid var(--border-light)', 
                background: formData.location === 'ULEAM' ? 'rgba(255, 234, 0, 0.08)' : 'transparent',
                borderRadius: 'var(--radius-md)' 
              }}
            >
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

            <label 
              className="radio-card" 
              style={{ 
                padding: '0.85rem', 
                cursor: 'pointer', 
                border: formData.location === 'La Proaño' ? '1px solid var(--primary)' : '1px solid var(--border-light)', 
                background: formData.location === 'La Proaño' ? 'rgba(255, 0, 127, 0.08)' : 'transparent',
                borderRadius: 'var(--radius-md)' 
              }}
            >
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
          <Button type="submit" variant="primary" fullWidth size="lg">
            Generar Mi Pase VIP de 1 Semana →
          </Button>
        </div>
      </form>
    </div>
  );
}
