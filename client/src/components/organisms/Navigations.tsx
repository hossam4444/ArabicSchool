import Link from 'next/link'
import ThemeSwitch from '../atoms/ThemeSwitch'

export default function Navigations() {
  return (
    <nav className='flex items-center gap-2'>
      <ul className='hidden gap-3 md:flex'>
        <li className='nav-li'>
          <Link href='/'>Home</Link>
        </li>
        <li className='nav-li'>
          <Link href='/about'>About</Link>
        </li>
        <li className='nav-li'>
          <Link href='/academy'>academy</Link>
        </li>
      </ul>
      <ThemeSwitch />
    </nav>
  )
}
