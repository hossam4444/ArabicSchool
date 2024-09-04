import Image from 'next/image'

export default function Logo() {
  return (
    <a href='/images/logo.png' className='z-10 flex items-center gap-3'>
      <Image src='/images/logo.png' height='40' width='40' alt='logo'></Image>
      <span className='text-primary-100 text-xl font-semibold'>
        Oss Academy
      </span>
    </a>
  )
}
