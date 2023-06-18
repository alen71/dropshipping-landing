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
        >
          <div className="bg-main-purple flex flex-col items-center gap-10 rounded-2xl relative px-6 sm:px-16 lg:px-36 py-16 lg:py-24">
            <div className="absolute top-6 right-6" onClick={setIsOpen}>
              <XIcon />
            </div>

            <h3>PRIJAVISE NA KURS</h3>
            <p className="max-w-[40rem] text-base sm:text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <a
              href="#"
              rel="nofollow"
              target="_blank"
              className="w-fit rounded-full border-2 border-white py-2 px-7 bg-black/40 duration-300 hover:bg-black flex items-center gap-3 text-base sm:text-lg lg:text-2xl cursor-pointer"
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
