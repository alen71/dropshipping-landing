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
    title: 'Pronalaženje dobavljača i pravih proizvoda',
    list: [
      'Učim te strategiji kako da pronađeš najbolje i najprofitabilnije proizvode.',
      'Nauči kako da se povežeš sa pouzdanim dobavljačima robe.',
      'Nauči kako da ostvariš najveći profit od odabranog proizvoda.'
    ],
    icon: diamond,
    bg: bg1
  },
  {
    num: 'Lekcija 2.',
    title: 'Pravljenje profitabilne eCom prodavnice',
    list: [
      'Izgradnja online prodavnice od početka do kraja!',
      'Baziramo se na svaki najmanji detalj kako bi prodavnica radila besprekorno!',
      'Optimizujemo prodavnicu kako bi bila pogodna za domaće tržište!',
      ' Brendiramo tvoju prodavnicu kako bi ljudima ostala u podsvesti!'
    ],
    href: '#',
    bg: bg2
  },
  {
    num: 'Lekcija 3.',
    title: ' Detaljno o strategijama reklamiranja (FB i IG)',
    list: [
      'Učim te najboljoj testiranoj strategiji za reklamiranje na domaće tržištu.',
      'Pravljenje videa i slika za reklame.',
      'Detaljno pisanje prodajnog teksta za reklame.',
      'Psihološke stragetije i metode za povećanje prodaje.'
    ],
    icon: stone,
    bg: bg3
  },
  {
    num: 'Lekcija 4.',
    title: 'Kako izgraditi dugoročan biznis?',
    list: [
      'Šta raditi posle prve prodaje?',
      'Kako otvoriti fimru u Srbiji?',
      'Pomoć pri odabiru knjigovođe.',
      'Pomoć sa elektronskom fiskalizacijom.',
      'Izgradnja prepoznatljivog brenda na domaćem tržištu.'
    ],
    href: '#',
    bg: bg4
  }
]

const Lections = () => {
  return (
    <MainSection>
      <div className="flex flex-col gap-14">
        {lectionsList.map(({ num, title, list, href, icon, bg }) => (
          <div
            key={num}
            className="rounded-full p-32 grid grid-cols-[1fr_auto] gap-x-36 items-center relative"
          >
            <div>
              <p className="font-kinetica font-light text-[2.5rem] leading-tight mb-3">
                {num}
              </p>
              <p className="font-kinetica font-bold mb-11">{title}</p>
              <ul className="flex flex-col gap-4 list-disc ml-7">
                {list.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
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
          Posle 3 godine rada na domaćem tržištu, odlučio sam da podelim znanje
          ozbiljnim ljudima koji žele da nauče kako početi svoj online biznis u
          Srbiji ili na Balkanu. Dosta mi je ovih fake gurua koji ti obećavaju
          kule i gradove. Ne želim da učim ljude koji misle da će biti milioneri
          posle ove obuke. U pitanju je normalan i legalan biznis gde TI spajaš
          ljude sa proizvodima i uzimaš svoju proviziju. Cena jeste visoka ali
          baš zato što želim da mi se jave samo ozbiljni ljudi koji shvataju da
          je online zarada jedan od najtežih i najstresnijih poslova.
        </p>
      </div>
    </MainSection>
  )
}

export default Lections
