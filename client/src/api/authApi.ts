import axios from 'axios'

export const AuthApi = {
  async login(username: string, password: string): Promise<any> {
    const { data } = await axios.post('/login', {
      username,
      password,
    })

    console.log(data)
  },
  async register(username: string, email: string, password: string): Promise<any> {
    const { data } = await axios.post('/register', {
      username,
      email,
      password,
    })

    console.log(data)
  },
  async getMe(): Promise<any> {
    const { data } = await axios.get('/user/me')

    console.log(data)
  },
}
