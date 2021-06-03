import { useEffect, FC, useState } from 'react'
import { Portal, PopupInput } from 'components'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'

const AfterRegisterPopup: FC = () => {
  const [profit, setProfit] = useState(0)
  const [warning, setWarning] = useState(false)

  const submit = () => {
    if (profit && !warning) {
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
      <div className="popup">
        <div className="popup__content">
          <div className="popup__header">
            <span className="text-xs text_medium">Your profit per month</span>
            <button className="popup__btn_icon" aria-label="close">
              <CloseIco />
            </button>
          </div>
          <PopupInput title="Profit" type="number" warning={warning} setText={setProfit} />
          <div className="popup__btn-block">
            <button className="popup__btn popup__btn_half" onClick={submit}>
              Skip
            </button>
            <button className="popup__btn popup__btn_half" onClick={submit}>
              Save
            </button>
          </div>
        </div>
      </div>
    </Portal>
  )
}

export default AfterRegisterPopup
