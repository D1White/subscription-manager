export interface IUser {
  _id: string
  username: string
  email: string
}

export interface IUserLogin extends IUser {
  token: string
}
