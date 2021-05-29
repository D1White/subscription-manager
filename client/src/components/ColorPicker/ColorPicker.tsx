import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'

import { ReactComponent as ColorIco } from 'assets/ico/color-lens.svg'
import { ReactComponent as ImageIco } from 'assets/ico/picture.svg'
import { ReactComponent as ImageIco2 } from 'assets/ico/picture-2.svg'

const ColorPicker = () => {
  const [color, setColor] = useState('#1B1B1B')
  const [section, setSection] = useState(true)

  const changeColor = (e: string) => {
    setColor(e)
  }

  const setColorSection = () => {
    setSection(false)
  }

  const setImgSection = () => {
    setSection(true)
  }

  return (
    <div className="color-picker">
      <nav className="color-picker__nav">
        <button className={`color-picker__btn ${section ? '' : 'color-picker__btn_active'}`} onClick={setColorSection}>
          <ColorIco />
          color
        </button>
        <button className={`color-picker__btn ${section ? 'color-picker__btn_active' : ''}`} onClick={setImgSection}>
          <ImageIco />
          image
        </button>
      </nav>
      {section ? (
        <div className="color-picker__img-section">
          <span className="text-xs">Upload your photo:</span>
          <span className="color-picker-img__text">File should be png or jpg</span>
          <label htmlFor="img-input" className="color-picker-img__area">
            <ImageIco2 />
            <span className="color-picker-img__text">Drug & drop image</span>
            <input type="file" name="img-input" id="img-input" />
          </label>
        </div>
      ) : (
        <HexColorPicker color={color} onChange={changeColor} />
      )}
    </div>
  )
}

export default ColorPicker
