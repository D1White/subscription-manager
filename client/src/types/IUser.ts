export interface IUser {
  _id: string
  username: string
  email: string
  profit: number
}

export interface IUserLogin extends IUser {
  token: string
}
