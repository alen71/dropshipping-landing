import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  isOpen: boolean
  setIsOpen: () => void
}

const NavPopup = ({ isOpen, setIsOpen }: Props) => {
  return (
    <motion.div
      data-scroll-sticky
      data-scroll-target="#loco-container"
      className="fixed w-screen h-screen z-50"
      initial="hidden"
      animate={isOpen ? 'visible' : 'hidden'}
      variants={{
        hidden: { display: 'none', transition: { delay: 0.2 } },
        visible: { display: 'block' }
      }}
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, transition: { duration: 0.2 } },
          visible: { opacity: 1, transition: { duration: 0.3 } }
        }}
        className="grid place-items-center bg-black/80 w-full h-full "
        onClick={() => setIsOpen()}
      >
        NavPopup
      </motion.div>
    </motion.div>
  )
}

export default NavPopup
