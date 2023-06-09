import clsx from 'clsx'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
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

const MainSection = ({ px, children }: Props) => {
  return (
    <section
      data-scroll-section
      className={clsx('mb-56', {
        'px-20': px === undefined,
        [`px-${px}`]: px
      })}
    >
      {children}
    </section>
  )
}

export default MainSection
