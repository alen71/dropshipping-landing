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
        <div className=" w-full">
          <h3>Obavezno pogledaj video pre nego što nastaviš dalje!</h3>
          <p className="text-[1.875rem] leading-tight mt-20 mb-10">
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
