import { FC, ReactElement, useEffect, useState } from 'react'
import { Portal } from 'components'
import { useOutsideHook } from 'services/useOutsideHook'

interface PopoverProps {
  onClose: Function
  reference: any
  children: ReactElement<HTMLDivElement>
}

const Popover: FC<PopoverProps> = ({ onClose, reference, children }) => {
  const [popoverRef, setPopoverRef] = useState<HTMLDivElement | null>(null)
  const outsideClick = useOutsideHook(popoverRef)
  useEffect(() => {
    if (outsideClick) {
      onClose()
    }
    console.log('outsideClick: ', outsideClick)
  }, [outsideClick])

  const refBounding = reference?.getBoundingClientRect()

  const style = {
    top: refBounding ? refBounding.top + refBounding.height + 15 : 0,
    left: refBounding ? refBounding.left - refBounding.width * 1.25 : 0,
  }

  return (
    <Portal>
      <div className="popover" style={style} ref={setPopoverRef}>
        {children}
      </div>
    </Portal>
  )
}

export default Popover
