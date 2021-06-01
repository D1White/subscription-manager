import { useEffect, useRef, FC, useState } from 'react'
import { Portal, PopupInput } from 'components'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

interface ProfitPopupProps extends PopupProps {
  changeProfit: Function
}

const ProfitPopup: FC<ProfitPopupProps> = ({ setPopupVisible, changeProfit }) => {
  const popupBgRef = useRef<HTMLDivElement>(null)
  const [profit, setProfit] = useState(0)
  const [warning, setWarning] = useState(false)

  const closePopup = () => {
    setPopupVisible(false)
  }

  const popupOutsideClick = (e: any) => {
    if (e.target === popupBgRef.current) {
      closePopup()
    }
  }

  const submit = () => {
    if (profit && !warning) {
      changeProfit(profit)
      closePopup()
      // console.log(profit)
    } else {
      setWarning(true)
    }
  }

  useEffect(() => {
    if (profit && profit < 1) {
      setWarning(true)
    } else {
      setWarning(false)
    }
  }, [profit])

  return (
    <Portal>
      <div className="popup" onClick={popupOutsideClick} ref={popupBgRef}>
        <div className="popup__content">
          <div className="popup__header">
            <span className="text-xs text_medium">Edit user</span>
            <button className="popup__btn_icon" aria-label="close" onClick={closePopup}>
              <CloseIco />
            </button>
          </div>
          <PopupInput title="Profit" type="number" warning={warning} setText={setProfit} />
          <button className="popup__btn" onClick={submit}>
            Save
          </button>
        </div>
      </div>
    </Portal>
  )
}

export default ProfitPopup
