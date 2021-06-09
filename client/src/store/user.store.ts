import { makeAutoObservable } from 'mobx'
import { UserApi } from 'api/user.api'

export class UserStore {
  id: string
  username: string
  email: string
  profit: number

  constructor() {
    makeAutoObservable(this)
  }

  changeProfit = (profit: number) => {
    UserApi.changeProfit(this.id, profit).then((_) => {
      this.getUser()
    })
  }

  getUser = () => {
    UserApi.getMe()
      .then((user) => {
        this.id = user._id
        this.username = user.username
        this.email = user.email
        this.profit = user.profit
      })
      .catch((_) => {
        localStorage.removeItem('token')
      })
  }

  updateUser = (username: string, email: string, password: string) => {
    UserApi.updateUser(this.id, username, email, password).then((_) => {
      this.getUser()
    })
  }
}
