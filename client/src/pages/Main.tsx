import { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'

import { LeftBar, RightBar, ProfitPopup } from 'components'
import { useRootStore } from 'store/RootStateContext'

const Main = observer(() => {
  const [profitPopupVisible, setProfitPopupVisible] = useState(false)

  const { userStore } = useRootStore()

  useEffect(() => {
    userStore.getUser()
  }, []) // eslint-disable-line

  useEffect(() => {
    if (userStore.id && userStore.profit === 0) {
      setProfitPopupVisible(true)
    }
  }, [userStore.id, userStore.profit]) // eslint-disable-line

  return (
    <>
      <LeftBar />
      <RightBar />
      {profitPopupVisible && <ProfitPopup setPopupVisible={setProfitPopupVisible} />}
    </>
  )
})

export default Main
