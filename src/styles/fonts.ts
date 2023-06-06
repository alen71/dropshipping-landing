import localFont from 'next/font/local'

export const kinetica = localFont({
  src: [
    {
      path: '../../public/fonts/Kinetica-Light.ttf',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Kinetica-Bold.ttf',
      weight: '700',
      style: 'normal'
    }
  ],
  fallback: ['sans-serif'],
  display: 'swap',
  variable: '--font-kinetica'
})
