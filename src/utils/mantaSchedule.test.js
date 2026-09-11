import { describe, it, expect } from 'vitest';
import { getMantaScheduleStatus } from './mantaSchedule';

describe('mantaSchedule utility', () => {
  it('returns valid status structure for ULEAM', () => {
    const status = getMantaScheduleStatus('uleam');
    expect(status).toHaveProperty('isOpen');
    expect(typeof status.isOpen).toBe('boolean');
    expect(status).toHaveProperty('openStr');
    expect(status).toHaveProperty('closeStr');
    expect(status).toHaveProperty('badgeText');
    expect(status).toHaveProperty('currentMantaTime');
  });

  it('returns valid status structure for La Proaño', () => {
    const status = getMantaScheduleStatus('proano');
    expect(status).toHaveProperty('isOpen');
    expect(typeof status.isOpen).toBe('boolean');
    expect(status.openStr).toBeTruthy();
    expect(status.closeStr).toBeTruthy();
  });
});
