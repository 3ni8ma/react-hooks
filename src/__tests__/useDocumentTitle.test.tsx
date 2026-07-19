// Updated: 2026-07-19 19:00:11
import { renderHook } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { useDocumentTitle } from '../useDocumentTitle';

describe('useDocumentTitle', () => {
  it('sets the document title', () => {
    renderHook(() => useDocumentTitle('Test Title'));
    expect(document.title).toBe('Test Title');
  });

  it('restores previous title on unmount', () => {
    document.title = 'Original';
    const { unmount } = renderHook(() => useDocumentTitle('Temporary'));
    expect(document.title).toBe('Temporary');
    unmount();
    expect(document.title).toBe('Original');
  });

  it('does not restore when preserveOnUnmount is true', () => {
    document.title = 'Original';
    const { unmount } = renderHook(() => useDocumentTitle('Temporary', true));
    expect(document.title).toBe('Temporary');
    unmount();
    expect(document.title).toBe('Temporary');
  });
});
