import { useEffect, useRef, FC, useState } from 'react'
import { Portal, PopupInput } from 'components'
import { useRootStore } from 'store/RootStateContext'

import { ReactComponent as CloseIco } from 'assets/ico/close.svg'
import { PopupProps } from 'types/IPopup'

const ProfitPopup: FC<PopupProps> = ({ setPopupVisible }) => {
  const { userStore } = useRootStore()

  const popupBgRef = useRef<HTMLDivElement>(null)
  const [profit, setProfit] = useState('0')
  const [profitNumber, setProfitNumber] = useState(0)
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
      userStore.changeProfit(profitNumber)
      closePopup()
    } else {
      setWarning(true)
    }
  }

  useEffect(() => {
    setProfitNumber(parseFloat(profit))
  }, [profit])

  useEffect(() => {
    if (profitNumber && profitNumber < 1) {
      setWarning(true)
    } else {
      setWarning(false)
    }
  }, [profitNumber])

  return (
    <Portal>
      <div className="popup" onClick={popupOutsideClick} ref={popupBgRef}>
        <div className="popup__content">
          <div className="popup__header">
            <span className="text-xs text_medium">Edit profit</span>
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
