import Image from 'next/image'
export default function Home() {
  return (
    <div className=''>
      <section className='landding flex'>
        <div className='intro'>
          <h1>Osama Arabic School</h1>
          <p>the ideal place to learn arabic, quran, islamic studies</p>
        </div>
        <div className='intro-image'>
          <Image
            src='/images/oss.png'
            alt='Picture of the author'
            width={500}
            height={500}
            blurDataURL='data:...'
            placeholder='blur'
          />
        </div>
      </section>
    </div>
  )
}
