import React, { ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  desc: string
  children: ReactNode
}

const Helmet = ({ children, desc, title }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <meta content={title} property="og:title" />
        <meta content={desc} property="og:description" />
        <meta
          property="og:image"
          content="https://ecominventor.com/images/prev-logo.png"
        />

        <meta content="website" property="og:type" />
        <meta content="https://ecominventor.com" property="og:url" />

        <meta content="ECOM škola" property="og:site_name" />

        <meta content={desc} name="twitter:description" />
      </Head>
      {children}
    </>
  )
}

export default Helmet
