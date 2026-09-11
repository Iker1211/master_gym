import html2canvas from 'html2canvas';

export function createTicketRecord(formData) {
  const randomCode = 'MG-' + Math.floor(1000 + Math.random() * 9000) + '-MTA';
  const targetPhone = formData.location === 'ULEAM' ? '593987654321' : '593987654322';
  const locationName = formData.location === 'ULEAM' 
    ? 'Sede ULEAM (2da Entrada)' 
    : 'Sede La Proaño (Mega Complejo)';
  
  const now = new Date();
  const issuedDate = now.toLocaleDateString('es-EC', { day: 'numeric', month: 'short', year: 'numeric' });
  const issuedTime = now.toLocaleTimeString('es-EC', { hour: '2-digit', minute: '2-digit' });
  
  const expDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
  const expiresFormatted = expDate.toLocaleDateString('es-EC', { day: 'numeric', month: 'short', year: 'numeric' });

  const rawMsg = `¡Hola Master Gym Manta! Mi nombre es ${formData.name}. Acabo de generar mi Pase VIP de 1 Semana Gratis (Ticket: ${randomCode}) para la ${locationName}. Adjunto mi ticket digital. Deseo comenzar mi semana de prueba, ¿en qué horario puedo acercarme a recepción para activar mi pase?`;

  return {
    id: randomCode,
    name: formData.name.trim(),
    phone: formData.phone.trim(),
    location: locationName,
    locationRaw: formData.location,
    issuedDate,
    issuedTime,
    expiresFormatted,
    targetPhone,
    rawMsg,
    whatsappUrl: `https://wa.me/${targetPhone}?text=${encodeURIComponent(rawMsg)}`
  };
}

export function renderFallbackCanvas(ticket) {
  const canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 1040;
  const ctx = canvas.getContext('2d');
  if (!ctx) return null;

  const isUleam = ticket?.locationRaw === 'ULEAM';
  const accentColor = isUleam ? '#FFEA00' : '#FF007F';

  // Background
  const bgGrad = ctx.createLinearGradient(0, 0, 800, 1040);
  bgGrad.addColorStop(0, '#16181F');
  bgGrad.addColorStop(1, '#0D0F13');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 800, 1040);

  // Border
  ctx.lineWidth = 4;
  ctx.strokeStyle = '#2A2E39';
  ctx.strokeRect(10, 10, 780, 1020);

  // Neon Accent Top
  ctx.fillStyle = accentColor;
  ctx.fillRect(10, 10, 780, 12);

  // Brand Title
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 38px sans-serif';
  ctx.fillText('MASTER GYM MANTA', 50, 90);

  ctx.fillStyle = '#8E94A0';
  ctx.font = '16px monospace';
  ctx.fillText('EL HIERRO REAL DE MANTA • ECUADOR', 50, 120);

  // VIP Badge
  ctx.fillStyle = accentColor;
  ctx.font = 'bold 20px monospace';
  ctx.textAlign = 'right';
  ctx.fillText(`FOLIO: ${ticket?.id || 'MG-0000-MTA'}`, 750, 90);
  ctx.font = '15px sans-serif';
  ctx.fillStyle = '#E2E8F0';
  ctx.fillText('PASE VIP 1 SEMANA', 750, 120);
  ctx.textAlign = 'left';

  // Dashed divider
  ctx.setLineDash([8, 6]);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.beginPath();
  ctx.moveTo(50, 150);
  ctx.lineTo(750, 150);
  ctx.stroke();
  ctx.setLineDash([]);

  // Big 7-Day Access Banner
  ctx.fillStyle = isUleam ? 'rgba(255, 234, 0, 0.12)' : 'rgba(255, 0, 127, 0.12)';
  ctx.fillRect(50, 175, 700, 70);
  ctx.strokeStyle = accentColor;
  ctx.lineWidth = 1.5;
  ctx.strokeRect(50, 175, 700, 70);

  ctx.fillStyle = accentColor;
  ctx.font = 'bold 24px sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('★ ACCESO TOTAL DE CORTESÍA • 7 DÍAS CONSECUTIVOS ★', 400, 218);
  ctx.textAlign = 'left';

  // Details Grid
  const drawField = (label, val, x, y, isHighlight = false) => {
    ctx.fillStyle = '#8E94A0';
    ctx.font = '15px sans-serif';
    ctx.fillText(label.toUpperCase(), x, y);

    ctx.fillStyle = isHighlight ? accentColor : '#FFFFFF';
    ctx.font = isHighlight ? 'bold 24px sans-serif' : '22px sans-serif';
    ctx.fillText(val, x, y + 32);
  };

  drawField('Atleta Invitado:', ticket?.name || '', 50, 290);
  drawField('WhatsApp Registrado:', ticket?.phone || '', 440, 290);
  drawField('Sede Asignada:', ticket?.location || '', 50, 390, true);
  drawField('Fecha de Emisión:', `${ticket?.issuedDate} (${ticket?.issuedTime})`, 440, 390);

  // Guaranteed Benefits Box
  ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
  ctx.fillRect(50, 480, 700, 190);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
  ctx.strokeRect(50, 480, 700, 190);

  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 18px sans-serif';
  ctx.fillText('BENEFICIOS INCLUIDOS EN TU PASE VIP:', 80, 520);

  ctx.font = '16px sans-serif';
  ctx.fillStyle = '#E2E8F0';
  ctx.fillText('✓ Acceso ilimitado por 1 semana completa (7 días continuos)', 80, 560);
  ctx.fillText('✓ Uso de toda la maquinaria biomecánica, jaulas y peso libre', 80, 600);
  ctx.fillText('✓ Vestidores, casilleros seguros y duchas con agua caliente', 80, 640);

  // Reception note
  ctx.fillStyle = accentColor;
  ctx.font = 'bold 17px sans-serif';
  ctx.fillText('IMPORTANTE: Presenta este ticket digital en recepción para ingresar.', 50, 720);

  // Barcode Simulation
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
  ctx.beginPath();
  ctx.moveTo(50, 760);
  ctx.lineTo(750, 760);
  ctx.stroke();

  const barHeights = [40, 70, 50, 80, 45, 75, 55, 65, 35, 80, 60, 45, 70, 50, 40, 75, 60, 50, 75, 45, 65, 80, 50, 70, 40];
  let startX = 50;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
  for (let i = 0; i < barHeights.length; i++) {
    ctx.fillRect(startX, 810 - (barHeights[i] / 2), 6, barHeights[i]);
    startX += 14;
  }

  ctx.font = 'bold 15px monospace';
  ctx.fillStyle = '#8E94A0';
  ctx.fillText('DIGITALLY AUTHENTICATED • MASTER GYM VIP PASS', 420, 810);
  ctx.font = '13px monospace';
  ctx.fillText('MANTA, ECUADOR • WWW.MASTERGYMMANTA.COM', 420, 835);

  return canvas;
}

export async function generateTicketCanvas(ticketRef, ticket) {
  if (!ticketRef?.current) return renderFallbackCanvas(ticket);

  try {
    const imgs = ticketRef.current.querySelectorAll('img');
    await Promise.all(
      Array.from(imgs).map((img) => {
        if (img.complete) return Promise.resolve();
        return new Promise((res) => {
          img.onload = res;
          img.onerror = res;
        });
      })
    );

    return await html2canvas(ticketRef.current, {
      scale: 2.5,
      backgroundColor: '#12141A',
      useCORS: true,
      allowTaint: true,
      logging: false,
      windowWidth: 600
    });
  } catch (err) {
    console.warn('html2canvas error, using native fallback:', err);
    return renderFallbackCanvas(ticket);
  }
}
