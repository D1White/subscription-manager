import { useState, useEffect } from 'react'

import { AuthInput } from 'components'
import { AuthApi } from 'api/authApi'

import { ReactComponent as Lines1 } from 'assets/img/lines-1.svg'
import { ReactComponent as Lines2 } from 'assets/img/lines-2.svg'
import { ReactComponent as Bubble } from 'assets/img/bubble.svg'

const Register = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [warning, setWarning] = useState({
    username: false,
    email: false,
    password: false,
  })

  useEffect(() => {
    if (username && (username.length < 3 || username.length > 20)) {
      setWarning({ ...warning, username: true })
    } else {
      setWarning({ ...warning, username: false })
    }
  }, [username]) // eslint-disable-line

  useEffect(() => {
    const REGEXP =
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm // eslint-disable-line

    if (email && (email.length < 3 || email.length > 50 || !REGEXP.test(email))) {
      setWarning({ ...warning, email: true })
    } else {
      setWarning({ ...warning, email: false })
    }
  }, [email]) // eslint-disable-line

  useEffect(() => {
    if (password && (password.length < 3 || password.length > 50)) {
      setWarning({ ...warning, password: true })
    } else {
      setWarning({ ...warning, password: false })
    }
  }, [password]) // eslint-disable-line

  const submit = () => {
    if (!warning.username && !warning.email && !warning.password && username && email && password) {
      AuthApi.register(username, email, password).then((newUser) => {
        if (newUser) {
          AuthApi.login(username, password).then((user) => {
            localStorage.setItem('token', user.token)
            window.location.href = `/after-register`
          })
        } else {
          window.location.href = '/404'
        }
      })
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-page__main">
        <h1 className="auth-page__title">Create an account</h1>

        <AuthInput title="Username" warning={warning.username} setText={setUsername} />
        <AuthInput title="Email" type="email" warning={warning.email} setText={setEmail} />
        <AuthInput title="Password" type="password" warning={warning.password} setText={setPassword} />

        <button className="auth-page__btn" onClick={submit}>
          Sign up
        </button>
        <div className="auth-page__text-block">
          <span className="auth-page__text">Already have an accaunt?&nbsp;</span>
          <a href="/login" className="auth-page__link">
            Sign in
          </a>
        </div>
      </div>
      <div className="auth-page__poster">
        <div className="poster__sprites">
          <Lines1 className="poster__lines" />
          <Lines2 className="poster__lines poster__lines_bottom" />
          <Bubble className="poster__bubble" />
        </div>
        <div className="poster__content">
          <span className="poster__text">
            Start monitoring your subscriptions <br /> just in one click
          </span>
        </div>
      </div>
    </div>
  )
}

export default Register
