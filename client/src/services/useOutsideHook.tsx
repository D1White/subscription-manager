import { useState, useEffect, RefObject } from 'react'

export const useOutsideHook = (ref: RefObject<HTMLDivElement>) => {
  const [outsideClick, setOutsideClick] = useState(false)

  const handleClickOutside = (event: MouseEvent) => {
    const path = event.composedPath && event.composedPath()
    if (ref.current && !path.includes(ref.current)) {
      setOutsideClick(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref])

  return outsideClick
}
