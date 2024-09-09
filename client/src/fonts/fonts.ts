import { Inter, Roboto_Mono, Nunito_Sans, IBM_Plex_Sans_Arabic } from 'next/font/google';

export const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  variable: '--font-nunito-sans',
});

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  subsets: ['arabic'],
  variable: '--fontIBM',
  weight: ['100', '200', '300', '400', '600', '700']
});