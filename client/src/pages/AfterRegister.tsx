import React from 'react'
import { AfterRegisterPopup } from 'components'

const AfterRegister = () => {
  console.log(localStorage.getItem('token'))

  return (
    <div>
      <AfterRegisterPopup />
    </div>
  )
}

export default AfterRegister
