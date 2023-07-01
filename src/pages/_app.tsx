import { AppProps } from 'next/app'
import '@/styles/globals.css'

import { Prompt } from 'next/font/google'
import { kinetica } from '@/styles/fonts'

import CursorFollower from '@/components/shared/CursorFollower'

const prompt = Prompt({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-prompt'
})

function App({ Component, pageProps }: AppProps) {
  return (
    <CursorFollower>
      <div className={`${prompt.variable} ${kinetica.variable} font-prompt`}>
        <Component {...pageProps} />
      </div>
    </CursorFollower>
  )
}

export default App
