import axios from 'axios'

import { IUser } from 'types/IUser'

export const UserApi = {
  async getMe(): Promise<IUser> {
    const { data } = await axios.get(`/users/me`)

    return data
  },
  async changeProfit(id: string, profit: number): Promise<any> {
    const { data } = await axios.patch(`/users/${id}/profit`, {
      profit,
    })

    console.log(data)
  },
  async updateUser(id: string, username: string, email: string, password: string): Promise<any> {
    const { data } = await axios.patch(`/users/${id}`, {
      username,
      email,
      password,
    })

    console.log(data)
  },
}
