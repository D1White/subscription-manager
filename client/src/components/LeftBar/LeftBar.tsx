import React from 'react'
import { ReactComponent as PlusIco } from 'assets/ico/plus.svg'

const LeftBar = () => {
  return (
    <div className="left-bar">
      <div className="left-bar__header">
        <span className="text-m medium">Subscriptions:</span>
        <button className="header__btn">
          <PlusIco />
          <span>add</span>
        </button>
      </div>
      <div className="left-bar__table">
        <div className="table__header"></div>
      </div>
    </div>
  )
}

export default LeftBar
