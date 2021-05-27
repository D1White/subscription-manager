import { observable, action } from 'mobx'
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

  @action
  changeProfit = (profit: number) => {
    this.profit = profit
  }

  @action
  loadubscr = () => {}
}
