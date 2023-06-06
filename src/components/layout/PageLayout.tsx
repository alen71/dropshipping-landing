import UseLocoScroll from '@/store/useLocoScroll'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'

type Props = {
  children: ReactNode
}

const PageLayout = ({ children }: Props) => {
  const router = useRouter()
  const { locomotiveScroll, setLocomotiveScroll } = UseLocoScroll()

  useEffect(() => {
    if (Object.keys(locomotiveScroll).length === 0) {
      import('locomotive-scroll').then(locomotiveModule => {
        const scroll = new locomotiveModule.default({
          el: document.querySelector('[data-scroll-container]') as HTMLElement,
          smooth: window.innerWidth > 1024,
          lerp: 0.06,
          smartphone: {
            smooth: false
          }
        })
        setLocomotiveScroll(scroll)
      })
    } else if (Object.keys(locomotiveScroll).length > 0) {
      router.events.on('routeChangeComplete', () => {
        locomotiveScroll.scrollTo(0, { duration: 0, disableLerp: true })
        setTimeout(() => {
          locomotiveScroll.update()
        }, 100)
      })
    }

    return () => {
      if (Object.keys(locomotiveScroll).length > 0) locomotiveScroll.destroy()
    }
  }, [router.events, setLocomotiveScroll, locomotiveScroll])
  return (
    <main data-scroll-container id="loco-scroll-container">
      {children}
    </main>
  )
}

export default PageLayout
