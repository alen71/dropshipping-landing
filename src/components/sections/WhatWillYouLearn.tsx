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
    title: 'Neograničeno mentorstvo 1 na 1 sa mnom',
    list: [
      'Svaki dan - 24/7!  Šta god da ti je potrebno - tu sam da ti pomognem!'
    ],
    icon: settingIcon,
    bg: cardBg1
  },
  {
    title: 'Doživotni pristup detaljnim video lekcijama - Jednostavno i sažeto',
    list: [
      'Svake nedelje ja dodajem nove lekcije i menjam stare ukoliko se nešto promenilo'
    ],
    icon: arrows,
    bg: cardBg2
  },
  {
    title: 'Pristup zatvorenoj VIP Facebook grupi',
    list: [
      'U ovoj grupi možeš da pronadješ dodatne savete od drugih ljudi koji su već prošli tvoj put i samostalno zaradjuju.',
      'Da diskutuješ sa njima o raznim temama',
      'Da prisustvuješ okupljanjima'
    ],
    icon: message,
    bg: cardBg3
  },
  {
    title: 'Imaš moju pomoć i savetovanje pri otvaranju firme na Balkanu',
    list: [
      'Preporučiću ti dobrog knjigovođu',
      'Savetovaću te kako da  posluješ legalo i profitablino',

      'Pokazaću ti kako da ostvariš jake kontakte sa domaćim veleprodavcima',

      'Uvešću te u tokove elektronske fiskalizacije i objasniću ti ceo postupak'
    ],
    icon: rects,
    bg: cardBg4
  }
]

const WhatWillYouLearn = () => {
  return (
    <MainSection>
      <div className="text-center max-w-[90rem] mx-auto px-6 sm:px-10 mb-20 sm:mb-24 lg:mb-36">
        <h2 className="uppercase">
          Šta te sve očekuje kada upišeš obuku, osim dobre zarade naravno ;)
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-6 xl:gap-10 mx-auto max-w-[90rem]">
        {cards.map(({ title, list, icon, bg }) => (
          <article
            key={title}
            className="flex flex-col p-10 xl:p-16 gap-10 xl:gap-16 rounded-20 relative"
          >
            <p className="text-30xl lg:text-4xl xl:text-[3.125rem] leading-tight">
              {title}
            </p>
            <ul className="font-light text-base sm:text-xl lg:text-2xl flex flex-col gap-4 list-disc">
              {list.map(item => (
                <li key={item}>{item}</li>
              ))}
            </ul>

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
