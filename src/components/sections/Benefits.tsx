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
        <p className="text-5xl font-light my-20">Probao si dropshipping ali:</p>

        <AnimatedLine />

        <div className="grid grid-cols-[1fr_1fr_auto] mt-20 font-medium gap-10">
          <ul className="list-disc flex flex-col gap-11 ml-7">
            <li>Banovali su ti Facebook account.</li>
            <li>Nisi mogao da namestis Stripe i Paypal.</li>
            <li>Nisi hteo da otvaraš firmu u USA ili GB.</li>
          </ul>
          <ul className="list-disc flex flex-col gap-11 ml-7">
            <li>Nisi bio siguran kako pustiti reklame.</li>
            <li>Nisi znao kako da izabereš pravi proizvod.</li>
          </ul>
          <div className="text-main-purple">
            <Star />
          </div>
        </div>
        <div className="my-20">
          <AnimatedLine />
        </div>

        <p className="font-semibold text-3xl mb-10">
          Za dropshipping na DOMAĆEM TRŽIŠTU ništa od ovoga ti nije potrebno!
        </p>

        <p>Naučiću te kako da iskoristiš prednost DOMAĆEG TERENA</p>
      </div>

      <div className="mt-56 grid grid-cols-2 items-center gap-24">
        <div>
          <Image src={manOnLaptop} alt="man on laptop" />
        </div>
        <div className="flex flex-col gap-20 pr-24 font-light">
          <h3>Koje su prednosti domaćeg dropshippinga?</h3>
          <ul className="list-disc flex flex-col gap-3 list-inside">
            <li>Manja konkurencija.</li>
            <li>Veće profitne marže.</li>
            <li>Ne trebaju ti payment procesori.</li>
            <li>Jednostavnije nego klasičan dropshipping.</li>
            <li>Bez jezičke barijere.</li>
          </ul>
          <p className="text-2xl font-semibold">
            NE NEĆEŠ POSTATI MILIONER, ALI ĆEŠ IMATI SVOJ SOPSTVENI BIZNIS OD
            KOG DOBRO ZARADJUJEŠ
          </p>
        </div>
      </div>
    </MainSection>
  )
}

export default Benefits
