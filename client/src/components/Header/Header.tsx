import Logo from '../Logo/Logo'
import Navigations from '../Navigation/Navigations'

export default function Header() {
  return (
    <header className='sticky top-0 flex justify-between justify-items-center gap-3 bg-slate-500 p-3'>
      <Logo />
      <Navigations />
    </header>
  )
}
