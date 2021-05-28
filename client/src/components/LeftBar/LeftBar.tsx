import React from 'react'
import { Subscription } from 'components'
import { ReactComponent as PlusIco } from 'assets/ico/plus.svg'
import mockSubscr from 'assets/subscriptions.json'

const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="left-bar__header">
        <span className="text-m text_medium">Subscriptions:</span>
        <button className="header__btn">
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
            <span className="text-s">payment day:</span>
          </div>
        </div>
        <hr className="table__border" />
        <div className="table__container">
          {mockSubscr.map((subscr, index) => (
            <Subscription
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

export default LeftBar
