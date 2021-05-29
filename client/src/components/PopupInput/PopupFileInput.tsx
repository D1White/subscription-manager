import { FC, useState } from 'react'

import Popover from 'components/HOCs/Popover'
import { ColorPicker } from 'components'
import { ReactComponent as ColorIco } from 'assets/ico/color-lens.svg'

interface PopupFileInputProps {
  title: string
}

const PopupFileInput: FC<PopupFileInputProps> = ({ title }) => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  const [referenceRef, setReferenceRef] = useState<HTMLButtonElement | null>(null)

  const openPopover = () => {
    setPopoverOpen(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  return (
    <div className="popup-file-input">
      <span className="popup-input__text">{title}</span>
      <button className="popup-file-input__fake-input" onClick={openPopover} ref={setReferenceRef}>
        <ColorIco />
      </button>
      {popoverOpen && (
        <Popover reference={referenceRef} onClose={closePopover}>
          <ColorPicker />
        </Popover>
      )}
    </div>
  )
}

export default PopupFileInput
