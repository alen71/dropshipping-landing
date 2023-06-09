import React from 'react'

import MainSection from '../shared/MainSection'
import AnimatedText from '../shared/AnimatedText'
import AnimatedLine from '../shared/AnimatedLine'

import Star from '@/assets/purple-star.svg'

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
          <Star />
        </div>
      </div>
    </MainSection>
  )
}

export default Benefits
