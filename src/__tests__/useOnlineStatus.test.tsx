// Updated: 2026-07-15 13:00:17
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useOnlineStatus } from '../useOnlineStatus';

describe('useOnlineStatus', () => {
  it('returns a boolean', () => {
    const { result } = renderHook(() => useOnlineStatus());
    expect(typeof result.current).toBe('boolean');
  });

  it('responds to online events', () => {
    const { result } = renderHook(() => useOnlineStatus());
    act(() => { window.dispatchEvent(new Event('online')); });
    expect(result.current).toBe(true);
  });

  it('responds to offline events', () => {
    const { result } = renderHook(() => useOnlineStatus());
    act(() => { window.dispatchEvent(new Event('offline')); });
    expect(result.current).toBe(false);
  });
});
