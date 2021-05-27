import { useState } from 'react'
import { LeftBar, RightBar, SubscriptionPopup, UserPopup, ProfitPopup } from 'components'

const Main = () => {
  const [sunscrPopupVisible, setSubscrPopupVisible] = useState(false)
  const [userPopupVisible, setUserPopupVisible] = useState(false)
  const [profitPopupVisible, setProfitPopupVisible] = useState(false)

  return (
    <>
      <LeftBar />
      <RightBar />
      {sunscrPopupVisible && <SubscriptionPopup setPopupVisible={setSubscrPopupVisible} />}
      {userPopupVisible && <UserPopup setPopupVisible={setUserPopupVisible} />}
      {profitPopupVisible && <ProfitPopup setPopupVisible={setProfitPopupVisible} />}
    </>
  )
}

export default Main
