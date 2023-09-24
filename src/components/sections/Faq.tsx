import React, { useRef, useState } from 'react'
import clsx from 'clsx'
import { motion, useInView } from 'framer-motion'

import MainSection from '../shared/MainSection'

import Star from '@/assets/star.svg'
import WavesLine from '../shared/WavesLine'
import UseLocoScroll from '@/store/useLocoScroll'

import FaqArrow from '/src/assets/icons/faq-arrow.svg'

const qa = [
  {
    question: 'Koliko para mi je potrebno da počnem?',
    answer:
      '- Posle kupovine obuke ($1490) bilo bi dobro da imaš još najmanje $200 za reklamiranje i dodatne troškove. (što više to bolje)'
  },
  {
    question: 'Zašto ti učiš ljude i stvaraš sebi konkurenciju?',
    answer:
      '<span>- Zato što želim još da zaradim? Zašto da ne, imam znanje i iskustvo koje sam spreman da podelim. Ne plašim se konkurencije zato što je moj ecom biznis već uveliko razrađen.</span> <br /> <span> - Takođe sam odlučio da počnem da uvozim svoje proizvode iz Kine. Na taj način ću se izdvajati od “konkurencije”. </span>',
    reverse: true
  },
  {
    question: 'Koliko vremena će trebati dok počnem da zarađujem?',
    answer:
      '- To zavisi od toga koliko si spreman vremena da uložiš. Ako budeš radio po mojim instrukcijama za mesec dana ćeš sigurno videti svoje prve rezultate. '
  },
  {
    question: 'Koliko mogu zaraditi?',
    answer:
      '- Zavisi od tvoje ozbiljnosti. Maksimalno je 5-6 hiljada eura mesečno. (ako radiš sam) Za više će ti biti potrebno da zaposliš ljude.',
    reverse: true
  },
  {
    question: 'Da li je potrebno da se otvara firma?',
    answer:
      '- U početku ne. Nema smisla otvarati firmu ako još nisi naučio ceo proces. Firma se otvara jednom kada stigneš do 1000+ eura profita. Ali o tom potom. :)'
  },
  {
    question: 'Da li mogu da se priključim obuci ako sam maloletan?',
    answer:
      '- Da, možeš. Najmlađi član ima 16 godina i ide mu extra. Firmu će otvoriti na nekoga od svojih roditelja. Bitno je samo da imaš više od 16 godina i da imaš otvoren račun u nekoj od domaćih banaka.',
    reverse: true
  },
  {
    question: 'Koliko sati dnevno je potrebno da se radi?',
    answer:
      '- U proseku 2-3 sata dnevno je idealno. Bitno je da se bude disciplinovan i da radiš konstantno. Gledaš lekcije - radiš - pišeš mi i pitaš me za svaki problem. '
  }
]

const Faq = () => {
  const titleContainerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(titleContainerRef, { once: true })
  const { locomotiveScroll } = UseLocoScroll()

  const [openedQ, setOpenedQ] = useState<string | null>(null)

  return (
    <MainSection>
      <div
        ref={titleContainerRef}
        className="flex items-center justify-between gap-10 overflow-hidden"
      >
        <motion.h2
          initial={{ y: -200, rotate: -10 }}
          animate={isInView && { y: 0, rotate: 0 }}
          transition={{ type: 'tween', duration: 0.8 }}
        >
          Odgovori na česta pitanja
        </motion.h2>
        <div className="hidden lg:block animate-spin-slow">
          <Star />
        </div>
      </div>

      <div className="mb-10 mt-14 sm:my-24 xl:my-32">
        <WavesLine />
      </div>

      <div>
        {qa.map(({ answer, question, reverse }, i) => (
          <div key={i} className="overflow-hidden">
            <motion.div
              initial="closed"
              whileHover="hover"
              variants={{ closed: {}, hover: {} }}
              className="py-5 flex justify-between items-center cursor-pointer relative z-[2] dark:bg-main-black bg-badem-brown transition-colors duration-300"
              onClick={() => {
                setOpenedQ(question === openedQ ? '' : question)

                setTimeout(() => {
                  locomotiveScroll.update()
                }, 500)
              }}
            >
              <motion.div
                initial={{ width: '0%' }}
                whileInView={{ width: '100%' }}
                transition={{ type: 'spring', stiffness: 35 }}
                viewport={{ once: true }}
                className="h-1 bg-white/50 absolute left-0 bottom-0"
              />
              <motion.div
                variants={{
                  closed: { width: '0%' },
                  hover: {
                    width: '100%',
                    transition: { type: 'spring', stiffness: 35 }
                  }
                }}
                className="h-1 bg-white absolute left-0 bottom-0"
              />

              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: {},
                  visible: {}
                }}
                className="text-3xl leading-none sm:text-4xl"
              >
                {question.split('').map((letter, i) => (
                  <motion.span
                    key={i}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          duration: 0.3,
                          delay: reverse
                            ? (question.length - 1 - i) * 0.05
                            : 0.05 + i * 0.05
                        }
                      }
                    }}
                    className="font-kinetica font-bold text-lg lg:text-2xl xl:text-30xl"
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>

              <div
                className={clsx('duration-300 scale-75 lg:scale-100', {
                  'rotate-180': openedQ === question
                })}
              >
                <FaqArrow />
              </div>
            </motion.div>
            <div
              className={clsx('ml-auto w-full duration-500 relative z-[1]', {
                'py-9 opacity-100 scale-y-100': openedQ === question,
                'py-0 opacity-0': openedQ !== question
              })}
              style={{ maxHeight: openedQ === question ? '40rem' : '0' }}
            >
              <p dangerouslySetInnerHTML={{ __html: answer }}></p>
            </div>
          </div>
        ))}
      </div>
    </MainSection>
  )
}

export default Faq
