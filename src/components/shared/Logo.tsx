import React from 'react'

import LogoIcon from '@/assets/icons/Logo.svg'
import Link from 'next/link'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <Link href="/" className={`${className} block w-fit`}>
      <LogoIcon />
    </Link>
  )
}

export default Logo
