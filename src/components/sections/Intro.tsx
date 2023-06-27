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

const listItems = [
  '- Da li je ovo pravi biznis model za tebe?',
  '- Kako funkcioniše dropshipping na domaćem tržištu?',
  '- Koliko para ti je potrebno?',
  '- Šta su prednosti i mane ove metode?',
  '- Koliko ćeš zarađivati?'
]

const Intro = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const [isPlay, setIsPlay] = useState(false)

  useEffect(() => {
    if (!videoRef) return

    isPlay ? videoRef.current?.play() : videoRef.current?.pause()
  }, [videoRef, isPlay])

  return (
    <MainSection>
      <div className="flex flex-col 2xl:flex-row gap-14 2xl:gap-36 items-center">
        <div className="max-w-[40rem]">
          <HeadingAnimation>
            <h3>Obavezno pogledaj video pre nego što nastaviš dalje!</h3>
          </HeadingAnimation>

          <ParagraphAnimation margin={50}>
            <p className="xl:text-30xl leading-tight mt-14 lg:mt-20 mb-10">
              Veoma je važno da pogledaš video jer će ti on objasniti da li si
              ti spreman za moju školu! U videu ćeš saznati:
            </p>
          </ParagraphAnimation>

          <AnimatedList
            list={listItems}
            className="flex flex-col mb-10 gap-2"
          />

          <CtaBtn text="Prijavi se" />
        </div>
        <div className=" w-full h-full relative grid place-items-center rounded-full overflow-hidden">
          <motion.video
            ref={videoRef}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 45 }}
            viewport={{ once: true }}
            autoPlay
            playsInline
            className="w-full h-full cursor-pointer"
            onClick={() => setIsPlay(state => !state)}
          >
            <source src="/Za sajt spremno.mp4" type="video/mp4" />
          </motion.video>

          <div
            className={clsx('absolute duration-200 pointer-events-none', {
              'opacity-0': isPlay,
              'opacity-100': !isPlay
            })}
          >
            <PlayIcon />
          </div>
        </div>
      </div>
    </MainSection>
  )
}

export default Intro
