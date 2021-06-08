export interface ISubscriptions {
  rootStore: any
  profit: number
  subscriptions: ISubscription[]
}

export type ISubscription = {
  name: string
  price: number
  payment_day: number
  color: string
}

export interface ISubscriptionDB extends ISubscription {
  _id: string
}
