import React from 'react'

import { ReactComponent as Lines1 } from 'assets/img/lines-1.svg'
import { ReactComponent as Lines2 } from 'assets/img/lines-2.svg'
import { ReactComponent as Bubble } from 'assets/img/bubble.svg'

const Register = () => {
  return (
    <div className="auth-page">
      <div className="auth-page__main"></div>
      <div className="auth-page__poster">
        <div className="poster__sprites">
          <Lines1 className="poster__lines" />
          <Lines2 className="poster__lines poster__lines_bottom" />
          <Bubble className="poster__bubble" />
        </div>
        <div className="poster__content">
          <span className="poster__text">
            Start monitoring your subscriptions <br /> just in one click
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
