import { FC, ReactElement, useRef, useEffect, useState } from 'react'
import { Portal } from 'components'
import { useOutsideHook } from 'services/useOutsideHook'

interface PopoverProps {
  onClose: Function
  reference: any
  children: ReactElement<HTMLDivElement>
}

const Popover: FC<PopoverProps> = ({ onClose, reference, children }) => {
  const popoverRef = useRef(null)
  const outsideClick = useOutsideHook(popoverRef.current)
  useEffect(() => {
    if (outsideClick) {
      onClose()
    }
  }, [outsideClick]) // eslint-disable-line

  const refBounding = reference?.getBoundingClientRect()

  const style = {
    top: refBounding ? refBounding.top + refBounding.height : 0,
    left: refBounding ? refBounding.left : 0,
  }

  return (
    <Portal>
      <div className="popover" style={style} ref={popoverRef}>
        {children}
      </div>
    </Portal>
  )
}

export default Popover
