import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { LeftBar, RightBar, SubscriptionPopup, UserPopup } from 'components'
import { useRootStore } from 'store/RootStateContext'

const Main = observer(() => {
  const [sunscrPopupVisible, setSubscrPopupVisible] = useState(false)
  const [userPopupVisible, setUserPopupVisible] = useState(false)

  const { subscriptionStore } = useRootStore()

  useEffect(() => {
    console.log(subscriptionStore.subscriptions)
  }, [subscriptionStore])

  return (
    <>
      <LeftBar />
      <RightBar />
      {sunscrPopupVisible && <SubscriptionPopup setPopupVisible={setSubscrPopupVisible} />}
      {userPopupVisible && <UserPopup setPopupVisible={setUserPopupVisible} />}
    </>
  )
})

export default Main
