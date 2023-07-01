import React from 'react'

import LogoIcon from '@/assets/icons/Logo.svg'
import Link from 'next/link'
import UseLocoScroll from '@/store/useLocoScroll'
import { useRouter } from 'next/router'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  const router = useRouter()
  const { locomotiveScroll } = UseLocoScroll()

  return (
    <button
      className={`${className} block w-fit`}
      onClick={() => {
        router.pathname === '/'
          ? locomotiveScroll.scrollTo(0, 0)
          : router.push('/')
      }}
    >
      <LogoIcon />
    </button>
  )
}

export default Logo
