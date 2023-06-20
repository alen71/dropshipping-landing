'use client'

import clsx from 'clsx'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  px?:
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 10
    | 12
    | 14
    | 16
    | 20
    | 24
    | 28
    | 32
    | 36
    | 40
    | 44
    | 48
}

const MainSection = ({ px, className, children }: Props) => {
  return (
    <section
      data-scroll-section
      className={clsx(`mb-28 sm:mb-36 md:mb-40 lg:mb-56 ${className}`, {
        'px-6 sm:px-10 xl:px-20': px === undefined,
        [`px-${px}`]: px
      })}
    >
      {children}
    </section>
  )
}

export default MainSection
