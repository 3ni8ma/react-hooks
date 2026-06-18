import { useRef, useState, useEffect, type RefObject } from 'react'

interface Options extends IntersectionObserverInit {
  once?: boolean
}

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: Options = {}
): { ref: RefObject<T | null>; isIntersecting: boolean; entry: IntersectionObserverEntry | null } {
  const { once = false, threshold = 0, root = null, rootMargin = '0px' } = options
  const ref = useRef<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
        setEntry(entry)
        if (once && entry.isIntersecting) {
          observer.unobserve(el)
        }
      },
      { threshold, root, rootMargin }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, root, rootMargin, once])

  return { ref, isIntersecting, entry }
}
