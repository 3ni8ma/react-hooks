import { useEffect } from 'react'

export function useDocumentTitle(title: string, preserveOnUnmount?: boolean) {
  useEffect(() => {
    const previous = document.title
    document.title = title
    return () => {
      if (!preserveOnUnmount) {
        document.title = previous
      }
    }
  }, [title, preserveOnUnmount])
}
