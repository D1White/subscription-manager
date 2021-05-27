import React, { useState } from 'react'
import { LeftBar, RightBar, SubscriptionPopup, UserPopup } from 'components'

const Main = () => {
  const [sunscrPopupVisible, setSubscrPopupVisible] = useState(false)
  const [userPopupVisible, setUserPopupVisible] = useState(true)
  return (
    <>
      <LeftBar />
      <RightBar />
      {sunscrPopupVisible && <SubscriptionPopup setPopupVisible={setSubscrPopupVisible} />}
      {userPopupVisible && <UserPopup setPopupVisible={setUserPopupVisible} />}
    </>
  )
}

export default Main
