'use client'

import React from 'react'

import Logo from '../shared/Logo'
import CtaBtn from '../shared/CtaBtn'
import AnimatedLine from '../shared/AnimatedLine'

import footerBg from '/public/images/footer-bg.png'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer data-scroll-section className="px-20 relative pb-20">
      <div className="absolute right-0 bottom-0 w-1/2">
        <Image src={footerBg} alt="footer background image" priority />
      </div>

      <div className="max-w-1/2">
        <Logo className="scale-150 ml-[320px]" />

        <div className="flex flex-col gap-10 my-24">
          <p className="font-light font-kinetica">Jaroslav Ponjičan</p>

          <CtaBtn
            href="mailto:jaroslavponjican@gmail.com"
            text="JAROSLAVPONJIČAN@GMAIL.COM"
            footer
          />

          <CtaBtn href="tel:+381 64 566 6855" text="+381 64 566 6855" footer />
        </div>

        <AnimatedLine />

        <p className="mt-14">
          Sva prava zadržana. Ⓒ 2023{' '}
          <a href="https://bluestudio.rs" rel="nofollow" target="_blank">
            Bluestudio
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
