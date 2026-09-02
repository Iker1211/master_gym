import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    id: 1,
    question: '¿Cómo solicito el Pase de Prueba Gratuito de 1 día?',
    answer: 'Solo debes hacer clic en el botón "Pase Gratis", ingresar tu nombre, número de WhatsApp y elegir la sede que deseas visitar (ULEAM o La Proaño). Recibirás tu pase digital de inmediato y podrás presentarlo en recepción con tu cédula de identidad.'
  },
  {
    id: 2,
    question: '¿Cuentan con parqueadero privado y seguro en ambas sedes?',
    answer: 'Sí. La Sede La Proaño cuenta con un parqueadero cerrado con capacidad para más de 40 vehículos con guardia de seguridad permanente. La Sede ULEAM dispone de bahía de estacionamiento frontal y convenios en zonas contiguas señalizadas.'
  },
  {
    id: 3,
    question: '¿Existen contratos de permanencia forzosa o penalizaciones?',
    answer: 'No. En MASTER GYM pagas mes a mes sin cláusulas de permanencia ni cobros automáticos ocultos en tu tarjeta. Si deseas pausar por viaje o estudio, puedes congelar tu membresía sin costo adicional avisando con 48 horas de anticipación.'
  },
  {
    id: 4,
    question: '¿Cómo funciona la promoción de acompañante ($15 cada uno al mes)?',
    answer: 'Si te inscribes para el mes completo junto con un acompañante (amigo, pareja o familiar), la tarifa mensual baja de $20 a $15 cada uno (pagando un total de $30 por los dos). Ambos obtienen acceso ilimitado a todas las instalaciones sin contratos de permanencia obligatoria.'
  },
  {
    id: 5,
    question: '¿Cuáles son los métodos de pago disponibles?',
    answer: 'Aceptamos transferencias bancarias directas (Banco Pichincha, Banco Guayaquil, Produbanco), pagos instantáneos con Deuna, tarjetas de crédito/débito nacionales e internacionales (Visa, Mastercard) y efectivo directo en caja.'
  }
];

export default function Faq() {
  const [openId, setOpenId] = useState(null);

  const toggleFaq = (id) => {
    setOpenId(prev => prev === id ? null : id);
  };

  return (
    <section id="faq" className="section">
      <div className="container">
        
        <div className="faq-grid">
          
          {/* Left Column: Social Proof & Heading */}
          <div>
            <div className="section-tag">
              <span>// 04 — Testimonios Reales</span>
            </div>
            <h2 className="section-title">
              LO QUE DICE NUESTRA <span className="text-neon">COMUNIDAD.</span>
            </h2>
            <p className="section-desc" style={{ marginBottom: '2rem' }}>
              Más de 850 atletas, estudiantes universitarios y familias entrenan semanalmente en nuestras dos sedes de Manta.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ background: 'var(--color-dark)', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(244, 244, 246, 0.85)', lineHeight: '1.6' }}>
                  "La cercanía a la facultad de la ULEAM es inmejorable. Salgo de clases y entreno sin perder tiempo. Las máquinas de peso libre y las barras olímpicas están a otro nivel."
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '11px' }}>
                  <strong style={{ color: '#FFF' }}>Mateo Cevallos</strong>
                  <span className="font-mono text-neon">Estudiante Medicina ULEAM</span>
                </div>
              </div>

              <div style={{ background: 'var(--color-dark)', padding: '1.25rem', border: '1px solid var(--color-border)' }}>
                <p style={{ fontSize: '13px', fontStyle: 'italic', color: 'rgba(244, 244, 246, 0.85)', lineHeight: '1.6' }}>
                  "El parqueo privado en la sede de La Proaño da una tranquilidad total. No hay aglomeraciones para usar las máquinas y el aire acondicionado siempre está al 100%."
                </p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.75rem', fontSize: '11px' }}>
                  <strong style={{ color: '#FFF' }}>Dra. Gabriela Delgado</strong>
                  <span className="font-mono text-neon">Socia Sede La Proaño</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: FAQ Accordion */}
          <div>
            <h3 className="font-display text-white" style={{ fontSize: '2.5rem', textTransform: 'uppercase', marginBottom: '1.5rem' }}>
              PREGUNTAS FRECUENTES
            </h3>

            {FAQ_ITEMS.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div key={item.id} className="faq-item">
                  <button 
                    type="button" 
                    className="faq-btn"
                    onClick={() => toggleFaq(item.id)}
                    aria-expanded={isOpen}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon">{isOpen ? '×' : '+'}</span>
                  </button>
                  <div 
                    className="faq-content"
                    style={{
                      maxHeight: isOpen ? '250px' : '0px',
                      paddingBottom: isOpen ? '1.25rem' : '0px',
                      opacity: isOpen ? 1 : 0
                    }}
                  >
                    <p style={{ borderTop: '1px solid rgba(36, 36, 48, 0.6)', paddingTop: '0.75rem' }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
