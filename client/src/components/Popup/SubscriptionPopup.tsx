import { useRef, FC } from 'react'
import { Portal, PopupInput, PopupColorInput } from 'components'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

const SubscriptionPopup: FC<PopupProps> = ({ setPopupVisible }) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const popupBgRef = useRef<HTMLDivElement>(null)

  const closePopup = () => {
    setPopupVisible(false)
  }

  const popupOutsideClick = (e: any) => {
    if (e.target === popupBgRef.current && !document.querySelector('.popover')) {
      closePopup()
    }
  }

  return (
    <Portal>
      <div className="popup" onClick={popupOutsideClick} ref={popupBgRef}>
        <div className="popup__content" ref={popupRef}>
          <div className="popup__header">
            <span className="text-xs text_medium">Edit subscription</span>
            <button className="popup__btn_icon" aria-label="close" onClick={closePopup}>
              <CloseIco />
            </button>
          </div>
          <PopupColorInput />
          <PopupInput title="Service name" warning={false} />
          <PopupInput title="Price (USD/month)" warning={false} />
          <PopupInput title="Payment day" warning={false} />
          <button className="popup__btn">Save</button>
        </div>
      </div>
    </Portal>
  )
}

export default SubscriptionPopup
