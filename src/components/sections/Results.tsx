import React from 'react'
import MainSection from '../shared/MainSection'
import clsx from 'clsx'

const reviews = [
  {
    name: 'stefan petrovic',
    result: '$12K+ / Monthly Agency owner',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    video: '/placeholder-video.mp4'
  },
  {
    name: 'stefan petrovic',
    result: '$12K+ / Monthly Agency owner',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    video: '/placeholder-video.mp4',
    reverse: true
  },
  {
    name: 'stefan petrovic',
    result: '$12K+ / Monthly Agency owner',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    video: '/placeholder-video.mp4'
  }
]

const Results = () => {
  return (
    <MainSection>
      <div className="text-center max-w-5xl px-10 w-full mx-auto flex flex-col gap-14 mb-28">
        <h2>REVIEWS I REZULTATI</h2>
        <p className="text-2xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      <div className="max-w-[90rem] px-10 flex flex-col gap-28 mx-auto">
        {reviews.map(({ name, result, desc, video, reverse }, i) => (
          <div
            key={i}
            className={clsx('grid items-center gap-x-24', {
              'grid-cols-[45fr_55fr]': !reverse,
              'grid-cols-[55fr_45fr]': reverse
            })}
          >
            <div
              className={clsx('', {
                'col-start-2 col-end-3 row-start-1 row-end-2': reverse
              })}
            >
              <h4>{name}</h4>
              <p className="font-bold font-kinetica text-lg mb-12">{result}</p>
              <p className="text-2xl font-light">{desc}</p>
            </div>

            <div
              className={clsx('rounded-20 overflow-hidden', {
                'col-start-1 col-end-2 row-start-1 row-end-2': reverse
              })}
            >
              <video autoPlay loop muted playsInline>
                <source src={video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
    </MainSection>
  )
}

export default Results
