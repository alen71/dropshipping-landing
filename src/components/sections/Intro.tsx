'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import clsx from 'clsx'

import MainSection from '../shared/MainSection'
import CtaBtn from '../shared/CtaBtn'
import ParagraphAnimation from '../shared/ParagraphAnimation'

import PlayIcon from '@/assets/icons/play-video-btn.svg'
import AnimatedList from '../shared/AnimatedList'
import HeadingAnimation from '../shared/HeadingAnimation copy'
import UseLocoScroll from '@/store/useLocoScroll'

const listItems = [
  '- Da li je ovo pravi biznis model za tebe?',
  '- Kako funkcioniše dropshipping na domaćem tržištu?',
  '- Koliko para ti je potrebno?',
  '- Šta su prednosti i mane ove metode?',
  '- Koliko ćeš zarađivati?'
]

const Intro = () => {
  const { locomotiveScroll } = UseLocoScroll()

  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlay, setIsPlay] = useState(false)

  useEffect(() => {
    if (!videoRef) return

    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }, [videoRef, isPlay])

  return (
    <MainSection px={0}>
      <div className="flex flex-col gap-14 items-center md:px-10 xl:px-20">
        <div className="max-w-[40rem] px-6 sm:px-10 md:px-0">
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
        </div>
        <div className="h-full relative grid place-items-center md:rounded-full overflow-hidden max-w-[80rem] ">
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
              className="w-full h-auto object-cover"
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
        </div>
        <CtaBtn text="Prijavi se" />
      </div>
    </MainSection>
  )
}

export default Intro
