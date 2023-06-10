import React from 'react'
import Image from 'next/image'

import MainSection from '../shared/MainSection'

import diamond from '/public/images/diamond.png'
import stone from '/public/images/stone.png'

import bg1 from '/public/images/lectures bg/bg-1.png'
import bg2 from '/public/images/lectures bg/bg-2.png'
import bg3 from '/public/images/lectures bg/bg-3.png'
import bg4 from '/public/images/lectures bg/bg-4.png'

const lectionsList = [
  {
    num: 'Lekcija 1.',
    title: 'Ecommerce prodaja',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: diamond,
    bg: bg1
  },
  {
    num: 'Lekcija 2.',
    title: 'Porezi u Srbiji',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '#',
    bg: bg2
  },
  {
    num: 'Lekcija 3.',
    title: 'Kako izabrati proizvod',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    icon: stone,
    bg: bg3
  },
  {
    num: 'Lekcija 4.',
    title: 'Koje je najbolje vreme',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: '#',
    bg: bg4
  }
]

const Lections = () => {
  return (
    <MainSection>
      <div className="flex flex-col gap-14">
        {lectionsList.map(({ num, title, desc, href, icon, bg }) => (
          <div
            key={num}
            className="rounded-full p-32 grid grid-cols-[1fr_auto] gap-x-36 items-center relative"
          >
            <div>
              <p className="font-kinetica font-light text-[2.5rem] leading-tight mb-3">
                {num}
              </p>
              <p className="font-kinetica font-bold mb-11">{title}</p>
              <p>{desc}</p>
            </div>
            <div>
              {href && (
                <a
                  href={href}
                  className="w-[27.625rem] h-[27.625rem] rounded-full border-[3px] border-white grid place-items-center"
                >
                  <span className="font-light text-[2.5rem] leading-tight">
                    POČNI ODMAH
                  </span>
                </a>
              )}
              {icon && <Image width={442} height={442} src={icon} alt="icon" />}
            </div>

            <Image
              src={bg}
              fill
              alt="background image"
              quality={30}
              priority
              style={{ zIndex: -1 }}
            />
          </div>
        ))}
      </div>

      <div className="text-center mt-56 mx-auto max-w-[70rem] px-10 flex flex-col gap-14">
        <h2 className="uppercase">Moja završna reč</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          <br />
          <br />
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </MainSection>
  )
}

export default Lections
