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

      <div className="px-6 sm:px-10 xl:px-20">
        <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-light mb-14 mt-10 sm:my-14 lg:my-20">
          Probao si dropshipping ali:
        </p>

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
            <Star />
          </div>
        </div>
        <div className="my-14 lg:my-20">
          <AnimatedLine />
        </div>

        <h3 className="font-semibold mb-10 font-prompt">
          Za dropshipping na DOMAĆEM TRŽIŠTU ništa od ovoga ti nije potrebno!
        </h3>

        <p className="md:text-2xl xl:text-30xl mb-5 sm:mb-0">
          Naučiću te kako da iskoristiš prednost DOMAĆEG TERENA
        </p>
      </div>

      <div className="mt-28 sm:mt-36 md:mt-40 lg:mt-56 flex flex-col xl:flex-row xl:items-center gap-16 sm:gap-24">
        <div className="max-w-[90%] sm:max-w-[70%] xl:max-w-full">
          <Image src={manOnLaptop} alt="man on laptop" />
        </div>
        <div className="flex flex-col gap-14 lg:gap-20 xl:pr-24 font-light px-6 sm:px-10 xl:px-0">
          <h3>Koje su prednosti domaćeg dropshippinga?</h3>
          <ul className="list-disc flex flex-col gap-3 list-inside">
            <li>Manja konkurencija.</li>
            <li>Veće profitne marže.</li>
            <li>Ne trebaju ti payment procesori.</li>
            <li>Jednostavnije nego klasičan dropshipping.</li>
            <li>Bez jezičke barijere.</li>
          </ul>
          <p className="sm:text-2xl font-semibold">
            NE NEĆEŠ POSTATI MILIONER, ALI ĆEŠ IMATI SVOJ SOPSTVENI BIZNIS OD
            KOG DOBRO ZARADJUJEŠ
          </p>
        </div>
      </div>
    </MainSection>
  )
}

export default Benefits
