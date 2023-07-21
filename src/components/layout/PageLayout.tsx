import React, { ReactNode } from 'react'

import Nav from './Nav'
import Footer from './Footer'
import Helmet from '../shared/Helmet'

type Props = {
  children: ReactNode
  title: string
  desc: string
  nativeScroll?: boolean
}

const PageLayout = ({ children, nativeScroll, desc, title }: Props) => {
  return (
    <Helmet title={title} desc={desc}>
      <Nav nativeScroll={nativeScroll} />

      <main className="min-h-screen">{children}</main>

      <Footer />
    </Helmet>
  )
}

export default PageLayout
