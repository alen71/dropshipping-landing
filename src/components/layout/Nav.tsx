import React from 'react'
import Logo from '../shared/Logo'
import CtaBtn from '../shared/CtaBtn'

const Nav = () => {
  return (
    <div className="w-full py-12">
      <div className=" container flex items-center justify-between">
        <Logo />
        <div className="flex items-center gap-5">
          <div className="w-2 h-2 rounded-full bg-white" />
          <CtaBtn href="/" text="POČNI ODMAH" />
        </div>
      </div>
    </div>
  )
}

export default Nav
