// Updated: 2026-07-08 01:30:30
import { renderHook, act } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useToggle } from '../useToggle';

describe('useToggle', () => {
  it('starts with default value (false)', () => {
    const { result } = renderHook(() => useToggle());
    expect(result.current.value).toBe(false);
  });

  it('starts with provided initial value', () => {
    const { result } = renderHook(() => useToggle(true));
    expect(result.current.value).toBe(true);
  });

  it('toggles the value', () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.toggle());
    expect(result.current.value).toBe(true);
    act(() => result.current.toggle());
    expect(result.current.value).toBe(false);
  });

  it('sets value to true', () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.setTrue());
    expect(result.current.value).toBe(true);
  });

  it('sets value to false', () => {
    const { result } = renderHook(() => useToggle(true));
    act(() => result.current.setFalse());
    expect(result.current.value).toBe(false);
  });

  it('sets a specific value', () => {
    const { result } = renderHook(() => useToggle());
    act(() => result.current.set(true));
    expect(result.current.value).toBe(true);
    act(() => result.current.set(false));
    expect(result.current.value).toBe(false);
  });
});
