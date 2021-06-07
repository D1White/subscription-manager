import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { LeftBar, RightBar, SubscriptionPopup, UserPopup, ProfitPopup } from 'components'
import { useRootStore } from 'store/RootStateContext'

const Main = observer(() => {
  const [sunscrPopupVisible, setSubscrPopupVisible] = useState(false)
  const [userPopupVisible, setUserPopupVisible] = useState(false)
  const [profitPopupVisible, setProfitPopupVisible] = useState(false)

  const { userStore } = useRootStore()

  useEffect(() => {
    userStore.getUser()
  }, []) // eslint-disable-line

  useEffect(() => {
    if (userStore.id && userStore.profit === 0) {
      setProfitPopupVisible(true)
    }
  }, [userStore.profit]) // eslint-disable-line

  return (
    <>
      <LeftBar />
      <RightBar />
      {sunscrPopupVisible && <SubscriptionPopup setPopupVisible={setSubscrPopupVisible} />}
      {userPopupVisible && <UserPopup setPopupVisible={setUserPopupVisible} />}
      {profitPopupVisible && <ProfitPopup setPopupVisible={setProfitPopupVisible} />}
    </>
  )
})

export default Main
