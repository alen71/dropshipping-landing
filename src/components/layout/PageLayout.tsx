import React, { ReactNode } from 'react'

import Nav from './Nav'
import Image from 'next/image'
import Footer from './Footer'

import bgImage from '/public/images/background-img.png'

type Props = {
  children: ReactNode
}

const PageLayout = ({ children }: Props) => {
  return (
    <>
      <Nav />

      <div className="fixed top-0 right-0 w-1/2 z-[-1]">
        <Image src={bgImage} alt="background-image" />
      </div>

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  )
}

export default PageLayout
