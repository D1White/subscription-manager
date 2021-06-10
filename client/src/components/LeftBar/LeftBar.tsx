import { useEffect, useState } from 'react'
import { observer } from 'mobx-react-lite'
import { toJS } from 'mobx'

import { Subscription, SubscriptionFields, SubscriptionPopup } from 'components'
import { useRootStore } from 'store/RootStateContext'
import { ReactComponent as PlusIco } from 'assets/ico/plus.svg'

const LeftBar = () => {
  const { subscriptionStore } = useRootStore()
  const { subscriptions, loadSubscr } = subscriptionStore

  const [fieldsVisible, setFieldsVisible] = useState(false)

  const showFields = () => {
    setFieldsVisible(true)
  }

  const hideFields = () => {
    setFieldsVisible(false)
  }

  useEffect(() => {
    loadSubscr()
  }, [])

  useEffect(() => {
    console.log(toJS(subscriptions))
  }, [subscriptions])

  return (
    <div className="left-bar">
      <div className="left-bar__header">
        <span className="text-m text_medium">Subscriptions:</span>
        <button className="header__btn" onClick={showFields}>
          <PlusIco />
          <span>add</span>
        </button>
      </div>
      <div className="table">
        <div className="table__line table__line_header">
          <div className="table__cell"></div>
          <div className="table__cell">
            <span className="text-s">service:</span>
          </div>
          <div className="table__cell table__cell_center">
            <span className="text-s text_center">
              price <br />
              (USD/month):
            </span>
          </div>
          <div className="table__cell table__cell_center">
            <span className="text-s text_center">payment day:</span>
          </div>
        </div>
        <hr className="table__border" />
        <div className="table__container">
          {fieldsVisible &&
            (window.innerWidth > 767 ? (
              <SubscriptionFields hide={hideFields} />
            ) : (
              <SubscriptionPopup roleCreate setPopupVisible={setFieldsVisible} />
            ))}
          {subscriptions &&
            subscriptions
              .slice()
              .reverse()
              .map((subscr, index) => (
                <Subscription
                  id={subscr._id}
                  name={subscr.name}
                  price={subscr.price}
                  payment_day={subscr.payment_day}
                  color={subscr.color}
                  key={index}
                />
              ))}
        </div>
      </div>
    </div>
  )
}

export default observer(LeftBar)
