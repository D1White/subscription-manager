import axios from 'axios'
import subscriptionsMock from 'assets/subscriptions.json'
import { ISubscription } from 'types/ISubscriptions'

export const getSubscriptions = () => {
  axios.get('/subscription').then(({ data }) => {
    console.log(data)
  })
}

export const getSubscriptionsMock = (): ISubscription[] => {
  return subscriptionsMock
}

export const createSubscriptions = (data: ISubscription): void => {
  axios.post('/subscription', data)
}

export const login = (username: string, password: string) => {
  const loginData = {
    username,
    password,
  }

  axios.post('/login', loginData).then(({ data }) => {
    console.log(data)
  })
}

export const register = (username: string, email: string, password: string) => {
  const registerData = {
    username,
    email,
    password,
  }

  axios.post('/register', registerData).then(({ data }) => {
    console.log(data)
  })
}

export const me = () => {
  axios.get('/user/me').then(({ data }) => {
    console.log(data)
  })
}

export const updateUser = (id: string, username: string, email: string, password: string) => {
  const data = {
    username,
    email,
    password,
  }

  axios.patch(`/user/${id}`, data)
}
