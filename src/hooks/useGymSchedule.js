import { useState, useEffect } from 'react';
import { getMantaScheduleStatus } from '../utils/mantaSchedule';

export function useGymSchedule(branchId = 'uleam') {
  const [status, setStatus] = useState(() => getMantaScheduleStatus(branchId));

  useEffect(() => {
    setStatus(getMantaScheduleStatus(branchId));

    const timer = setInterval(() => {
      setStatus(getMantaScheduleStatus(branchId));
    }, 60000);

    return () => clearInterval(timer);
  }, [branchId]);

  return status;
}
