import Image from 'next/image'
import Link from 'next/link'

export default function Logo() {
  return (
    <Link href='/' className='flex items-center gap-3'>
      {/* <Image
        src='/images/oas_logo.png'
        alt='logo'
        width={70}
        height={40}
        className='h-auto w-auto'
      ></Image> */}
      <span className='text-xl underline decoration-sky-500 decoration-1'>
        Ossama Arabic{' '}
        <span className='font-bold text-primary no-underline'>School</span>
      </span>
    </Link>
  )
}
