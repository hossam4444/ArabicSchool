import type { Metadata } from 'next'
import './globals.css'
import Providers from '@/components/atoms/providers'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import { ibmPlexSansArabic, inter, nunitoSans, robotoMono } from '@/fonts/fonts'

export const metadata: Metadata = {
  title: 'Osama Arabic School',
  description: 'The right place to learn and love Arabic, Quran, '
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={`${inter.variable} ${nunitoSans.variable} ${robotoMono.variable} ${ibmPlexSansArabic.variable} font-nunito`}
      >
        <Providers>
          <Header />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
