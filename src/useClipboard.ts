import { useState, useCallback } from 'react'

export function useClipboard(resetAfter = 2000) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setError(null)
      if (resetAfter > 0) {
        setTimeout(() => setCopied(false), resetAfter)
      }
    } catch (err) {
      setError(err instanceof Error ? err : new Error('Failed to copy'))
      setCopied(false)
    }
  }, [resetAfter])

  return { copy, copied, error, reset: () => setCopied(false) }
}
