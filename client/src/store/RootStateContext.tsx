import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { configure } from 'mobx'

import { SubscriptionStore } from './subscription.store'
import { UserStore } from './user.store'

configure({
  enforceActions: 'never',
})

export type RootStateContextValue = {
  subscriptionStore: SubscriptionStore
  userStore: UserStore
}

const RootStateContext = createContext<RootStateContextValue>({} as RootStateContextValue)

// const subscriptionStore = new SubscriptionStore(RootStateContext)
// const userStore = new UserStore()

class RootStore {
  subscriptionStore: SubscriptionStore
  userStore: UserStore

  constructor() {
    this.subscriptionStore = new SubscriptionStore(this)
    this.userStore = new UserStore()
  }
}

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <RootStateContext.Provider value={new RootStore()}>{children}</RootStateContext.Provider>
}

export const useRootStore = () => useContext(RootStateContext)
