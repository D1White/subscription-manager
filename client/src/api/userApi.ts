import axios from 'axios'

import { IUser } from 'types/IUser'

export const UserApi = {
  async getMe(): Promise<IUser> {
    const { data } = await axios.get(`/user/me`)

    return data
  },
  async changeProfit(id: string, profit: number): Promise<any> {
    const { data } = await axios.patch(`/user/${id}`, {
      profit,
    })

    console.log(data)
  },
  async updateUser(id: string, username: string, email: string, password: string): Promise<any> {
    const { data } = await axios.patch(`/user/${id}`, {
      username,
      email,
      password,
    })

    console.log(data)
  },
}
