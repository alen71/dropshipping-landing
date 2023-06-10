import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href: string
  footer?: boolean
  className?: string
}

const CtaBtn = ({ text, href, footer, className }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        `rounded-full border-2 border-white  py-2 px-7 ${className}`,
        {
          'text-xl': !footer,
          'text-3xl': footer
        }
      )}
    >
      {text}
    </Link>
  )
}

export default CtaBtn
