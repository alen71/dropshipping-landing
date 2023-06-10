import React from 'react'
import MainSection from '../shared/MainSection'

import settingIcon from '/public/images/settings-icon.png'
import arrows from '/public/images/round-arrows.png'
import message from '/public/images/message.png'
import rects from '/public/images/white-rects.png'
import Image from 'next/image'

import cardBg1 from '/public/images/cards bg/card-1-bg.png'
import cardBg2 from '/public/images/cards bg/card-2-bg.png'
import cardBg3 from '/public/images/cards bg/card-3-bg.png'
import cardBg4 from '/public/images/cards bg/card-4-bg.png'

const cards = [
  {
    title: 'GET REPEATABLE PROCESSES',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: settingIcon,
    bg: cardBg1
  },
  {
    title: 'GET REUSABLE TEMPLATES',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: arrows,
    bg: cardBg2
  },
  {
    title: 'GET RECOGNIZED',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: message,
    bg: cardBg3
  },
  {
    title: 'GET BITE-SIZED TRAINING',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    icon: rects,
    bg: cardBg4
  }
]

const WhatWillYouLearn = () => {
  return (
    <MainSection>
      <div className="text-center max-w-[60rem] mx-auto px-10 mb-36">
        <h2 className="uppercase">evo šta ćeš naučiti na kursu</h2>
      </div>
      <div className="grid grid-cols-2 gap-10 mx-auto max-w-[90rem] px-10">
        {cards.map(({ title, desc, icon, bg }) => (
          <article
            key={title}
            className="flex flex-col p-16 gap-16 rounded-20 relative"
          >
            <p className="text-[3.125rem] leading-tight">{title}</p>
            <p className="font-light text-2xl">{desc}</p>

            <div className="mt-auto">
              <Image src={icon} alt="icon" />
            </div>

            <Image fill src={bg} alt="background" style={{ zIndex: -1 }} />
          </article>
        ))}
      </div>
    </MainSection>
  )
}

export default WhatWillYouLearn
