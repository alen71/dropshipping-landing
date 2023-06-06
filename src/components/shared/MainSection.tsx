import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

const MainSection = ({ children }: Props) => {
  return (
    <section data-scroll-section className="mb-56 px-20">
      {children}
    </section>
  )
}

export default MainSection
