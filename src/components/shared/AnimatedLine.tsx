import clsx from 'clsx'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {
  direction?: 'left' | 'right'
}

const AnimatedLine = ({ direction = 'left' }: Props) => {
  return (
    <div className="w-full h-1 relative">
      <motion.div
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        transition={{ type: 'spring', stiffness: 45 }}
        viewport={{ once: true }}
        className={clsx('w-full h-1 bg-white absolute', {
          'left-0': direction === 'left',
          'right-0': direction === 'right'
        })}
      />
    </div>
  )
}

export default AnimatedLine
