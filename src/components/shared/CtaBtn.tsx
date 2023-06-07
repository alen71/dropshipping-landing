import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href: string
}

const CtaBtn = ({ text, href }: Props) => {
  return (
    <Link
      href={href}
      className="rounded-full border-2 border-white text-xl py-2 px-7"
    >
      {text}
    </Link>
  )
}

export default CtaBtn
