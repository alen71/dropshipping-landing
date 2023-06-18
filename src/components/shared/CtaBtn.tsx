import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'

type Props = {
  text: string
  href?: string
  footer?: boolean
  nav?: boolean
  className?: string
}

const CtaBtn = ({ text, href, footer, nav, className }: Props) => {
  return (
    <>
      {href ? (
        <Link
          href={href}
          className={clsx(
            `block w-fit rounded-full border-2 border-white py-2 px-7 duration-300 hover:bg-white hover:text-black ${className}`,
            {
              'text-xs sm:text-base lg:text-xl': nav,
              'text-xl lg:text-30xl': !nav && !footer,
              'text-sm sm:text-2xl 2xl:text-3xl': footer
            }
          )}
        >
          {text}
        </Link>
      ) : (
        <button
          className={clsx(
            `block w-fit rounded-full border-2 border-white py-2 px-7 duration-300 hover:bg-white hover:text-black ${className}`,
            {
              'text-xs sm:text-base lg:text-xl': nav,
              'text-xl lg:text-30xl': !nav && !footer,
              'text-sm sm:text-2xl 2xl:text-3xl': footer
            }
          )}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default CtaBtn
