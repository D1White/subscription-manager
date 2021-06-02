export interface IUserRegister {
  _id: string
  email: string
  username: string
}

export interface IUser {
  _id: string
  username: string
  email: string
  avatar: string
}

export interface IUserLogin extends IUser {
  token: string
}
