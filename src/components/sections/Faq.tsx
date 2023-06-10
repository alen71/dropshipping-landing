'use client'

import React, { useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import MainSection from '../shared/MainSection'

import Star from '@/assets/star.svg'
import WavesLine from '../shared/WavesLine'
import UseLocoScroll from '@/store/useLocoScroll'

import FaqArrow from '/src/assets/icons/faq-arrow.svg'

const qa = [
  {
    question: "What's your earliest memory?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: "What's one of your favorite foods?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reverse: true
  },
  {
    question: 'Who was your favorite teacher and why?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    question: 'Do you have any nicknames?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    reverse: true
  },
  {
    question: "What's your favorite candy?",
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
]

const Faq = () => {
  const { locomotiveScroll } = UseLocoScroll()

  const [openedQ, setOpenedQ] = useState<string | null>(null)

  return (
    <MainSection>
      <div className="flex items-center justify-between gap-10">
        <h2>Frequently asked questions</h2>
        <Star />
      </div>

      <div className="my-32">
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
                className="text-3xl sm:text-4xl"
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
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.p>

              <div
                className={clsx('duration-300 scale-75 sm:scale-100', {
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
              <p>{answer}</p>
            </div>
          </div>
        ))}
      </div>
    </MainSection>
  )
}

export default Faq
