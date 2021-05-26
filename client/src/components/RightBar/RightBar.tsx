import React from 'react'
import { SpendChart } from 'components'
import { ReactComponent as EditIco } from 'assets/ico/edit-2.svg'

import avatar from '../../assets/img/avatar.png'

const RightBar = () => {
  return (
    <div className="rightBar">
      <div className="rightBar__user-block">
        <div className="user-block__info">
          <img src={avatar} alt="" className="user-block__avatar" />
          <span>1White</span>
        </div>
        <div className="user-block__buttons">
          <button aria-label="edit" className="user-block__btn edit" />
          <button aria-label="logout" className="user-block__btn logout" />
        </div>
      </div>
      <div className="rightBar__info">
        <div className="rightBar__info-block">
          <span className="text-s text_medium">Your Profit</span>
          <div className="info-block__profit">
            <span className="text-xl bold">1 209.59</span>
            <button className="info-block__btn">
              <EditIco />
            </button>
          </div>
          <span className="text-xs">USD/month</span>
        </div>
        <hr className="info-block__line" />
        <div className="rightBar__info-block">
          <span className="text-s text_medium">Subscription</span>
          <span className="text-xl bold">35.86</span>
          <span className="text-xs">USD/month</span>
        </div>
      </div>
      <SpendChart />
    </div>
  )
}

export default RightBar
