import axios from 'axios'

import { IUserRegister, IUserLogin } from 'types/IUser'

export const AuthApi = {
  async login(username: string, password: string): Promise<IUserLogin> {
    const { data } = await axios.post('/login', {
      username,
      password,
    })

    return data
  },
  async register(username: string, email: string, password: string): Promise<IUserRegister> {
    const { data } = await axios.post('/register', {
      username,
      email,
      password,
    })

    return data
  },
  async getMe(): Promise<any> {
    const { data } = await axios.get('/user/me')

    console.log(data)
  },
}
