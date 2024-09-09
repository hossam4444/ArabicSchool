import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='z-10 flex items-center gap-3'>
      <Image
        src='/images/oas_logo.png'
        alt='logo'
        width={70}
        height={40}
        className='h-auto w-auto'
      ></Image>
    </Link>
  )
}
