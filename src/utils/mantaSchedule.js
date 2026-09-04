/**
 * Utilitario de Horarios en Tiempo Real para Master Gym Manta
 * Zona Horaria: America/Guayaquil (UTC-5, Ecuador)
 */

export function getMantaScheduleStatus(branchId = 'uleam') {
  try {
    const now = new Date();
    // Calcular hora exacta en UTC-5 (Ecuador)
    const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
    const mantaTime = new Date(utc + (3600000 * -5));

    const day = mantaTime.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const hours = mantaTime.getHours();
    const minutes = mantaTime.getMinutes();
    const currentMinutes = hours * 60 + minutes;

    let openMinutes, closeMinutes, openStr, closeStr;

    if (day >= 1 && day <= 5) {
      // Lunes a Viernes
      openMinutes = 5 * 60 + 30; // 05:30
      closeMinutes = 22 * 60 + 30; // 22:30
      openStr = '05:30';
      closeStr = '22:30';
    } else if (day === 6) {
      // Sábados
      if (branchId === 'proano') {
        openMinutes = 6 * 60 + 30; // 06:30
        openStr = '06:30';
      } else {
        openMinutes = 7 * 60; // 07:00
        openStr = '07:00';
      }
      closeMinutes = 19 * 60; // 19:00
      closeStr = '19:00';
    } else {
      // Domingos
      openMinutes = 8 * 60; // 08:00
      closeMinutes = 14 * 60; // 14:00
      openStr = '08:00';
      closeStr = '14:00';
    }

    const isOpen = currentMinutes >= openMinutes && currentMinutes < closeMinutes;

    return {
      isOpen,
      openStr,
      closeStr,
      badgeText: isOpen ? 'Abierto Ahora' : 'Cerrado Ahora',
      statusDetail: isOpen 
        ? `Cierra hoy a las ${closeStr}` 
        : `Abre a las ${openStr}`,
      currentMantaTime: `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`
    };
  } catch (err) {
    // Fallback seguro
    return {
      isOpen: true,
      openStr: '05:30',
      closeStr: '22:30',
      badgeText: 'Abierto Ahora',
      statusDetail: 'Horario continuado',
      currentMantaTime: '06:00'
    };
  }
}
