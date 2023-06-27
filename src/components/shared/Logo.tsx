import React from 'react'

import LogoIcon from '@/assets/icons/Logo.svg'
import Link from 'next/link'
import UseLocoScroll from '@/store/useLocoScroll'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  const { locomotiveScroll } = UseLocoScroll()

  return (
    <button
      className={`${className} block w-fit`}
      onClick={() => {
        locomotiveScroll.scrollTo(0, 0)
      }}
    >
      <LogoIcon />
    </button>
  )
}

export default Logo
