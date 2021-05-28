import React, { FC, useState, useEffect, useRef } from 'react'
import { HexColorPicker } from 'react-colorful'

import Popover from 'components/HOCs/Popover'
import { ReactComponent as ColorIco } from 'assets/ico/color-lens.svg'

interface PopupFileInputProps {
  title: string
}

const PopupFileInput: FC<PopupFileInputProps> = ({ title }) => {
  const btnRef = useRef(null)
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [color, setColor] = useState('#1B1B1B')

  const [referenceRef, setReferenceRef] = useState<HTMLButtonElement | null>(null)

  const togglePopover = () => {
    setPopoverOpen((prev) => !prev)
  }

  const changeColor = (e: any) => {
    setColor(e)
  }

  const close = () => {
    console.log('adfsad')
  }

  return (
    <div className="popup-file-input">
      <span className="popup-input__text">{title}</span>
      <button className="popup-file-input__fake-input" onClick={togglePopover} ref={setReferenceRef}>
        <ColorIco />
      </button>
      <Popover reference={referenceRef} onClose={close}>
        <HexColorPicker color={color} onChange={changeColor} />
      </Popover>
    </div>
  )
}

export default PopupFileInput
