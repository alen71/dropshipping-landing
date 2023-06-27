import React, { useEffect, useState } from 'react'

const useWindowWidth = () => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)

    window.onresize = () => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }
  }, [])

  return { width, height }
}

export default useWindowWidth
