import React from 'react'
import Image from 'next/image'

import MainSection from '../shared/MainSection'
import AnimatedText from '../shared/AnimatedText'
import AnimatedLine from '../shared/AnimatedLine'

import Star from '@/assets/star.svg'

import manOnLaptop from '/public/images/man-work-on.laptop.png'

const Benefits = () => {
  return (
    <MainSection px={0}>
      <AnimatedText />

      <div className="px-20">
        <p className="text-center text-5xl font-light my-20">
          Probao si dropshipping:
        </p>

        <AnimatedLine />

        <div className="grid grid-cols-[1fr_1fr_auto] mt-20 font-medium gap-10">
          <ul className="list-disc flex flex-col gap-11 ml-7">
            <li>ali su ti banovali Facebook account.</li>
            <li>ali nisi mogao da namestis stripe i paypal.</li>
            <li>ali nisi hteo da otvaras firmu.</li>
          </ul>
          <ul className="list-disc flex flex-col gap-11 ml-7">
            <li>ali tvoj proizvod nije radio.</li>
            <li>ali nisi bio siguran kako pustiti reklame.</li>
            <li>ali nisi znao kako da napišeš opis na engleskom.</li>
          </ul>
          <div className="text-main-purple">
            <Star />
          </div>
        </div>
      </div>
      <div className="mt-56 grid grid-cols-2 items-center gap-24">
        <div>
          <Image src={manOnLaptop} alt="man on laptop" />
        </div>
        <div className="flex flex-col gap-20 pr-24">
          <h3>Šta sve dovijate kada kupite ovaj kurs</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
            <br />
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </MainSection>
  )
}

export default Benefits
