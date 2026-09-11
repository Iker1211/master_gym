import { describe, it, expect } from 'vitest';
import { createTicketRecord } from './ticketGenerator';

describe('ticketGenerator utility', () => {
  it('generates a valid ticket record for ULEAM branch', () => {
    const formData = {
      name: 'Carlos Mendoza',
      phone: '0991234567',
      location: 'ULEAM'
    };

    const ticket = createTicketRecord(formData);
    expect(ticket.id).toMatch(/^MG-\d{4}-MTA$/);
    expect(ticket.name).toBe('Carlos Mendoza');
    expect(ticket.phone).toBe('0991234567');
    expect(ticket.targetPhone).toBe('593987654321');
    expect(ticket.locationRaw).toBe('ULEAM');
    expect(ticket.whatsappUrl).toContain('wa.me/593987654321');
  });

  it('generates a valid ticket record for La Proaño branch', () => {
    const formData = {
      name: 'Elena Zambrano',
      phone: '0987654321',
      location: 'La Proaño'
    };

    const ticket = createTicketRecord(formData);
    expect(ticket.id).toMatch(/^MG-\d{4}-MTA$/);
    expect(ticket.name).toBe('Elena Zambrano');
    expect(ticket.targetPhone).toBe('593987654322');
    expect(ticket.locationRaw).toBe('La Proaño');
    expect(ticket.whatsappUrl).toContain('wa.me/593987654322');
  });
});
