'use client'
import React, { ReactNode, useEffect } from 'react'

import UseLocoScroll from '@/store/useLocoScroll'
import 'locomotive-scroll/dist/locomotive-scroll.css'

type Props = {
  children: ReactNode
}

const LocoScrollWrapper = ({ children }: Props) => {
  const { locomotiveScroll, setLocomotiveScroll } = UseLocoScroll()

  useEffect(() => {
    if (Object.keys(locomotiveScroll).length === 0) {
      import('locomotive-scroll').then(locomotiveModule => {
        const scroll = new locomotiveModule.default({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: window.innerWidth > 1024,
          lerp: 0.08,
          smartphone: {
            smooth: false
          }
        })

        setLocomotiveScroll(scroll)
      })
    }
  }, [setLocomotiveScroll, locomotiveScroll])

  return (
    <div data-scroll-container id="loco-container">
      {children}
    </div>
  )
}

export default LocoScrollWrapper
