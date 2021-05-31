import axios from 'axios'

export const UserApi = {
  async updateUser(id: string, username: string, email: string, password: string): Promise<any> {
    const { data } = await axios.patch(`/user/${id}`, {
      username,
      email,
      password,
    })

    console.log(data)
  },
}
