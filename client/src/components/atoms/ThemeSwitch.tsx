// 'use client'
// import { useEffect, useState } from 'react'

// import { MdSunny } from 'react-icons/md'
// import { MdDarkMode } from 'react-icons/md'

// export default function ThemeSwitch() {
//   const [theme, setTheme] = useState<'light' | 'dark'>('light')

//   useEffect(() => {
//     const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
//     const prefersDark = window.matchMedia(
//       '(prefers-color-scheme: dark)'
//     ).matches

//     if (storedTheme) {
//       setTheme(storedTheme)
//       document.documentElement.setAttribute('data-theme', storedTheme)
//     } else if (prefersDark) {
//       setTheme('dark')
//       document.documentElement.setAttribute('data-theme', 'dark')
//     }
//   }, [])

//   const toggleTheme = () => {
//     const newTheme = theme === 'light' ? 'dark' : 'light'
//     setTheme(newTheme)
//     document.documentElement.setAttribute('data-theme', newTheme)
//     localStorage.setItem('theme', newTheme)
//   }

//   const sun = <MdSunny />
//   const moon = <MdDarkMode />
//   return (
//     <button onClick={toggleTheme} className='rounded border p-1'>
//       {theme === 'light' ? moon : sun}
//     </button>
//   )
// }
// ------------------------------------------------------------
'use client'

import { FiSun, FiMoon } from 'react-icons/fi'
import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  const classes =
    'p-2 text-4xl pointer text-content-sec dark:text-content-nav rounded-full hover:bg-primary hover:text-white transition duration-200 ease-in-out'

  if (!mounted) return <FiMoon onClick={() => setTheme('dark')} />

  if (resolvedTheme === 'dark') {
    return <FiSun onClick={() => setTheme('light')} className={`${classes}`} />
  }

  if (resolvedTheme === 'light') {
    return <FiMoon onClick={() => setTheme('dark')} className={`${classes}`} />
  }
}
