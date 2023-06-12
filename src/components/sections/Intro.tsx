'use client'

import React, { useEffect, useRef, useState } from 'react'
import MainSection from '../shared/MainSection'
import CtaBtn from '../shared/CtaBtn'

import PlayIcon from '@/assets/icons/play-video-btn.svg'
import clsx from 'clsx'

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
        <div className=" max-w-[40rem]">
          <h3>Obavezno pogledaj video pre nego što nastaviš dalje!</h3>
          <p className="text-30xl leading-tight mt-14 lg:mt-20 mb-10">
            Veoma je važno da pogledaš video jer će ti on objasniti da li si ti
            spreman za moju školu! U videu ćeš saznati:
          </p>
          <ul className="flex flex-col mb-10">
            <li>- Da li je ovo pravi biznis model za tebe?</li>
            <li>- Kako funkcioniše dropshipping na domaćem tržištu?</li>
            <li>- Koliko para ti je potrebno?</li>
            <li>- Šta su prednosti i mane ove metode?</li>
            <li>- Koliko ćeš zarađivati?</li>
          </ul>
          <div>
            <CtaBtn href="#" text="Prijavi se" />
          </div>
        </div>
        <div className=" w-full h-full relative grid place-items-center rounded-full overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            className="w-full h-full cursor-pointer"
            onClick={() => setIsPlay(state => !state)}
          >
            <source src="/Za Sajt Titl 2.mp4" type="video/mp4" />
          </video>

          <div
            className={clsx('absolute duration-200', {
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
