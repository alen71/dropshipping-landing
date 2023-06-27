'use client'

import { Power2, gsap } from 'gsap'
import React, { ReactNode, useEffect } from 'react'

type Props = { children: ReactNode }

const CursorFollower = ({ children }: Props) => {
  useEffect(() => {
    if (window.innerWidth < 1024) return

    const follower = document.querySelector('.follower')

    if (!follower) return

    document.onmousemove = function (e: any) {
      switch (true) {
        case e.target.classList.contains('what-will-you-learn-card'):
          follower.textContent = 'click'
          gsap.to(follower, {
            opacity: 1,
            duration: 0.7,
            width: 90,
            height: 90,
            transform: 'translate(-50%, -50%)',
            left: e.clientX,
            top: e.clientY,
            ease: Power2.easeOut
          })
          break
        default:
          follower.textContent = ''

          gsap.to(follower, {
            duration: 0.4,
            width: 0,
            height: 0,
            opacity: 0
          })
      }
    }
  }, [])

  return (
    <>
      <div className="follower w-5 h-5 rounded-full bg-white text-black fixed z-40 pointer-events-none text-xl text-main-black hidden lg:grid place-items-center overflow-hidden font-light uppercase">
        Click
      </div>

      {children}
    </>
  )
}

export default CursorFollower
