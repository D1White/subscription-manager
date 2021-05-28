import { observable } from 'mobx'

export class UserStore {
  @observable username: string
  @observable email: string
  @observable password: string
  @observable avatar?: string
}
