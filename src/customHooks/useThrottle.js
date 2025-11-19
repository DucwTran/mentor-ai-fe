import { useRef } from 'react'

export function useThrottle(callback, delay) {
  const lastTime = useRef(0)

  return (...args) => {
    const now = Date.now()

    if (now - lastTime.current >= delay) {
      callback(...args)
      lastTime.current = now
    }
  }
}



// const throttledScroll = useThrottle(() => {
//   console.log('Scrolling...')
// }, 300)

// window.addEventListener('scroll', throttledScroll)

