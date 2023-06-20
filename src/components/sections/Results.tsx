'use client'

import React from 'react'
import MainSection from '../shared/MainSection'
import { motion } from 'framer-motion'

import review1 from '/public/images/reviews/placeholder.png'
import review2 from '/public/images/reviews/placeholder.png'
import review3 from '/public/images/reviews/placeholder.png'
import review4 from '/public/images/reviews/placeholder.png'
import review5 from '/public/images/reviews/placeholder.png'
import review6 from '/public/images/reviews/placeholder.png'
import Image from 'next/image'

import HeadingAnimation from '../shared/HeadingAnimation copy'

const reviews = [
  {
    img: review1
  },
  {
    img: review2
  },
  {
    img: review3
  },
  {
    img: review4
  },
  {
    img: review5
  },
  {
    img: review6
  }
]

const Results = () => {
  return (
    <MainSection>
      <div className="text-center max-w-5xl px-10 w-full mx-auto mb-28">
        <HeadingAnimation>
          <h2>REVIEWS I REZULTATI</h2>
        </HeadingAnimation>
      </div>

      <div className="max-w-[90rem] grid md:grid-cols-2 2xl:grid-cols-3 gap-6 sm:gap-10 mx-auto">
        {reviews.map(({ img }) => (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ type: 'tween', duration: 0.5 }}
            viewport={{ once: true }}
            key={img.src}
            className="w-full h-full"
          >
            <Image
              src={img}
              alt="review screenshot"
              style={{ width: '100%' }}
            />
          </motion.div>
        ))}
      </div>
    </MainSection>
  )
}

export default Results
