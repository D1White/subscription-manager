import { FC, useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Popover from 'components/HOCs/Popover'
import { ReactComponent as ColorIco } from 'assets/ico/color-lens.svg'

const PopupColorInput: FC = () => {
  const [popoverOpen, setPopoverOpen] = useState(false)
  const [color, setColor] = useState('#f5f7f9')

  const [referenceRef, setReferenceRef] = useState<HTMLButtonElement | null>(null)

  const openPopover = () => {
    setPopoverOpen(true)
  }

  const closePopover = () => {
    setPopoverOpen(false)
  }

  const changeColor = (e: string) => {
    setColor(e)
  }

  return (
    <div className="popup-color-input">
      <span className="popup-input__text">Color</span>
      <button
        className="popup-color-input__color-input"
        style={{ backgroundColor: color }}
        onClick={openPopover}
        ref={setReferenceRef}
      >
        <ColorIco
          className={`popup-color-input__ico ${
            parseInt(color.slice(1), 16) < 8388607 ? 'popup-color-input__ico_light' : ''
          }`}
        />
      </button>
      {popoverOpen && (
        <Popover reference={referenceRef} onClose={closePopover}>
          <HexColorPicker color={color} onChange={changeColor} />
        </Popover>
      )}
    </div>
  )
}

export default PopupColorInput
