import React from 'react'
import { SpendChart } from '../index'
import { ReactComponent as EditIco } from '../../assets/ico/edit2.svg'

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
          <span className="info-block__text-bold">Your Profit</span>
          <div className="info-block__profit">
            <span className="info-block__text-main">1 209.59</span>
            <button className="info-block__btn">
              <EditIco />
            </button>
          </div>
          <span className="info-block__text">USD/month</span>
        </div>
        <hr className="info-block__line" />
        <div className="rightBar__info-block">
          <span className="info-block__text-bold">Subscription</span>
          <span className="info-block__text-main">35.86</span>
          <span className="info-block__text">USD/month</span>
        </div>
      </div>
      <SpendChart />
    </div>
  )
}

export default RightBar
