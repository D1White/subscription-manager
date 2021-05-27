import { createContext, FC, PropsWithChildren, useContext } from 'react'
import { SubscriptionStore } from './subscription.store'

type RootStateContextValue = {
  subscriptionStore: SubscriptionStore
}

const RootStateContext = createContext<RootStateContextValue>({} as RootStateContextValue)

const subscriptionStore = new SubscriptionStore()

export const RootStateProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  return <RootStateContext.Provider value={{ subscriptionStore }}>{children}</RootStateContext.Provider>
}

export const useRootStore = () => useContext(RootStateContext)
