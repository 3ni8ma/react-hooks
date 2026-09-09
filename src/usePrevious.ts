// Update: 2026-09-09 13:00:18
import { useRef, useEffect } from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(undefined);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}
