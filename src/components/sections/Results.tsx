import React from 'react'
import MainSection from '../shared/MainSection'
import clsx from 'clsx'

import review1 from '/public/images/reviews/placeholder.png'
import review2 from '/public/images/reviews/placeholder.png'
import review3 from '/public/images/reviews/placeholder.png'
import review4 from '/public/images/reviews/placeholder.png'
import review5 from '/public/images/reviews/placeholder.png'
import review6 from '/public/images/reviews/placeholder.png'
import Image from 'next/image'
import ParagraphAnimation from '../shared/ParagraphAnimation'

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
      <div className="text-center max-w-5xl px-10 w-full mx-auto flex flex-col gap-14 mb-28">
        <h2>REVIEWS I REZULTATI</h2>

        <ParagraphAnimation>
          <p className="text-2xl font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </ParagraphAnimation>
      </div>

      <div className="max-w-[90rem] grid md:grid-cols-2 2xl:grid-cols-3 gap-10 mx-auto">
        {reviews.map(({ img }) => (
          <div key={img.src} className="w-full h-full">
            <Image
              src={img}
              alt="review screenshot"
              style={{ width: '100%' }}
            />
          </div>
        ))}
      </div>
    </MainSection>
  )
}

export default Results
