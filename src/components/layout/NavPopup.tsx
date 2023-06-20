import { motion } from 'framer-motion'
import React from 'react'

import InstaIcon from '@/assets/icons/instagram-icon.svg'
import XIcon from '@/assets/icons/xIcon.svg'

type Props = {
  isOpen: boolean
  setIsOpen: () => void
}

const NavPopup = ({ isOpen, setIsOpen }: Props) => {
  return (
    <motion.div
      data-scroll-sticky
      data-scroll-target="#loco-container"
      className="fixed w-screen h-screen z-50 "
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { display: 'none', transition: { delay: 0.4 } },
        visible: { display: 'block' }
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, transition: { duration: 0.3, delay: 0.15 } },
          visible: { opacity: 1, transition: { duration: 0.3 } }
        }}
        className="grid place-items-center bg-black/80 w-full h-full"
        onClick={setIsOpen}
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 80, transition: { duration: 0.3 } },
            visible: {
              opacity: 1,
              y: 0,
              transition: { type: 'spring', stiffness: 45, delay: 0.1 }
            }
          }}
          className=" max-w-[84rem] m-auto px-6 sm:px-10 overflow-hidden"
          onClick={e => e.stopPropagation()}
        >
          <div className="bg-main-purple flex flex-col items-center gap-10 rounded-2xl relative px-6 sm:px-16 lg:px-36 py-16 lg:py-24">
            <div
              className="absolute top-6 right-6 cursor-pointer duration-300 hover:scale-110"
              onClick={setIsOpen}
            >
              <XIcon />
            </div>

            <h3>PRIJAVI SE NA KURS</h3>
            <p className="max-w-[40rem] text-base sm:text-xl">
              Ukoliko se pronalaziš u gore navedeniom tekstu, prijavi se na kurs
              i obezbedi sebi bolju budućnost.
            </p>

            <a
              href="https://instagram.com/jaroslav2.0?igshid=OGQ5ZDc2ODk2ZA=="
              rel="nofollow"
              target="_blank"
              className="w-fit rounded-full border-2 border-white py-2 px-5 sm:px-7 bg-black/40 duration-300 hover:bg-black flex items-center gap-3 text-sm sm:text-lg lg:text-2xl cursor-pointer"
            >
              <span>Kontaktiraj me na Instagramu</span>
              <InstaIcon />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default NavPopup
