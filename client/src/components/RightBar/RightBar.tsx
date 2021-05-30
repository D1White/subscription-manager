import React from 'react'

import { SpendChart } from 'components'
import { useRootStore } from 'store/RootStateContext'

import { ReactComponent as EditIco } from 'assets/ico/edit-2.svg'

import avatar from '../../assets/img/avatar.png'

const RightBar = () => {
  const { subscriptionStore, userStore } = useRootStore()

  const formatProfit = (profit: number) => {
    return profit
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$& ')
      .slice(0, -3)
  }

  const formatCost = (n: number) => {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$& ')
  }

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
            <span className="text-xl bold">{formatProfit(userStore.profit)}</span>
            <button className="info-block__btn">
              <EditIco />
            </button>
          </div>
          <span className="text-xs">USD/month</span>
        </div>
        <hr className="info-block__line" />
        <div className="rightBar__info-block">
          <span className="text-s text_medium">Subscription</span>
          <span className="text-xl bold">{formatCost(subscriptionStore.cost)}</span>
          <span className="text-xs">USD/month</span>
        </div>
      </div>
      <SpendChart />
    </div>
  )
}

export default RightBar
