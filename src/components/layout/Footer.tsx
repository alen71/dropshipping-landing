'use client'

import React from 'react'
import { motion } from 'framer-motion'

import Logo from '../shared/Logo'
import CtaBtn from '../shared/CtaBtn'
import AnimatedLine from '../shared/AnimatedLine'

import footerBg from '/public/images/footer-bg.png'
import Image from 'next/image'
import Link from 'next/link'

const footerNav = [
  {
    el: (
      <Link target="_blank" href="/politika-privatnosti">
        Politika privatnosti
      </Link>
    )
  },
  {
    el: (
      <Link target="_blank" href="/uslovi-koriscenja">
        Uslovi korišćenja
      </Link>
    )
  },
  {
    el: (
      <p>
        Sva prava zadržana. Ⓒ 2023{' '}
        <a href="https://bluestudio.rs" rel="nofollow" target="_blank">
          Bluestudio
        </a>
      </p>
    )
  }
]
const Footer = () => {
  return (
    <footer
      data-scroll-section
      className="px-6 sm:px-10 xl:px-20 relative pb-10 sm:pb-14 xl:pb-20"
    >
      <motion.div
        initial={{ x: 100, y: 100 }}
        whileInView={{ x: 0, y: 0 }}
        transition={{ type: 'spring', stiffness: 30 }}
        viewport={{ once: true }}
        className="absolute right-0 bottom-0 w-1/2 z-[-1] 2xl:z-10"
      >
        <Image src={footerBg} alt="footer background image" priority />
      </motion.div>

      <div className="max-w-1/2">
        <Logo className="lg:scale-150 lg:ml-[320px]" />

        <div className="flex flex-col gap-10 my-10 sm:my-14 xl:my-24">
          <p className="font-light font-kinetica">Jaroslav Ponjičan</p>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 40
            }}
            viewport={{ once: true }}
          >
            <CtaBtn
              href="mailto:jaroslavponjican@gmail.com"
              text="JAROSLAVPONJIČAN@GMAIL.COM"
              footer
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              stiffness: 40,
              delay: 0.3
            }}
            viewport={{ once: true }}
          >
            <CtaBtn
              href="tel:+381 64 566 6855"
              text="+381 64 566 6855"
              footer
            />
          </motion.div>
        </div>

        <AnimatedLine />

        <div className="flex flex-col sm:flex-row items-center gap-5 mt-10 sm:mt-14 text-base lg:text-xl">
          {footerNav.map(({ el }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 40,
                delay: 0.1 + i * 0.1
              }}
              viewport={{ once: true }}
            >
              {el}
            </motion.div>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
