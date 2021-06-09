import { observable, action, computed, makeObservable } from 'mobx'

import { SubscriptionApi } from 'api/subscription.api'
import { ISubscriptionDB, ISubscription } from 'types/ISubscriptions'
import { RootStateContextValue } from './RootStateContext'

export class SubscriptionStore {
  @observable subscriptions: ISubscriptionDB[] = []
  private rootStore: RootStateContextValue

  constructor(rootStore: RootStateContextValue) {
    makeObservable(this)
    this.rootStore = rootStore
  }

  @action
  loadSubscr = () => {
    SubscriptionApi.get().then((subscriptions) => {
      this.subscriptions = subscriptions
    })
  }

  @action
  create = (subscription: ISubscription) => {
    SubscriptionApi.create(subscription).then((_) => {
      this.loadSubscr()
    })
  }

  @action
  delete = (id: string) => {
    SubscriptionApi.delete(id).then((_) => {
      this.loadSubscr()
    })
  }

  @action
  update = (id: string, subscription: ISubscription) => {
    SubscriptionApi.update(id, subscription).then((_) => {
      this.loadSubscr()
    })
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
