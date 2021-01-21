import { useCallback, useEffect, useState } from 'react'

const useDarkMode = (initialTheme = 'light') => {
  const [theme, setTheme] = useState(initialTheme)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme')
    localTheme && setTheme(localTheme)
    setIsReady(true)
  }, [])

  const setMode = useCallback((mode) => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }, [])

  const toggleTheme = () => {
    theme === 'light' ? setMode('dark') : setMode('light')
  }

  return [theme, toggleTheme, isReady]
}

export default useDarkMode
