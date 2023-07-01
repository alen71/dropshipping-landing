import { motion, useInView } from 'framer-motion'
import { StaticImageData } from 'next/image'
import React, { useRef } from 'react'

type Props = {
  list: string[]
  className?: string
}

const AnimatedList = ({ list, className }: Props) => {
  const listRef = useRef<HTMLUListElement | null>(null)

  const isListInView = useInView(listRef, {
    once: true,
    margin: '0px 0px -150px 0px'
  })
  return (
    <ul ref={listRef} className={className}>
      {list.map((item, i) => (
        <motion.li
          initial={{ opacity: 0, y: 20 }}
          animate={isListInView && { opacity: 1, y: 0 }}
          transition={{
            type: 'spring',
            stiffness: 35,
            delay: 0.06 + i * 0.06
          }}
          key={item}
        >
          {item}
        </motion.li>
      ))}
    </ul>
  )
}

export default AnimatedList
