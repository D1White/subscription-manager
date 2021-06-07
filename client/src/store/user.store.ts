import { makeAutoObservable } from 'mobx'
import { UserApi } from 'api/userApi'

export class UserStore {
  id: string
  username: string
  email: string
  profit: number = 0

  constructor() {
    makeAutoObservable(this)
  }

  changeProfit = (profit: number) => {
    UserApi.changeProfit(this.id, profit).then((_) => {
      this.getUser()
    })
  }

  getUser = () => {
    UserApi.getMe().then((user) => {
      this.id = user._id
      this.username = user.username
      this.email = user.email
      this.profit = user.profit
    })
  }
}
