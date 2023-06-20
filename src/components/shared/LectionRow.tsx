'use client'

import React from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'

import AnimatedList from './AnimatedList'

type Props = {
  num: string
  title: string
  list: string[]
  href?: string
  icon?: StaticImageData
  bg: StaticImageData
  bgMobile: StaticImageData
  i: number
  reverse?: boolean
}

const LectionRow = ({
  num,
  title,
  list,
  href,
  icon,
  bg,
  bgMobile,
  i,
  reverse
}: Props) => {
  return (
    <motion.div
      key={num}
      initial={{ opacity: 0, x: reverse ? -400 : 400 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={clsx(
        'lg:rounded-full py-16 xl:py-20 pr-6 sm:pr-10 md:pr-24 xl:pr-28 pl-6 sm:pl-10 md:pl-28 xl:pl-32 2xl:p-32 grid lg:grid-cols-[1fr_auto] gap-x-10 2xl:gap-x-36 items-center justify-items-center  relative gap-y-16 w-full xl:max-w-[110rem]',
        {
          'bg-black/10': i === 0
        }
      )}
    >
      <div>
        <p className="font-kinetica font-light 2xl:text-[2.5rem] leading-tight mb-3">
          {num}
        </p>
        <p className="font-kinetica font-bold mb-8 2xl:mb-11">{title}</p>

        <AnimatedList
          list={list}
          className="flex flex-col gap-2 xl:gap-4 list-disc ml-4 sm:ml-7 lg:text-xl 2xl:text-2xl"
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
          <div className="w-56 lg:w-64 xl:w-72 2xl:w-[27.625rem] h-56 lg:h-64 xl:h-72 2xl:h-[27.625rem] rounded-full border-[3px] border-white grid place-items-center duration-200 hover:scale-105">
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
          className="w-56 lg:w-64 xl:w-72 2xl:w-[27.625rem] h-56 lg:h-64 xl:h-72 2xl:h-[27.625rem] overflow-hidden"
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
    </motion.div>
  )
}

export default LectionRow
