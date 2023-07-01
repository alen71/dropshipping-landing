import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import Logo from '../shared/Logo'
import CtaBtn from '../shared/CtaBtn'

import UseLocoScroll from '@/store/useLocoScroll'
import NavPopup from './NavPopup'
import useTogglePopup from '@/store/useTogglePopup'

type Props = {
  nativeScroll?: boolean
}

const Nav = ({ nativeScroll }: Props) => {
  const [isScroll, setIsScroll] = useState(false)
  const [isScrollTopOfPage, setIsScrollTopOfPage] = useState(true)
  const { locomotiveScroll } = UseLocoScroll()
  const { isPopupOpen } = useTogglePopup()

  useEffect(() => {
    if (nativeScroll) return
    if (window.innerWidth < 1024) return

    if (Object.keys(locomotiveScroll).length === 0) return

    let currPageOffset = 0
    let timeoutSet: NodeJS.Timeout | null = null

    locomotiveScroll.on('scroll', (e: any) => {
      const pageOffset = e.scroll.y

      setIsScroll(pageOffset < currPageOffset || pageOffset === 0)

      setIsScrollTopOfPage(pageOffset === 0)

      if (pageOffset > 0 && pageOffset < currPageOffset) {
        timeoutSet && clearTimeout(timeoutSet)
        timeoutSet = null

        const timeout = setTimeout(() => {
          setIsScroll(false)
        }, 1000)
        timeoutSet = timeout
      } else if (
        pageOffset === 0 ||
        (pageOffset > currPageOffset && timeoutSet)
      ) {
        if (timeoutSet) {
          clearTimeout(timeoutSet)
          timeoutSet = null
        }
      }

      currPageOffset = pageOffset
    })
  }, [locomotiveScroll, nativeScroll])

  useEffect(() => {
    if (window.innerWidth < 1024 || nativeScroll) {
      let currPageOffset = 0
      let timeoutSet: NodeJS.Timeout | null = null

      window.addEventListener('scroll', () => {
        const pageOffset = window.scrollY

        setIsScroll(pageOffset < currPageOffset || pageOffset === 0)

        setIsScrollTopOfPage(pageOffset === 0)

        if (pageOffset > 0 && pageOffset < currPageOffset) {
          timeoutSet && clearTimeout(timeoutSet)
          timeoutSet = null

          const timeout = setTimeout(() => {
            setIsScroll(false)
          }, 1000)
          timeoutSet = timeout
        } else if (
          pageOffset === 0 ||
          (pageOffset > currPageOffset && timeoutSet)
        ) {
          if (timeoutSet) {
            clearTimeout(timeoutSet)
            timeoutSet = null
          }
        }

        currPageOffset = pageOffset
      })
    }
  }, [nativeScroll])

  return (
    <>
      <div
        data-scroll-sticky
        data-scroll-target="#app-wrapper"
        className={clsx(
          'fixed left-0 right-0 top-0 h-20 md:h-[8rem] z-[39] transition-all duration-500',
          {
            'translate-y-[-130%]':
              !isScrollTopOfPage && !isScroll && !isPopupOpen,
            ' h-[6rem] mt-0':
              !isScrollTopOfPage &&
              !isScrollTopOfPage &&
              isScroll &&
              !isPopupOpen,
            'backdrop-blur-lg': !isScrollTopOfPage && !isPopupOpen,
            'backdrop-blur-0': isScrollTopOfPage || isPopupOpen
          }
        )}
      >
        <motion.div
          initial="visible"
          animate={
            isPopupOpen ||
            (!isScrollTopOfPage && !isScroll) ||
            isScrollTopOfPage
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
            'translate-y-[-130%]':
              !isScrollTopOfPage && !isScroll && !isPopupOpen,
            ' h-[6rem] mt-0':
              !isScrollTopOfPage &&
              !isScrollTopOfPage &&
              isScroll &&
              !isPopupOpen
          }
        )}
      >
        <div className="flex items-center justify-between px-6 sm:px-10 xl:px-20 h-full">
          <div className="scale-[0.7] sm:scale-100 -ml-5 sm:-ml-0">
            <Logo />
          </div>

          <div className="flex items-center gap-3 sm:gap-5">
            <div className="w-2 h-2 rounded-full bg-white animate-bounce" />

            <CtaBtn text="POČNI ODMAH" nav />
          </div>
        </div>
      </header>
      <NavPopup />
    </>
  )
}

export default Nav
