'use client'

import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

type Props = {
  children: ReactNode
  margin?: number
  delay?: number
}

const HeadingAnimation = ({
  children,

  margin = 0,
  delay = 0
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ type: 'spring', stiffness: 45, delay }}
      viewport={{ once: true, margin: `0px 0px ${margin}px 0px` }}
    >
      {children}
    </motion.div>
  )
}

export default HeadingAnimation
