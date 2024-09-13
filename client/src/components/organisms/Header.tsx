import Logo from '../atoms/Logo'
import Navigations from './Navigations'

export default function Header() {
  return (
    <header className='fixed top-0 z-50 mb-6 w-full bg-white py-3 shadow-md dark:bg-bkg-dark'>
      <div className='container flex justify-between justify-items-center'>
        <Logo />
        <Navigations />
      </div>
    </header>
  )
}
