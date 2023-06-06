import React, { useEffect } from 'react'
import Logo from '../shared/Logo'
import CtaBtn from '../shared/CtaBtn'
import UseLocoScroll from '@/store/useLocoScroll'
import { ScrollElement } from 'locomotive-scroll'

const Nav = () => {
  const { locomotiveScroll } = UseLocoScroll()

  useEffect(() => {
    if (Object.keys(locomotiveScroll).length === 0) return

    locomotiveScroll.on('scroll', (e: ScrollElement) => {
      console.log(e)
    })
  }, [locomotiveScroll])

  return (
    <div className="w-full py-12 px-20 sticky top-0">
      <div className="flex items-center justify-between">
        <Logo />

        <div className="flex items-center gap-5">
          <div className="w-2 h-2 rounded-full bg-white animate-bounce" />

          <CtaBtn href="/" text="POČNI ODMAH" />
        </div>
      </div>
    </div>
  )
}

export default Nav
