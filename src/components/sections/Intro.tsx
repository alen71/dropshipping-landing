import React from 'react'
import MainSection from '../shared/MainSection'
import CtaBtn from '../shared/CtaBtn'
import Image from 'next/image'

import videoPlaceholder from '/public/images/video-placeholder.png'
import PlayIcon from '@/assets/icons/play-video-btn.svg'

const Intro = () => {
  return (
    <MainSection>
      <div className="flex gap-44">
        <div className="flex flex-col gap-20 w-full">
          <h3>naslov videa i kratak opis sta je na videu</h3>
          <p className="text-[1.875rem] leading-tight">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div>
            <CtaBtn href="#" text="Prijavi se" />
          </div>
        </div>
        <div className="w-full relative grid place-items-center">
          <Image src={videoPlaceholder} alt="video placeholder" />

          <div className="absolute">
            <PlayIcon />
          </div>
        </div>
      </div>
    </MainSection>
  )
}

export default Intro
