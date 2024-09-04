import Link from 'next/link'
import TheamSwitch from '../Theam/TheamSwitch'

export default function Navigations() {
  return (
    <nav className='flex items-center gap-2'>
      <ul className='flex gap-3'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
        <li>
          <Link href='/academy'>academy</Link>
        </li>
      </ul>
      <TheamSwitch />
    </nav>
  )
}
