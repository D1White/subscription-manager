import { useRef, FC } from 'react'
import { Portal, PopupInput } from 'components'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

const UserPopup: FC<PopupProps> = ({ setPopupVisible }) => {
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
            <span className="text-xs text_medium">Edit user</span>
            <button className="popup__btn_icon" aria-label="close" onClick={closePopup}>
              <CloseIco />
            </button>
          </div>
          <PopupInput title="Username" warning={false} />
          <PopupInput title="Email" warning={false} />
          <PopupInput title="Password" warning={false} type="password" />
          <button className="popup__btn">Save</button>
        </div>
      </div>
    </Portal>
  )
}

export default UserPopup
