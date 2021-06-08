import { FC, useState } from 'react'

import hexToRGB from 'services/hexToRGB'
import { useRootStore } from 'store/RootStateContext'
import { SubscriptionPopup } from 'components'

import { ReactComponent as DeleteIco } from 'assets/ico/delete.svg'
import { ReactComponent as EditIco } from 'assets/ico/edit-2.svg'
import { ISubscription } from 'types/ISubscriptions'

interface SubscriptionProps extends ISubscription {
  id: string
}

const Subscription: FC<SubscriptionProps> = ({ id, name, price, payment_day, color }) => {
  const { subscriptionStore } = useRootStore()

  const firstWord = name.slice(0, 1).toUpperCase()

  const [popupVisible, setPopupVisible] = useState(false)

  const deleteSubscr = () => {
    subscriptionStore.delete(id)
  }

  const showPopup = () => {
    setPopupVisible(true)
  }

  return (
    <div className="table__line">
      <div className="table__color" style={color ? { backgroundColor: hexToRGB(color, 0.25) } : {}}>
        <span style={{ color: color }}>{firstWord}</span>
      </div>
      <div className="table__cell">
        <span className="text-m">{name}</span>
      </div>
      <div className="table__cell table__cell_center">
        <span className="text-m text_bold">{`$ ${price}`}</span>
      </div>
      <div className="table__cell table__cell_center">
        <span className="text-m">
          {payment_day}
          <sub>th</sub>
        </span>
      </div>
      <div className="table__cell table__cell_buttons">
        <button className="table__btn" onClick={showPopup}>
          <EditIco />
        </button>
        <button className="table__btn" onClick={deleteSubscr}>
          <DeleteIco />
        </button>
      </div>
      {popupVisible && <SubscriptionPopup id={id} setPopupVisible={setPopupVisible} />}
    </div>
  )
}

export default Subscription
