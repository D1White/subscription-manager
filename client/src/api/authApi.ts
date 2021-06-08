import axios from 'axios'

import { IUser, IUserLogin } from 'types/IUser'

export const AuthApi = {
  async login(username: string, password: string): Promise<IUserLogin> {

    const { data } = await axios.post('/login', {
      username,
      password,
    })

    return data
  },
  async register(username: string, email: string, password: string): Promise<IUser> {
    const { data } = await axios.post('/register', {
      username,
      email,
      password,
    })

    return data
  },
}
