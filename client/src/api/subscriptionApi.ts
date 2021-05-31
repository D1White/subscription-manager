import axios from 'axios'
import subscriptionsMock from 'assets/subscriptions.json'
import { ISubscription } from 'types/ISubscriptions'

export const UserApi = {
  async updateUser(id: string, username: string, email: string, password: string): Promise<any> {
    const { data } = await axios.patch(`/user/${id}`, {
      username,
      email,
      password,
    })

    console.log(data)
  },
  async getSubscriptions(): Promise<any> {
    const { data } = await axios.get('/subscription')

    console.log(data)
  },
  async getSubscriptionsMock(): Promise<ISubscription[]> {
    return subscriptionsMock
  },
  async createSubscriptions(postData: ISubscription): Promise<any> {
    const { data } = await axios.post('/subscription', postData)

    console.log(data)
  },
}
