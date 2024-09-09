import Logo from '../atoms/Logo'
import Navigations from './Navigations'

export default function Header() {
  return (
    <header className='sticky top-0 mb-6 py-1 shadow-md'>
      <div className='container flex justify-between justify-items-center'>
        <Logo />
        <Navigations />
      </div>
    </header>
  )
}
