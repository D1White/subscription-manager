import { observable, action, computed } from 'mobx'
import { getSubscriptionsMock } from 'services/api'
import { ISubscription } from 'types/ISubscriptions'

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

  @observable profit: number = 0
  @observable subscriptions: ISubscription[] = []

  constructor() {
    this.loadubscr()
  }

  @action
  changeProfit = (profit: number) => {
    this.profit = profit
  }

  @action
  loadubscr = () => {
    this.subscriptions = getSubscriptionsMock()
  }

  @computed get costsPercent() {
    let cost = 0

    this.subscriptions.forEach((subscr) => {
      cost += subscr.price
    })

    if (this.profit === 0) {
      return 100
    }
    return (cost * 100) / this.profit
  }
}
