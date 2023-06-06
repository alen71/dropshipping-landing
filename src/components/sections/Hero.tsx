import React from 'react'

const Hero = () => {
  return (
    <div className="max-w-[78.25rem]">
      <h1>Počni da prodaješ na domaćem tržištu</h1>

      <div className="grid grid-cols-[auto_1fr_auto] items-center gap-x-14 w-full my-12">
        <p className="font-light text-3xl">
          zarađuj za život <br /> radeći ono što voliš!
        </p>

        <div className="w-full h-[2px] bg-white" />

        <div className="w-7 h-7 rounded-full border-2 border-white bg-transparent" />
      </div>
    </div>
  )
}

export default Hero
