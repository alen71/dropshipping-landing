import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props) => {
  return (
    <section
      data-scroll-section
      className={clsx('mb-28 sm:mb-36 md:mb-40 lg:mb-56', {
        'px-6 sm:px-10 xl:px-20': px === undefined,
        [`px-${px}`]: px
      })}
    >
      {children}
    </section>
  )
}

export default MainSection
