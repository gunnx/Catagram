import { renderHook, act } from '@testing-library/react-hooks'

import useDarkMode from './useDarkMode'

describe('useDarkMode', () => {
  beforeEach(() => {
    global.localStorage.clear()
  })

  it('returns default light theme if local storage empty', () => {
    const { result } = renderHook(() => useDarkMode())

    const [theme, , isReady] = result.current
    expect(theme).toBe('light')
    expect(isReady).toBe(true)
  })

  it('returns theme from local storage if exists', () => {
    global.localStorage.setItem('theme', 'dark')

    const { result } = renderHook(() => useDarkMode())

    const [theme] = result.current
    expect(theme).toBe('dark')
  })

  it('changes mode from light to dark and saves in local storage', () => {
    const { result } = renderHook(() => useDarkMode())

    const [theme, toggleTheme] = result.current

    expect(theme).toBe('light')
    expect(global.localStorage.getItem('theme')).toBeNull()

    act(() => {
      toggleTheme()
    })

    const [updatedTheme] = result.current

    expect(updatedTheme).toBe('dark')
    expect(global.localStorage.getItem('theme')).toBe('dark')
  })

  it('changes mode from dark to light and saves in local storage', () => {
    const { result } = renderHook(() => useDarkMode('dark'))

    const [theme, toggleTheme] = result.current

    expect(theme).toBe('dark')
    expect(global.localStorage.getItem('theme')).toBeNull()

    act(() => {
      toggleTheme()
    })

    const [updatedTheme] = result.current

    expect(updatedTheme).toBe('light')
    expect(global.localStorage.getItem('theme')).toBe('light')
  })
})
