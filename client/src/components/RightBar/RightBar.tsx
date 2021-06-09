import { useState } from 'react'
import { observer } from 'mobx-react-lite'
import { useHistory } from 'react-router-dom'

import { SpendChart, ProfitPopup, UserPopup } from 'components'
import { useRootStore } from 'store/RootStateContext'

import { ReactComponent as EditIco } from 'assets/ico/edit-2.svg'

import avatar from '../../assets/img/avatar.png'

const RightBar = () => {
  const history = useHistory()
  const { subscriptionStore, userStore } = useRootStore()

  const [profitPopupVisible, setProfitPopupVisible] = useState(false)
  const [userPopupVisible, setUserPopupVisible] = useState(false)

  const formatProfit = (profit: number) => {
    if (!profit) {
      return 0
    }
    return profit
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$& ')
      .slice(0, -3)
  }

  const formatCost = (n: number) => {
    const result = n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$& ')

    if (result.slice(-2) === '00') {
      return result.slice(0, -3)
    }

    return result
  }

  const showProfitPopup = () => {
    setProfitPopupVisible(true)
  }

  const showUserPopup = () => {
    setUserPopupVisible(true)
  }

  const logout = () => {
    localStorage.removeItem('token')
    history.push('/login')
  }

  return (
    <>
      <div className="rightBar">
        <div className="rightBar__user-block">
          <div className="user-block__info">
            <img src={avatar} alt="" className="user-block__avatar" />
            <span>{userStore.username}</span>
          </div>
          <div className="user-block__buttons">
            <button aria-label="edit" className="user-block__btn edit" onClick={showUserPopup} />
            <button aria-label="logout" className="user-block__btn logout" onClick={logout} />
          </div>
        </div>
        <div className="rightBar__info">
          <div className="rightBar__info-block">
            <span className="text-s text_medium">Your Profit</span>
            <div className="info-block__profit">
              <span className="text-xl bold">{formatProfit(userStore.profit)}</span>
              <button className="info-block__btn" onClick={showProfitPopup}>
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
        <SpendChart percent={subscriptionStore.costsPercent || 0} />
      </div>
      {profitPopupVisible && <ProfitPopup setPopupVisible={setProfitPopupVisible} />}
      {userPopupVisible && <UserPopup setPopupVisible={setUserPopupVisible} />}
    </>
  )
}

export default observer(RightBar)
