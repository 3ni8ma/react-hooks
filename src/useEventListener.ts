// Update: 2026-07-10 19:30:38
import { useEffect, useRef } from 'react';

type EventMap = WindowEventMap & HTMLElementEventMap & DocumentEventMap;

export function useEventListener<K extends keyof EventMap>(
  eventName: K,
  handler: (event: EventMap[K]) => void,
  element?: EventTarget | null,
  options?: boolean | AddEventListenerOptions,
): void {
  const savedHandler = useRef(handler);
  savedHandler.current = handler;

  useEffect(() => {
    const target = element ?? window;
    if (!target?.addEventListener) return;
    const listener = (event: Event) => savedHandler.current(event as EventMap[K]);
    target.addEventListener(eventName as string, listener, options);
    return () => target.removeEventListener(eventName as string, listener, options);
  }, [eventName, element, options]);
}
