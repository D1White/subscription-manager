import { observable, action, computed } from 'mobx'
import { getSubscriptionsMock } from 'services/api'
import { ISubscription } from 'types/ISubscriptions'
import { RootStateContextValue } from './RootStateContext'

export class SubscriptionStore {
  // rootStore
  // profit = 0
  // subscriptions
  // constructor(rootStore: any) {
  //   this.rootStore = rootStore
  //   makeAutoObservable(this)
  // }
  // editProfit(profit: number) {
  //   this.profit = profit
  // }

  // @observable profit: number = 1209
  @observable subscriptions: ISubscription[] = []
  private rootStore: RootStateContextValue

  constructor(rootStore: RootStateContextValue) {
    this.rootStore = rootStore
    this.loadubscr()
    // console.log(rootStore)
  }

  @action
  loadubscr = () => {
    this.subscriptions = getSubscriptionsMock()
  }

  @computed get cost(): number {
    let cost = 0

    this.subscriptions.forEach((subscr) => {
      cost += subscr.price
    })

    return cost
  }

  @computed get costsPercent(): number {
    const profit = this.rootStore.userStore.profit

    if (profit === 0) {
      return 100
    }

    const percent = Math.round((this.cost * 100) / profit)

    if (percent > 99) {
      return 100
    }

    return percent
  }
}
