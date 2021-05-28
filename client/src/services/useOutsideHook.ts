import { useState, useEffect, RefObject } from 'react'

export const useOutsideHook = (ref: HTMLDivElement | null) => {
  const [outsideClick, setOutsideClick] = useState(false)

  const handleClickOutside = (event: MouseEvent) => {
    const path = event.composedPath && event.composedPath()
    if (ref && !path.includes(ref)) {
      setOutsideClick(true)
    }
  }

  useEffect(() => {
    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [ref]) // eslint-disable-line

  return outsideClick
}
