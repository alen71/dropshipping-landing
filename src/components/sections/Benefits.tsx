'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

import MainSection from '../shared/MainSection'
import ParagraphAnimation from '../shared/ParagraphAnimation'
import AnimatedLine from '../shared/AnimatedLine'

import Star from '@/assets/star.svg'

import manOnLaptop from '/public/images/man-work-on.laptop.png'
import jaroslavOnWall from '/public/images/jaroslav-on-the-wall.jpg'

import AnimatedList from '../shared/LectionList'
import HeadingAnimation from '../shared/HeadingAnimation copy'

const listItems = [
  'Manja konkurencija.',
  'Veće profitne marže.',
  'Ne trebaju ti payment procesori.',
  'Jednostavnije nego klasičan dropshipping.',
  'Bez jezičke barijere.'
]

const Benefits = () => {
  return (
    <MainSection px={0}>
      <div className="px-6 sm:px-10 xl:px-20">
        <HeadingAnimation>
          <h2>Da li si ovo ti? Ukoliko se prepoznaješ ova obuka je za tebe!</h2>
        </HeadingAnimation>

        <ParagraphAnimation margin={50}>
          <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-14 mt-10 sm:mb-14 sm:mt-12 lg:mb-20 lg:mt-16">
            Probao si dropshipping ali:
          </p>
        </ParagraphAnimation>

        <AnimatedLine />

        <div className="grid lg:grid-cols-[1fr_1fr_auto] mt-14 lg:mt-20 font-medium gap-5 2xl:gap-10 text-lg lg:text-2xl xl:text-30xl justify-center md:justify-start">
          <ul className="list-disc flex flex-col gap-6 sm:gap-11 ml-7 ">
            <li>Banovali su ti Facebook account.</li>
            <li>Nisi mogao da namestis Stripe i Paypal.</li>
            <li>Nisi hteo da otvaraš firmu u USA ili GB.</li>
          </ul>
          <ul className="list-disc flex flex-col gap-6 sm:gap-11 ml-7">
            <li>Nisi bio siguran kako pustiti reklame.</li>
            <li>Nisi znao kako da izabereš pravi proizvod.</li>
          </ul>
          <div className="text-main-purple justify-self-center my-20 lg:my-0">
            <div className="animate-spin-slow">
              <Star />
            </div>
          </div>
        </div>
        <div className="my-14 lg:my-20">
          <AnimatedLine direction="right" />
        </div>

        <ParagraphAnimation margin={50}>
          <h3 className="font-semibold mb-10 font-prompt">
            Za dropshipping na DOMAĆEM TRŽIŠTU ništa od ovoga ti nije potrebno!
          </h3>
        </ParagraphAnimation>

        <ParagraphAnimation margin={50} delay={0.2}>
          <p className="md:text-2xl xl:text-30xl mb-5 sm:mb-0">
            Naučiću te kako da iskoristiš prednost DOMAĆEG TERENA
          </p>
        </ParagraphAnimation>
      </div>

      <div className="mt-28 sm:mt-36 md:mt-40 lg:mt-56 flex flex-col xl:flex-row xl:items-center gap-16 sm:gap-24">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '0%' }}
          transition={{ type: 'spring', stiffness: 30 }}
          viewport={{ once: true }}
          className="max-w-[90%] sm:max-w-[70%] max-h-[50rem] xl:max-w-full overflow-hidden rounded-tr-full rounded-br-full"
        >
          <Image src={jaroslavOnWall} alt="man on laptop" />
        </motion.div>

        <div className="flex flex-col gap-14 lg:gap-20 xl:pr-24 font-light px-6 sm:px-10 xl:px-0">
          <HeadingAnimation>
            <h3>Koje su prednosti domaćeg dropshippinga?</h3>
          </HeadingAnimation>

          <AnimatedList
            list={listItems}
            className="list-disc flex flex-col gap-3 list-inside"
          />

          <ParagraphAnimation margin={50}>
            <p className="sm:text-2xl font-semibold">
              NE NEĆEŠ POSTATI MILIONER, ALI ĆEŠ IMATI SVOJ SOPSTVENI BIZNIS OD
              KOG DOBRO ZARADJUJEŠ
            </p>
          </ParagraphAnimation>
        </div>
      </div>
    </MainSection>
  )
}

export default Benefits
