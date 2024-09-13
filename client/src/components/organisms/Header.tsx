import Logo from '../atoms/Logo'
import Navigations from './Navigations'

export default function Header() {
  return (
    <header className='dark:bg-bkg-dark dark:shadow-[rgba(0, 0, 0, 0.45) 0px 25px 20px -20px] sticky top-0 mb-6 bg-white py-1 shadow-md'>
      <div className='container flex justify-between justify-items-center'>
        <Logo />
        <Navigations />
      </div>
    </header>
  )
}
// shadow for dark mode
// box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
