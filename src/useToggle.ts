import { useState, useCallback } from 'react'

export function useToggle(initial = false) {
  const [value, setValue] = useState(initial)

  const toggle = useCallback(() => setValue((v) => !v), [])
  const setTrue = useCallback(() => setValue(true), [])
  const setFalse = useCallback(() => setValue(false), [])

  return { value, toggle, setTrue, setFalse, set: setValue }
}
