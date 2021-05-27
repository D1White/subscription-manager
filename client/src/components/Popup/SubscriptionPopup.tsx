import React, { useEffect, useRef, FC } from 'react'
import { Portal, PopupInput } from 'components'
import { useOutsideHook } from 'services/useOutsideHook'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

const SubscriptionPopup: FC<PopupProps> = ({ setPopupVisible }) => {
  const popupRef = useRef<HTMLDivElement>(null)
  const outsideClick = useOutsideHook(popupRef)

  const closePopup = () => {
    setPopupVisible(false)
  }

  useEffect(() => {
    if (outsideClick) {
      closePopup()
    }
  }, [outsideClick]) // eslint-disable-line

  return (
    <Portal>
      <div className="popup">
        <div className="popup__content" ref={popupRef}>
          <div className="popup__header">
            <span className="text-xs text_medium">Edit subscription</span>
            <button className="popup__btn_icon" aria-label="close" onClick={closePopup}>
              <CloseIco />
            </button>
          </div>
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
