import React, { ReactNode } from 'react'

import Nav from './Nav'
import Footer from './Footer'

type Props = {
  children: ReactNode
  nativeScroll?: boolean
}

const PageLayout = ({ children, nativeScroll }: Props) => {
  return (
    <>
      <Nav nativeScroll={nativeScroll} />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  )
}

export default PageLayout
