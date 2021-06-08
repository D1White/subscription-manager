import axios from 'axios'
import { ISubscription, ISubscriptionDB } from 'types/ISubscriptions'

export const SubscriptionApi = {
  async get(): Promise<ISubscriptionDB[]> {
    const { data } = await axios.get('/subscriptions')

    return data
  },
  async create(postData: ISubscription): Promise<any> {
    await axios.post('/subscriptions', postData)
  },
  async delete(id: string): Promise<any> {
    await axios.delete(`/subscriptions/${id}`)
  },
}
