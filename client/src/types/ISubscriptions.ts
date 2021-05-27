export interface ISubscriptions {
  rootStore: any
  profit: number
  subscriptions: ISubscription[]
}

export class ISubscription {
  service: string
  price: number
  date: number
  color?: string
  img?: string
}
