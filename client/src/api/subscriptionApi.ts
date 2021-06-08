import axios from 'axios'
import subscriptionsMock from 'assets/subscriptions.json'
import { ISubscription } from 'types/ISubscriptions'

export const SubscriptionApi = {
  async getSubscriptions(): Promise<ISubscription[]> {
    const { data } = await axios.get('/subscriptions')

    return data
  },
  async getSubscriptionsMock(): Promise<ISubscription[]> {
    return subscriptionsMock
  },
  async createSubscriptions(postData: ISubscription): Promise<any> {
    const { data } = await axios.post('/subscriptions', postData)

    console.log(data)
  },
}
