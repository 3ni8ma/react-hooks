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

<!-- ach: 2026-07-18 00:30:06 -->

<!-- ach: 2026-07-18 03:00:11 -->

<!-- ach: 2026-07-18 18:02:46 -->

<!-- ach: 2026-07-18 20:30:18 -->

<!-- ach: 2026-07-19 01:30:08 -->

<!-- ach: 2026-07-19 16:30:10 -->

<!-- ach: 2026-07-19 21:30:11 -->

<!-- ach: 2026-07-20 00:00:10 -->

<!-- ach: 2026-07-20 02:30:02 -->

<!-- ach: 2026-07-20 12:30:07 -->

<!-- ach: 2026-07-20 15:00:19 -->

<!-- ach: 2026-07-20 20:00:12 -->

<!-- ach: 2026-07-21 01:08:06 -->

<!-- ach: 2026-07-21 21:01:09 -->

<!-- ach: 2026-07-22 14:31:32 -->

<!-- ach: 2026-07-22 19:30:50 -->

<!-- ach: 2026-07-23 00:30:21 -->

<!-- ach: 2026-07-23 13:00:28 -->

<!-- ach: 2026-07-23 18:00:59 -->

<!-- ach: 2026-07-23 20:30:43 -->

<!-- ach: 2026-07-23 23:00:13 -->

<!-- ach: 2026-07-24 01:30:07 -->

<!-- ach: 2026-07-24 14:00:12 -->

<!-- ach: 2026-07-24 19:00:59 -->

<!-- ach: 2026-07-25 00:00:14 -->

<!-- ach: 2026-07-25 20:00:06 -->

<!-- ach: 2026-07-25 22:30:17 -->

<!-- ach: 2026-07-27 02:00:10 -->

<!-- ach: 2026-07-27 14:30:07 -->

<!-- ach: 2026-07-27 17:00:16 -->

<!-- ach: 2026-07-27 19:30:47 -->

<!-- ach: 2026-07-28 15:31:10 -->

<!-- ach: 2026-07-28 18:00:16 -->

<!-- ach: 2026-07-29 16:30:39 -->

<!-- ach: 2026-07-29 19:00:56 -->

<!-- ach: 2026-07-29 21:30:15 -->

<!-- ach: 2026-07-30 02:30:04 -->

<!-- ach: 2026-07-30 17:30:08 -->

<!-- ach: 2026-07-30 20:00:14 -->

<!-- ach: 2026-07-30 22:30:30 -->

<!-- ach: 2026-07-31 01:00:44 -->

<!-- ach: 2026-07-31 03:30:45 -->

<!-- ach: 2026-07-31 13:30:28 -->

<!-- ach: 2026-07-31 18:30:15 -->

<!-- ach: 2026-07-31 21:00:39 -->

<!-- ach: 2026-08-01 02:00:49 -->

<!-- ach: 2026-08-01 19:30:26 -->

<!-- ach: 2026-08-02 13:00:12 -->

<!-- ach: 2026-08-03 01:31:07 -->

<!-- ach: 2026-08-03 14:00:06 -->

<!-- ach: 2026-08-03 21:30:08 -->

<!-- ach: 2026-08-04 00:00:20 -->

<!-- ach: 2026-08-04 02:30:22 -->

<!-- ach: 2026-08-04 12:30:14 -->

<!-- ach: 2026-08-04 15:00:27 -->

<!-- ach: 2026-08-04 17:30:38 -->

<!-- ach: 2026-08-04 22:30:29 -->

<!-- ach: 2026-08-05 01:00:24 -->

<!-- ach: 2026-08-05 21:00:39 -->

<!-- ach: 2026-08-05 23:30:20 -->

<!-- ach: 2026-08-06 02:00:13 -->

<!-- ach: 2026-08-06 12:02:19 -->

<!-- ach: 2026-08-06 14:30:33 -->

<!-- ach: 2026-08-06 19:30:08 -->

<!-- ach: 2026-08-06 22:00:22 -->

<!-- ach: 2026-08-07 00:30:06 -->

<!-- ach: 2026-08-07 18:00:36 -->

<!-- ach: 2026-08-07 20:30:24 -->

<!-- ach: 2026-08-07 23:00:48 -->

<!-- ach: 2026-08-08 01:31:48 -->

<!-- ach: 2026-08-08 19:00:06 -->

<!-- ach: 2026-08-08 21:30:04 -->

<!-- ach: 2026-08-09 00:00:08 -->

<!-- ach: 2026-08-09 02:30:14 -->

<!-- ach: 2026-08-09 12:30:19 -->

<!-- ach: 2026-08-09 15:00:09 -->

<!-- ach: 2026-08-09 17:30:08 -->

<!-- ach: 2026-08-09 20:00:19 -->

<!-- ach: 2026-08-09 22:30:13 -->

<!-- ach: 2026-08-10 13:30:14 -->
