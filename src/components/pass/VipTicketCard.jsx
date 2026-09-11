import React from 'react';
import { Sparkles } from 'lucide-react';
import RhinoSvgSilhouette from '../RhinoSvgSilhouette';

export default function VipTicketCard({ ticket, ticketRef }) {
  if (!ticket) return null;

  const isUleam = ticket.locationRaw === 'ULEAM';
  const brandColor = isUleam ? '#FFEA00' : '#FF007F';

  return (
    <div 
      ref={ticketRef} 
      className="vip-pass-card" 
      style={{ 
        background: 'linear-gradient(145deg, #181B22 0%, #0F1115 100%)', 
        border: '1px solid rgba(255, 255, 255, 0.14)', 
        borderRadius: '16px', 
        padding: '1.4rem', 
        textAlign: 'left', 
        position: 'relative', 
        overflow: 'hidden', 
        boxShadow: '0 18px 40px -10px rgba(0,0,0,0.8), 0 0 24px rgba(255, 0, 127, 0.15)', 
        marginBottom: '1rem',
        color: '#FFFFFF'
      }}
    >
      {/* Decorative Vector Watermark */}
      <div 
        style={{ 
          position: 'absolute', 
          right: '-20px', 
          bottom: '-20px', 
          width: '180px', 
          height: '180px', 
          opacity: 0.08, 
          pointerEvents: 'none' 
        }}
        aria-hidden="true"
      >
        <RhinoSvgSilhouette />
      </div>
      
      {/* Neon decorative top stripe */}
      <div 
        style={{ 
          position: 'absolute', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '4px', 
          background: brandColor 
        }}
      />

      {/* Ticket Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px dashed rgba(255,255,255,0.18)', paddingBottom: '0.75rem', marginBottom: '0.85rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          <img 
            src="/assets/logo/logo.png" 
            crossOrigin="anonymous"
            alt="Logo Master Gym" 
            style={{ width: '32px', height: '32px', objectFit: 'contain' }} 
          />
          <div>
            <span className="font-display text-white" style={{ fontSize: '1.25rem', letterSpacing: '0.05em', display: 'block', lineHeight: '1.1' }}>
              MASTER GYM
            </span>
            <span className="font-mono" style={{ fontSize: '9px', display: 'block', color: 'var(--text-muted)' }}>
              MANTA • ECUADOR
            </span>
          </div>
        </div>

        <div style={{ textAlign: 'right' }}>
          <span 
            style={{ 
              display: 'inline-block',
              fontSize: '10px', 
              fontFamily: 'monospace',
              fontWeight: 'bold',
              color: brandColor, 
              letterSpacing: '0.05em',
              padding: '2px 6px',
              borderRadius: '4px',
              background: isUleam ? 'rgba(255, 234, 0, 0.12)' : 'rgba(255, 0, 127, 0.12)',
              border: `1px solid ${brandColor}40`,
              marginBottom: '2px'
            }}
          >
            ★ PASE VIP 1 SEMANA
          </span>
          <span className="font-mono" style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--text-main)', display: 'block', letterSpacing: '0.05em' }}>
            {ticket.id}
          </span>
        </div>
      </div>

      {/* High-Impact 7-Day Access Banner */}
      <div 
        style={{ 
          background: isUleam ? 'rgba(255, 234, 0, 0.08)' : 'rgba(255, 0, 127, 0.08)',
          border: `1px solid ${brandColor}40`,
          borderRadius: '8px',
          padding: '6px 10px',
          marginBottom: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}
      >
        <Sparkles size={13} style={{ color: brandColor }} />
        <span 
          style={{ 
            fontSize: '11px', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            letterSpacing: '0.06em', 
            color: brandColor 
          }}
        >
          7 DÍAS CONSECUTIVOS DE ENTRENAMIENTO LIBRE
        </span>
      </div>

      {/* Pass Details Matrix */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.75rem', marginBottom: '0.85rem', fontSize: '12px' }}>
        <div>
          <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Atleta Invitado:
          </span>
          <strong style={{ color: '#FFFFFF', fontSize: '13px' }}>{ticket.name}</strong>
        </div>
        <div>
          <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            WhatsApp:
          </span>
          <span className="font-mono" style={{ color: '#FFFFFF', fontSize: '12px' }}>{ticket.phone}</span>
        </div>
        <div>
          <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Sede Asignada:
          </span>
          <strong style={{ color: brandColor, fontSize: '12.5px' }}>
            {ticket.location}
          </strong>
        </div>
        <div>
          <span style={{ display: 'block', fontSize: '10px', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            Hora Emisión:
          </span>
          <span className="font-mono" style={{ color: 'var(--text-secondary)', fontSize: '11px' }}>
            {ticket.issuedDate} ({ticket.issuedTime})
          </span>
        </div>

        {/* VIP Perks Strip */}
        <div style={{ gridColumn: 'span 2', background: 'rgba(255, 255, 255, 0.04)', padding: '0.6rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.08)' }}>
          <div style={{ fontSize: '11px', color: '#F1F5F9', lineHeight: '1.4' }}>
            ✓ <strong>Pase de 1 semana (7 días):</strong> Válido desde tu primer día en recepción con tu cédula.
          </div>
          <div style={{ fontSize: '10.5px', color: 'var(--text-muted)', marginTop: '3px' }}>
            ✓ Acceso total a maquinaria biomecánica, peso libre y duchas.
          </div>
        </div>
      </div>

      {/* Barcode / Authentication Footer */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px dashed rgba(255,255,255,0.14)', paddingTop: '0.65rem' }}>
        <div style={{ display: 'flex', gap: '3px', alignItems: 'center' }}>
          {[14, 26, 18, 30, 16, 28, 18, 24, 12, 30, 22, 16, 26, 20, 14, 28, 22, 16, 24, 18].map((h, i) => (
            <div key={i} style={{ width: '2px', height: `${h}px`, background: 'rgba(255,255,255,0.35)', borderRadius: '1px' }}></div>
          ))}
        </div>
        <span className="font-mono" style={{ fontSize: '9px', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
          DIGITALLY AUTHENTICATED ACCESS
        </span>
      </div>
    </div>
  );
}
