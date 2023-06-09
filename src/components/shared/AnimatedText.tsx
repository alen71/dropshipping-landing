'use client'

import { gsap } from 'gsap'
import React, { useEffect, useRef } from 'react'

const AnimatedText = () => {
  const boxRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (!boxRef.current?.clientHeight && !boxRef.current?.clientHeight) return

    const wrapper = document.querySelector('.animated-text-wrapper')
    const boxes = document.querySelector('.animated-text-boxes')
    const allBoxes = document.querySelectorAll('.animated-text-box')

    const direction = 'left'
    const numBoxes = allBoxes.length
    const boxWidth = boxRef.current?.clientWidth
    const boxHeight = boxRef.current?.clientHeight
    let viewWidth = innerWidth
    const wrapWidth = numBoxes * boxWidth

    gsap.set([wrapper], { height: boxHeight, width: '100%' })
    gsap.set(boxes, { left: -boxWidth })

    const stringX = direction === 'left' ? `-=${wrapWidth}` : `+=${wrapWidth}`

    Array.from(allBoxes).forEach((box, i) => {
      gsap.set(box, {
        x: i * boxWidth,
        width: boxWidth,
        height: boxHeight
      })
    })

    const animation = gsap.to('.animated-text-box', {
      repeat: -1,
      duration: 100,
      x: stringX,
      ease: 'none',
      paused: true,
      modifiers: {
        x: function (x, target) {
          if (direction === 'left') {
            x = ((parseInt(x) - wrapWidth) % wrapWidth) + wrapWidth
          } else {
            x = parseInt(x) % wrapWidth
          }

          target.style.visibility =
            x - boxWidth > viewWidth ? 'visible' : 'visible'
          return `${x}px`
        }
      }
    })

    function resize() {
      animation.render(animation.time(), false, true)
    }

    window.addEventListener('resize', resize)

    // AUTOPLAY
    animation.play()

    return () => {
      window.removeEventListener('resize', resize)
    }
  }, [boxRef])
  return (
    <div className="animated-text-wrapper relative overflow-hidden">
      <div className="animated-text-boxes relative font-bold">
        {Array.from({ length: 8 }, (_, i) => (
          <p
            key={i}
            className="absolute animated-text-box pl-8 uppercase font-kinetica text-7xl"
            {...(i === 0 && { ref: boxRef })}
          >
            Da li si ovo ti?
          </p>
        ))}
      </div>
    </div>
  )
}

export default AnimatedText
