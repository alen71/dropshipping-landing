import React, { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import clsx from 'clsx'

import MainSection from '../shared/MainSection'
import CtaBtn from '../shared/CtaBtn'
import ParagraphAnimation from '../shared/ParagraphAnimation'

import PlayIcon from '@/assets/icons/play-video-btn.svg'
import AnimatedList from '../shared/AnimatedList'
import HeadingAnimation from '../shared/HeadingAnimation copy'
import UseLocoScroll from '@/store/useLocoScroll'
import useWindowWidth from '../hooks/UseWindowWidth'

const listItems = [
  '- Da li je ovo pravi biznis model za tebe?',
  '- Kako funkcioniše dropshipping na domaćem tržištu?',
  '- Koliko para ti je potrebno?',
  '- Šta su prednosti i mane ove metode?',
  '- Koliko ćeš zarađivati?'
]

const Intro = () => {
  const { locomotiveScroll } = UseLocoScroll()
  const { width, height } = useWindowWidth()

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlay, setIsPlay] = useState(false)

  useEffect(() => {
    if (!videoRef) return

    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }, [videoRef, isPlay])

  return (
    <>
      <MainSection px={0} className="">
        <div className="grid 2xl:grid-cols-2 gap-14 lg:gap-24 items-center md:px-10 xl:px-20">
          <div
            className={clsx('px-6 sm:px-10 md:px-0 duration-300', {
              '2xl:blur-md': isPlay
            })}
          >
            <HeadingAnimation>
              <h3>Obavezno pogledaj video pre nego što nastaviš dalje!</h3>
            </HeadingAnimation>

            <ParagraphAnimation margin={50}>
              <p className="xl:text-30xl leading-tight mt-14 lg:mt-20 mb-10">
                Veoma je važno da pogledaš video jer će ti on objasniti da li si
                ti spreman za moju školu! U videu ćeš saznati:
              </p>
            </ParagraphAnimation>

            <AnimatedList list={listItems} className="flex flex-col gap-2" />

            <CtaBtn text="Prijavi se" className="hidden 2xl:block mt-14" />
          </div>

          <div className="relative w-full h-full">
            <motion.div
              layoutId="video open"
              className={clsx(
                'h-full grid place-items-center md:rounded-full overflow-hidden  duration-300'
              )}
            >
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ type: 'spring', stiffness: 45 }}
                viewport={{ once: true }}
                className="w-full h-full cursor-pointer"
                onClick={() => setIsPlay(state => !state)}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  playsInline
                  onLoadedData={() => locomotiveScroll.update()}
                  className="w-full h-full object-cover"
                >
                  <source src="/Za sajt spremno.mp4" type="video/mp4" />
                </video>
              </motion.div>

              <div
                className={clsx('absolute duration-200 pointer-events-none', {
                  'opacity-0': isPlay,
                  'opacity-100': !isPlay
                })}
              >
                <PlayIcon />
              </div>
            </motion.div>
          </div>

          <CtaBtn
            text="Prijavi se"
            className="2xl:hidden justify-self-center lg:justify-self-start"
          />
        </div>
      </MainSection>
      <AnimatePresence>
        {isPlay && width > 1536 && (
          <motion.div
            layoutId="video open"
            className="fixed top-0 left-0 w-screen h-screen z-50 flex items-center justify-center backdrop-blur-md"
            onClick={() => setIsPlay(false)}
          >
            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-[90%] h-auto object-cover"
            >
              <source src="/Za sajt spremno.mp4" type="video/mp4" />
            </video>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Intro
