import Link from 'next/link'
import ThemeSwitch from '../atoms/ThemeSwitch'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function Navigations() {
  return (
    <nav className='flex items-center gap-2'>
      <div className='flex items-center justify-center rounded-xl p-2 transition duration-200 ease-in-out hover:bg-primary hover:text-white md:hidden'>
        <RxHamburgerMenu size={24} />
      </div>
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
