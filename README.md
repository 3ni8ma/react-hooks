# @3ni8ma/react-hooks

[![RepoRanker](https://reporanker.com/badge/3ni8ma/react-hooks)](https://reporanker.com/repos/3ni8ma/react-hooks)

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

### `useOnlineStatus`

Track browser online/offline status.

```tsx
import { useOnlineStatus } from '@3ni8ma/react-hooks'

function NetworkStatus() {
  const isOnline = useOnlineStatus()
  return <div>{isOnline ? 'Online' : 'Offline'}</div>
}
```

### `useDocumentTitle`

Set `document.title` reactively with automatic cleanup.

```tsx
import { useDocumentTitle } from '@3ni8ma/react-hooks'

function ProfilePage({ name }) {
  useDocumentTitle(`${name} — My App`)
  return <div>Profile</div>
  // title restores when component unmounts
}
```

## License

MIT

<!-- ach: 2026-07-10 20:00:35 -->

<!-- ach: 2026-07-10 22:32:31 -->

<!-- ach: 2026-07-11 23:30:21 -->

<!-- ach: 2026-07-12 14:31:18 -->

<!-- ach: 2026-07-12 17:00:47 -->

<!-- ach: 2026-07-12 19:30:52 -->

<!-- ach: 2026-07-12 22:00:12 -->

<!-- ach: 2026-07-13 00:31:08 -->

<!-- ach: 2026-07-13 03:00:38 -->

<!-- ach: 2026-07-13 13:01:27 -->

<!-- ach: 2026-07-13 15:30:11 -->

<!-- ach: 2026-07-13 18:00:23 -->

<!-- ach: 2026-07-13 20:30:56 -->

<!-- ach: 2026-07-13 23:01:38 -->

<!-- ach: 2026-07-14 14:00:18 -->

<!-- ach: 2026-07-15 02:30:13 -->

<!-- ach: 2026-07-15 17:31:32 -->

<!-- ach: 2026-07-15 22:30:02 -->

<!-- ach: 2026-07-16 13:30:07 -->

<!-- ach: 2026-07-16 18:30:06 -->

<!-- ach: 2026-07-16 23:30:16 -->

<!-- ach: 2026-07-17 14:30:12 -->
