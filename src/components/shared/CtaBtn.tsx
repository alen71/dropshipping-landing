import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href: string
  footer?: boolean
  nav?: boolean
  className?: string
}

const CtaBtn = ({ text, href, footer, nav, className }: Props) => {
  return (
    <Link
      href={href}
      className={clsx(
        `block w-fit rounded-full border-2 border-white py-2 px-7 ${className}`,
        {
          'text-xs sm:text-base lg:text-xl': nav,
          'text-xl lg:text-30xl': !nav && !footer,
          'text-sm sm:text-2xl 2xl:text-3xl': footer
        }
      )}
    >
      {text}
    </Link>
  )
}

export default CtaBtn
