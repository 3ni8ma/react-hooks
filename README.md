# @3ni8ma/react-hooks

A collection of production-ready React hooks for common UI patterns.

## Installation

```bash
npm install @3ni8ma/react-hooks
```

## Hooks

### `useMediaQuery`

Reactive media query matching.

```tsx
import { useMediaQuery } from '@3ni8ma/react-hooks'

function Component() {
  const isMobile = useMediaQuery('(max-width: 768px)')
  const isDark = useMediaQuery('(prefers-color-scheme: dark)')
  return <div>{isMobile ? 'Mobile' : 'Desktop'}</div>
}
```

### `useClipboard`

Copy text to clipboard with feedback state.

```tsx
import { useClipboard } from '@3ni8ma/react-hooks'

function CopyButton({ text }) {
  const { copy, copied } = useClipboard()
  return <button onClick={() => copy(text)}>{copied ? 'Copied!' : 'Copy'}</button>
}
```

### `useDebounce`

Debounce a rapidly changing value.

```tsx
import { useDebounce } from '@3ni8ma/react-hooks'

function Search() {
  const [query, setQuery] = useState('')
  const debouncedQuery = useDebounce(query, 300)
  // debouncedQuery updates 300ms after last change
}
```

### `useLocalStorage`

Persist state to localStorage with type safety.

```tsx
import { useLocalStorage } from '@3ni8ma/react-hooks'

function Settings() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')
  return <select value={theme} onChange={e => setTheme(e.target.value)} />
}
```

### `useIntersectionObserver`

Observe element visibility for lazy loading or animations.

```tsx
import { useIntersectionObserver } from '@3ni8ma/react-hooks'

function LazyImage({ src }) {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 })
  return <div ref={ref}>{isIntersecting && <img src={src} />}</div>
}
```

### `useToggle`

Simple boolean toggle with convenience methods.

```tsx
import { useToggle } from '@3ni8ma/react-hooks'

function Accordion() {
  const { value: open, toggle, setTrue, setFalse } = useToggle(false)
  return <div>{open && <div>Content</div>}</div>
}
```

## License

MIT
