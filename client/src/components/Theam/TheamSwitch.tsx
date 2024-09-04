'use client'
import { useEffect, useState } from 'react'

import { MdSunny } from 'react-icons/md'
import { MdDarkMode } from 'react-icons/md'

const ThemeSwitch = () => {
  console.log('Theme Switch effect')
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia(
      '(prefers-color-scheme: dark)'
    ).matches

    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.setAttribute('data-theme', storedTheme)
    } else if (prefersDark) {
      setTheme('dark')
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return (
    <button onClick={toggleTheme} className='rounded border p-1'>
      {theme === 'light' ? <MdDarkMode /> : <MdSunny />}
    </button>
  )
}

export default ThemeSwitch
