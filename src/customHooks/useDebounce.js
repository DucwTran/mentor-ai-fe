import { useEffect, useRef } from 'react'

export function useDebounce(callback, delay, deps = []) {
  const handler = useRef()

  useEffect(() => {
    clearTimeout(handler.current)

    handler.current = setTimeout(() => {
      callback()
    }, delay)

    return () => {
      clearTimeout(handler.current)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)
}


// useDebounce(
//   () => {
//     console.log('User stopped typing!')
//   },
//   500,
//   [searchValue]
// )
