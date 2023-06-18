'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

import MainSection from '../shared/MainSection'
import ParagraphAnimation from '../shared/ParagraphAnimation'
import AnimatedList from '../shared/LectionList'

import diamond from '/public/images/diamond.png'
import stone from '/public/images/stone.png'

import bg1 from '/public/images/lectures bg/bg-1.png'
import bg1Mobile from '/public/images/lectures bg/bg-1-mobile.jpg'
import bg2 from '/public/images/lectures bg/bg-2.png'
import bg2Mobile from '/public/images/lectures bg/bg-2-mobile.jpg'
import bg3 from '/public/images/lectures bg/bg-3.png'
import bg3Mobile from '/public/images/lectures bg/bg-3-mobile.jpg'
import bg4 from '/public/images/lectures bg/bg-4.png'
import bg4Mobile from '/public/images/lectures bg/bg-4-mobile.jpg'
import HeadingAnimation from '../shared/HeadingAnimation copy'

const lectionsList = [
  {
    num: 'Lekcija 1.',
    title: 'Pronalaženje dobavljača i pravih proizvoda',
    list: [
      'Učim te strategiji kako da pronađeš najbolje i najprofitabilnije proizvode.',
      'Nauči kako da se povežeš sa pouzdanim dobavljačima robe.',
      'Nauči kako da ostvariš najveći profit od odabranog proizvoda.'
    ],
    icon: diamond,
    bg: bg1,
    bgMobile: bg1Mobile
  },
  {
    num: 'Lekcija 2.',
    title: 'Pravljenje profitabilne eCom prodavnice',
    list: [
      'Izgradnja online prodavnice od početka do kraja!',
      'Baziramo se na svaki najmanji detalj kako bi prodavnica radila besprekorno!',
      'Optimizujemo prodavnicu kako bi bila pogodna za domaće tržište!',
      ' Brendiramo tvoju prodavnicu kako bi ljudima ostala u podsvesti!'
    ],
    href: '#',
    bg: bg2,
    bgMobile: bg2Mobile
  },
  {
    num: 'Lekcija 3.',
    title: ' Detaljno o strategijama reklamiranja (FB i IG)',
    list: [
      'Učim te najboljoj testiranoj strategiji za reklamiranje na domaće tržištu.',
      'Pravljenje videa i slika za reklame.',
      'Detaljno pisanje prodajnog teksta za reklame.',
      'Psihološke stragetije i metode za povećanje prodaje.'
    ],
    icon: stone,
    bg: bg3,
    bgMobile: bg3Mobile
  },
  {
    num: 'Lekcija 4.',
    title: 'Kako izgraditi dugoročan biznis?',
    list: [
      'Šta raditi posle prve prodaje?',
      'Kako otvoriti fimru u Srbiji?',
      'Pomoć pri odabiru knjigovođe.',
      'Pomoć sa elektronskom fiskalizacijom.',
      'Izgradnja prepoznatljivog brenda na domaćem tržištu.'
    ],
    href: '#',
    bg: bg4,
    bgMobile: bg4Mobile
  }
]

const Lections = () => {
  const titleContainerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(titleContainerRef, { once: true })

  return (
    <MainSection px={0}>
      <div className="text-center max-w-5xl px-10 w-full mx-auto mb-28">
        <HeadingAnimation>
          <h2>DESKRIPCIJA MODULA</h2>
        </HeadingAnimation>
      </div>

      <div className="flex flex-col items-center lg:gap-14 lg:px-10 2xl:px-20">
        {lectionsList.map(({ num, title, list, href, icon, bg, bgMobile }) => (
          <div
            key={num}
            className="lg:rounded-full py-16 xl:py-20 px-6 sm:px-10 md:px-24 xl:px-28 2xl:p-32 grid lg:grid-cols-[1fr_auto] gap-x-16 2xl:gap-x-36 items-center justify-items-center  relative gap-y-16 max-w-[110rem]"
          >
            <div>
              <p className="font-kinetica font-light 2xl:text-[2.5rem] leading-tight mb-3">
                {num}
              </p>
              <p className="font-kinetica font-bold mb-11">{title}</p>

              <AnimatedList
                list={list}
                className='"flex flex-col gap-4 list-disc ml-7"'
              />
            </div>

            {href && (
              <motion.a
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                href={href}
              >
                <div className="w-56 lg:w-48 xl:w-72 2xl:w-[27.625rem] h-56 lg:h-48 xl:h-72 2xl:h-[27.625rem] rounded-full border-[3px] border-white grid place-items-center duration-200 hover:scale-105">
                  <span className="font-light xl:text-[2.5rem] leading-tight text-center">
                    POČNI ODMAH
                  </span>
                </div>
              </motion.a>
            )}
            {icon && (
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="w-56 lg:w-48 xl:w-72 2xl:w-[27.625rem] h-56 lg:h-48 xl:h-72 2xl:h-[27.625rem] overflow-hidden"
              >
                <Image src={icon} alt="icon" />
              </motion.div>
            )}

            <Image
              src={bg}
              fill
              alt="background image"
              quality={30}
              priority
              style={{ zIndex: -1 }}
              className="hidden lg:block"
            />
            <Image
              src={bgMobile}
              fill
              alt="background image"
              quality={30}
              priority
              style={{ zIndex: -1 }}
              className="block lg:hidden"
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-28 sm:mt-36 md:mt-40 lg:mt-56 mx-auto max-w-[70rem] px-10 sm:px-10 flex flex-col gap-14">
        <div ref={titleContainerRef} className="overflow-hidden">
          <motion.h2
            initial={{ y: -100, rotate: -10 }}
            animate={isInView && { y: 0, rotate: 0 }}
            transition={{ type: 'tween', duration: 0.8 }}
            className="uppercase"
          >
            Moja završna reč
          </motion.h2>
        </div>
        <ParagraphAnimation margin={50}>
          <p>
            Posle 3 godine rada na domaćem tržištu, odlučio sam da podelim
            znanje ozbiljnim ljudima koji žele da nauče kako početi svoj online
            biznis u Srbiji ili na Balkanu. Dosta mi je ovih fake gurua koji ti
            obećavaju kule i gradove. Ne želim da učim ljude koji misle da će
            biti milioneri posle ove obuke. U pitanju je normalan i legalan
            biznis gde TI spajaš ljude sa proizvodima i uzimaš svoju proviziju.
            Cena jeste visoka ali baš zato što želim da mi se jave samo ozbiljni
            ljudi koji shvataju da je online zarada jedan od najtežih i
            najstresnijih poslova.
          </p>
        </ParagraphAnimation>
      </div>
    </MainSection>
  )
}

export default Lections
