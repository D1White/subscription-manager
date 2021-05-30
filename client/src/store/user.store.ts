import { observable, action } from 'mobx'

export class UserStore {
  @observable username: string
  @observable email: string
  @observable password: string
  @observable avatar?: string
  @observable profit: number = 1209

  @action
  changeProfit = (profit: number) => {
    this.profit = profit
  }
}
