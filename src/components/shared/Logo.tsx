import React from 'react'

import LogoIcon from '@/assets/icons/Logo.svg'

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => {
  return (
    <div className={className}>
      <LogoIcon />
    </div>
  )
}

export default Logo
