import { Dispatch, FC, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import { useDebouncedCallback } from 'use-debounce'

import Popover from 'components/HOCs/Popover'
import colorTone from 'services/colorTone'
import { ReactComponent as ColorIco } from 'assets/ico/color-lens.svg'

interface PopupColorInputProps {
  color: string
  setColor: Dispatch<string>
}

const PopupColorInput: FC<PopupColorInputProps> = ({ color, setColor }) => {
  const [popoverOpen, setPopoverOpen] = useState(false)

  const [referenceRef, setReferenceRef] = useState<HTMLButtonElement | null>(null)

  const openPopover = () => {
    setPopoverOpen(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  const debounced = useDebouncedCallback((color: string) => {
    setColor(color)
  }, 300)

  return (
    <div className="popup-color-input">
      <span className="popup-input__text">Color</span>
      <button
        className="popup-color-input__color-input"
        style={{ backgroundColor: color }}
        onClick={openPopover}
        ref={setReferenceRef}
      >
        <ColorIco className={`popup-color-input__ico ${colorTone(color) ? 'icon_light' : ''}`} />
      </button>
      {popoverOpen && (
        <Popover reference={referenceRef} onClose={closePopover}>
          <HexColorPicker color={color} onChange={debounced} />
        </Popover>
      )}
    </div>
  )
}

export default PopupColorInput
