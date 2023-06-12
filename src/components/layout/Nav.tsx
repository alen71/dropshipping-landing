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
    <>
      <div
        data-scroll-sticky
        data-scroll-target="#app-wrapper"
        className={clsx(
          'fixed left-0 right-0 top-0 h-20 md:h-[8rem] z-[39] transition-all duration-500',
          {
            'translate-y-[-130%]': !isScrollTopOfPage && !isScroll && !isOpen,
            ' h-[6rem] mt-0':
              !isScrollTopOfPage && !isScrollTopOfPage && isScroll && !isOpen,
            'backdrop-blur-lg': !isScrollTopOfPage && !isOpen,
            'backdrop-blur-0': isScrollTopOfPage || isOpen
          }
        )}
      >
        <motion.div
          initial="visible"
          animate={
            isOpen || (!isScrollTopOfPage && !isScroll) || isScrollTopOfPage
              ? 'hidden'
              : 'visible'
          }
          variants={{
            hidden: {
              width: '0%',
              transition: { type: 'tween', duration: 0.5 }
            },
            visible: {
              width: '100%',
              transition: { type: 'tween', duration: 1 }
            }
          }}
          className="absolute left-0 bottom-0 h-1 w-full bg-white"
        />
      </div>
      <header
        data-scroll-sticky
        data-scroll-target="#loco-container"
        className={clsx(
          'fixed left-0 right-0 top-0 h-20 md:h-[8rem] transition-all duration-500 z-[41]',
          {
            'translate-y-[-130%]': !isScrollTopOfPage && !isScroll && !isOpen,
            ' h-[6rem] mt-0':
              !isScrollTopOfPage && !isScrollTopOfPage && isScroll && !isOpen
          }
        )}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 xl:px-20 h-full">
          <div className="scale-[0.8] sm:scale-100 -ml-4 sm:-ml-0">
            <Logo />
          </div>

          <div className="flex items-center gap-5">
            <div className="w-2 h-2 rounded-full bg-white animate-bounce" />

            <CtaBtn href="/" text="POČNI ODMAH" nav />
          </div>
        </div>
      </header>
    </>
  )
}

export default Nav
