'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

import SignInIcon from '@/assets/icons/heroSignInIcon.svg'

import cart from '/public/images/shopping-basket 1.png'
import bgImage from '/public/images/background-img.png'

import CtaBtn from '@/components/shared/CtaBtn'
import MainSection from '@/components/shared/MainSection'

import useWindowWidth from '../hooks/UseWindowWidth'

const Hero = () => {
  const width = useWindowWidth()
  const underTitleRef = useRef<HTMLDivElement | null>(null)
  const isUnderTitleRefInView = useInView(underTitleRef, { once: true })
  const cartContainer = useRef<HTMLDivElement | null>(null)
  const isCartContainerInView = useInView(cartContainer, {
    once: true,
    margin: '0px 0px -150px 0px'
  })

  return (
    <MainSection px={0}>
      <div className="relative">
        <div className="absolute top-0 right-0 w-1/2 z-[-1]">
          <Image src={bgImage} alt="background-image" />
        </div>

        <div className="2xl:max-w-[90%] flex flex-col px-6 sm:px-10 xl:px-20 pt-32 sm:pt-36 lg:pt-40">
          <motion.h1
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ type: 'spring', stiffness: 45 }}
            viewport={{ once: true }}
          >
            Prestani da radiš za gazdu, nauči da prodaješ na domaćem tržištu
          </motion.h1>

          <div
            ref={underTitleRef}
            className="grid grid-cols-[auto_1fr_auto] items-center gap-x-8 lg:gap-x-14 w-full mb-12 mt-10 sm:my-12 gap-y-10 overflow-hidden"
          >
            <motion.p
              initial={{ y: -200 }}
              animate={isUnderTitleRefInView && { y: 0 }}
              transition={{ type: 'tween', duration: 0.8 }}
              className="font-light text-xl sm:text-2xl lg:text-3xl col-start-1 col-end-4 md:col-end-2 row-start-1 row-end-2"
            >
              Zarađuj za život bez da <br className="hidden md:block" /> ti neko
              visi nad glavom!
            </motion.p>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={isUnderTitleRefInView && { scaleX: 1 }}
              transition={{ type: 'tween', duration: 1 }}
              className="w-full h-[2px] bg-white col-start-1 md:col-start-2 col-end-3 row-start-2 md:row-start-1 row-end-3 md:row-end-2"
            />

            <div className="w-7 h-7 rounded-full border-2 bg-transparent" />
          </div>

          <div className="flex items-center gap-5 mb-16 sm:mb-14">
            <CtaBtn text="Prijavi se" href="#" />

            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 90, delay: 0.5 }}
              viewport={{ once: true }}
              className="rounded-full border-2 border-white grid place-items-center w-12 lg:w-14 h-12 lg:h-14"
            >
              <SignInIcon />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[20rem_auto] xl:grid-cols-[25rem_auto] items-center gap-x-6 xl:gap-x-10 2xl:gap-x-20 lg:max-h-[22.625rem] gap-y-10">
            <div className="bg-main-purple relative rounded-2xl h-full">
              <div className="pt-8 px-8 flex flex-col gap-2">
                <p className="font-bold text-2xl xl:text-3xl">
                  Ecommerce obuka
                </p>
                <p className="text-xl xl:text-2xl font-light">
                  nauči metodu dropshippinga za domaće tržište
                </p>
              </div>

              <div
                ref={cartContainer}
                className="w-fit lg:w-[75%] ml-auto overflow-hidden"
              >
                <motion.div
                  initial={{ x: '100%' }}
                  animate={isCartContainerInView && { x: '0%' }}
                  transition={{ type: 'spring', stiffness: 40 }}
                >
                  <Image
                    src={cart}
                    alt="korpa"
                    style={{ objectFit: 'contain' }}
                  />
                </motion.div>
              </div>
            </div>

            <div className="grid grid-cols-[auto_1fr] gap-x-4 h-[14rem] sm:h-[25rem] lg:h-full w-full border-2 rounded-2xl px-4 sm:px-8 2xl:px-12 py-4 sm:py-9 color-white text-[0.625rem] sm:text-sm md:text-xl relative">
              <div className="flex flex-col justify-between items-end font-light">
                <p>RSD 200K</p>
                <p>RSD 100K</p>
                <p>RSD 0K</p>
              </div>

              <div className="flex flex-col justify-between relative w-full">
                <svg
                  width="100%"
                  height={width > 640 ? '204' : '60%'}
                  viewBox="0 0 560 204"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute bottom-5"
                  preserveAspectRatio="none"
                >
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.2, ease: 'easeIn' }}
                    // viewport={{ once: true }}
                    id="svg-chart-line-path"
                    d="M0 203C5.85987 203 11.5105 190.333 13.6033 184C14.6497 180.833 17.8935 174.5 22.4977 174.5C31.3922 174.5 32.4386 187 39.7634 187C47.0883 187 54.4131 115.5 54.4131 108C54.4131 100.5 58.5987 98.5 61.2147 98.5C63.8308 98.5 67.4932 101 68.5396 108C69.586 115 71.6788 131 77.9572 131C84.2357 131 85.8053 133 86.8517 137.5C87.8981 142 90.5141 160 98.3621 160C106.21 160 108.826 166.5 111.442 167.5C114.058 168.5 118.244 166 122.953 169.5C127.662 173 127.662 182.5 137.602 182.5C147.543 182.5 144.404 169.5 155.914 169.5C167.425 169.5 164.809 129.5 170.041 120C175.273 110.5 178.935 117 182.598 111C186.26 105 184.691 93 193.585 93C202.48 93 205.619 111 212.944 111C220.268 111 222.884 57.5 224.977 46C227.07 34.5 232.302 35.5 234.918 34.5C243.813 32 239.104 18.5 250.091 18.5C261.078 18.5 258.985 63 265.787 72.5C271.228 80.1 279.565 74.6667 283.053 71C288.808 65.5 294.04 64 301.888 66.5C309.736 69 314.445 60.5 321.77 57C329.095 53.5 332.234 56.5 334.85 62.5C337.466 68.5 331.711 115.5 346.36 123C358.08 129 359.615 63.5 358.917 30C358.394 22.3333 359.336 7 367.288 7C377.229 7 374.09 25 384.554 25C392.925 25 396.065 14.3333 396.588 9C396.937 6.33333 399.099 1 404.959 1C412.284 1 413.853 11 416.993 33C420.132 55 429.026 23 435.828 79.5C442.63 136 454.663 46 454.663 38C454.663 30 456.233 13 463.558 13C470.883 13 472.975 28 474.545 34C476.115 40 489.718 38 496.52 48.5C503.321 59 508.03 34 518.494 34C533.667 34 520.587 106 538.376 106C556.165 106 542.038 46 557.211 46C565.582 46 558.781 56 575 56"
                    stroke="#A852FF"
                    strokeWidth="2"
                  />
                </svg>
                <div className="h-1 w-full bg-white/50 mt-3" />
                <div className="h-1 w-full bg-white/50 mt-3 absolute top-[46%]" />
                <div
                  className="w-full grid grid-cols-[50fr_50fr] 2xl:grid-cols-[1fr_auto] items-end 
                gap-x-4 sm:gap-x-9"
                >
                  <div className="h-1 w-full bg-white/50 mb-2 sm:mb-4" />
                  <p className="md:text-lg 2xl:text-xl">
                    Ovo će biti tvoji rezultati nakon samo mesec dana
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainSection>
  )
}

export default Hero
