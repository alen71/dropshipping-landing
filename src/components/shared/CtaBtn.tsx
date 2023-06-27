import clsx from 'clsx'
import React from 'react'

import UseLocoScroll from '@/store/useLocoScroll'
import useTogglePopup from '@/store/useTogglePopup'
import Link from 'next/link'

type Props = {
  href?: string
  text: string
  footer?: boolean
  nav?: boolean
  className?: string
}

const CtaBtn = ({ text, footer, nav, href, className }: Props) => {
  const { locomotiveScroll } = UseLocoScroll()
  const { setIsPopupOpen } = useTogglePopup()

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
          onClick={() => {
            setIsPopupOpen(true)

            locomotiveScroll.stop()

            document.querySelector('body')?.classList.add('scroll-of')
            document.querySelector('html')?.classList.add('scroll-of')
          }}
        >
          {text}
        </button>
      )}
    </>
  )
}

export default CtaBtn
