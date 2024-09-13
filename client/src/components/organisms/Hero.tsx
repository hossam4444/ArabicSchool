import Image from 'next/image'

export default function Hero() {
  return (
    <section className='landding container flex flex-col items-center gap-5 pb-32 lg:flex-row lg:items-start lg:py-20'>
      <span className='absolute left-44 top-64 -z-10 h-[144px] w-[777px] rounded-full bg-primary shadow-lg blur-[7rem]'></span>
      <div className='intro-text flex flex-1 flex-col pt-16 lg:pt-7'>
        <h4 className='text-xl'>Hello,</h4>
        <h1 className='lg:font-extrabold text-6xl font-bold lg:text-[70px]'>
          Osama Arabic School
        </h1>
        <h2>For you and your kids</h2>
        <h2 className='bold-28 lg:bold-32 capitalize'>
          the ideal place to learn arabic, quran, islamic studies
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam
          aspernatur error cum eveniet, amet, voluptates quasi sequi minima
          labore odio maxime sapiente et.
        </p>
      </div>
      <div className='intro-image px-5'>
        <Image
          src='/images/oss.png'
          alt='Picture of the author'
          width={350}
          height={300}
          blurDataURL='data:...'
          placeholder='blur'
          className='xl:w-[500px]'
        />
      </div>
    </section>
  )
}
