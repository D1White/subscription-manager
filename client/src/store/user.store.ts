import { observable, action } from 'mobx'
import { UserApi } from 'api/userApi'

export class UserStore {
  @observable id: string
  @observable username: string
  @observable email: string
  @observable profit: number = 1209

  @action
  changeProfit = (profit: number) => {
    this.profit = profit
    UserApi.changeProfit(this.id, profit).then((_) => {
      this.getUser()
    })
  }

  @action
  getUser = () => {
    UserApi.getMe().then((user) => {
      this.id = user._id
      this.username = user.username
      this.email = user.email
      this.profit = user.profit
    })
  }
}
