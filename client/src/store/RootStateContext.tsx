import { createContext, FC, PropsWithChildren, useContext } from 'react'

import { SubscriptionStore } from './subscription.store'
import { UserStore } from './user.store'

type RootStateContextValue = {
  subscriptionStore: SubscriptionStore
  userStore: UserStore
}

const RootStateContext = createContext<RootStateContextValue>({} as RootStateContextValue)

const subscriptionStore = new SubscriptionStore()
const userStore = new UserStore()

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <RootStateContext.Provider value={{ subscriptionStore, userStore }}>{children}</RootStateContext.Provider>
}

export const useRootStore = () => useContext(RootStateContext)
